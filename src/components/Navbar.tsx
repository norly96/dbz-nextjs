import Image from "next/image";
import icon from "@/app/favicon.ico";
import Link from "next/link";
import NavItem from "./NavItem";

const navItems = [
  { path: "/personajes", text: "Personajes" },
  { path: "/planetas", text: "Planetas" },
];

const Navbar = () => {
  return (
    <nav className="flex py-4 px-8 justify-between items-center">
      <Link
        href="/"
        className="flex items-end hover:scale-105 transition-transform"
      >
        <Image src={icon} alt="Picture of the author" width={60} height={40} />
        <h1 className="text-5xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ml-2">
          DBZ
        </h1>
      </Link>

      <div className="flex gap-4">
        {navItems.map((item) => (
          <NavItem key={item.text} path={item.path} text={item.text} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
