type ClassValue = string | number | null | undefined | false;

/** Junta classes condicionalmente (substituto leve de clsx + tailwind-merge). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
