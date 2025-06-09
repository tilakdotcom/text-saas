"use client";
import { useTypeSelector } from "@/store/store";
import { Logo } from "../common/Logo";
import NavLink from "./NavLink";
import PlanBadge from "../common/PlanBadge";
import { Avatar } from "../common/Avatar";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const { isAuthenticated, user, isCheckingAuth } = useTypeSelector(
    (state) => state.auth
  );
  if (isCheckingAuth) {
    return (
      <header className="h-20 flex items-center justify-center animate-pulse bg-opacity-80 backdrop-blur-md  "></header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full h-20 flex items-center justify-between px-4 md:px-7 bg-opacity-80 backdrop-blur-md  overflow-hidden transform duration-500">
      <div className="flex ">
        <NavLink href="/" className="flex shrink-0 items-center gap-1 lg:gap-2">
          <Logo />
        </NavLink>
      </div>{" "}
      {!isAuthenticated && (
        <div className="hidden md:flex space-x-6">
          <NavLink
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-main-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            href="/pricing"
            className="text-gray-700 dark:text-gray-300 hover:text-main-600 transition"
          >
            Pricing
          </NavLink>
        </div>
      )}
      {isAuthenticated && (
        <div className="hidden md:flex space-x-6">
          <NavLink
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-main-600 transition"
          >
            Summaries
          </NavLink>
          <NavLink
            href="/pricing"
            className="text-gray-700 dark:text-gray-300 hover:text-main-600 transition"
          >
            Pricing
          </NavLink>
        </div>
      )}
      <div className="">
        {!isAuthenticated && (
          <NavLink
            href="/login"
            className="px-4 py-2 text-sm font-medium transition"
          >
            Login
          </NavLink>
        )}{" "}
        {isAuthenticated && (
          <div className="lg:flex items-center gap-x-2 hidden">
            <NavLink href="/upload" className=" text-sm font-medium transition">
              Upload a PDF
            </NavLink>
            <PlanBadge />
            <Avatar size={30} src={user?.avatar} href={"/profile"} />
          </div>
        )}
        <div className="lg:hidden ">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
