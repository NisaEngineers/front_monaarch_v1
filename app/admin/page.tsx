"use client";

import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement
);

export default function Admin() {
  // ------- User Analytics Demo Data -------
  const usageBarData = {
    labels: [
      "Vocal Remover",
      "Basic Splitting",
      "Advanced Splitting",
      "Mixing & Mastering",
      "Chord Extraction",
    ],
    datasets: [
      {
        label: "Usage Time (hrs)",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const revenueLineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1500, 2000, 2500, 2200, 2700, 3000],
        fill: false,
        borderColor: "rgba(255,99,132,1)",
        tension: 0.1,
      },
    ],
  };

  const demoPieData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Demographics",
        data: [55, 40, 5],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Dummy table data is included directly in the JSX

  // ------- Advanced Machine Learning Recommendations Demo Data -------
  const mlRecommendationsData = {
    labels: ["Marketing", "User Retention", "Upsell Potential"],
    datasets: [
      {
        label: "Optimization Score",
        data: [80, 65, 75],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // ------- Monaarch's LLM Report Demo Data -------
  const llmReportData = {
    labels: ["Accuracy", "Efficiency", "User Satisfaction"],
    datasets: [
      {
        label: "Scores",
        data: [90, 85, 80],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Monaarch Admin Dashboard (Demo)
      </h1>

      <div className="space-y-16">
        {/* User Analytics Section */}
        <section className="p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-600 border-b pb-2">
            User Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Usage Time Per Service */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                Service Usage Time
              </h3>
              <div className="h-64">
                <Bar
                  data={usageBarData}
                  options={{ maintainAspectRatio: false, responsive: true }}
                />
              </div>
            </div>
            {/* Revenue Over Time */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                Revenue Over Time
              </h3>
              <div className="h-64">
                <Line
                  data={revenueLineData}
                  options={{ maintainAspectRatio: false, responsive: true }}
                />
              </div>
            </div>
            {/* User Demographics */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                User Demographics
              </h3>
              <div className="h-64">
                <Pie
                  data={demoPieData}
                  options={{ maintainAspectRatio: false, responsive: true }}
                />
              </div>
            </div>
            {/* Demo Table */}
            <div className="flex flex-col">
              <h3 className="text-xl font-medium mb-2">User Details</h3>
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b text-left">
                      Unique ID
                    </th>
                    <th className="py-2 px-4 border-b text-left">Info</th>
                    <th className="py-2 px-4 border-b text-right">
                      Usage (hrs)
                    </th>
                    <th className="py-2 px-4 border-b text-right">
                      Expenditure ($)
                    </th>
                    <th className="py-2 px-4 border-b text-right">
                      Revenue ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-1 px-2 border-b">U12345</td>
                    <td className="py-1 px-2 border-b">Demo User</td>
                    <td className="py-1 px-2 border-b">15</td>
                    <td className="py-1 px-2 border-b">50</td>
                    <td className="py-1 px-2 border-b">120</td>
                  </tr>
                  <tr className="text-center">
                    <td className="py-1 px-2 border-b">U67890</td>
                    <td className="py-1 px-2 border-b">Demo User 2</td>
                    <td className="py-1 px-2 border-b">20</td>
                    <td className="py-1 px-2 border-b">70</td>
                    <td className="py-1 px-2 border-b">200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Advanced Machine Learning Recommendations Section */}
        <section className="p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-purple-600 border-b pb-2">
            Advanced Machine Learning Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Optimization Scores */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                Optimization Scores
              </h3>
              <div className="h-64">
                <Bar
                  data={mlRecommendationsData}
                  options={{ maintainAspectRatio: false, responsive: true }}
                />
              </div>
            </div>
            {/* Recommendation Overview */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-2">
                Recommendation Overview
              </h3>
              <p className="text-gray-700">
                Based on a hybrid approach using KNN and KMeans algorithms, our system recommends targeted marketing strategies to boost revenue, optimize user engagement, and improve retention. This demo reflects a simplified output of such intelligent recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Monaarch's LLM Report Section */}
        <section className="p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 border-b pb-2">
            Monaarch's LLM Report
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overall Performance Metrics */}
            <div>
              <h3 className="text-xl font-medium mb-2">
                Overall Performance Metrics
              </h3>
              <div className="h-64">
                <Bar
                  data={llmReportData}
                  options={{ maintainAspectRatio: false, responsive: true }}
                />
              </div>
            </div>
            {/* Summary Report */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-2">
                Summary Report
              </h3>
              <p className="text-gray-700">
                The LLM report consolidates analytics and machine learning insights to form a comprehensive summary. This report provides actionable insights based on usage metrics, revenue data, and optimization recommendations, empowering informed decision making.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
