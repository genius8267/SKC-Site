'use client';

import { useCallback, useState } from "react";

type UploadState = "idle" | "uploading" | "success";

export type ValidationResult = {
  ok: boolean;
  message?: string;
};

const ACCEPTED = [
  "application/pdf",
  "text/plain",
  "text/csv",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function validateFiles(files: File[]): ValidationResult {
  if (!files.length) {
    return { ok: false, message: "Add at least one document." };
  }

  if (files.length > 5) {
    return { ok: false, message: "Upload up to five files per batch." };
  }

  const invalid = files.find(
    (file) => !ACCEPTED.includes(file.type) && !file.name.endsWith(".md")
  );
  if (invalid) {
    return {
      ok: false,
      message: `${invalid.name} is not a supported format.`,
    };
  }

  if (files.some((file) => file.size > 15 * 1024 * 1024)) {
    return { ok: false, message: "Files must be under 15MB each." };
  }

  return { ok: true };
}

export function DocumentDropzone() {
  const [state, setState] = useState<UploadState>("idle");
  const [message, setMessage] = useState("Attach files to give your agent context");

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) {
      return;
    }
    const selection = Array.from(files);
    const result = validateFiles(selection);
    if (!result.ok) {
      setState("idle");
      setMessage(result.message ?? "Unable to process files");
      return;
    }
    setState("uploading");
    setMessage("Processing documents with policy studio…");
    setTimeout(() => {
      setState("success");
      setMessage("Policies generated. Ready for review.");
    }, 1200);
  }, []);

  return (
    <div className="glass-card flex flex-col gap-4 p-6">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className="size-2 rounded-full bg-emerald-300 animate-pulse" />
        {message}
      </div>
      <label
        className="grid h-56 place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-center text-sm text-white/60 transition hover:border-white/50"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          handleFiles(event.dataTransfer.files);
        }}
      >
        <div className="space-y-3 px-6">
          <p className="text-base font-medium text-white">
            Drag files here or click to browse
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            PDFs · DOCX · TXT · CSV · MD
          </p>
          <div className="flex justify-center gap-2 text-xs text-white/50">
            <span className="pill bg-white/5">
              {state === "uploading" && (
                <span className="mr-2 inline-flex size-3 animate-spin rounded-full border-2 border-white/30 border-t-transparent" />
              )}
              {state === "success" ? "Ready" : "Secure upload"}
            </span>
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          multiple
          onChange={(event) => handleFiles(event.currentTarget.files)}
          aria-label="Upload training documents"
        />
      </label>
      <div className="flex justify-end gap-3 text-sm">
        <button className="rounded-full border border-white/20 px-4 py-2 text-white/70 transition hover:border-white/60 hover:text-white">
          Cancel
        </button>
        <button className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:scale-105">
          Create agent
        </button>
      </div>
    </div>
  );
}
