import Link from "next/link";
import type { ReactNode } from "react";

type CustomLinkProps = {
  path: string;
  children: ReactNode;
};

export default function CustomLink({ path, children }: CustomLinkProps) {
  return (
    <Link
      href={path}
      className="text-lg font-bold text-foreground transition-colors duration-300 hover:text-primary"
    >
      {children}
    </Link>
  );
}
