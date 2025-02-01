import React, { useEffect } from 'react';
import { ArrowUp, ArrowDown, AlertTriangle, Shield, Users, Clock, FileText, ExternalLink, Search, Phone } from 'lucide-react';
import { toast } from 'sonner';
import CrimeStatistics from './CrimeStatistics';

const stats = [
  {
    title: 'Active Cases',
    value: '1,247',
    change: '+12.5%',
    isIncrease: true,
    icon: FileText,
    color: 'emerald',
  },
  {
    title: 'Resolved Cases',
    value: '892',
    change: '+18.2%',
    isIncrease: true,
    icon: Shield,
    color: 'cyan',
  },
  {
    title: 'High Priority',
    value: '38',
    change: '-5.4%',
    isIncrease: false,
    icon: AlertTriangle,
    color: 'purple',
  },
  {
    title: 'Response Time',
    value: '2.4h',
    change: '-12.3%',
    isIncrease: true,
    icon: Clock,
    color: 'teal',
  },
];

const recentCases = [
  {
    id: 'CS-2024-001',
    type: 'Financial Fraud',
    status: 'High Priority',
    time: '2 hours ago',
    location: 'Mumbai, MH',
    color: 'emerald',
  },
  {
    id: 'CS-2024-002',
    type: 'Identity Theft',
    status: 'In Progress',
    time: '4 hours ago',
    location: 'Delhi, DL',
    color: 'cyan',
  },
  {
    id: 'CS-2024-003',
    type: 'Cyberbullying',
    status: 'Under Review',
    time: '5 hours ago',
    location: 'Bangalore, KA',
    color: 'purple',
  },
  {
    id: 'CS-2024-004',
    type: 'Data Breach',
    status: 'Assigned',
    time: '6 hours ago',
    location: 'Hyderabad, TS',
    color: 'teal',
  },
];

const getColorClasses = (color) => {
  const colors = {
    emerald: 'border-emerald-400/30 hover:border-emerald-400 text-emerald-400',
    cyan: 'border-cyan-400/30 hover:border-cyan-400 text-cyan-400',
    purple: 'border-purple-400/30 hover:border-purple-400 text-purple-400',
    teal: 'border-teal-400/30 hover:border-teal-400 text-teal-400',
  };
  return colors[color] || colors.emerald;
};

const DashboardContent = () => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'q') {
        recentCases.forEach((case_, index) => {
          setTimeout(() => {
            toast(
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full bg-opacity-10 flex items-center justify-center ${getColorClasses(case_.color)}`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{case_.type}</p>
                  <div className="flex items-center text-sm opacity-70 space-x-2">
                    <span>{case_.id}</span>
                    <span>•</span>
                    <span>{case_.location}</span>
                  </div>
                </div>
              </div>,
              {
                duration: 4000,
                className: getColorClasses(case_.color),
              }
            );
          }, index * 300); // Stagger the toasts
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <main className="flex-1 overflow-y-auto bg-black min-h-screen p-12">
      <div className="max-w-[1600px] mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const colorClasses = getColorClasses(stat.color);
            return (
              <div
                key={stat.title}
                className={`bg-black shadow-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-200 border ${colorClasses}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-medium opacity-70">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-opacity-10 ${colorClasses}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {stat.isIncrease ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className="ml-2 font-medium">
                    {stat.change}
                  </span>
                  <span className="ml-2 opacity-70">
                    from last month
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <CrimeStatistics />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        </div>
      </div>
    </main>
  );
}

export default DashboardContent;