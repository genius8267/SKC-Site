'use client';

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const alignmentClass = align === "center" ? "section-heading section-heading--center" : "section-heading";

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={alignmentClass}
    >
      {eyebrow ? (
        <motion.span variants={itemVariants} className="pill w-fit">
          <span>{eyebrow}</span>
        </motion.span>
      ) : null}
      <motion.div variants={itemVariants}>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </motion.div>
    </motion.div>
  );
}
