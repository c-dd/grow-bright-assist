
import { useState } from "react";
import { Check, Clock, Users, Search } from "lucide-react";

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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Ready to <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Scale Beyond</span> Yourself?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                You've built your business to $5K-$15K revenue, but you're hitting a wall. Stop doing everything yourself. Let us show you exactly what help you need to explode your growth.
              </p>
              
              {/* Pain Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                  <span>Drowning in admin tasks that don't grow your business?</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                  <span>Know you need help but not sure what kind?</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                  <span>Worried about hiring the wrong person?</span>
                </div>
              </div>

              {/* CTA Form */}
              <form onSubmit={handleAssessmentSubmit} className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 max-w-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Your Free Business Assessment</h3>
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
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Start My Free Assessment
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">No spam, ever. We'll analyze your needs and get back to you within 24 hours.</p>
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

      {/* Social Proof */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by female entrepreneurs across industries</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">BOUTIQUE</div>
            <div className="text-2xl font-bold text-gray-400">WELLNESS</div>
            <div className="text-2xl font-bold text-gray-400">COACHING</div>
            <div className="text-2xl font-bold text-gray-400">CONSULTING</div>
            <div className="text-2xl font-bold text-gray-400">E-COMMERCE</div>
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

      {/* Pricing Preview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Tiers, <span className="text-rose-500">Unlimited Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need part-time support or a full-time business partner, we have the perfect solution for your growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$600<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />10 hours/week virtual assistant</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Dedicated business analyst</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Month-to-month flexibility</li>
              </ul>
            </div>

            {/* Growth */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl shadow-lg border-2 border-rose-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$1,500<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />25 hours/week virtual assistant</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Dedicated business analyst</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />6-month commitment</li>
              </ul>
            </div>

            {/* Scale */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale</h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">$2,500<span className="text-lg text-gray-500">/month</span></div>
              <div className="text-sm text-green-600 mb-4">Save $500 with 12-month: $2,000/month</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Full-time virtual assistant</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />Dedicated business analyst</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" />6 or 12-month options</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/pricing"
              className="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              See Full Pricing Details
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Wondering. Start Scaling.
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Your business is ready for the next level. The only question is: are you ready to let us show you how?
          </p>
          <button className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
            Get My Free Assessment Now
          </button>
          <p className="text-rose-100 text-sm mt-4">
            Join 500+ female entrepreneurs who've scaled beyond themselves
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
