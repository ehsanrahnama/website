/* eslint-disable react/no-unescaped-entities */
import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import project_nvidia from "../../public/images/nvidia_jetson_board.jpg";
import quitization from "../../public/images/quitization.png";
import Yolov5 from "../../public/images/yologo_2.png";
import chatbot from "../../public/images/chatbot.jpg";
import testplatform from "../../public/images/TestPlatform.png";
import housekeeping from "../../public/images/article1_localize.png";
import ConvertModel from "../../public/images/Convert.png";
import ObjectDetection from "../../public/images/detect_object.jpg"


export const projectsData = [
  {
    title: "Develop HSE Assitance Based on LLM and RAG Architecture",
    tags:  ["LangChain", "MongoDB Atlas", "AWS Lambda", "Amazon SageMaker"],
    description: (
      <div>
        <ul className="list-disc space-y-4">
          <li>
            Introduced RAG architecture to mitigate hallucination in the HSE
            Assistance system, enhancing the accuracy and reliability of the
            system’s responses.
          </li>
          <li>
            Designed and implemented a vector database on MongoDB Atlas to store
            and embed PDF ﬁles for eﬃcient retrieval and analysis.
          </li>
          <li>
            Utilized Amazon Lambda and Gateway API service to deploy a robust
            RESTful API, seamlessly integrating the HSE Assistance system with
            the RAG architecture for enhanced performance and scalability.
          </li>
        </ul>
        {/* <p>
          <a href="">
            Github
          </a>
        </p> */}
      </div>
    ),
    img: chatbot,
  },

  {
    title: "Design Data and Test Platform for AI Teams",
    tags:  ["Python", "Flask", "PostgreSQL", "Docker", "Redash"],
    description: (
      <div>
        <ul className="list-disc space-y-4">
          <li>
            Developed a comprehensive data platform to manage, store, and
            organize labeled images and videos, enabling eﬃcient access and
            retrieval of dataset resources for AI model training.
          </li>
          <li>
            Engineered a robust testing platform for rigorously evaluating AI
            models’ performance on diverse datasets, fostering consistent and
            reliable assessment across varying conditions.
          </li>
          <li>
            Utilized Redash to create data visualizations that provided insights
            into complex datasets.
          </li>
        </ul>
        <p className="mt-6">
          <a target="_blank" className="!font-bold !text-blue-800"  href="https://youtu.be/eWKzCDR2yVY">
            Demo Video
          </a>
        </p>
      </div>
    ),
    img: testplatform,
  },

  {
    title: "Localize the Conceptual Difference for HSE Monitoring in Industrial Environments",
    tags:  ["Tensorflow", "Pytorch", "Transfer Learning", "t-SNE", "OpenCV"],
    description: (
      <div>
        <ul className="list-disc space-y-4">
          <li>
          Developed a deep learning-based method using transfer learning and custom loss functions to detect and classify conceptual differences between industrial scene images.
          </li>
          <li>
          Designed and labeled a specialized dataset, incorporating data augmentation techniques to address challenges such as lighting variations and object diversity.
          </li>
          <li>
          Evaluated the model's performance on real industrial data, demonstrating its effectiveness and practical applicability for Health, Safety, and Environment (HSE) monitoring.
          </li>
        </ul>
        <p className="mt-6">
          <a target="_blank" className="!font-bold !text-blue-800" href="https://arxiv.org/abs/2208.04884">
            arXiv
          </a>
        </p>
      </div>
    ),
    img: housekeeping,
  },

  {
    title: "Quantized Yolov5 by Using Quantization-Aware-Training Methods",
    tags:  ["Yolov5", "Tensorﬂow", "Quantization Aware Training"],
    description: (
      <>
        <ul  className="list-disc space-y-4">
          <li>
            Created TensorFlow equivalents for each layer in YOLOv5’s detection
            pipeline and replaced all PyTorch functions used in YOLOv5 with
            their corresponding TensorFlow implementations.
          </li>{" "}
          <li>
            Implemented QAT for all layers, enabling quantization of weights and
            activations during training, minimizing accuracy loss while reducing
            model size.
          </li>{" "}
          <li>
            Deployed the quantized INT8 model on edge devices and Utilized the
            trained quantized INT8 model for object detection on edge devices.
          </li>
        </ul>
        <p className="mt-6">
         <a target="_blank" className="!font-bold  !text-blue-800" href="https://github.com/ehsanrahnama/Quantization">Github</a>
        </p>
      </>
    ),
    img: quitization,
  },
  {
    title: "Deploy Model on Embedded System Jetson NX",
    tags: ["TensorRT", "tkDNN", "Pruning"],
    description: (
      <>
        <ul  className="list-disc space-y-4">
          <li>
            Converted YOLOv4 models to TensorRT format using the tkDNN framework
            to enable high-speed inference on embedded devices.
          </li>
          <li>
            Pruned models and customized its architecture to meet specific
            performance and deployment constraints, improving both speed and
            resource efficiency.
          </li>
          <li>
            Configured the NVIDIA Jetson Xavier NX board and installed all
            required dependencies for model deployment in a resource-constrained
            environment.
          </li>
        </ul>
      </>
    ),
    img: project_nvidia,
  },
  {
    title: "Train Object Detection Models by Custom Dataset",
    tags: ["Keras", "Tensorflow", "Pytorch", "OpenCV", "Data Augmentation"],
    description: (
      <>
        <ul  className="list-disc space-y-4">
          <li>
            Applied transfer learning to fine-tune object detection models on
            domain-specific datasets, resulting in robust performance under
            dynamic and fluctuating surveillance conditions.
          </li>
          <li>
            Collected, augmented, and labeled custom datasets tailored to
            specific project requirements, ensuring high-quality training data.
          </li>
          <li>
            Integrated and deployed trained deep learning models into production
            environments using TensorFlow Serving and NVIDIA Triton Inference
            Server, enabling reliable, scalable, and high-performance object
            detection.
          </li>
        </ul>

        <p className="mt-6">
         <a target="_blank" className="!font-bold  !text-blue-800" href="https://www.facebook.com/share/v/16fQgw5sC2/">Demo1 </a>
         <a target="_blank" className="!font-bold  !text-blue-800" href="https://www.facebook.com/share/v/196SJWbTxZ/">Demo2 </a>
         <a target="_blank" className="!font-bold  !text-blue-800" href="https://www.facebook.com/share/v/1CGXKD6qC2/">Demo3</a>
        </p>
      </>
    ),
    img: ObjectDetection,
  },
  {
    title: "Convert Model to Other Frameworks and Deploy in Production",
    tags: ["Nvidia Triton", "Tensorflow Serving", "GRPC"],
    description: (
      <>
        <ul className="list-disc space-y-4">
        <li>Depoly DL Model on Nvidia Triton servers for using in production</li>  
        <li>Export model to ONNX, torchscript and saved model, and Tensorflowlite fromat</li>
        <li>Implement python code to convert yolov3 to tensorflow and serve by tensorflow serving</li>
        </ul>
      </>
    ),
    img: ConvertModel,
  },
];
