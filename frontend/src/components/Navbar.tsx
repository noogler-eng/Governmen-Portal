import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div>Govt.Portal</div>
      <div className="flex items-center">
        <div className="flex items-center gap-2"></div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
