import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";
import ehsanpic from "../../../public/images/ehsan.png";
function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image
          src={ehsanpic}
          width={200}
          height={200}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>

      <div className=" w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
