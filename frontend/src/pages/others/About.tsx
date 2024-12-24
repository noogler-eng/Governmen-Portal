import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Cpu } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-24 gap-16 border">
      <div className="px-16 mx-auto max-w-7xl">
        <p className="font-medium tracking-wide text-blue-500 uppercase">OUR</p>
        <h2 className="pb-5 mt-1 mb-5 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-100 ">
          Amazing Team of <br />
          Creators
        </h2>
        <div className="w-full flex gap-24">
          <div className="flex flex-col items-center justify-center col-span-1">
            <div className="relative p-5">
              <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
              <img
                className="relative z-20 rounded-full"
                src={"/public/sharad.jpeg"}
                width={100}
              />
            </div>
            <div className="mt-3 space-y-2 text-center">
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3>Sharad Poddar</h3>
                <p className="text-blue-600">Developer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 items-center">
            <a
              href="https://x.com/SharadPoddar11"
              target="_blank"
              className="text-gray-300 hover:text-gray-400 flex border-2 px-10 py-4 rounded-full items-center gap-4 drop-shadow-2xl w-full shadow-lg shadow-blue-700/50 font-mono"
            >
              my github account
              <Github size={20} />
            </a>
            <a
              href="https://github.com/noogler-eng"
              target="_blank"
              className="flex text-gray-300 hover:text-gray-400 border-2 px-10 py-4 rounded-full items-center gap-4 drop-shadow-2xl w-full shadow-lg shadow-blue-700/50 font-mono"
            >
              my twitter account
              <Twitter size={20} />
            </a>
            <a
              href="https://leetcode.com/u/sharadpoddar1001/"
              target="_blank"
              className="flex text-gray-300 hover:text-gray-400 border-2 px-10 py-4 rounded-full items-center gap-4 drop-shadow-2xl w-full shadow-lg shadow-blue-700/50 font-mono"
            >
              my leetcode account
              <Cpu size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
