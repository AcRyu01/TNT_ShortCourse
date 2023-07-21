import { NextPage } from "next";
import React from "react";
import Image from "next/image";

type Props = {};

const About: NextPage = ({}: Props) => {
  return (
    <div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
      <div className="relative w-40 h-40">
        <Image src="/vercel.svg" alt="Vercel Logo" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default About;
