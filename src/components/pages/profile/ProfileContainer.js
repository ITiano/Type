"use client";
import React, { useRef } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";
import { useAuth } from "src/context/AuthContextProvider";
import ProfileActivity from "@components/pages/profile/ProfileActivity";
import Skeleton from "@components/common/Skeleton";
import * as htmlToImage from "html-to-image";
import toast from "react-hot-toast";

const ProfileContainer = ({ data }) => {
  const [user] = useAuth();
  const ref = useRef();

  const onShare = async () => {
    try {
      const filter = (node) => !["delete-for-share"].some((classname) => node.classList?.contains(classname));
      const imageDataUrl = await htmlToImage.toPng(ref.current, { filter });

      const title = "Improve your typing speed with our 10-finger typing app!";
      const text = `Enhance your typing skills and achieve greater speed and accuracy with engaging lessons and interactive exercises. Try it now and become a typing expert in no time!
      Visit our website: www.typiano.vercel.app
      #TypingSkills #10FingerTyping #ProductivityApp`;

      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
          url: imageDataUrl,
        });
      } else {
        const { email, firstName, lastName } = user.user_metadata;
        let name = firstName || lastName ? `${firstName || ""}${firstName ? " " : ""}${lastName || ""}` : email;
        let date = new Date();
        date = date.toISOString();
        date = date.substring(0, 10);

        toast.error("Web Share API is not supported in this browser.");
        const download = document.createElement("a");
        download.href = imageDataUrl;
        download.download = name.toLowerCase() + "-" + date;
        download.click();
      }
    } catch (error) {
      console.error("Error converting HTML to image : ", error);
    }
  };

  return (
    <section ref={ref} className="bg-gray-600 rounded-3xl py-6 px-4 2xs:p-10 md:p-12 mb-8 m-layout p-layout">
      {!user ? (
        <>
          <Skeleton className="h-[104px] sm:h-[120px] md:h-[112px] mb-8" />
          <Skeleton className="h-[404px] md:[748px] mb-10" />
          <Skeleton className="h-[478px] md:h-[260px]" />
        </>
      ) : (
        <>
          <ProfileHeader onShare={onShare} data={data} />
          <ProfileActivity data={data} />
          <ProfileForm />
        </>
      )}
    </section>
  );
};

export default ProfileContainer;
