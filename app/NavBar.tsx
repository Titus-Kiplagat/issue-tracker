'use client';

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiAlienBug } from "react-icons/gi";

const NavBar = () => {
  const current_path = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex gap-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiAlienBug />
      </Link>
      <ul className="flex gap-6">
        {links.map(({ href, label }) => (
					<li key={label}>
            <Link className={classNames({
              "text-zinv-800": current_path === href,
              "text-gray-500": current_path !== href,
              "hover:text-zinv-800 transition-colors": true,
            })} href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
