import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import certificate_ai from "../public/images/certificate_ai.png";

export const certificatesData = [
  {
    title: "Generative AI with Large Language Models",
    description: (
      <p>
        <a href="https://www.coursera.org/account/accomplishments/verify/Y3YSHD3M7Z9K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">
          DeepLearning.AI
        </a>
      </p>
    ),
    img: certificate_ai,
  },
];
