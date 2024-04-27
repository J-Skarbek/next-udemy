'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

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
            <Link 
              href="/meals" 
              className={`${path.startsWith('/meals') ? 'decoration-solid text-red-900 hover:text-red-400' : undefined} hover:text-red-400`}
            >
              Meals
            </Link>
          </li>
          <li>
            <Link 
              href="/community" 
              className={`${path.startsWith('/community') ? 'decoration-solid text-red-900 hover:text-red-400' : undefined} hover:text-red-400`}
            >
              Community
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${path.startsWith('/about') ? 'decoration-solid text-red-900 hover:text-red-400' : undefined} hover:text-red-400`}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}