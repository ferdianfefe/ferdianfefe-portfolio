import Button from "@/components/elements/button";
import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";

const Leafin = () => {
  return (
    <ProjectLayout
      title="Leafin"
      createdAt="March 2022"
      tags={["NextJS", "MongoDB", "ExpressJS", "TailwindCSS"]}
    >
      <div className="flex mb-6 justify-center">
        <Image
          src="/images/leafin/leafin-1.png"
          width="300"
          height="300"
          alt="covid-2"
        />
      </div>
      <p className="mt-3">
        Leafin is a progressive web app designed for mobile devices. Leafin
        provides several features:
      </p>
      <ul className="list-disc">
        <li>
          A plant monitoring system integrated with IoT devices via Blynk allows
          users to monitor their plants&apos; real-time information such as
          humidity, temperature, and water level.
        </li>
        <li>
          Using AR technology, users can fit the IoT toolkit and plants into
          their garden layout and see the result instantly.
        </li>
        <li>Real-time chat feature Articles on gardening tips</li>
      </ul>
      <div className="my-6 flex">
        <Image
          src="/images/leafin/leafin-2.png"
          width="300"
          height="300"
          alt="covid-2"
        />
        <Image
          src="/images/leafin/leafin-3.png"
          width="300"
          height="300"
          alt="covid-2"
        />
        <Image
          src="/images/leafin/leafin-4.png"
          width="300"
          height="300"
          alt="covid-2"
        />
        <Image
          src="/images/leafin/leafin-5.png"
          width="300"
          height="300"
          alt="covid-2"
        />
      </div>
      <Button
        href="https://github.com/ferdianfefe/leafin-client"
        className="mr-4"
      >
        Client Side Repository
      </Button>
      <Button
        href="https://github.com/ferdianfefe/leafin-server"
        type="secondary"
      >
        Server Side Repository
      </Button>
    </ProjectLayout>
  );
};

export default Leafin;
