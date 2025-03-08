"use client";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardItems() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 font-medium lg:px-4">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            pathname === link.href
              ? "bg-muted text-primary  "
              : "hover:bg-muted",
            "flex items-center gap-3 rounded-md px-3 py-4 text-sm transition-all hover:text-primary"
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
