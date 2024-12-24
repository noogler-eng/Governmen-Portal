import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-6 pt-4 border-t">
      <div className="w-full flex justify-center items-center gap-8">
        <Link to="/about" className=" text-gray-400 hover:underline">
          About Me
        </Link>
        <Link to="/terms" className=" text-gray-400 hover:underline">
          Terms
        </Link>
      </div>
      <div className="w-full flex justify-center items-center gap-8">
        <Link to="https://github.com/noogler-eng">
          <Github
            size={40}
            color="gray"
            className="rounded-full border-4 p-1"
          />
        </Link>
        <Link to="https://x.com/SharadPoddar11">
          <Twitter
            size={40}
            color="gray"
            className="rounded-full border-4 p-1"
          />
        </Link>
        <Link to="https://www.youtube.com/@0xsharad">
          <Youtube
            size={40}
            color="gray"
            className="rounded-full border-4 p-1"
          />
        </Link>
      </div>
      <div className="w-full flex justify-center">© 2024 Deveploer</div>
    </div>
  );
}
