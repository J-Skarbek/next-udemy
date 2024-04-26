import Link from "next/link";
import Image from "next/image";
// import logoImg from '@/public/vercel.svg';

export default function Header() {
  return (
    <header className="flex justify-center items-center align-center p-8">
      <div className="logo-container">
        <Link href="/">
          {/* <img src={logoImg.src} alt="Our Logo"/> */}
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
          <li><Link href="/meals">Meals</Link></li>
          <li><Link href="/community">Community</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}