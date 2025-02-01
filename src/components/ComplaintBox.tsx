import React from 'react';
import { ShieldAlert, CreditCard, Users } from 'lucide-react';

const ComplaintBox = () => {
  return (
    <section className="py-16 px-8 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Women/Children Related Crime */}
        <div className="bg-gradient-to-br from-violet-500 to-violet-400 rounded-2xl p-6 text-center transform transition-all hover:scale-105">
          <div className="h-48 mb-4 overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80" 
              alt="Women and Children Safety"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">WOMEN/CHILDREN RELATED CRIME</h3>
          <div className="flex gap-4 justify-center">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-2 rounded-lg transition-colors">
              Register Anonymously
            </button>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-2 rounded-lg transition-colors">
              Register & Track
            </button>
          </div>
        </div>

        {/* Financial Fraud */}
        <div className="bg-gradient-to-br from-violet-400 to-violet-300 rounded-2xl p-6 text-center transform transition-all hover:scale-105">
          <div className="h-48 mb-4 overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80" 
              alt="Financial Fraud"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">FINANCIAL FRAUD</h3>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-2 rounded-lg transition-colors">
            Register a Complaint
          </button>
        </div>

        {/* Other Cyber Crime */}
        <div className="bg-gradient-to-br from-violet-300 to-violet-200 rounded-2xl p-6 text-center transform transition-all hover:scale-105">
          <div className="h-48 mb-4 overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
              alt="Other Cyber Crime"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">OTHER CYBER CRIME</h3>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-2 rounded-lg transition-colors">
            Register a Complaint
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComplaintBox;