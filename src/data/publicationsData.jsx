import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import article_a1 from "../../public/images/article1_localize.png";
import article_a2 from "../../public/images/article2_industrial.png";
import journal3 from "../../public/images/journal3.png";
import journal1 from "../../public/images/journal1-1.png";  
import journal2 from "../../public/images/journal2-2.png";


export const publicationsData = [
  {
    title:
      "Industrial Scene Change Detection using Deep Convolutional Neural Networks",
    description: (
      <p>
        locate differences in two scenes using machine vision, the challenge of
        change in lighting conditions and the presence of shadows in the scene,
        and the use of pre-trained deep convolutional networks in a UNET
        structure and object-wise and pixel-wise.
        <br />
        <br />
        Ali Atghaei,<strong>Ehsan Rahnama</strong>, Kiavash Azimi, Hassan
        Shahbaz
        <br className="" />
        Publication date 2022/12/29 {"   "}
        <a target="_blank" className="!font-bold !text-blue-800" href="https://arxiv.org/abs/2212.14278">arXiv</a>
      </p>
    ),
    img: article_a2,
  },

  {
    title:
      "A new systematic decision support framework based on solar extended exergy accounting performance to prioritize photovoltaic sites",
    description: (
      <p>
        propose a new decision support framework based on extended exergy accounting to 
        prioritize PV site selection from environmental, technical, financial, 
        and social perspectives; evaluate a 500 kW grid-connected PV system across different Iranian 
        climates using real year-round data; show that extended exergy accounting offers 
        more effective site ranking than traditional metrics like irradiance, power generation, 
        and exergy efficiency.
        <br />
        <br /> Mortaza Aghbashlo, Meisam Tabatabaei, <strong>Ehsan Rahnama</strong>, Marc A Rosen,
        <br /> Publication date 2020/5/20 {"    "}
        <a target="_blank" className="!font-bold !text-blue-800" href="https://doi.org/10.1016/j.jclepro.2020.120356">ScienceDirect</a>
      </p>
    ),
    img: journal2,
  },

  {
    title:
      "Spatio-temporal solar exergoeconomic and exergoenvironmental maps for photovoltaic systems",
    description: (
      <p>
        develop solar exergoeconomic and exergoenvironmental maps to assess photovoltaic system performance; evaluate a 100 kW grid-connected PV plant across various Iranian cities using real climatic, economic, and environmental data; 
        demonstrate that the new maps offer more reliable site selection and sizing than traditional exergy efficiency maps.
        <br />
        <br /><strong>Ehsan Rahnama</strong>, Mortaza Aghbashlo, Meisam Tabatabaei, Majid Khanali, Marc A. Rosen,
        <br /> Publication date 2019/9/1 {"    "}
        <a target="_blank" className="!font-bold !text-blue-800" href="https://doi.org/10.1016/j.enconman.2019.05.051">ScienceDirect</a>
      </p>
    ),
    img: journal1 // Two images in one box
  },
];
