import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";
import Button from "@/components/elements/button";

const Pathseeker = () => {
  return (
    <ProjectLayout
      title="Pathseeker Official Website"
      createdAt="April 2023"
      tags={["Firebase", "NextJS", "TailwindCSS"]}
    >
      <p className="mt-3">
        Pathseeker.id is the official website of Pathseeker. This website
        provides several features:
      </p>
      <ul className="list-disc">
        <li>Event information and registration</li>
        <li>Partnership and collaboration proposal</li>
        <li>Admin dashboard for event management</li>
      </ul>
      <div className="mx-auto my-6 flex justify-center">
        <Image
          src="/images/Pathseeker.id/path1.png"
          alt="Pathseeker"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto my-6 flex justify-center">
        <Image
          src="/images/Pathseeker.id/path2.png"
          alt="Pathseeker"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <Button href="https://pathseeker.id/" className="mr-4">
        Official Website
      </Button>
    </ProjectLayout>
  );
};

export default Pathseeker;
