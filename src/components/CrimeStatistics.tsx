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
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
    },
    {
      label: 'Identity Theft',
      data: [32000, 45000, 68000, 89000, 112000],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
    {
      label: 'Cyberbullying',
      data: [28000, 42000, 58000, 72000, 95000],
      borderColor: 'rgb(168, 85, 247)',
      backgroundColor: 'rgba(168, 85, 247, 0.5)',
    },
  ],
};

const globalData = {
  labels: years,
  datasets: [{
    label: 'Global Cybercrime Losses (Billion USD)',
    data: [3500, 4200, 6000, 8000, 10500],
    backgroundColor: [
      'rgba(239, 68, 68, 0.6)',
      'rgba(59, 130, 246, 0.6)',
      'rgba(168, 85, 247, 0.6)',
      'rgba(234, 179, 8, 0.6)',
      'rgba(34, 197, 94, 0.6)',
    ],
  }],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#000000',
        font: {
          weight: 'bold'
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      ticks: {
        color: '#000000',
      }
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#000000',
      }
    },
  },
};

const CrimeStatistics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-medium text-black mb-4">
          Cybercrime Trends in India
        </h3>
        <div className="h-[300px]">
          <Line data={indiaData} options={options} />
        </div>
      </div>
      
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-medium text-black mb-4">
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