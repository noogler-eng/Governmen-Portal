import { ConnectButton } from "@rainbow-me/rainbowkit";
import DropDown from "./DropDown";

export default function Navbar() {
  const routers = [
    {
      name: "Browse",
      items: [
        {
          name: "student",
          link: "/browse/students",
        },
        {
          name: "college",
          link: "/browse/colleges",
        },
      ],
    },
    {
      name: "Register",
      items: [
        {
          name: "student",
          link: "/register/students",
        },
        {
          name: "college",
          link: "/register/colleges",
        },
      ],
    },
    {
      name: "Misc",
      items: [
        {
          name: "Fellowships",
          link: "/other/students",
        },
        {
          name: "Traning Programs",
          link: "/other/traning",
        },
      ],
    },
    {
      name: "Admin",
      items: [
        {
          name: "Add-Admin",
          link: "/other/add-admin",
        },
        {
          name: "Verify Details",
          link: "/other/Verify",
        },
      ],
    },
  ];

  const navigations = routers.map((item, index) => {
    return <DropDown items={item} key={index} />;
  });

  return (
    <div className="flex items-center justify-between p-4 fixed w-screen z-10 bg-transparent px-6 py-4 transition-all duration-300 ease-in-out backdrop-blur-lg bg-white/50">
      <div className="text-4xl font-extrabold underline">Govt.Portal</div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">{navigations}</div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
