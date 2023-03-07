import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.size = 16;

const data = {
  type: "bar",
  labels: [
    "React JS",
    "Design",
    "Front End Development",
    "Back End Development",
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [90, 75, 90, 85],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(200, 255, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(200, 255, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  animation: {
    duration: 2000, // 2 seconds
    easing: "easeOutBounce",
  },
  scales: {
    y: {
      beginAtZero: true,
      fontSize: 16, // Set font size here
    },
    x: {
      beginAtZero: true,
      fontSize: 16, // Set font size here
    },
  },
};

const BarChart = () => <Bar data={data} options={options as any} />;

export default BarChart;
