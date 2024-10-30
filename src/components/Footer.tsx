import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" md:px-6 bg-transparent font-mono mt-8 font-bold ">
      <span className="flex flex-wrap text-sm text-black dark:text-white text-center justify-center items-center">
        © {new Date().getFullYear()}. Desarrollado por{" "}
        <Link
          className="mx-2 hover:underline"
          href="https://www.norly96.com"
          target="_blank"
        >
          Norly96.
        </Link>
        Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
