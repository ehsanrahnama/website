import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
  return (
    <div className="mt-10 min-h-[220px] md:flex-row flex-col overflow-hidden rounded-xl flex w-full shadow-[0_-2px_13px_0px_#00000020] hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark">
      <div className="w-[250px] flex justify-center items-center md:mx-10">
        <Image
          src={props.img}
          className="rounded-t-xl border-none h-full"
          alt="Single Project"
          layout="responsive"
          height={100}
          width={100}
        />
      </div>
      <div className="text-center flex-1 ">
        <div className="w-full mt-5 text-left">
          <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light">
            {props.title}
          </p>
        </div>
        <span
          // dangerouslySetInnerHTML={{ __html: props.description }}
          className="px-5 text-left text-lg text-ternary-dark dark:text-ternary-light"
        >
          {props.description}
        </span>
      </div>
    </div>
  );
};

export default ProjectSingle;
