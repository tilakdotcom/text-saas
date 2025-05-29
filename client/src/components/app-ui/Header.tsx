import { Logo } from "../common/Logo";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <nav className="container mx-auto flex items-center justify-between px-8 py-4">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex shrink-0 items-center gap-1 lg:gap-2">
          <Logo />
        </NavLink>
      </div>

      <div className="flex gap-4 text-base lg:items-center lg:justify-center lg:gap-12 lg:text-lg">
        <>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </>
      </div>

      {/* <div className="flex lg:flex-1 lg:justify-end">
        <SignedIn>
          <div className="flex items-center gap-2 text-base lg:text-lg">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <PlanBadge />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>

        <SignedOut>
          <NavLink className="text-base" href="/sign-in">
            Sign In
          </NavLink>
        </SignedOut>
      </div> */}
    </nav>
  );
}
