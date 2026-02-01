"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { rajdhani } from "../fonts";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const linkClass = (path, targetClass) =>
    `${rajdhani.className} ${targetClass}
     flex items-center gap-2
     transition-all duration-200
     ${pathname === path
      ? "text-servicehead font-semibold scale-105"
      : "text-white hover:text-servicehead hover:scale-110"
    }`;

  return (
    <nav
      className="
        sticky top-4 mx-auto
        w-[88vw] h-[72px]
        z-50
        bg-gradient-to-b from-[#4b4343] to-[#3a3333]
        border border-navborder
        rounded-lg
        px-10
        flex items-center justify-between
        transition-transform duration-300 ease-out
        hover:scale-[1.01]
      "
    >
      {/* LOGO */}
      <img
        onClick={() => router.push("/")}
        src="/ArmourMind.png"
        alt="ArmourMind Logo"
        className="h-12 cursor-pointer select-none"
      />

      {/* NAV LINKS */}
      <ul className="flex items-center gap-6 text-lg">

        {/* HOME */}
        <li>
          <Link href="/" className={linkClass("/", "nav-home")}>
            <lord-icon
              src="https://cdn.lordicon.com/jeuxydnh.json"
              trigger="hover"
              target=".nav-home"
              colors="primary:#ed8d8d,secondary:#b8b1b1"
              style={{ width: "26px", height: "26px" }}
            />
            HOME
          </Link>
        </li>

        {/* ABOUT */}
        <li>
          <Link href="/about" className={linkClass("/about", "nav-about")}>
            <lord-icon
              src="https://cdn.lordicon.com/rrbmabsx.json"
              trigger="hover"
              target=".nav-about"
              colors="primary:#ed8d8d,secondary:#b8b1b1"
              style={{ width: "26px", height: "26px" }}
            />
            ABOUT
          </Link>
        </li>

        {/* SERVICES */}
        <li>
          <Link href="/services" className={linkClass("/services", "nav-services")}>
            <lord-icon
              src="https://cdn.lordicon.com/fwkrbvja.json"
              trigger="hover"
              target=".nav-services"
              colors="primary:#ed8d8d,secondary:#b8b1b1"
              style={{ width: "26px", height: "26px" }}
            />
            SERVICES
          </Link>
        </li>

        {/* CTA */}
        <li>
          <Link
            href="/contact"
            className={`
              ${rajdhani.className}
              flex items-center gap-2
              text-servicehead
              border border-navborder
              rounded-lg
              px-4 py-1.5
              transition-all duration-300
              hover:bg-servicehead hover:text-black
              hover:scale-105
            `}
          >
            <animated-icons
              src="https://animatedicons.co/get-icon?name=Calling%20V3&style=minimalistic&token=66ff3706-138c-41fa-a993-dee03566e48c"
              trigger="hover"
              height="18"
              width="18"
            />
            CONTACT US
          </Link>
        </li>

      </ul>
    </nav>
  );
}
