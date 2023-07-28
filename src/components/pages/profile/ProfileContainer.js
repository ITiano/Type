"use client";
import React, { useRef, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";
import { useAuth } from "src/context/AuthContextProvider";
import ProfileActivity from "@components/pages/profile/ProfileActivity";
import Skeleton from "@components/common/Skeleton";
import * as htmlToImage from "html-to-image";
import toast from "react-hot-toast";

const ProfileContainer = ({ data }) => {
  const [user] = useAuth();
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);

  const onShare = async () => {
    if (user?.user_metadata && ref.current) {
      setLoading(true);
      const { email, firstName, lastName } = user.user_metadata;
      const name = firstName || lastName ? `${firstName || ""}${firstName ? " " : ""}${lastName || ""}` : email;
      let date = new Date();
      date = date.toISOString();
      date = date.substring(0, 10);
      const fileName = name.toLowerCase() + "-" + date;

      try {
        const imageFile = await htmlToImage.toBlob(ref.current);
        const url = `Typiano - Your 10-Finger Typing Maestro.
        Step into a world of typing excellence with Typiano! Improve your typing speed, accuracy, and efficiency through engaging lessons and challenging exercises. Whether you're a beginner or a seasoned typist, Typiano will help you become a typing virtuoso. Embrace the joy of typing and unlock your true potential!
        Visit Typiano's website: https://typiano.vercel.app/
        `;
        const files = [new File([imageFile], fileName + ".png", { type: "image/png" })];
        if (navigator.canShare && navigator.canShare({ files })) {
          await navigator.share({ url, files });
          setLoading(false);
        } else {
          const imageDataUrl = await htmlToImage.toPng(ref.current);
          toast.error("Web Share API is not supported in this browser.");
          const download = document.createElement("a");
          download.href = imageDataUrl;
          download.download = fileName;
          download.click();
          setLoading(false);
        }
      } catch (error) {
        console.log("Error Web share :", error);
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-gray-600 rounded-3xl py-6 px-4 2xs:p-10 md:p-12 mb-8 m-layout p-layout">
      {!user ? (
        <>
          <Skeleton className="h-[104px] sm:h-[120px] md:h-[112px] mb-8" />
          <Skeleton className="h-[404px] md:[748px] mb-10" />
          <Skeleton className="h-[478px] md:h-[260px]" />
        </>
      ) : (
        <div className="relative overflow-hidden">
          <ProfileHeader onShare={onShare} data={data} shareLoading={loading} />
          <ProfileActivity data={data} />
          <ProfileForm />

          <div ref={ref} className="bg-gray-600 rounded-3xl p-4 min-w-[1000px] -z-50 absolute top-0">
            <ProfileHeader onShare={onShare} data={data} />
            <ProfileActivity isShare data={data} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileContainer;
