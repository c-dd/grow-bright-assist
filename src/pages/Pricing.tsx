import { useState } from "react";
import { Check, Star, Users, Clock, TrendingUp, Target, Shield, HeartHandshake } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [email, setEmail] = useState("");

  const handleGetStarted = (tier: string) => {
    console.log(`Getting started with ${tier}`);
    // Handle tier selection and redirect to assessment
  };

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Free consultation request for:", email);
  };

  const features = {
    starter: [
      "10 hours/week dedicated virtual assistant",
      "Rigorous 3-step vetting process",
      "Industry-specific training program",
      "Weekly productivity reports",
      "Direct communication channel",
      "Task management system setup",
      "Month-to-month flexibility",
      "Dedicated business analyst",
      "Performance optimization calls",
      "Resource library access"
    ],
    growth: [
      "25 hours/week dedicated virtual assistant",
      "Advanced skill specialization",
      "Priority support & faster response",
      "Bi-weekly strategic planning sessions",
      "Custom workflow automation",
      "Advanced reporting & analytics",
      "Team integration training",
      "Dedicated business analyst",
      "Monthly growth strategy sessions",
      "Premium resource library",
      "Process documentation",
      "Backup assistant coverage"
    ],
    scale: [
      "Full-time dedicated virtual assistant (40 hours/week)",
      "Expert-level specialized skills",
      "White-glove onboarding process",
      "Weekly strategic planning sessions",
      "Advanced automation & integrations",
      "Executive-level reporting",
      "Multi-platform management",
      "Senior business analyst",
      "Bi-weekly growth strategy sessions",
      "Executive resource library",
      "Complete process documentation",
      "Guaranteed backup coverage",
      "Priority customer success manager",
      "Quarterly business reviews"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing, <span className="text-rose-100">Explosive Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-4xl mx-auto">
            Stop guessing what you need. Our proven pricing tiers are designed specifically for female entrepreneurs at different growth stages. Every plan includes a dedicated business analyst to maximize your ROI.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isAnnual ? 'text-white font-semibold' : 'text-rose-200'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-white font-semibold' : 'text-rose-200'}`}>
              Annual <span className="text-yellow-300">(Save 20%)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Starter Tier */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for testing the waters</p>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? '480' : '600'}
                    <span className="text-lg text-gray-500">/month</span>
                  </div>
                  {isAnnual && <div className="text-sm text-green-600">Save $1,440/year</div>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.starter.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted('Starter')}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Start Free Assessment
              </button>
            </div>

            {/* Growth Tier - Most Popular */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl border-2 border-rose-300 p-8 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600 mb-4">Accelerate your business momentum</p>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? '1,200' : '1,500'}
                    <span className="text-lg text-gray-500">/month</span>
                  </div>
                  {isAnnual && <div className="text-sm text-green-600">Save $3,600/year</div>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.growth.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted('Growth')}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Start Free Assessment
              </button>
            </div>

            {/* Scale Tier */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                <p className="text-gray-600 mb-4">Dominate your market</p>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? '2,000' : '2,500'}
                    <span className="text-lg text-gray-500">/month</span>
                  </div>
                  {isAnnual && <div className="text-sm text-green-600">Save $6,000/year</div>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.scale.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted('Scale')}
                className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Start Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us <span className="text-rose-500">Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just provide virtual assistants. We provide a complete growth acceleration system designed specifically for female entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rigorous Vetting</h3>
              <p className="text-gray-600">Only 2% of applicants make it through our 3-step screening process. We test for skills, culture fit, and reliability.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Matching</h3>
              <p className="text-gray-600">We match you based on industry experience, working style, and growth goals - not just availability.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Growth</h3>
              <p className="text-gray-600">Your dedicated business analyst ensures every task drives growth, not just completion.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Regular check-ins, performance optimization, and strategic pivots as your business evolves.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Preview */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from <span className="text-rose-500">Real Entrepreneurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"My revenue doubled in 6 months. Having Sarah handle my admin work let me focus on high-value client activities."</p>
              <div className="font-semibold text-gray-900">Jessica M. - Wellness Coach</div>
              <div className="text-sm text-gray-500">Starter → Growth in 4 months</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"The business analyst helped me identify bottlenecks I didn't even know existed. Game changer!"</p>
              <div className="font-semibold text-gray-900">Maria L. - E-commerce</div>
              <div className="text-sm text-gray-500">Growth tier for 8 months</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"From $8K to $45K monthly revenue. My assistant became an integral part of my team."</p>
              <div className="font-semibold text-gray-900">Amanda K. - Digital Marketing</div>
              <div className="text-sm text-gray-500">Scale tier for 1 year</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-rose-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I'm not satisfied with my assistant?</h3>
              <p className="text-gray-600">We offer a 30-day satisfaction guarantee. If you're not completely happy, we'll find you a new assistant or provide a full refund.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can I get started?</h3>
              <p className="text-gray-600">After your free assessment, we typically match you with your perfect assistant within 5-7 business days. Onboarding takes an additional 2-3 days.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What industries do you serve?</h3>
              <p className="text-gray-600">We specialize in female-led businesses across wellness, coaching, consulting, e-commerce, creative services, and professional services.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I get the same assistant every time?</h3>
              <p className="text-gray-600">Yes! You get a dedicated assistant who learns your business, preferences, and goals. We also provide backup coverage for consistency.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I need to scale up or down?</h3>
              <p className="text-gray-600">We make it easy to adjust your plan as your business grows. Most clients start with Starter and upgrade within 3-6 months.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Beyond Yourself?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Take our free 15-minute assessment and discover exactly what type of support will accelerate your growth the fastest.
          </p>
          
          <form onSubmit={handleConsultation} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Started
              </button>
            </div>
          </form>
          
          <p className="text-rose-100 text-sm">
            Join 500+ female entrepreneurs who've scaled beyond themselves • No spam, ever
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;