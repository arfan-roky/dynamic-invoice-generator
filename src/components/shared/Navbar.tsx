import Link from "next/link";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="px-6 flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-xl font-bold">Dynamic Invoice Generator</h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild className="font-bold">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/invoices">Invoices</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/customers">Customers</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/settings">Settings</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
