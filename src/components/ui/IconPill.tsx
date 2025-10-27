// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/ui/IconPill.tsx
// ──────────────────────────────────────────────────────────────────────────────
import type { IconType } from "react-icons";

type IconPillProps = {
  icon: IconType;
  label?: string;
  className?: string;
};

export function IconPill({ icon: Icon, label, className }: IconPillProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400" +
        (className ?? "")
      }
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <Icon className="w-5 h-5" /> {label}
    </span>
  );
}
