import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import article_a1 from "../public/images/article1_localize.png";
import article_a2 from "../public/images/article2_industrial.png";

export const publicationsData = [
  {
    title:
      "Industrial Scene Change Detection using Deep Convolutional Neural Networks",
    description: (
      <>
        locate differences in two scenes using machine vision, the challenge of
        change in lighting conditions and the presence of shadows in the scene,
        and the use of pre-trained deep convolutional networks in a UNET
        structure and object-wise and pixel-wise. Ali Atghaei,{" "}
        <strong>Ehsan Rahnama</strong>, Kiavash Azimi, Hassan Shahbaz
        Publication date 2022/12/29{" "}
        <a href="https://arxiv.org/abs/2212.14278">arXiv</a>
      </>
    ),
    img: article_a2,
  },

  {
    title:
      "Localizing the Conceptual Difference of Two Scenes Using Deep Learning for Housekeeping Usages",
    description: (
      <>
        conceptual differences between two images in an industrial environment
        for HSE purposes, using deep learning methods, transfer learning, and
        structural modification of the error function, Collected a custom
        dataset and established a new procedure for labeling images Ali Atghaei,{" "}
        <strong>Ehsan Rahnama</strong>, Kiavash Azimi,
        <br /> Publication date 2022/8/9 <br />{" "}
        <a href="https://arxiv.org/abs/2208.04884">arXiv</a>
      </>
    ),
    img: article_a1,
  },
];
