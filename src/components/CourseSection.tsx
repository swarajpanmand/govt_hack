import React from 'react';
import { Shield, Terminal, Users, Database, Network, Lock } from 'lucide-react';
import {  Book, Bell, FileText, ChevronRight, BookOpen,  AlertTriangle, UserCheck } from 'lucide-react';

interface Course {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: number;
}

const courses: Course[] = [
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of cybersecurity, including common threats and basic protection methods.",
    duration: "4 weeks",
    level: "Beginner",
    students: 1234
  },
  {
    icon: Terminal,
    title: "Ethical Hacking Basics",
    description: "Understand the mindset of hackers and learn basic penetration testing techniques.",
    duration: "6 weeks",
    level: "Intermediate",
    students: 892
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "Master the principles of data security and privacy regulations.",
    duration: "5 weeks",
    level: "Intermediate",
    students: 756
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Learn how to secure networks and prevent unauthorized access.",
    duration: "8 weeks",
    level: "Advanced",
    students: 645
  }
];

function FeatureCard({ icon: Icon, title, description, className = '' }) {
    return (
      <div className={`bg-gray-900 rounded-xl shadow-lg p-6 transition-transform hover:scale-102 ${className}`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-lg bg-opacity-10">
            <Icon className="w-6 h-6 text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          Read More <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    );
  }
  

function CourseSection() {
  return (
    
    <section className="py-16 bg-black">
        <div className="">
        {/* <main className="container mx-auto px-4 py-16"> */}
        <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-white">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Book}
            title="Citizen Manual"
            description="A comprehensive guide describing the functionalities and workflow for reporting and handling cybersecurity incidents."
            className="border-l-4 border-green-500"
          />
          <FeatureCard
            icon={Lock}
            title="Cyber Safety Tips"
            description="Essential safety practices to protect yourself and your family from cyber threats and maintain digital security."
            className="border-l-4 border-yellow-500"
          />
          <FeatureCard
            icon={AlertTriangle}
            title="Cyber Awareness"
            description="Stay informed about the latest cyber threats and learn how to identify and respond to potential security risks."
            className="border-l-4 border-blue-500"
          />
          <FeatureCard
            icon={FileText}
            title="Daily Digest"
            description="Get updated with the latest cybersecurity news, trends, and best practices to stay ahead of emerging threats."
            className="border-l-4 border-purple-500"
          />
        </div>
        </div>
        </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Featured Courses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive cybersecurity courses designed to help you master
            the skills needed in today's digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-blue-900/20 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                    <p className="text-gray-400 mb-4">{course.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium text-gray-300">{course.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium text-gray-300">{course.level}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Students</div>
                        <div className="font-medium text-gray-300">{course.students.toLocaleString()}</div>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;