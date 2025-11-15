import { validateFiles } from "../DocumentDropzone";

const createFile = (name: string, type: string, size = 1024) =>
  new File(["a".repeat(size)], name, { type });

describe("DocumentDropzone validation", () => {
  it("accepts valid PDF uploads (happy path)", () => {
    const result = validateFiles([createFile("policy.pdf", "application/pdf")]);
    expect(result.ok).toBe(true);
    expect(result.message).toBeUndefined();
  });

  it("rejects unsupported formats (failure mode)", () => {
    const result = validateFiles([
      createFile("archive.zip", "application/zip"),
    ]);
    expect(result.ok).toBe(false);
    expect(result.message).toMatch(/not a supported format/i);
  });
});
