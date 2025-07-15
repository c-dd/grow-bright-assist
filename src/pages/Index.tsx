
import { useState } from "react";
import { Check, Clock, Users, Search, Star, TrendingUp, Shield, Target, ArrowRight, DollarSign, Calendar, MessageCircle } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Assessment request for:", email);
    // Handle assessment request
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-rose-200">
                <span className="text-sm font-medium text-rose-600">✨ 500+ Female Entrepreneurs Served</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Ready to <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Scale Beyond</span> Yourself?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                You've built your business to $5K-$15K revenue, but you're hitting a wall. <strong>Stop doing everything yourself.</strong> Let us show you exactly what help you need to explode your growth - with a dedicated virtual assistant AND business analyst to maximize your ROI.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">2.5x Revenue Growth</div>
                    <div className="text-sm text-gray-600">Average in 6 months</div>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Clock className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">15+ Hours/Week</div>
                    <div className="text-sm text-gray-600">Back in your schedule</div>
                  </div>
                </div>
              </div>

              {/* Pain Points */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-rose-100 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Does this sound like you?</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 mt-2"></div>
                    <span>Spending 60% of your time on admin work instead of growing your business</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 mt-2"></div>
                    <span>Know you need help but don't know what tasks to delegate first</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 mt-2"></div>
                    <span>Worried about finding someone you can trust with your business</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 mt-2"></div>
                    <span>Frustrated by the feast-or-famine cycle holding you back</span>
                  </div>
                </div>
              </div>

              {/* CTA Form */}
              <form onSubmit={handleAssessmentSubmit} className="bg-white p-6 rounded-xl shadow-xl border-2 border-rose-200 max-w-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <Star className="text-white" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Get Your FREE Business Assessment</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">Discover exactly what type of virtual assistant will accelerate your growth fastest (15-minute assessment worth $297)</p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Calendar className="mr-2" size={16} />
                    Book My Free Assessment
                  </button>
                </div>
                <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
                  <Shield className="mr-1" size={12} />
                  <span>No spam, ever. Response within 2 hours guaranteed.</span>
                </div>
              </form>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Confident female entrepreneur"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Immediate Social Proof & Results */}
      <div className="bg-gradient-to-r from-gray-50 to-rose-50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by 500+ female entrepreneurs across industries</p>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">2.5x</div>
                <div className="text-sm text-gray-600">Average Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Hours Saved Per Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">97%</div>
                <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">6</div>
                <div className="text-sm text-gray-600">Months to Scale Tier</div>
              </div>
            </div>
          </div>
          
          {/* Industry Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-bold text-gray-400">WELLNESS</div>
            <div className="text-lg font-bold text-gray-400">COACHING</div>
            <div className="text-lg font-bold text-gray-400">CONSULTING</div>
            <div className="text-lg font-bold text-gray-400">E-COMMERCE</div>
            <div className="text-lg font-bold text-gray-400">CREATIVE</div>
            <div className="text-lg font-bold text-gray-400">PROFESSIONAL</div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Deep Dive */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Problem: <span className="text-rose-500">You're the Bottleneck</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every successful female entrepreneur hits this wall. You're personally involved in every decision, every email, every admin task. Your business can't grow because it can't run without you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Working IN Your Business, Not ON It</h4>
                    <p className="text-gray-600">You spend 80% of your time on tasks that don't generate revenue because you don't trust anyone else to do them right.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Feast or Famine Revenue Cycles</h4>
                    <p className="text-gray-600">When you're delivering to clients, you can't prospect. When you're prospecting, you can't deliver. The cycle never ends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hiring Paralysis</h4>
                    <p className="text-gray-600">You know you need help but don't know what to delegate first, who to trust, or how to train someone effectively.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border-2 border-rose-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  The Solution: <span className="text-rose-500">Strategic Virtual Partnership</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Vetted & Trained Virtual Assistant</h4>
                      <p className="text-gray-600">We handle all the hiring, vetting, and training. You get a dedicated assistant who understands your industry and goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dedicated Business Analyst</h4>
                      <p className="text-gray-600">Your strategic partner who ensures every delegated task drives growth, not just completion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Growth-Focused Strategy</h4>
                      <p className="text-gray-600">We identify high-impact tasks to delegate first, creating immediate time for revenue-generating activities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help You <span className="text-rose-500">Scale Smart</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No more guessing what you need. Our proven process identifies your exact needs and matches you with the perfect support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Free Assessment</h3>
                <p className="text-gray-600">
                  We analyze your business, identify bottlenecks, and pinpoint exactly where virtual assistance will have the biggest impact on your growth.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Perfect Match</h3>
                <p className="text-gray-600">
                  We train and match you with a virtual assistant who understands your industry, your goals, and your working style.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300"></div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Strategic Growth</h3>
                <p className="text-gray-600">
                  Your dedicated business analyst ensures you're maximizing your assistant's impact and scaling strategically, not just delegating tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories with ROI */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories, <span className="text-rose-500">Real Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients don't just get virtual assistants—they get growth acceleration systems that transform their businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=60&h=60&fit=crop&crop=face" 
                  alt="Sarah" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-500">Wellness Coach • Started with Starter</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm font-semibold text-green-600 mb-3">Revenue: $8K → $24K/month in 6 months</div>
              </div>
              <p className="text-gray-700 mb-4">
                "I was drowning in client onboarding and admin work. My VA handled all of it, plus helped me systemize my coaching programs. Now I focus on high-value client calls and business development."
              </p>
              <div className="text-sm text-gray-500">Upgraded to Growth tier after 4 months</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-rose-200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                  alt="Maria" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                  <div className="text-sm text-gray-500">E-commerce • Growth Tier</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm font-semibold text-green-600 mb-3">Revenue: $12K → $45K/month in 8 months</div>
              </div>
              <p className="text-gray-700 mb-4">
                "The business analyst identified that I was spending 70% of my time on inventory management instead of marketing. My VA took over operations, and I 3x'd my revenue by focusing on growth activities."
              </p>
              <div className="text-sm text-gray-500">Planning to upgrade to Scale tier</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face" 
                  alt="Jennifer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Jennifer Chen</div>
                  <div className="text-sm text-gray-500">Digital Marketing • Scale Tier</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm font-semibold text-green-600 mb-3">Revenue: $15K → $85K/month in 12 months</div>
              </div>
              <p className="text-gray-700 mb-4">
                "My full-time VA manages all client deliverables and project coordination. I've gone from working 70-hour weeks to 40 hours, while 5x'ing my revenue. I actually take vacations now!"
              </p>
              <div className="text-sm text-gray-500">Scale tier for 14 months</div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/about#success-stories" 
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Read More Success Stories
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Pricing Preview with Value Prop */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Tiers, <span className="text-rose-500">Unlimited Growth Potential</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every tier includes a dedicated business analyst to maximize your ROI. Most clients see 2-3x revenue growth within 6 months.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Starter */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">$600<span className="text-lg text-gray-500">/month</span></div>
                <div className="text-sm text-green-600 font-medium">ROI: 3-5x in 6 months</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />10 hours/week dedicated VA</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Dedicated business analyst</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Weekly strategy calls</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Month-to-month flexibility</li>
              </ul>
              <div className="text-sm text-gray-600 mb-4">Perfect for: Testing delegation, basic admin relief</div>
              <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Start Free Assessment
              </button>
            </div>

            {/* Growth */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl shadow-xl border-2 border-rose-300 relative scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular - 2.5x Revenue Growth
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">$1,500<span className="text-lg text-gray-500">/month</span></div>
                <div className="text-sm text-green-600 font-medium">ROI: 5-8x in 6 months</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />25 hours/week dedicated VA</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Senior business analyst</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Bi-weekly strategy sessions</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Advanced automation setup</li>
              </ul>
              <div className="text-sm text-gray-600 mb-4">Perfect for: Scaling operations, strategic growth</div>
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all">
                Start Free Assessment
              </button>
            </div>

            {/* Scale */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">$2,500<span className="text-lg text-gray-500">/month</span></div>
                <div className="text-sm text-green-600 mb-2">Save $500 with annual: $2,000/month</div>
                <div className="text-sm text-green-600 font-medium">ROI: 8-15x in 6 months</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Full-time dedicated VA (40 hrs)</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Executive business analyst</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Weekly strategic planning</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Complete business optimization</li>
              </ul>
              <div className="text-sm text-gray-600 mb-4">Perfect for: Market domination, full delegation</div>
              <button className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Start Free Assessment
              </button>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/pricing"
              className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <DollarSign className="mr-2" size={20} />
              See Complete Pricing & ROI Details
            </a>
          </div>
        </div>
      </div>

      {/* Urgency & Risk Reversal */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Every Day You Wait, Your <span className="text-rose-500">Competitors Get Ahead</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                While you're stuck doing admin work, other entrepreneurs are scaling with virtual assistants and stealing market share. The cost of waiting isn't just time—it's revenue, growth, and peace of mind.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lost Revenue: $5,000+ per month</div>
                    <div className="text-sm text-gray-600">Time spent on $15/hour tasks instead of $500/hour business development</div>
                  </div>
                </div>
                
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Wasted Time: 20+ hours per week</div>
                    <div className="text-sm text-gray-600">Admin work that could be delegated for 10x less than your hourly value</div>
                  </div>
                </div>
                
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Missed Opportunities: Countless</div>
                    <div className="text-sm text-gray-600">Client calls, partnerships, and growth initiatives you can't pursue</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-green-600">Risk-Free</span> 30-Day Guarantee
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">Free 15-minute business assessment (worth $297)</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">Perfect assistant matching or full refund</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-3" size={20} />
                  <span className="text-gray-700">Cancel anytime (Starter tier)</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-3">Limited Time: December Special</h4>
                <p className="text-gray-600 text-sm mb-4">First 20 entrepreneurs who book an assessment this month get:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• First month 50% off any tier</li>
                  <li>• Complimentary business systems audit</li>
                  <li>• Priority assistant matching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA with Multiple Action Options */}
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Beyond Yourself?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Stop being the bottleneck in your own business. Take our free assessment and discover exactly how to delegate your way to 2-3x revenue growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
              <Calendar className="mr-2" size={20} />
              Book Free Assessment (Worth $297)
            </button>
            
            <a 
              href="/pricing" 
              className="bg-rose-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rose-800 transition-all border-2 border-rose-400 flex items-center justify-center"
            >
              <DollarSign className="mr-2" size={20} />
              View Pricing & ROI
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-rose-100 text-sm">
            <div className="flex items-center justify-center">
              <MessageCircle className="mr-2" size={16} />
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center justify-center">
              <Shield className="mr-2" size={16} />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="mr-2" size={16} />
              <span>500+ entrepreneurs served</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
