import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";
import Button from "@/components/elements/button";

const PPSMB = () => {
  return (
    <ProjectLayout
      title="Pathseeker Official Website"
      createdAt="April 2023"
      tags={["Firebase", "NextJS", "TailwindCSS"]}
    >
      <p className="mt-3">
        The website provides information regarding PPSMB 2022 event series to
        9000+ freshmen. Several features of this website:
      </p>
      <ul className="list-disc">
        <li>Details about PPPSMB 2022 (timeline, attire, materials)</li>
        <li>Palapedia, articles on college tips and PPSMB</li>
        <li>Interactive 3D map of UGM</li>
        <li>Personality Test</li>
      </ul>
      <div className="mx-auto my-6 flex justify-center">
        <Image
          src="/images/PPSMB Web/1.png"
          alt="Pathseeker"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto my-6 flex justify-center">
        <Image
          src="/images/PPSMB Web/2.png"
          alt="Pathseeker"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto my-6 flex justify-center">
        <Image
          src="/images/PPSMB Web/3.png"
          alt="Pathseeker"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="mx-auto my-6 flex justify-center">
        <Image
          src="/images/PPSMB Web/4.png"
          alt="Pathseeker"
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <Button href="https://ppsmb.ugm.ac.id/2022/" className="mr-4">
        Official Website
      </Button>
    </ProjectLayout>
  );
};

export default PPSMB;
