import React from 'react';
import { ShieldAlert, CreditCard, Users, ArrowRight } from 'lucide-react';

const ComplaintBox = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Report a Cyber Crime
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your safety is our priority. Choose the appropriate category below to report any cyber crime incident. All reports are handled with strict confidentiality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Women/Children Related Crime */}
          <div className="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/30 shadow-2xl shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-800/30 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="h-48 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80" 
                  alt="Women and Children Safety"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-purple-600/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Women & Children Safety</h3>
              <p className="text-gray-300 mb-6 text-sm">Report incidents related to harassment, abuse, or exploitation of women and children.</p>
              <div className="flex gap-3 flex-col sm:flex-row">
                <button className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-medium">
                  Anonymous Report
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-medium">
                  Track Report
                </button>
              </div>
            </div>
          </div>

          {/* Financial Fraud */}
          <div className="group relative bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-700/30 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:shadow-blue-800/30 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="h-48 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80" 
                  alt="Financial Fraud"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-blue-600/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Fraud</h3>
              <p className="text-gray-300 mb-6 text-sm">Report any suspicious financial activities, scams, or unauthorized transactions.</p>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-medium">
                File a Complaint
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Other Cyber Crime */}
          <div className="group relative bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 backdrop-blur-sm rounded-3xl p-8 border border-cyan-700/30 shadow-2xl shadow-cyan-900/20 transition-all duration-300 hover:shadow-cyan-800/30 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="h-48 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
                  alt="Other Cyber Crime"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-cyan-600/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <ShieldAlert className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Other Cyber Crime</h3>
              <p className="text-gray-300 mb-6 text-sm">Report hacking attempts, data breaches, identity theft, or other cyber security issues.</p>
              <button className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-medium">
                File a Complaint
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintBox;