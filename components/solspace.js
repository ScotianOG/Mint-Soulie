// components/solspace.js
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  Brain, Crown, Star, Shield, Users, 
  ChevronDown, Wallet, Bot
} from 'lucide-react';

// Shared data
const stats = [
  { label: "Total Supply", value: "2,000 NFTs" },
  { label: "Mint Price", value: "0.25 SOL" },
  { label: "Max Per Wallet", value: "5" },
  { label: "Token Allocation", value: "25,000 SOUL" }
];

const benefits = [
  {
    icon: <Crown className="w-8 h-8 text-purple-500" />,
    title: "Platform Access",
    description: "Ad-free experience with premium features"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Exclusive Community",
    description: "Join the founders-only network"
  },
  {
    icon: <Bot className="w-8 h-8 text-cyan-500" />,
    title: "Trading Bot Access",
    description: "Professional-grade automated trading"
  },
  {
    icon: <Brain className="w-8 h-8 text-green-500" />,
    title: "AI Analytics Agent",
    description: "Advanced market insights and analysis"
  }
];

// Navigation Component
export const Navigation = ({ activeSection }) => (
  <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-xl font-bold text-white cursor-pointer">SOLspace</h1>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/">
              <span className={`text-sm cursor-pointer ${activeSection === 'mint' ? 'text-cyan-400' : 'text-gray-400'} hover:text-white transition-colors`}>
                Mint
              </span>
            </Link>
            <Link href="/trading">
              <span className={`text-sm cursor-pointer ${activeSection === 'trading' ? 'text-cyan-400' : 'text-gray-400'} hover:text-white transition-colors`}>
                Trading Suite
              </span>
            </Link>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
          Connect Wallet
        </Button>
      </div>
    </div>
  </nav>
);

// Mint Section Component
export const MintSection = () => {
  const [mintCount, setMintCount] = useState(1);
  const MINT_PRICE = 0.25;
  const MAX_MINT = 5;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-6">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            SOLspace Founders Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your gateway to advanced trading and AI-powered analytics
          </p>
          
          {/* Mint Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/10 rounded-lg p-4">
                <h3 className="text-gray-300">{stat.label}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <Button 
            className="mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('mint-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mint Now
          </Button>
        </div>
        
        <ChevronDown className="absolute bottom-8 w-8 h-8 animate-bounce text-white" />
      </div>

      {/* Mint Interface */}
      <section id="mint-section" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-lg text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Mint Your Founder&apos;s Pass</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => setMintCount(Math.max(1, mintCount - 1))}
                    className="text-white border-white/20"
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold min-w-[3rem] text-center">
                    {mintCount}
                  </span>
                  <Button 
                    variant="outline"
                    onClick={() => setMintCount(Math.min(MAX_MINT, mintCount + 1))}
                    className="text-white border-white/20"
                  >
                    +
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-xl">Total: {(mintCount * MINT_PRICE).toFixed(2)} SOL</p>
                </div>

                <Button 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-6 text-lg"
                >
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Exclusive Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/5 backdrop-blur-lg text-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>
      </div>
    );
  };

  // Trading Suite Section Component
export const TradingSection = () => {
    const features = [
      {
        title: "Advanced Trading Bot",
        icon: <Bot className="w-12 h-12 text-cyan-400" />,
        description: "Professional-grade automated trading with sophisticated risk management",
        points: [
          "Multi-strategy trading engine",
          "Real-time market monitoring",
          "Advanced risk management",
          "Performance optimization",
          "Emergency safety protocols"
        ]
      },
      {
        title: "AI Analytics Agent",
        icon: <Brain className="w-12 h-12 text-purple-400" />,
        description: "Your personal market analyst powered by advanced AI",
        points: [
          "Market intelligence",
          "Portfolio analysis",
          "Risk assessment",
          "Strategic recommendations",
          "Customized reporting"
        ]
      }
    ];
  
    const accessPaths = [
      {
        title: "3D Special Edition",
        description: "Most Exclusive Access",
        icon: <Crown className="w-6 h-6 text-yellow-500" />,
        requirement: "Hold 1 3D Special Edition NFT",
        benefits: [
          "Direct, immediate access",
          "Only 30 editions available",
          "Complete feature suite",
          "Priority support"
        ]
      },
      {
        title: "Base Tier Path",
        description: "Community Access Route",
        icon: <Shield className="w-6 h-6 text-blue-500" />,
        requirement: "Lock 4 Base + Burn 1 Base NFT",
        benefits: [
          "Most accessible path",
          "Through mint participation",
          "Community focused",
          "Standard features"
        ]
      }
    ];
  
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero */}
        <div className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Advanced Trading Suite
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional-grade trading bot and AI analytics, exclusively for Founders Collection holders
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-black/50 border border-cyan-400/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                        <CardTitle className="mb-1">{feature.title}</CardTitle>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <Shield className="w-4 h-4 text-cyan-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          {/* Access Paths */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">Access Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accessPaths.map((path, index) => (
                <Card key={index} className="bg-black/50 border border-cyan-400/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {path.icon}
                      <div>
                        <CardTitle>{path.title}</CardTitle>
                        <p className="text-sm text-gray-400">{path.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-cyan-400/10 rounded-lg p-3">
                      <p className="text-sm text-cyan-400">{path.requirement}</p>
                    </div>
                    <ul className="space-y-2">
                      {path.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          {/* CTA */}
          <section className="pb-24">
            <Card className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-gray-300">
                  Join the elite group of traders with access to our advanced trading suite
                </p>
                <Link href="/">
                  <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white gap-2">
                    Mint Your Access Pass
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    );
  };