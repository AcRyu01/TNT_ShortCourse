import React from "react";
import Navbar from "./navbar";

type Props = {};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto p-10">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;
