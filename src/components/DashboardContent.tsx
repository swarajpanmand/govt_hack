import React from 'react';
import { ArrowUp, ArrowDown, AlertTriangle, Shield, Users, Clock, FileText, ExternalLink, Search, Phone } from 'lucide-react';
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
          {/* <div className="bg-black shadow-lg rounded-xl p-8 border border-emerald-400/30">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-medium text-emerald-400">Recent Cases</h3>
              <button className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center">
                View All <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="space-y-4">
              {recentCases.map((case_) => {
                const colorClasses = getColorClasses(case_.color);
                return (
                  <div key={case_.id} className={`flex items-center justify-between p-4 bg-opacity-5 rounded-xl border ${colorClasses}`}>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-opacity-10 flex items-center justify-center ${colorClasses}`}>
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">{case_.type}</p>
                        <p className="text-xs opacity-70">ID: {case_.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{case_.location}</p>
                      <p className="text-xs opacity-70">{case_.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}

          {/* <div className="bg-black shadow-lg rounded-xl p-8 border border-cyan-400/30">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-medium text-cyan-400">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'File New Complaint', icon: FileText, color: 'emerald' },
                { title: 'Track Complaint', icon: Search, color: 'cyan' },
                { title: 'Emergency Contact', icon: Phone, color: 'purple' },
                { title: 'View Statistics', icon: Users, color: 'teal' },
              ].map(({ title, icon: Icon, color }) => {
                const colorClasses = getColorClasses(color);
                return (
                  <button
                    key={title}
                    className={`p-6 bg-opacity-5 rounded-xl flex flex-col items-center justify-center hover:bg-opacity-10 transition-colors border ${colorClasses}`}
                  >
                    <Icon className="w-6 h-6 mb-3" />
                    <span className="text-sm font-medium">{title}</span>
                  </button>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default DashboardContent;