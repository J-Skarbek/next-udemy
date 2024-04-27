import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";

export default function Header() {

  return (
    <header className="flex justify-center items-center align-center p-8">
      <div className="logo-container">
        <Link href="/">
          <Image 
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
      <nav className="main-nav flex items-center align center justify-between mx-8">
        <ul className="flex items-center align center justify-between gap-8">
          <li>
            <NavLink href='/meals'>Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Community</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}