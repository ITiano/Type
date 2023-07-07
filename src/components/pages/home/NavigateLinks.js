"use client";

import ArrowRightIcon from "@public/icons/ArrowRightIcon";
import routes from "@routes/routes";
import Link from "next/link";
import React from "react";
import { useAuth } from "src/context/AuthContextProvider";

const NavigateLinks = ({ className = "" }) => {
  const [user] = useAuth();

  return (
    <div className={`flex-start-center gap-4 ${className}`}>
      <Link href={routes.courses.path} className="btn black-btn font-bold text-lg">
        Get started
      </Link>
      {!user && (
        <Link href={routes.auth.path}>
          <div className="flex-start-center gap-1">
            <span className="font-medium text-black text-lg">Register</span>
            <span>
              <ArrowRightIcon />
            </span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavigateLinks;
