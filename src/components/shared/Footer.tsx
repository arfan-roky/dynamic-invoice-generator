import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t bg-muted/90">
      <div className="px-6 flex h-16 items-center justify-between py-4">
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
