/* eslint-disable react/no-unescaped-entities */
import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import project_nvidia from "../public/images/nvidia_jetson_board.jpg";
import quitization from "../public/images/quitization.png";
import Yolov5 from "../public/images/yologo_2.png";
import ConvertModel from "../public/images/Convert.png";

export const projectsData = [
  {
    title: "Quantized Yolov5 by Using Quantization-Aware-Training Methods ",
    description: (
      <>
        <ul>
          <li>
            Conversion of all layers in TensorFlow and changing every function
            from PyTorch to TensorFlow to use this methods
          </li>
          <li>
            Training in INT8 that shrinks the model's size and maintains
            accuracy
          </li>
          <li>Utilized for deploying models on edge systems</li>
        </ul>
        <p>
          <a href="https://github.com/ehsanrahnama/QuantizationYolov5">
            Github
          </a>
        </p>
      </>
    ),
    img: quitization,
  },
  {
    title: "Deploy Model on Embedded System Jetson NX ",
    description: (
      <>
        <ul>
          <li>Preparing nvidia board and install all dependecy</li>{" "}
          <li>Optimizing the model for inference on the Jetson Xavier NX</li>
          <li> Changing the precision of the weight of the model </li>
        </ul>
      </>
    ),
    img: project_nvidia,
  },
  {
    title: "Trained object detection models by Custom dataset",
    description: (
      <>
        <ul>
          <li>Using transfer learning (fine tuning) for training models</li>
          <li>
            Pruning model and change architecture of model for special usage
          </li>
          <li>Develop dataset for cutome usage</li>
        </ul>
      </>
    ),
    img: Yolov5,
  },
  {
    title: "Convert Model to Other Frameworks and Deploy in production",
    description: (
      <>
        <ul>
          <li>Converted yolov4 to tensortRT by using tkDNN</li>
          <li>Implemented to convert yolov3 to tensorflow</li>{" "}
          <li>
            Export model to ONNX, torchscript and Saved Model, and
            Tensorflowlite fromat{" "}
          </li>
          <li>
            depoly yolov5 on Nvidia Triton servers for using in production
          </li>
        </ul>
      </>
    ),
    img: ConvertModel,
  },
];
