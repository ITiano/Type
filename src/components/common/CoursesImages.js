import BookSvg from "@assets/vectors/BookSvg";
import PencelSvg from "@assets/vectors/PencelSvg";
import VlcSvg from "@assets/vectors/VlcSvg";
import Image from "next/image";
import React from "react";

const CoursesImages = ({ size = 70, kind, className = "" }) => {
  return (
    <div className="overflow-hidden relative centering" style={{ width: size, height: size }}>
      {kind === 1 && <Image className={className} src="/images/courses/Pin.png" fill alt="Pin" />}
      {kind === 2 && <Image className={className} src="/images/courses/coffee.png" fill alt="coffee" />}
      {kind === 3 && <Image className={className} src="/images/courses/Box.png" fill alt="Box" />}
      {kind === 4 && <PencelSvg className={className} />}
      {kind === 5 && <BookSvg className={className} />}
      {kind === 6 && <VlcSvg className={className} />}
    </div>
  );
};

export default CoursesImages;
