import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const years = ['2019', '2020', '2021', '2022', '2023'];

const indiaData = {
  labels: years,
  datasets: [
    {
      label: 'Financial Fraud',
      data: [52000, 78000, 118000, 145000, 178000],
      borderColor: 'rgb(74, 222, 128)',
      backgroundColor: 'rgba(74, 222, 128, 0.5)',
    },
    {
      label: 'Identity Theft',
      data: [32000, 45000, 68000, 89000, 112000],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
    },
    {
      label: 'Cyberbullying',
      data: [28000, 42000, 58000, 72000, 95000],
      borderColor: 'rgb(21, 128, 61)',
      backgroundColor: 'rgba(21, 128, 61, 0.5)',
    },
  ],
};

const globalData = {
  labels: years,
  datasets: [{
    label: 'Global Cybercrime Losses (Billion USD)',
    data: [3500, 4200, 6000, 8000, 10500],
    backgroundColor: [
      'rgba(74, 222, 128, 0.6)',
      'rgba(34, 197, 94, 0.6)',
      'rgba(21, 128, 61, 0.6)',
      'rgba(22, 163, 74, 0.6)',
      'rgba(16, 185, 129, 0.6)',
    ],
  }],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#4ade80',
        font: {
          family: "'Courier New', monospace",
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(74, 222, 128, 0.1)',
      },
      ticks: {
        color: '#4ade80',
        font: {
          family: "'Courier New', monospace",
        }
      }
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#4ade80',
        font: {
          family: "'Courier New', monospace",
        }
      }
    },
  },
};

const CrimeStatistics = () => {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-black border border-green-400/30 rounded-lg p-6">
        <h3 className="text-lg font-medium text-green-400 mb-4">
          Cybercrime Trends in India
        </h3>
        <div className="h-[300px]">
          <Line data={indiaData} options={options} />
        </div>
      </div>
      
      <div className="bg-black border border-green-400/30 rounded-lg p-6">
        <h3 className="text-lg font-medium text-green-400 mb-4">
          Global Cybercrime Impact
        </h3>
        <div className="h-[300px]">
          <Bar data={globalData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CrimeStatistics;