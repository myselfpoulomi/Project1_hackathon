
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ExternalLink, Code, LineChart, Brain, BookOpen, Award, DollarSign, Building, CheckCircle, Play, Monitor, Server, Database } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const careerData = {
  'web-developer': {
    title: 'Web Developer',
    description: 'Web developers create and maintain websites and web applications, using programming languages, frameworks, and design principles to build functional and visually appealing online experiences.',
    avgSalary: '$77,200',
    jobGrowth: '13%',
    workEnvironment: 'Tech companies, agencies, or remote/freelance',
    color: '#3B82F6', // mentor-blue
    icon: Code,
    paths: [
      {
        id: 'frontend',
        title: 'Frontend Developer',
        description: 'Focuses on the user interface and user experience aspects of websites and web applications.',
        icon: Monitor,
        skills: ['HTML/CSS', 'JavaScript', 'React/Angular/Vue', 'UI/UX Design', 'Responsive Design']
      },
      {
        id: 'backend',
        title: 'Backend Developer',
        description: 'Works on server-side logic, databases, APIs, and application architecture.',
        icon: Server,
        skills: ['Node.js/Python/PHP/Java', 'Database Management', 'API Design', 'Server Management', 'Security']
      },
      {
        id: 'fullstack',
        title: 'Full Stack Developer',
        description: 'Handles both frontend and backend development, offering end-to-end web development capabilities.',
        icon: Code,
        skills: ['Frontend Technologies', 'Backend Technologies', 'Database Management', 'DevOps', 'Project Architecture']
      }
    ],
    roadmap: [
      {
        stage: 'Beginner',
        steps: [
          'Learn HTML, CSS, and JavaScript basics',
          'Build simple static websites',
          'Understand responsive design principles',
          'Learn Git for version control',
          'Create a portfolio with basic projects'
        ]
      },
      {
        stage: 'Intermediate',
        steps: [
          'Learn a frontend framework (React, Angular, or Vue)',
          'Understand backend basics (Node.js, Express)',
          'Learn database fundamentals (SQL or MongoDB)',
          'Build full stack applications',
          'Implement authentication and API consumption'
        ]
      },
      {
        stage: 'Advanced',
        steps: [
          'Learn advanced JavaScript concepts',
          'Master state management',
          'Understand server deployment and DevOps basics',
          'Build complex, scalable applications',
          'Contribute to open source projects'
        ]
      },
      {
        stage: 'Professional',
        steps: [
          'Specialize in specific technologies or domains',
          'Learn performance optimization techniques',
          'Master security best practices',
          'Develop system architecture skills',
          'Learn team collaboration and project management'
        ]
      }
    ],
    resources: [
      {
        title: 'The Complete 2023 Web Development Bootcamp',
        type: 'Course',
        platform: 'Udemy',
        url: '#',
        rating: 4.8
      },
      {
        title: 'Modern JavaScript From The Beginning',
        type: 'Course',
        platform: 'Udemy',
        url: '#',
        rating: 4.7
      },
      {
        title: 'React - The Complete Guide',
        type: 'Course',
        platform: 'Udemy',
        url: '#',
        rating: 4.9
      },
      {
        title: 'The Odin Project',
        type: 'Free Curriculum',
        platform: 'The Odin Project',
        url: '#',
        rating: 4.9
      },
      {
        title: 'Full Stack Open',
        type: 'Free Course',
        platform: 'University of Helsinki',
        url: '#',
        rating: 4.8
      }
    ],
    videos: [
      {
        title: 'HTML Crash Course For Absolute Beginners',
        channel: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
        thumbnail: 'https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg'
      },
      {
        title: 'JavaScript Crash Course For Beginners',
        channel: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
        thumbnail: 'https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg'
      },
      {
        title: 'React JS Crash Course',
        channel: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        thumbnail: 'https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg'
      }
    ]
  },
  'data-scientist': {
    title: 'Data Scientist',
    description: 'Data scientists collect, analyze, and interpret large datasets to help organizations make informed decisions, using statistics, machine learning, and programming to extract meaningful insights from data.',
    avgSalary: '$100,560',
    jobGrowth: '22%',
    workEnvironment: 'Tech, finance, healthcare, research institutions',
    color: '#8B5CF6', // mentor-purple
    icon: LineChart,
    paths: [
      {
        id: 'analyst',
        title: 'Data Analyst',
        description: 'Focuses on collecting, processing, and analyzing data to support business decisions.',
        icon: LineChart,
        skills: ['SQL', 'Excel', 'Data Visualization', 'Statistical Analysis', 'Business Intelligence']
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning Engineer',
        description: 'Develops and deploys machine learning models and systems to solve complex problems.',
        icon: Brain,
        skills: ['Python/R', 'Machine Learning Algorithms', 'Deep Learning', 'MLOps', 'Model Deployment']
      },
      {
        id: 'research',
        title: 'Research Scientist',
        description: 'Conducts advanced research to develop new data science methods and techniques.',
        icon: Database,
        skills: ['Advanced Statistics', 'Research Methodology', 'Algorithm Development', 'Scientific Publishing', 'Domain Expertise']
      }
    ],
    roadmap: [
      {
        stage: 'Beginner',
        steps: [
          'Learn Python programming basics',
          'Master fundamental statistics and probability',
          'Learn SQL for database queries',
          'Understand data structures and algorithms',
          'Practice with small datasets'
        ]
      },
      {
        stage: 'Intermediate',
        steps: [
          'Learn data manipulation with Pandas',
          'Master data visualization techniques',
          'Understand machine learning fundamentals',
          'Learn feature engineering',
          'Build supervised learning models'
        ]
      },
      {
        stage: 'Advanced',
        steps: [
          'Master advanced machine learning algorithms',
          'Learn deep learning and neural networks',
          'Understand big data technologies',
          'Develop NLP and computer vision skills',
          'Learn model deployment and MLOps'
        ]
      },
      {
        stage: 'Professional',
        steps: [
          'Specialize in a domain (finance, healthcare, etc.)',
          'Conduct independent research projects',
          'Learn to communicate findings effectively',
          'Master advanced statistical methods',
          'Contribute to open source data science tools'
        ]
      }
    ],
    resources: [
      {
        title: 'Python for Data Science and Machine Learning Bootcamp',
        type: 'Course',
        platform: 'Udemy',
        url: '#',
        rating: 4.7
      },
      {
        title: 'Machine Learning A-Z™: Hands-On Python & R',
        type: 'Course',
        platform: 'Udemy',
        url: '#',
        rating: 4.6
      },
      {
        title: 'Deep Learning Specialization',
        type: 'Specialization',
        platform: 'Coursera',
        url: '#',
        rating: 4.9
      },
      {
        title: 'Data Science: R Basics',
        type: 'Course',
        platform: 'edX',
        url: '#',
        rating: 4.7
      },
      {
        title: 'Statistics and Probability',
        type: 'Course',
        platform: 'Khan Academy',
        url: '#',
        rating: 4.8
      }
    ],
    videos: [
      {
        title: 'Python for Data Science - Course for Beginners',
        channel: 'freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
        thumbnail: 'https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg'
      },
      {
        title: 'Statistics and Probability Full Course',
        channel: 'freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=sbbYntt5CJk',
        thumbnail: 'https://img.youtube.com/vi/sbbYntt5CJk/hqdefault.jpg'
      },
      {
        title: 'Machine Learning for Everybody',
        channel: 'freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg',
        thumbnail: 'https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg'
      }
    ]
  },
  'ai-engineer': {
    title: 'AI Engineer',
    description: 'AI Engineers design, develop, and deploy artificial intelligence systems and models, using machine learning, neural networks, and other AI technologies to solve complex problems across various industries.',
    avgSalary: '$114,520',
    jobGrowth: '31%',
    workEnvironment: 'Tech companies, research labs, startups, enterprises',
    color: '#0D9488', // mentor-teal
    icon: Brain,
    paths: [
      {
        id: 'ml-engineer',
        title: 'Machine Learning Engineer',
        description: 'Specializes in building and deploying machine learning models for various applications.',
        icon: Brain,
        skills: ['Python', 'Machine Learning Algorithms', 'TensorFlow/PyTorch', 'MLOps', 'Cloud Services']
      },
      {
        id: 'ai-researcher',
        title: 'AI Researcher',
        description: 'Focuses on advancing the state of AI through research and development of new algorithms and approaches.',
        icon: BookOpen,
        skills: ['Advanced Mathematics', 'Research Methodology', 'Neural Network Architectures', 'Scientific Writing', 'Experimental Design']
      },
      {
        id: 'ai-application',
        title: 'AI Applications Engineer',
        description: 'Implements AI solutions for specific business problems and industry applications.',
        icon: Code,
        skills: ['Software Engineering', 'Domain Expertise', 'AI Integration', 'API Development', 'Solution Architecture']
      }
    ],
    roadmap: [
      {
        stage: 'Beginner',
        steps: [
          'Master Python programming',
          'Learn linear algebra and calculus',
          'Understand statistics and probability',
          'Learn data manipulation and visualization',
          'Study machine learning fundamentals'
        ]
      },
      {
        stage: 'Intermediate',
        steps: [
          'Master supervised and unsupervised learning',
          'Learn deep learning fundamentals',
          'Study neural network architectures',
          'Understand natural language processing basics',
          'Practice computer vision techniques'
        ]
      },
      {
        stage: 'Advanced',
        steps: [
          'Master advanced deep learning architectures',
          'Learn reinforcement learning',
          'Study model deployment and optimization',
          'Understand AI ethics and responsible AI',
          'Learn large-scale distributed AI systems'
        ]
      },
      {
        stage: 'Professional',
        steps: [
          'Specialize in an AI domain (NLP, computer vision, etc.)',
          'Learn to design end-to-end AI systems',
          'Contribute to research or open source projects',
          'Master cloud-based AI services',
          'Develop AI product management skills'
        ]
      }
    ],
    resources: [
      {
        title: 'Deep Learning Specialization',
        type: 'Specialization',
        platform: 'Coursera',
        url: '#',
        rating: 4.9
      },
      {
        title: 'Machine Learning',
        type: 'Course',
        platform: 'Stanford Online',
        url: '#',
        rating: 4.9
      },
      {
        title: 'Natural Language Processing Specialization',
        type: 'Specialization',
        platform: 'Coursera',
        url: '#',
        rating: 4.8
      },
      {
        title: 'AI For Everyone',
        type: 'Course',
        platform: 'Coursera',
        url: '#',
        rating: 4.8
      },
      {
        title: 'TensorFlow Developer Professional Certificate',
        type: 'Certification',
        platform: 'Coursera',
        url: '#',
        rating: 4.7
      }
    ],
    videos: [
      {
        title: 'Neural Networks and Deep Learning for Beginners',
        channel: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=aircAruvnKk',
        thumbnail: 'https://img.youtube.com/vi/aircAruvnKk/hqdefault.jpg'
      },
      {
        title: 'TensorFlow 2.0 Complete Course',
        channel: 'freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=tPYj3fFJGjk',
        thumbnail: 'https://img.youtube.com/vi/tPYj3fFJGjk/hqdefault.jpg'
      },
      {
        title: 'Natural Language Processing with Deep Learning',
        channel: 'Stanford Online',
        url: 'https://www.youtube.com/watch?v=8rXD5-xhemo',
        thumbnail: 'https://img.youtube.com/vi/8rXD5-xhemo/hqdefault.jpg'
      }
    ]
  }
};

const CareerExploration = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const [career, setCareer] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  useEffect(() => {
    if (careerId && careerId in careerData) {
      setCareer(careerData[careerId as keyof typeof careerData]);
      // Set the first path as selected by default
      if (careerData[careerId as keyof typeof careerData].paths.length > 0) {
        setSelectedPath(careerData[careerId as keyof typeof careerData].paths[0].id);
      }
    }
  }, [careerId]);

  if (!career) {
    return (
      <div className="min-h-screen flex flex-col bg-mentor-light">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Loading career information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-mentor-light">
      <Navbar />
      
      {/* Header */}
      <section className="py-12" style={{ backgroundColor: `${career.color}10` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full" style={{ backgroundColor: `${career.color}20` }}>
              <career.icon className="h-8 w-8" style={{ color: career.color }} />
            </div>
            <h1 className="text-3xl font-bold text-mentor-dark ml-4">{career.title}</h1>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl">{career.description}</p>
          
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Average Salary</p>
                <p className="font-bold text-mentor-dark">{career.avgSalary}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <LineChart className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Job Growth</p>
                <p className="font-bold text-mentor-dark">{career.jobGrowth}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Building className="h-5 w-5 text-purple-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Work Environment</p>
                <p className="font-bold text-mentor-dark">{career.workEnvironment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            <button
              className={`py-4 px-1 font-medium border-b-2 transition-colors ${
                activeTab === 'overview' 
                  ? `border-${career.color} text-${career.color}` 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ 
                borderColor: activeTab === 'overview' ? career.color : 'transparent',
                color: activeTab === 'overview' ? career.color : undefined
              }}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            
            <button
              className={`py-4 px-1 font-medium border-b-2 transition-colors ${
                activeTab === 'roadmap' 
                  ? `border-${career.color} text-${career.color}` 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ 
                borderColor: activeTab === 'roadmap' ? career.color : 'transparent',
                color: activeTab === 'roadmap' ? career.color : undefined
              }}
              onClick={() => setActiveTab('roadmap')}
            >
              Learning Roadmap
            </button>
            
            <button
              className={`py-4 px-1 font-medium border-b-2 transition-colors ${
                activeTab === 'resources' 
                  ? `border-${career.color} text-${career.color}` 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              style={{ 
                borderColor: activeTab === 'resources' ? career.color : 'transparent',
                color: activeTab === 'resources' ? career.color : undefined
              }}
              onClick={() => setActiveTab('resources')}
            >
              Learning Resources
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Career Paths within {career.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {career.paths.map((path: any) => (
                  <div 
                    key={path.id}
                    className={`bg-white p-6 rounded-lg border transition-all cursor-pointer ${
                      selectedPath === path.id 
                        ? `border-${career.color} shadow-lg` 
                        : 'border-gray-100 shadow-md hover:shadow-lg'
                    }`}
                    style={{ borderColor: selectedPath === path.id ? career.color : undefined }}
                    onClick={() => setSelectedPath(path.id)}
                  >
                    <div className="p-3 rounded-full w-fit mb-4" style={{ backgroundColor: `${career.color}10` }}>
                      <path.icon className="h-6 w-6" style={{ color: career.color }} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-mentor-dark mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    
                    <div className={`inline-flex items-center text-sm font-medium transition-colors ${
                      selectedPath === path.id ? `text-${career.color}` : 'text-gray-500'
                    }`}
                    style={{ color: selectedPath === path.id ? career.color : undefined }}
                    >
                      {selectedPath === path.id ? 'Selected' : 'Select Path'}
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedPath && (
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-mentor-dark mb-6">
                    Key Skills for {career.paths.find((p: any) => p.id === selectedPath)?.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {career.paths.find((p: any) => p.id === selectedPath)?.skills.map((skill: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 p-1 rounded-full mr-3" style={{ backgroundColor: `${career.color}20` }}>
                          <CheckCircle className="h-5 w-5" style={{ color: career.color }} />
                        </div>
                        <div>
                          <p className="font-medium text-mentor-dark">{skill}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Roadmap Tab */}
          {activeTab === 'roadmap' && (
            <div>
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Learning Roadmap for {career.title}</h2>
              
              <div className="space-y-8">
                {career.roadmap.map((stage: any, index: number) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
                    <div className="absolute top-0 left-8 transform -translate-y-1/2 px-4 py-1 rounded-full" style={{ backgroundColor: career.color, color: 'white' }}>
                      {stage.stage}
                    </div>
                    
                    <div className="pt-4">
                      <ul className="space-y-4 mt-4">
                        {stage.steps.map((step: string, stepIndex: number) => (
                          <li key={stepIndex} className="flex items-start">
                            <div className="flex-shrink-0 p-1 rounded-full mr-3" style={{ backgroundColor: `${career.color}20` }}>
                              <CheckCircle className="h-5 w-5" style={{ color: career.color }} />
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div>
              <h2 className="text-2xl font-bold text-mentor-dark mb-6">Learning Resources for {career.title}</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-mentor-dark mb-4">Recommended Courses</h3>
                  
                  <div className="space-y-4">
                    {career.resources.map((resource: any, index: number) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-mentor-dark">{resource.title}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-500">{resource.type} • {resource.platform}</span>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{resource.rating}/5</span>
                          </div>
                        </div>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-3 flex items-center text-sm font-medium hover:underline"
                          style={{ color: career.color }}
                        >
                          View Course <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-mentor-dark mb-4">Recommended Videos</h3>
                  
                  <div className="space-y-4">
                    {career.videos.map((video: any, index: number) => (
                      <div key={index} className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="relative">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title} 
                            className="w-full h-40 object-cover"
                          />
                          <a 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
                          >
                            <div className="p-3 rounded-full bg-white">
                              <Play className="h-6 w-6 text-red-600" />
                            </div>
                          </a>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-mentor-dark">{video.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{video.channel}</p>
                          <a 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-2 inline-flex items-center text-sm font-medium hover:underline"
                            style={{ color: career.color }}
                          >
                            Watch Video <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareerExploration;
