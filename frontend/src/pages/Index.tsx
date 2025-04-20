
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Rocket, BookOpen, BookText, Brain } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-mentor-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mentor-blue to-mentor-purple text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Discover Your Ideal Career Path
              </h1>
              <p className="text-xl mb-8 opacity-90">
                AI-powered guidance to help students find their perfect career based on their skills, interests, and potential.
              </p>
              <Link 
                to="/auth" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-mentor-purple hover:bg-gray-100 transition-colors"
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500&h=400" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-mentor-dark mb-4">How Future Forge Helps You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides personalized guidance to help you make informed career decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-mentor-blue/10 rounded-full w-fit mb-6">
                <BookOpen className="h-8 w-8 text-mentor-blue" />
              </div>
              <h3 className="text-xl font-bold text-mentor-dark mb-3">Career Path Suggestions</h3>
              <p className="text-gray-600">
                Get personalized career recommendations based on your skills, interests, and academic performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-mentor-purple/10 rounded-full w-fit mb-6">
                <Brain className="h-8 w-8 text-mentor-purple" />
              </div>
              <h3 className="text-xl font-bold text-mentor-dark mb-3">Learning Roadmaps</h3>
              <p className="text-gray-600">
                Follow detailed step-by-step learning plans designed to help you achieve your career goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-mentor-teal/10 rounded-full w-fit mb-6">
                <BookText className="h-8 w-8 text-mentor-teal" />
              </div>
              <h3 className="text-xl font-bold text-mentor-dark mb-3">Resource Curation</h3>
              <p className="text-gray-600">
                Access a curated collection of learning resources including videos, blogs, tutorials, and courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-mentor-dark mb-4">About Future Forge</h2>
              <p className="text-lg text-gray-600 mb-6">
                Future Forge is an innovative AI-powered platform designed to help students navigate the complex world of career choices. By analyzing your strengths, interests, and learning style, we provide personalized guidance to help you forge your future.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our platform combines advanced AI technology with educational expertise to deliver accurate and helpful career advice tailored specifically to you.
              </p>
              <Link to="/about" className="text-mentor-purple font-medium hover:underline">
                Learn more about us →
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500&h=400" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mentor-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to discover your ideal career path?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of students who have found their perfect career match with Future Forge.
          </p>
          <Link 
            to="/auth" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-mentor-purple hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mentor-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Future Forge</h3>
              <p className="text-gray-300">
                AI-powered career mentorship for students to discover and pursue their ideal path.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/assessment" className="text-gray-300 hover:text-white">Career Prediction</Link></li>
                <li><Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
                <li><Link to="/knowledge-network" className="text-gray-300 hover:text-white">Knowledge Network</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300 mb-2">info@futureforge.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Future Forge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
