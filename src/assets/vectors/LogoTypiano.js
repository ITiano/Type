import routes from "@routes/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoTypiano = ({ className }) => {
  return (
    <Link href={routes.home.path} className={`relative centering ${className}`}>
      <Image width={100} height={40} src="/images/typiano.png" alt="Typiano" />
    </Link>
  );
};

export default LogoTypiano;
