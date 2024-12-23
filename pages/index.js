// pages/index.js
import { MintSection, Navigation } from "@/components/solspace";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <Navigation activeSection="mint" />
      <MintSection />
    </div>
  );
}
