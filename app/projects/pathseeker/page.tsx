import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";
import Button from "@/components/elements/button";

const Pathseeker = () => {
  return (
    <ProjectLayout
      title="COVID-19 X-Ray Diagnosis"
      createdAt="April 2023"
      tags={["TensorFlow", "CNN", "Classification", "Deep Learning"]}
    >
      <p className="mt-3">
        This model takes a chest X-ray image as an input and diagnoses if the
        patient is COVID-19 positive. The dataset used is a combination of
        datasets obtained from{" "}
        <a href="http://ugm.id/MVDataset" className="underline">
          http://ugm.id/MVDataset
        </a>{" "}
        and the &quot;COVID-19 Radiography Database&quot; dataset. The dataset
        contains x-ray images of normal people and people with COVID-19. It is
        calculated that the dataset contains 10,290 negative images and 3,674
        positive images of COVID-19.
      </p>
      <div className="mx-auto my-6" align="center">
        <Image
          src="/images/covid/covid-2.png"
          alt="Pathseeker"
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />
        <small className="align-center font-light">
          Figure 1 Dataset Sample
        </small>
      </div>
      <p>
        The training images are resized into 100x100 images and then fed into
        the prediction model. The prediction algorithm used is Convolutional
        Neural Network with architecture as below:
      </p>
      <div align="center" className="my-6">
        <Image
          src="/images/covid/model.png"
          width="300"
          height="300"
          alt="covid-2"
        />
        <small className="align-center font-light">
          Figure 2 CNN Model Architecture
        </small>
      </div>
      <p>
        Once trained, the model is then used to make predictions. Below are some
        examples of the prediction results.
      </p>
      <div align="center" className="my-6">
        <Image
          src="/images/covid/covid-1.png"
          width="500"
          height="300"
          alt="covid-2"
        />
        <small className="align-center font-light">
          Figure 2 CNN Model Architecture
        </small>
      </div>
      <Button
        href="https://colab.research.google.com/drive/14jJ5IUxlnbNZ6LI-PlB4ycZAhETSomxF?authuser=3"
        className="mr-4"
      >
        Code Repository
      </Button>
      <Button
        href="https://drive.google.com/drive/u/3/folders/1U7lq-VLmaY7wIbhtSwcvX1lfwQl34qvG"
        type="secondary"
      >
        Implementation Paper
      </Button>
    </ProjectLayout>
  );
};

export default Pathseeker;
