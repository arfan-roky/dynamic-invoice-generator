"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const isHomePath = pathname === "/";

  return (
    <footer className="border-t bg-muted/90">
      <div
        className={cn("px-6 flex h-16 items-center justify-between py-4", {
          "container mx-auto px-0": isHomePath,
        })}
      >
        <p className="text-sm text-black">
          © 2023 Dynamic Invoice Generator. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm text-black hover:underline">
            Terms
          </Link>
          <Link href="#" className="text-sm text-black hover:underline">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-black hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
