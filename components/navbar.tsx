import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full flex gap-10 bg-red-400 p-4 rounded-xl mb-10">
      <Link href="/" className="hover:text-white hover:font-bold">
        Home
      </Link>
      <Link href="/about" className="hover:text-white hover:font-bold">
        About
      </Link>
      <Link href="/blog" className="hover:text-white hover:font-bold">
        Blog
      </Link>
    </div>
  );
};

export default Navbar;
