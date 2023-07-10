import Image from "next/image";
import DefaultLayout from "@/components/layout/defaultLayout";
import ProjectItem from "@/components/elements/projectItem";
import Link from "next/link";

const aiProjects = [
  {
    title: "Forest Fire Detection",
    description:
      "This project is an AI model to recognize and isolate the fire area in an image. The pipeline is build on top of 2 models, namely YOLOv8 to localize the fire areas and U-Net model to segment the fire area producing a binary image.",
    image: "/images/FireDetection/cover.webp",
    path: "/projects/forest-fire",
    tags: ["YOLOv8", "U-Net", "CNN", "TensorFlow", "TransferLearning"],
  },
  {
    title: "COVID-19 X-Ray Diagnosis",
    description:
      "This model takes chest X-ray images as an input and diagnoses if the patient is COVID-19 positive. The model is implemented using Convolutional Neural Network (CNN) architecture.",
    image: "/images/covid/covid-cover.png",
    path: "/projects/covid",
    tags: ["TensorFlow", "CNN", "Classification", "Deep Learning"],
  },
  {
    title: "H1N1 and Seasonal Flu Vaccines Tendency",
    description:
      "This AI model predicts one's tendencies to receive H1N1 and seasonal flu vaccines based on personal information and medical records. We perform extensive analysis to learn the data characteristics and then select important features related to vaccination tendencies.",
    image: "/images/vaccine/vaccine.webp",
    path: "/projects/vaccine",
    tags: ["CatBoost", "GradientBoosting", "ScikitLearn", "TailwindCSS"],
  },
  {
    title: "House Price Prediction",
    description:
      "This project compares regression and ensemble learning algorithms to predict house prices based on house-related information (number of rooms, stairs, fireplaces, garage, etc.) Before the prediction, I also implemented thorough data analysis and cleaning to prepare the data. In conclusion, the Extreme Gradient Boosting algorithm demonstrated the best performance among the other algorithms.",
    image: "/images/house/housing.jpg",
    path: "/projects/house-price",
    tags: ["VueJS", "ExpressJS", "MySQL"],
  },
];

const webProjects = [
  {
    title: "Leafin",
    description:
      "Leafin is a progressive web app designed for mobile devices. Leafin provides several features, such as plan monitoring system, plants layouting with AR, real-time chatbot, and articles",
    image: "/images/Leafin/leafin-1.png",
    path: "/projects/leafin",
    tags: ["NextJS", "MongoDB", "ExpressJS", "TailwindCSS"],
  },
  {
    title: "Pathseeker.id",
    description:
      "Pathseeker.id is the official website of Pathseeker. This website provides several features such as event information and registration, partnership proposal, and admin dashboard.",
    image: "/images/Pathseeker.id/path1.png",
    path: "/projects/pathseeker",
    tags: ["NextJS", "TailwindCSS", "Firebase"],
  },
  {
    title: "PPSMB UGM 2022",
    description:
      "The website provides information regarding PPSMB 2022 event series to 9000+ freshmen",
    image: "/images/PPSMB Web/1.png",
    path: "/projects/ppsmb",
    tags: ["ThreeJS", "NextJS", "Strapi", "TailwindCSS"],
  },
  {
    title: "E-Voting Web For HMTI UGM Chairman Election",
    description:
      "An online voting platform for HMTI UGM's chairman and vice chairman election in 2021. This website provides candidates information and voting feature and also admin dashboard displaying the voting result in real-time.",
    image: "/images/HMTI/hmti1.png",
    path: "/projects/hmti",
    tags: ["VueJS", "ExpressJS", "MySQL"],
  },
];

export default function Home() {
  return (
    <DefaultLayout>
      <section className="flex justify-between px-40 min-h-[100vh] items-center">
        <div className="p-20 flex-1">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-blue-500">Richardus Ferdian</span>
          </h1>
          <p className="text-xl">
            I'm a Full Stack Web Developer + Data Scientist
          </p>
        </div>
        <div className="flex-1">
          <div className="relative h-[350px] w-[350px]">
            <Image
              src="/images/cropped-ferdian.jpg"
              alt="ferdian"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Projects</h1>
          <h2 className="text-xl">Data Science and Artificial Intelligence</h2>
        </div>
        <div className="px-20 py-8">
          <div className="grid grid-cols-3 gap-20">
            {aiProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl">Web Development</h2>
        </div>
        <div className="px-20 py-8">
          <div className="grid grid-cols-3 gap-20">
            {webProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-2xl font-bold text-center">Connect With Me</h1>
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <Link
              href="https://github.com/ferdianfefe"
              className="flex flex-col items-center"
            >
              <Image
                src="/images/icons/github.svg"
                alt="github"
                width={30}
                height={30}
              />
              <p className="text-sm">Github</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/richardusferdian/"
              className="flex flex-col items-center"
            >
              <Image
                src="/images/icons/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
              <p className="text-sm">Linkedin</p>
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
