import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function CTAButton() {
  return (
    <Link href="/contact" className="cta">
      GET IN TOUCH
      <div className="icon">
        <IconChevronRight stroke={2} />
      </div>
    </Link>
  );
}
