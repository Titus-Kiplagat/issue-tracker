import Link from "next/link";
import { GiAlienBug } from "react-icons/gi";

const NavBar = () => {
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
            <Link className="text-zinc-500 hover:text-zinc-800 transition-colors" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
