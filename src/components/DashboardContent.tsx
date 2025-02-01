import React from 'react';
import { ArrowUp, ArrowDown, AlertTriangle, Shield, Users, Clock, FileText, ExternalLink, Search, Phone } from 'lucide-react';
// import CrimeStatistics from './CrimeStatistics';
import CrimeStatistics from './CrimeStatistics';

const stats = [
  {
    title: 'Active Cases',
    value: '1,247',
    change: '+12.5%',
    isIncrease: true,
    icon: FileText,
  },
  {
    title: 'Resolved Cases',
    value: '892',
    change: '+18.2%',
    isIncrease: true,
    icon: Shield,
  },
  {
    title: 'High Priority',
    value: '38',
    change: '-5.4%',
    isIncrease: false,
    icon: AlertTriangle,
  },
  {
    title: 'Response Time',
    value: '2.4h',
    change: '-12.3%',
    isIncrease: true,
    icon: Clock,
  },
];

const recentCases = [
  {
    id: 'CS-2024-001',
    type: 'Financial Fraud',
    status: 'High Priority',
    time: '2 hours ago',
    location: 'Mumbai, MH',
  },
  {
    id: 'CS-2024-002',
    type: 'Identity Theft',
    status: 'In Progress',
    time: '4 hours ago',
    location: 'Delhi, DL',
  },
  {
    id: 'CS-2024-003',
    type: 'Cyberbullying',
    status: 'Under Review',
    time: '5 hours ago',
    location: 'Bangalore, KA',
  },
  {
    id: 'CS-2024-004',
    type: 'Data Breach',
    status: 'Assigned',
    time: '6 hours ago',
    location: 'Hyderabad, TS',
  },
];

const DashboardContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-black border border-green-400/30 rounded-lg p-6 transform hover:scale-105 transition-transform duration-200 hover:border-green-400"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-400/70">{stat.title}</p>
                <p className="text-2xl font-bold text-green-400 typewriter">{stat.value}</p>
              </div>
              <div className="p-3 rounded-full bg-green-400/10">
                <stat.icon className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.isIncrease ? (
                <ArrowUp className="w-4 h-4 text-green-400" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-400" />
              )}
              <span className={`ml-2 text-sm font-medium ${
                stat.isIncrease ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
              <span className="ml-2 text-sm font-medium text-green-400/70">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <CrimeStatistics />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black border border-green-400/30 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-green-400">Recent Cases</h3>
            <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
              View All <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentCases.map((case_) => (
              <div key={case_.id} className="flex items-center justify-between p-4 bg-green-400/5 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-green-400">{case_.type}</p>
                    <p className="text-xs text-green-400/70">ID: {case_.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-400">{case_.location}</p>
                  <p className="text-xs text-green-400/70">{case_.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black border border-green-400/30 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-green-400">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'File New Complaint', icon: FileText },
              { title: 'Track Complaint', icon: Search },
              { title: 'Emergency Contact', icon: Phone },
              { title: 'View Statistics', icon: Users },
            ].map(({ title, icon: Icon }) => (
              <button
                key={title}
                className="p-4 bg-green-400/5 rounded-lg flex flex-col items-center justify-center hover:bg-green-400/10 transition-colors border border-green-400/20 hover:border-green-400/40"
              >
                <Icon className="w-6 h-6 text-green-400 mb-2" />
                <span className="text-sm font-medium text-green-400">{title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardContent;