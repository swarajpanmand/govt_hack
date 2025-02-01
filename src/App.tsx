import React, { useState } from 'react';
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
// import Login from './components/Login';
// import Register from './components/Register';
import Chatbot from './components/Chatbot';
import {Toaster} from 'sonner'

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // if (isAuthenticated) {
  //   return (
  //     <div className="min-h-screen bg-black">
  //       <Header />
  //       <Hero />
  //       <About />
  //       <ComplaintBox />
  //       <Statistics />
  //       <Resources />
  //       <Footer />
  //       <Chatbot/>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="min-h-screen bg-black">
  //     {showLogin ? (
  //       <Login 
  //         onLoginSuccess={() => setIsAuthenticated(true)}
  //         onRegisterClick={() => setShowLogin(false)}
  //       />
  //     ) : (
  //       <Register
  //         onRegisterSuccess={() => setIsAuthenticated(true)}
  //         onLoginClick={() => setShowLogin(true)}
  //       />
  //     )}
  //   </div>
  // );

  return(
    <>
       <Header />
       <Toaster theme="light" position="top-right" />
         <Hero />
         <About />
         <ComplaintBox />
         <Statistics />
         <Resources />
         <Footer />
        <Chatbot/>
    </>
  )
}

export default App