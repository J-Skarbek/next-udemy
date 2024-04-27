'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({href, children}) {
  const path = usePathname();
  
  return (
    <Link 
      href={href}
      className={`${path.startsWith(href) ? 'decoration-solid text-red-900 hover:text-red-400' : undefined} hover:text-red-400`}
    >
      {children}
    </Link>
  )
}