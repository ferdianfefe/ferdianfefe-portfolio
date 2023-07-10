import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";

const Leafin = () => {
  return (
    <ProjectLayout
      title="Leafin"
      createdAt="March 2022"
      tags={["NextJS", "MongoDB", "ExpressJS", "TailwindCSS"]}
    >
      <div className="relative h-[300px] w-[300px] mx-auto">
        <Image
          src="/images/Leafin/leafin-1.png"
          alt="leafin"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <p className="mt-3">
        Leafin is a progressive web app designed for mobile devices. Leafin
        provides several features:
      </p>
      <ul className="list-disc">
        <li>
          A plant monitoring system integrated with IoT devices via Blynk allows
          users to monitor their plants' real-time information such as humidity,
          temperature, and water level.
        </li>
        <li>
          Using AR technology, users can fit the IoT toolkit and plants into
          their garden layout and see the result instantly.
        </li>
        <li>Real-time chat feature Articles on gardening tips</li>
      </ul>
      <p>Repository link:</p>
      <ul className="list-dic">
        <li>https://github.com/ferdianfefe/leafin-client</li>
        <li>https://github.com/ferdianfefe/leafin-server</li>
      </ul>
    </ProjectLayout>
  );
};

export default Leafin;
