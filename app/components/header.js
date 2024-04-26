import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center items-center align-center">
      <div className="logo-container">
        <Image 
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
      <nav className="main-nav flex items-center align center justify-between gap-8 mx-8">
        <Link href="/meals">Meals</Link>
        <Link href="/community">Community</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}