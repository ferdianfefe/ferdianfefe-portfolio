"use client";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "bg-white shadow-md" : "bg-transparent",
        "header sticky top-0 left-0 z-10"
      )}
    >
      <div className="flex justify-between py-4 px-40 text-sm">
        <Link href="/" className="">
          <Image
            src="/images/icons/ferdian-logo.svg"
            alt="github"
            width={60}
            height={60}
          />
        </Link>
        <div className="flex gap-8 decoration-slice items-center">
          <Link href="/" className="hover:underline underline-offset-2">
            Home
          </Link>
          <Link href="/projects" className="hover:underline underline-offset-2">
            Projects
          </Link>
          <Link href="/" className="hover:underline underline-offset-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
