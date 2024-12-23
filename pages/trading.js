// pages/trading.js
import { TradingSection, Navigation } from "@/components/solspace";

export default function TradingSuite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <Navigation activeSection="trading" />
      <TradingSection />
    </div>
  );
}
