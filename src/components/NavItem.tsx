"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  text: string;
}

const NavItem = ({ path, text }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={clsx(
        "text-3xl text-red-600 hover:scale-105 transition-transform",
        {
          underline: pathname === path,
        }
      )}
    >
      {text}
    </Link>
  );
};

export default NavItem;
