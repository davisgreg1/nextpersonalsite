import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu"

function TopNav() {
  return (
    <>
      <nav className="z-[3] fixed flex-row hidden md:flex">
        <ul className="flex pr-1">
          <li className="px-4">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4">
            <Link href="/about">About</Link>
          </li>
          <li className="px-4">
            <Link href="/skills">Skills</Link>
          </li>

          <li className="px-4">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="px-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="z-[3] flex fixed md:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
}

export default TopNav;
