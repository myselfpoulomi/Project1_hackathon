
import Navbar from '@/components/Navbar';
import { Lightbulb, Code, Brain, CheckCircle, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-mentor-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-mentor-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About Future Forge</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're on a mission to empower students with AI-driven career guidance, 
            helping them discover and pursue their ideal professional path.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Team working together" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-mentor-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Future Forge was born from a simple observation: students often struggle to identify career paths that truly align with their skills, interests, and potential.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our founders, a team of education experts and AI specialists, recognized this challenge and set out to create a solution that would revolutionize career guidance for students.
              </p>
              <p className="text-lg text-gray-600">
                By combining cutting-edge AI technology with deep educational expertise, we've built a platform that provides personalized, data-driven career recommendations and learning roadmaps to help students forge their ideal future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-mentor-dark mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-12">
            To empower every student to discover and pursue a career path that aligns with their 
            unique abilities, interests, and potential, through accessible AI-powered guidance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mx-auto w-fit p-3 bg-mentor-purple/10 rounded-full mb-6">
                <Lightbulb className="h-8 w-8 text-mentor-purple" />
              </div>
              <h3 className="text-xl font-bold text-mentor-dark mb-3">Inspire</h3>
              <p className="text-gray-600">
                Help students discover career possibilities they might never have considered otherwise.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mx-auto w-fit p-3 bg-mentor-blue/10 rounded-full mb-6">
                <Brain className="h-8 w-8 text-mentor-blue" />
              </div>
              <h3 className="text-xl font-bold text-mentor-dark mb-3">Guide</h3>
              <p className="text-gray-600">
                Provide personalized roadmaps and resources to help students achieve their career goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="mx-auto w-fit p-3 bg-mentor-teal/10 rounded-full mb-6">
                <Users className="h-8 w-8 text-mentor-teal" />
              </div>
              <h3 className="text-xl font-bold text-mentor-dark mb-3">Connect</h3>
              <p className="text-gray-600">
                Create a supportive community that empowers students throughout their educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mentor-dark mb-4">Our Technology</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Future Forge leverages advanced AI algorithms and machine learning to provide accurate, 
              personalized career guidance.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-mentor-dark mb-6">How It Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-mentor-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mentor-dark">AI-Powered Assessment</h4>
                    <p className="text-gray-600">Our platform evaluates your skills, interests, and academic performance to identify your strengths and potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-mentor-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mentor-dark">Data-Driven Recommendations</h4>
                    <p className="text-gray-600">We analyze vast amounts of career and education data to generate accurate career path suggestions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-mentor-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mentor-dark">Personalized Learning Roadmaps</h4>
                    <p className="text-gray-600">We create tailored step-by-step guides to help you acquire the skills and knowledge needed for your chosen career.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-mentor-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mentor-dark">Resource Curation</h4>
                    <p className="text-gray-600">Our AI continuously searches and evaluates learning resources to recommend the most relevant and effective ones for you.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Technology visualization" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mentor-dark mb-4">Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              We're a passionate team of educators, technologists, and career advisors dedicated to 
              transforming how students approach career planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Team member" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-mentor-dark">Sarah Johnson</h3>
              <p className="text-mentor-purple font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former education consultant with 15 years of experience in career guidance and academic advising.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Team member" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-mentor-dark">David Chen</h3>
              <p className="text-mentor-purple font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                AI researcher and engineer with extensive experience in machine learning and natural language processing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Team member" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-mentor-dark">Maya Patel</h3>
              <p className="text-mentor-purple font-medium mb-3">Head of Education</p>
              <p className="text-gray-600 text-sm">
                Former university professor and curriculum designer specialized in educational technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mentor-dark text-white py-12 mt-auto">
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
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/assessment" className="text-gray-300 hover:text-white">Career Prediction</a></li>
                <li><a href="/courses" className="text-gray-300 hover:text-white">Courses</a></li>
                <li><a href="/knowledge-network" className="text-gray-300 hover:text-white">Knowledge Network</a></li>
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

export default AboutUs;
