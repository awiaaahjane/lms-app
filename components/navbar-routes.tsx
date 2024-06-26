"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isAdmin } from "@/lib/admin";
import { ThemeToggle } from "./theme-toggle";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/dashboard/admin");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/dashboard/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
            <ThemeToggle />
        {isAdminPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isAdmin(userId) ? (
          <Link href="/dashboard/admin/courses">
            <Button size="sm" variant="ghost">
              Admin mode
            </Button> 
          </Link>
        ) : null}
        <UserButton
          afterSignOutUrl="/"
        />
      </div>
    </>
  )
}