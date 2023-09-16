import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
  return (
    <div className="mt-20 h-[200px] overflow-hidden rounded-xl flex w-full shadow-lg hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark">
      <div className="w-[250px]">
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
        <div className="w-full mt-5 ml-5 text-left">
          <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light">
            {props.title}
          </p>
        </div>
        <span className="text-lg text-ternary-dark dark:text-ternary-light">
          {props.category}
        </span>
      </div>
    </div>
  );
};

export default ProjectSingle;
