"use client";
import React from "react";
import { Scene } from "@/components/ui/Scene";
import { Button } from "@/components/ui/button";

const Index = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setLoaded(true);
      });
    }
  }, []);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <main className="flex min-h-screen h-full w-full justify-between flex-col items-center py-2 sm:py-8">
      {/* <div className="absolute top-4 left-4 group">
        <div className="font-mono text-center text-lg tracking-widest text-[#ffc2fd] border-[rgba(22, 182, 212, 1)] cursor-pointer group-hover:animate-blink p-5 border-2 border-[rgba(22,182,212,0.3)]">
          <span className="text-center">Pier 418</span>
        </div>
      </div> */}
      <p className="text-center text-sm text-white">Pier 418</p>
      <div className="container max-w-7xl relative">
        <h1 className="uppercase text-center font-black text-8xl ">
          <span className="bg-metal bg-clip-text text-transparent text-stroke raise">
            We craft digital
          </span>
          {/* <span className="bg-metal bg-clip-text text-transparent text-stroke raise relative">
            digital experiences
          </span> */}
        </h1>
        <p className=" absolute right-24 -bottom-12 font-hand text-7xl font-bold -rotate-[10deg] text-[hsl(318,100%,51%)] [text-shadow:-2px_-3px_hsl(53,100%,81%),5px_5px_hsl(240,90%,61%)]">
          experiences
        </p>
      </div>
      <div className=" space-y-2 text-white">
        <div>
          <Button
            size="icon"
            variant="outline"
            disabled={!loaded}
            onClick={handleToggle}
          >
            {loaded ? (
              audioRef.current?.paused ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"
                  ></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2V2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12H9zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z"
                  ></path>
                </svg>
              )
            ) : (
              "Loading..."
            )}
          </Button>

          <audio autoPlay muted ref={audioRef}>
            <source src="/vaporwave.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <p>
          ⚡️ Originally inspired by the{" "}
          <a href="https://linear.app/releases/2021-06">
            2021 Linear release page
          </a>
        </p>
        <p>
          ✨ Reverse-engineered and recreated by{" "}
          <a href="https://twitter.com/MaximeHeckel">@MaximeHeckel</a> with
          Three.js
        </p>
        <p>
          👉 How I built this?{" "}
          <a href="https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/">
            Building a Vaporwave scene with Three.js
          </a>
        </p>
      </div>
      <Scene />
    </main>
  );
};

export default Index;
