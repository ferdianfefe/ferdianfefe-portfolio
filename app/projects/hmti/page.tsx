import Button from "@/components/elements/button";
import ProjectLayout from "@/components/layout/projectLayout";
import Image from "next/image";

const HMTI = () => {
  return (
    <ProjectLayout
      title="E-Voting Web For HMTI UGM Chairman Election"
      createdAt="July 2021"
      tags={["VueJS", "ExpressJS", "MySQL"]}
    >
      <div className="flex flex-col">
        <div className="relative h-[300px] w-full mx-auto">
          <Image
            src="/images/HMTI/hmti1.png"
            alt="leafin"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <small className="mx-auto">Figure 1 Landing Page</small>
      </div>
      <p className="mt-3">
        An online voting platform for HMTI UGM's chairman and vice chairman
        election in 2021. There are 2 features provided:
      </p>
      <ul className="list-disc">
        <li>Candidates' information and voting features for voters</li>
        <li>
          Admin dashboard displaying real-time polling and the final result
        </li>
      </ul>
      <br />
      <p>Tech Stack: </p>
      <ul className="list-disc mb-6">
        <li>Vue JS</li>
        <li>Express JS</li>
        <li>MySQL</li>
      </ul>
      <Button
        href="https://github.com/ferdianfefe/pemilu-hmti-frontend"
        className="mr-4"
      >
        Code Repository
      </Button>
    </ProjectLayout>
  );
};

export default HMTI;
