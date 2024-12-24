import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  BarChart2,
  Settings,
  RefreshCw,
} from "lucide-react";

export const AIInterface = () => {
  // Sample data for charts
  const performanceData = [
    { time: "9:00", portfolio: 100, market: 100 },
    { time: "10:00", portfolio: 102, market: 101 },
    { time: "11:00", portfolio: 104, market: 99 },
    { time: "12:00", portfolio: 103, market: 100 },
    { time: "13:00", portfolio: 106, market: 102 },
    { time: "14:00", portfolio: 108, market: 103 },
    { time: "15:00", portfolio: 110, market: 104 },
  ];

  const swapMetrics = {
    tvl: "8.2M SOL",
    volume24h: "450K SOL",
    trades24h: 1247,
    averageSlippage: "0.12%",
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-cyan-400" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI Trading Assistant
          </h2>
        </div>
        <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white gap-2">
          <Settings className="w-4 h-4" />
          Configure
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Analysis */}
        <div className="lg:col-span-2 space-y-6">
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-black border border-cyan-400/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-cyan-400">
                  {swapMetrics.tvl}
                </div>
                <p className="text-sm text-gray-400">Total Value Locked</p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-cyan-400/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-cyan-400">
                  {swapMetrics.volume24h}
                </div>
                <p className="text-sm text-gray-400">24h Volume</p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-cyan-400/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-cyan-400">
                  {swapMetrics.trades24h}
                </div>
                <p className="text-sm text-gray-400">24h Trades</p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-cyan-400/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-cyan-400">
                  {swapMetrics.averageSlippage}
                </div>
                <p className="text-sm text-gray-400">Avg Slippage</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart */}
          <Card className="bg-black border border-cyan-400/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <BarChart2 className="w-5 h-5 text-cyan-400" />
                Portfolio Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                    <XAxis dataKey="time" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#000",
                        border: "1px solid rgba(0, 255, 255, 0.2)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="portfolio"
                      stroke="#00ffff"
                      name="Portfolio"
                    />
                    <Line
                      type="monotone"
                      dataKey="market"
                      stroke="#9945FF"
                      name="Market"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="bg-black border border-cyan-400/50">
            <CardHeader>
              <CardTitle className="text-white">Latest Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  type: "opportunity",
                  title: "Market Opportunity Detected",
                  description:
                    "Unusual volume spike in SOL/USDC pair with positive price action.",
                  time: "2 minutes ago",
                },
                {
                  type: "risk",
                  title: "Portfolio Risk Alert",
                  description:
                    "Current position size approaching defined risk limits.",
                  time: "5 minutes ago",
                },
              ].map((insight, index) => (
                <Alert
                  key={index}
                  className="bg-black border border-cyan-400/50"
                >
                  <AlertTitle className="flex items-center gap-2 text-white">
                    {insight.type === "opportunity" ? (
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-purple-500" />
                    )}
                    {insight.title}
                  </AlertTitle>
                  <AlertDescription>
                    <p className="text-gray-300">{insight.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{insight.time}</p>
                  </AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Chat */}
        <div className="space-y-6">
          <Card className="h-96 bg-black border border-cyan-400/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  AI Assistant
                </div>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 p-3 rounded-lg border border-cyan-400/50">
                  <p className="text-sm text-cyan-400">
                    I&apos;ve noticed increased volatility in your tracked
                    pairs. Would you like me to analyze potential adjustments to
                    your position sizes?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2:45 PM</p>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-sm text-white">
                    Yes, please show me the analysis.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2:46 PM</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 p-3 rounded-lg border border-cyan-400/50">
                  <p className="text-sm text-cyan-400">
                    Analyzing current market conditions and preparing
                    recommendations...
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2:46 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-black border border-cyan-400/50">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
                <BarChart2 className="w-4 h-4" />
                Generate Report
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-cyan-400/50 text-white hover:bg-cyan-400/10"
              >
                <AlertTriangle className="w-4 h-4" />
                Review Risk Settings
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 border-cyan-400/50 text-white hover:bg-cyan-400/10"
              >
                <Brain className="w-4 h-4" />
                Update Preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
