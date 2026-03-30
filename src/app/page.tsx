'use client'

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ReactIcon from "../../public/React.png"
import React, { useRef } from "react";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(SplitText);



export default function Home() {

  const container = useRef(null);

  // Using useGSAP to run animation on mount
  useGSAP(() => {
    // split elements with the class "split" into words and characters
    let split = SplitText.create(".name", {
      type: "words, chars, lines",
      mask: "lines",
    });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      y: 100,
      yPercent: 110,
      opacity: 1,
      stagger: 0.05,
      duration: 1,
    });
  },{scope: container})



  return (
    
   <main className="mt-[-40px]">
    {/* navBar */}
    <div className="absolute sticky z-2 top-10 left-10 bg-transparent flex justify-center bg-transparent h-10 w-10">
      <div className="flex flex-row items-center justify-center text-sm w-full bg-yellow-500">
        {/* <li>Home</li>
        <li>Skills</li> */}
        {/* <li>Experience</li>
        <li>Projects</li> */}
      </div>
    </div>

    {/* lang Button */}
    {/* <div>
      <button> KR </button>
      <button> ENG </button>
    </div> */}
    {/* block */}
      <section ref={container} className="h-[425vh] bg-zinc-100 text-gray-100">
      {/* sticky wrapper */}
      <div className="sticky top-0 py-0 px-[10rem] overflow-hidden">
        {/* first content */}
        <div className="relative flex flex-col justify-center items-center w-full h-screen text-center gap-4 z-1">
            <h1 className="name text-6xl font-anton text-black">MIN HEE KANG</h1>
            <h2 className="name text-3xl font-anton text-black">FRONTEND ENGINEER</h2>
            {/* <div>
              <div className="text-2xl">3+</div>
              <div className="text-xl">
                years of experience
              </div>
            </div> */}
            {/* <p className="text-sm text-gray-900">I am a software engineer with a passion for building web applications. I am a quick learner and I am always looking to improve my skills.</p> */}
        </div>
      </div>
    </section>

    <section className="h-[425vh] bg-black text-white">
      {/* sticky wrapper */}
      <div className="sticky top-0 border-b border-red-500 py-0 overflow-hidden">
        {/* first content */}
        <div className="relative flex flex-col justify-center items-center w-full h-screen text-center z-1">
          <div className="relative flex flex-col justify-center items-center w-full h-screen text-center gap-4 z-1">
            <h1 className="text-5xl font-bold text-gray-900">Skills</h1>
            <div className="grid grid-cols-2">
              <div className="text-sm">Frontend</div>
              <div className="text-sm flex">
                <div>
                  <span>TypeScript
                    </span></div>
                <div>JavaScript</div>
                <div>Next.js</div>
                <div><Image
                  src={ReactIcon}
                  alt="React Icon"
                  width={25}
                  height={25}
                /><span>React</span></div>
                <div>Redux</div>
                <div>Redux Toolkit</div>
                <div>GSAP</div>
                <div>Tailwind CSS</div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
              <div className="text-sm">Backend</div>
              <div className="text-sm flex">
                <div>Node.js</div>
                <div>Nest.js</div>
                <div>Express</div>
              </div>
              <div className="text-sm">Database</div>
              <div className="text-sm flex">
                <div>MongoDB</div>
                <div>MySQL</div>
                <div>Oracle</div>
              </div>
              <div className="text-sm">Tools</div>
              <div className="text-sm flex">
                <div>Github</div>
                <div>Bitbucket</div>
                <div>AWS</div>
                <div>Jenkins</div>
                <div>Docker</div>
                <div>Jira</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 

    <section className="h-[425vh] bg-gray-400">
      {/* sticky wrapper */}
      <div className="sticky top-0 border-b border-red-500 py-0 overflow-hidden">
        {/* first content */}
        <div className="relative flex flex-col justify-center items-center w-full h-screen text-center z-1">
          <div className="relative flex flex-col justify-center items-center w-full h-screen text-center gap-4 z-1">
            <h1 className="text-5xl font-bold text-gray-900">Work</h1>
          </div>
        </div>
      </div>
    </section> 
   </main> 
    
  
  )

    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center sm:items-start">
    //     <div className="sticky top-0 overflow-hidden">
    //       <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center bg-blue-500">
    //         {/* <div className=""> */}
    //           <h1 className="text-5xl font-bold">Min Hee Kang</h1>
    //           <div className="w-[500px]">
    //             <p>I am a software engineer with a passion for building web applications. I am a quick learner and I am always looking to improve my skills.</p>
    //           </div>
    //         {/* </div> */}
    //       </div>
    //       <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center bg-red-500">
    //         <h2 className="text-xl font-bold">Skills</h2>
    //       </div>
    //       <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center bg-green-500">
    //         <h2 className="text-2xl font-bold">Experience</h2>
    //       </div>
    //     </div>


        {/* <div>
          <h2>Experience</h2>
        </div>
        <div>
          <h2>Projects</h2>
        </div> */}
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div> */}
        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
    //   </main>
    // </div>
  // );
}
