import React from "react";
import { mockData } from "@/mocks/data";
import "@/index.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="uppercase hero-header-text font-bold text-6xl">
        INSIGHTS ON {mockData.title}
      </h1>
    </div>
  );
};

export default Dashboard;
