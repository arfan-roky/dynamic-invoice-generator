"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Invoices", href: "/invoices" },
  { name: "Projects", href: "/projects" },
  { name: "Customers", href: "/customers" },
  { name: "Settings", href: "/settings" },
];

function Navbar() {
  const pathname = usePathname();
  const isHomePath = pathname === "/";

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div
        className={cn("px-6 flex h-16 items-center justify-between py-4", {
          "container mx-auto px-0": isHomePath,
        })}
      >
        <Link href="/" className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-xl font-bold">Dynamic Invoice Generator</h1>
        </Link>
        <nav className="flex items-center gap-4">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant={pathname === item.href ? "default" : "ghost"}
              asChild
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
