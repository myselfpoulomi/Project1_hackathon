
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Check, ChevronRight, HelpCircle, BookOpen, Code, Music, Palette, Calculator, Beaker, Globe, Dumbbell } from 'lucide-react';

// Define the skill levels
const skillLevels = [
  { value: 'beginner', label: 'Beginner', description: 'Little to no experience' },
  { value: 'intermediate', label: 'Intermediate', description: 'Some experience and understanding' },
  { value: 'advanced', label: 'Advanced', description: 'Good knowledge and experience' },
  { value: 'expert', label: 'Expert', description: 'Deep understanding and mastery' },
];

// Define the subjects and extra-curricular activities
const subjects = [
  { id: 'math', name: 'Mathematics', icon: Calculator },
  { id: 'science', name: 'Science', icon: Beaker },
  { id: 'english', name: 'English', icon: BookOpen },
  { id: 'programming', name: 'Programming', icon: Code },
  { id: 'art', name: 'Art & Design', icon: Palette },
  { id: 'languages', name: 'Foreign Languages', icon: Globe },
];

const extraActivities = [
  { id: 'music', name: 'Music', icon: Music },
  { id: 'sports', name: 'Sports', icon: Dumbbell },
];

const SkillsAssessment = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);
  const allCategories = [...subjects, ...extraActivities];

  const handleSkillSelect = (skillId: string, level: string) => {
    setSkills(prev => ({
      ...prev,
      [skillId]: level
    }));
  };

  const isStepComplete = () => {
    if (step === 1) {
      // Check if all academic subjects have a skill level selected
      return subjects.every(subject => skills[subject.id]);
    } else if (step === 2) {
      // Check if all extra-curricular activities have a skill level selected
      return extraActivities.every(activity => skills[activity.id]);
    }
    return false;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Submit the assessment and navigate to results
      console.log('Assessment submitted:', skills);
      navigate('/career-results', { state: { skills } });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-mentor-light">
      <Navbar />
      
      {/* Header */}
      <section className="bg-mentor-purple text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Skills Assessment</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Rate your proficiency in various subjects and activities to receive personalized career recommendations.
          </p>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-12 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-mentor-purple text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`flex-1 h-1 max-w-[100px] ${step >= 2 ? 'bg-mentor-purple' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-mentor-purple text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <div className="flex-1 h-1 max-w-[100px] bg-gray-200"></div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600">
                3
              </div>
            </div>
            <div className="flex justify-between text-sm mt-2 max-w-md mx-auto">
              <span className="text-mentor-purple font-medium">Academic Subjects</span>
              <span className={step >= 2 ? "text-mentor-purple font-medium" : "text-gray-500"}>Extra-Curricular</span>
              <span className="text-gray-500">Results</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-mentor-dark mb-6">
              {step === 1 ? 'Rate Your Academic Skills' : 'Rate Your Extra-Curricular Activities'}
            </h2>
            
            <div className="space-y-8">
              {step === 1 ? (
                // Academic Subjects
                subjects.map((subject) => (
                  <div key={subject.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-mentor-purple/10 rounded-full mr-3">
                        <subject.icon className="h-5 w-5 text-mentor-purple" />
                      </div>
                      <h3 className="text-lg font-medium text-mentor-dark">{subject.name}</h3>
                      <div className="ml-auto flex items-center text-sm text-gray-500 cursor-help">
                        <HelpCircle className="h-4 w-4 mr-1" />
                        <span>How to rate?</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {skillLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() => handleSkillSelect(subject.id, level.value)}
                          className={`flex flex-col items-center p-4 rounded-lg border transition-all ${
                            skills[subject.id] === level.value 
                              ? 'border-mentor-purple bg-mentor-purple/5 shadow-sm' 
                              : 'border-gray-200 hover:border-mentor-purple/30'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full mb-2 flex items-center justify-center ${
                            skills[subject.id] === level.value 
                              ? 'bg-mentor-purple text-white' 
                              : 'bg-gray-100'
                          }`}>
                            {skills[subject.id] === level.value && <Check className="h-4 w-4" />}
                          </div>
                          <span className="font-medium text-mentor-dark">{level.label}</span>
                          <span className="text-xs text-gray-500 mt-1 text-center">{level.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                // Extra-Curricular Activities
                extraActivities.map((activity) => (
                  <div key={activity.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-mentor-teal/10 rounded-full mr-3">
                        <activity.icon className="h-5 w-5 text-mentor-teal" />
                      </div>
                      <h3 className="text-lg font-medium text-mentor-dark">{activity.name}</h3>
                      <div className="ml-auto flex items-center text-sm text-gray-500 cursor-help">
                        <HelpCircle className="h-4 w-4 mr-1" />
                        <span>How to rate?</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {skillLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() => handleSkillSelect(activity.id, level.value)}
                          className={`flex flex-col items-center p-4 rounded-lg border transition-all ${
                            skills[activity.id] === level.value 
                              ? 'border-mentor-teal bg-mentor-teal/5 shadow-sm' 
                              : 'border-gray-200 hover:border-mentor-teal/30'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full mb-2 flex items-center justify-center ${
                            skills[activity.id] === level.value 
                              ? 'bg-mentor-teal text-white' 
                              : 'bg-gray-100'
                          }`}>
                            {skills[activity.id] === level.value && <Check className="h-4 w-4" />}
                          </div>
                          <span className="font-medium text-mentor-dark">{level.label}</span>
                          <span className="text-xs text-gray-500 mt-1 text-center">{level.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="mt-12 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div></div> // Empty div to maintain layout with flex justify-between
              )}
              
              <button
                onClick={handleNext}
                disabled={!isStepComplete()}
                className={`flex items-center px-6 py-2 rounded-md text-white transition-colors ${
                  isStepComplete() 
                    ? 'bg-mentor-purple hover:bg-mentor-purple/90' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {step < 2 ? 'Next' : 'Discover Yourself'} <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsAssessment;
