import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

interface CTAButtonProps {
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function CTAButton({
  children = "GET IN TOUCH",
  className = "cta",
  iconClassName = "icon",
  onClick,
}: CTAButtonProps) {
  return (
    <Link href="/contact" className={className} onClick={onClick}>
      {children}
      <div className={iconClassName}>
        <IconChevronRight stroke={2} />
      </div>
    </Link>
  );
}
