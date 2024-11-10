import Image from "next/image";
import { socialLinks } from "./config";

// Button UI

import {Button, ButtonGroup} from "@nextui-org/button";



export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/Imam-profile-image.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-200 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 
          grayscale-[20%] 
          hover:grayscale-0 
          hover:scale-110 
          hover:shadow-[0_0_15px_rgba(255,255,255,0.8),_0_0_10px_rgba(0,0,0,0.2)] 
          transition-all duration-300 ease-in-out"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        MERN Stack Developer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">


        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS for optimal performance.
        </p>
        <p>
          Nextfolio includes all the essentials for a stunning portfolio: SEO,
          MDX support, RSS, Atom, & JSON feeds, analytics, tweet & YouTube
          embeds, KaTeX integration, and{" "}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>

      </div>

      <div className="flex h-10 px-6 justify-start py-10 space-x-8">

          <Button 
            color="secondary"
            variant="ghost"
          >
            Resume
            </Button>

            <Button 
            color="secondary"
            variant="ghost"
          >
            Check My Projects
            </Button>

        </div>

        


    </section>
  );
}
