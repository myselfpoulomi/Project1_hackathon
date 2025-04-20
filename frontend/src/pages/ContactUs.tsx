
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Contact form submitted:', { name, email, message });
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-mentor-light">
      <Navbar />
      
      {/* Header */}
      <section className="bg-mentor-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Have questions about Future Forge? We're here to help! 
            Reach out to our team using the contact information below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-mentor-purple/10 rounded-full">
                    <Mail className="h-6 w-6 text-mentor-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-mentor-dark">Email</h3>
                    <p className="text-gray-600 mt-1">info@futureforge.com</p>
                    <p className="text-gray-600">support@futureforge.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-mentor-blue/10 rounded-full">
                    <Phone className="h-6 w-6 text-mentor-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-mentor-dark">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-mentor-teal/10 rounded-full">
                    <MapPin className="h-6 w-6 text-mentor-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-mentor-dark">Location</h3>
                    <p className="text-gray-600 mt-1">
                      Future Forge Headquarters<br />
                      123 Innovation Avenue<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-mentor-dark mb-4">Office Hours</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-mentor-dark">Monday - Friday</h4>
                      <p className="text-gray-600">9:00 AM - 6:00 PM PST</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-mentor-dark">Saturday</h4>
                      <p className="text-gray-600">10:00 AM - 4:00 PM PST</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-mentor-dark">Sunday</h4>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="p-3 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-mentor-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-mentor-purple focus:border-mentor-purple"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-mentor-purple focus:border-mentor-purple"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-mentor-purple focus:border-mentor-purple"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mentor-purple hover:bg-mentor-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mentor-purple"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-mentor-dark mb-6 text-center">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
            {/* In a real application, you would embed a Google Maps iframe here */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Map placeholder - In a real application, a Google Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-mentor-dark mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-mentor-dark mb-2">How quickly will I receive a response to my inquiry?</h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please contact our support team directly by phone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-mentor-dark mb-2">Do you offer educational institution partnerships?</h3>
              <p className="text-gray-600">
                Yes, we offer special partnership programs for schools, colleges, and universities. Please contact our partnerships team at partnerships@futureforge.com for more information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-mentor-dark mb-2">How can I provide feedback about Future Forge?</h3>
              <p className="text-gray-600">
                We welcome all feedback! You can share your thoughts and suggestions using the contact form on this page or by emailing feedback@futureforge.com.
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

export default ContactUs;
