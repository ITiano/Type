import BookSvg from "@assets/vectors/BookSvg";
import PencelSvg from "@assets/vectors/PencelSvg";
import VlcSvg from "@assets/vectors/VlcSvg";
import Image from "next/image";
import React from "react";

const CoursesImages = ({ size = 70, kind }) => {
  return (
    <div className="overflow-hidden relative centering" style={{ width: size, height: size }}>
      {kind === 1 && <Image src="/images/courses/Pin.png" fill alt="Pin" />}
      {kind === 2 && <Image src="/images/courses/coffee.png" fill alt="coffee" />}
      {kind === 3 && <Image src="/images/courses/Box.png" fill alt="Box" />}
      {kind === 4 && <PencelSvg />}
      {kind === 5 && <BookSvg />}
      {kind === 6 && <VlcSvg />}
    </div>
  );
};

export default CoursesImages;
