import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComplaintBox from './components/ComplaintBox';
import About from './components/About';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Resources from './components/Resources';
import Footer from './components/Footer';
import DashboardContent from './components/DashboardContent';
import CourseSection from './components/CourseSection';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <ComplaintBox />
      <p></p>
      {/* <Services /> */}
      <Statistics />
      {/* <div className="w-15"> */}
      {/* </div> */}
      

      <Resources />
      

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;