import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="w-full max-w-md">
                <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "font-thin text-6xl text-center",
                      "cursor-default font-display sm:text-7xl md:text-9xl",
                      "text-black dark:text-sky-400",
                      "transition-colors duration-100 ease-in-out"
                    )}
                  >
                    {config.author.split(" ")[0]}
                    <br className="md:block hiidden" />
                    {config.author.split(" ")[1]}
                  </h1>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 text-center",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Software Engineer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex justify-center">
                <Link
                  href={
                    "https://drive.google.com/file/d/1vVBf0OVJAkedMu4y8bwIIkTMLeyUnaAk/view?usp=sharing"
                  }
                  target="_blank"
                  className="w-fit"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-[168px]">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                </div>
                <div className="flex justify-center gap-3">
                  <Link
                    href="https://wa.me/message/RRJICZEHTHTGD1"
                    target="_blank"
                  >
                    <Button variant={"outline"} className="w-12 h-12 p-0">
                      <SiWhatsapp size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"} className="w-12 h-12 p-0">
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"} className="w-12 h-12 p-0">
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
