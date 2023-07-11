import Button from "@/components/elements/button";
import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";

const ForestFire = () => {
  return (
    <ProjectLayout
      title="Fire Forest Detection"
      createdAt="May 2023"
      tags={["YOLOv8", "U-Net", "CNN", "TensorFlow", "TransferLearning"]}
    >
      <div className="flex flex-col">
        <div className="relative h-[300px] w-full mx-auto">
          <Image
            src="/images/FireDetection/fire-1.png"
            alt="leafin"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <small className="mx-auto">Figure 1 Algorithm Steps</small>
      </div>
      <p className="mt-3">
        This project is an AI model to detect and isolate the fire area in an
        image. The project is actually built on 2 models, a YOLOv8 model to
        localize the fire areas, and the result will be fed into a U-Net model
        to segment the fire image. Here is the input, detected fire locations,
        and the output image:
      </p>
      <Button
        href="https://drive.google.com/file/d/1rSnqceQVzO8PIaih6UuyynSmAzMijrXH/view?usp=sharing"
        className="mr-4"
      >
        Code Repository
      </Button>
      <Button
        href="https://drive.google.com/file/d/11b54ywvPTdEMj2by1TkKjHJnxi9Fbv2V/view?usp=sharing"
        type="secondary"
      >
        Implementation Paper
      </Button>
    </ProjectLayout>
  );
};

export default ForestFire;
