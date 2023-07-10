"use client";

import DefaultLayout from "./defaultLayout";
import matter from "gray-matter";
import html from "remark-html";
import parse from "remark-parse";
import { unified } from "unified";
import markdownStyles from "./markdown-styles.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface ProjectLayoutProps {
  title: string;
  createdAt: string;
  tags: string[];
  children: React.ReactNode;
}

const ProjectLayout = ({
  title,
  createdAt,
  tags,
  children,
}: ProjectLayoutProps) => {
  const [content, setContent] = useState<String>("");

  //   const renderMarkdown = async (markdown: string) => {
  //     const extracted = matter(markdown).content;
  //     const result = await unified().use(parse).use(html).process(extracted);
  //     return result.toString();
  //   };

  //   useEffect(() => {
  //     const render = async () => {
  //       const content = await renderMarkdown(body || "");
  //       setContent(content);
  //     };
  //     render();
  //   }, []);

  //   const content = await renderMarkdown(body || "");

  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">{createdAt}</p>

          <div className="flex flex-wrap mt-5">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-200 px-1 py-1 rounded-md text-xs block mr-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div> */}
        <div className="px-64">{children}</div>
        <div className="px-64">
          <a
            href="/projects"
            className="flex items-center gap-2 mt-10 text-sm hover:underline underline-offset-2"
          >
            <AiOutlineArrowLeft />
            <span>Back to Projects</span>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProjectLayout;
