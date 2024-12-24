import { Bot } from "lucide-react";
import { Expand } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Library } from "lucide-react";
import CountUp from "react-countup";

export default function Features() {
  const contacts: {
    icons: React.ReactNode;
    title: string;
    para: string;
  }[] = [
    {
      icons: <Bot size={60} />,
      title: "Robust",
      para: "Our App makes use of modern technologies and superior front end libraries.",
    },
    {
      icons: <Expand size={60} />,
      title: "Scalable",
      para: "With our industry standard integrations, scalability will be as easy as a pie.",
    },
    {
      icons: <LockKeyhole size={60} />,
      title: "Secure",
      para: "Our Smart Contract Ensures Tamper-proof data, and prevents data loss",
    },
  ];

  const stats: {
    icons: React.ReactNode;
    title: string;
    para: React.ReactNode;
  }[] = [
    {
      icons: <UsersRound size={60} />,
      title: "Students Connected",
      para: (
        <span>
          <CountUp duration={10} end={1000} />+ Students Connected
        </span>
      ),
    },
    {
      icons: <Library size={60} />,
      title: "Colleges Registered",
      para: (
        <span>
          <CountUp duration={20} end={100} />+ Colleges Registered
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center py-12 gap-3">
        <h2 className="text-4xl font-extrabold">Our Features</h2>
        <p className="text-lg">
          We have integrated industry standard smart contracts to make the data
          safe and unmodifiable
        </p>
      </div>
      <div className="flex-col md:flex-row flex items-center w-3/6 justify-center gap-8">
        {contacts.map((item, index) => {
          return (
            <div
              className="flex flex-col w-2/6 gap-4 px-10 py-10 border items-center bg-gray-200 rounded-xl hover:bg-gray-300 drop-shadow-xl"
              key={index}
            >
              {item.icons}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-center">{item.para}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col items-center mt-10 py-12 gap-3">
        <h2 className="text-4xl font-extrabold">Statistics</h2>
        <p className="text-lg">Statistical Data of our Users</p>
      </div>
      <div className="flex-col md:flex-row flex items-center w-3/6 justify-center gap-8">
        {stats.map((item, index) => {
          return (
            <div
              className="flex flex-col w-2/6 gap-4 px-10 py-10 border items-center bg-gray-200 rounded-xl hover:bg-gray-300 drop-shadow-xl"
              key={index}
            >
              {item.icons}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-center">{item.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
