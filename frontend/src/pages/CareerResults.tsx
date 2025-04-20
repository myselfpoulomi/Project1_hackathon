
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowRight, Check, ThumbsUp, ThumbsDown, Code, Database, Cpu, LineChart, Award, Brain } from 'lucide-react';
// import { log } from 'console';

const CareerResults = () => {
  const location = useLocation();
  console.log(location);
  
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  
  // In a real app, this would come from the backend AI model
  // For now, we're mocking the results
  const skillsData = location.state?.skills || {};
  
  // Mock career recommendations based on assessment
  const careerRecommendations = [
    {
      id: 'web-developer',
      title: 'Web Developer',
      matchScore: 95,
      description: 'Design and develop websites and web applications using programming languages and frameworks.',
      icon: Code,
      color: '#3B82F6', // mentor-blue
      skills: {
        programming: 'Strong',
        math: 'Moderate',
        art: 'Helpful',
        communication: 'Important'
      }
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      matchScore: 87,
      description: 'Analyze large datasets to extract insights and help organizations make data-driven decisions.',
      icon: LineChart,
      color: '#8B5CF6', // mentor-purple
      skills: {
        math: 'Strong',
        programming: 'Important',
        science: 'Helpful',
        communication: 'Moderate'
      }
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      matchScore: 82,
      description: 'Design, develop and deploy AI models and algorithms to solve complex problems.',
      icon: Brain,
      color: '#0D9488', // mentor-teal
      skills: {
        math: 'Strong',
        programming: 'Strong',
        science: 'Important',
        communication: 'Moderate'
      }
    }
  ];

  // Mock aptitude data for charts
  const aptitudeData = [
    { name: 'Technical', score: 85 },
    { name: 'Analytical', score: 78 },
    { name: 'Creative', score: 65 },
    { name: 'Communication', score: 70 },
  ];

  const skillDistributionData = [
    { name: 'Programming', value: 40 },
    { name: 'Mathematics', value: 25 },
    { name: 'Design', value: 15 },
    { name: 'Communication', value: 20 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#0D9488', '#EF4444'];

  const handleExploreCareer = (careerId: string) => {
    setSelectedCareer(careerId);
    // In a real application, you would navigate to the career exploration page
    navigate(`/career-exploration/${careerId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-mentor-light">
      <Navbar />
      
      {/* Header */}
      <section className="bg-mentor-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Career Path Recommendations</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Based on your skills assessment, we've identified career paths that match your strengths and interests.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Career Recommendations */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Recommended Career Paths</h2>
              
              <div className="space-y-6">
                {careerRecommendations.map((career) => (
                  <div key={career.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full" style={{ backgroundColor: `${career.color}20` }}>
                        <career.icon className="h-8 w-8" style={{ color: career.color }} />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-mentor-dark">{career.title}</h3>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-500 mr-2">Match Score:</span>
                            <span className="text-lg font-bold" style={{ color: career.color }}>{career.matchScore}%</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{career.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Skills Required:</h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(career.skills).map(([skill, level]) => (
                              <div key={skill} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                                {skill.charAt(0).toUpperCase() + skill.slice(1)}: {level}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex space-x-3">
                            <button className="p-2 rounded-full hover:bg-gray-100">
                              <ThumbsUp className="h-5 w-5 text-gray-400" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100">
                              <ThumbsDown className="h-5 w-5 text-gray-400" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => handleExploreCareer(career.id)}
                            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-mentor-dark hover:bg-gray-50 transition-colors"
                          >
                            Explore Career <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Aptitude Analysis */}
            <div>
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Your Aptitude Analysis</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-medium text-mentor-dark mb-4">Skill Strengths</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={aptitudeData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" name="Aptitude Score" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-medium text-mentor-dark mb-4">Skill Distribution</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={skillDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {skillDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-medium text-mentor-dark mb-4">Next Steps</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-mentor-purple/10 rounded-full mr-3">
                      <Check className="h-4 w-4 text-mentor-purple" />
                    </div>
                    <span className="text-gray-600">Explore detailed career roadmaps</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-mentor-purple/10 rounded-full mr-3">
                      <Check className="h-4 w-4 text-mentor-purple" />
                    </div>
                    <span className="text-gray-600">Discover learning resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-mentor-purple/10 rounded-full mr-3">
                      <Check className="h-4 w-4 text-mentor-purple" />
                    </div>
                    <span className="text-gray-600">Connect with professionals in your field of interest</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-mentor-purple/10 rounded-full mr-3">
                      <Check className="h-4 w-4 text-mentor-purple" />
                    </div>
                    <span className="text-gray-600">Take skill-specific assessments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerResults;
