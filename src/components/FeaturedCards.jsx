import Image from "next/image";
import React from "react";
import feature1 from "../assets/images/6.png";
import Link from "next/link";

const FeaturedCards = () => {
  return (
    <div className="max-w-[49%]">
      <Link href="">
        <Image
          src={feature1}
          width={600}
          height={300}
          alt=""
          className="rounded-md"
        />
      </Link>
    </div>
  );
};

export default FeaturedCards;
