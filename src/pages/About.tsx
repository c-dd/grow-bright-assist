
const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Female Entrepreneurs</span> to Scale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of growing a micro business. That's why we're here to bridge the gap between where you are and where you want to be.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                We founded VirtuallyYours after witnessing countless talented female entrepreneurs hitting the same wall: they had great businesses generating $5,000-$15,000 in revenue, but they were doing everything themselves.
              </p>
              <p className="text-gray-600 mb-4">
                The problem wasn't lack of ambition or skill – it was not knowing what kind of help they needed or where to find reliable support that wouldn't break the bank.
              </p>
              <p className="text-gray-600">
                We created a solution that combines professional assessment, skilled virtual assistants, and dedicated business analysts to help you not just delegate tasks, but strategically scale your business.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Female entrepreneur working"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            To eliminate the guesswork in scaling your business by providing personalized assessments, skilled virtual assistants, and strategic business guidance – all designed specifically for female micro business owners ready to explode their growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Assessment</h3>
              <p className="text-gray-600">We analyze your unique business needs and identify exactly where virtual assistance can maximize your growth.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skilled Matching</h3>
              <p className="text-gray-600">We train and match you with virtual assistants who understand your industry and business goals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-rose-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Support</h3>
              <p className="text-gray-600">Every tier includes a dedicated business analyst to help you maximize your virtual assistant's impact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Female Entrepreneurs Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Women Supporting Women</h3>
              <p className="text-gray-600 text-sm">We understand the unique challenges female entrepreneurs face because we've been there too.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Guesswork</h3>
              <p className="text-gray-600 text-sm">Our free assessment eliminates the confusion about what kind of help you actually need.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Results</h3>
              <p className="text-gray-600 text-sm">See immediate impact with assistants trained specifically for your business needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Growth</h3>
              <p className="text-gray-600 text-sm">It's not just about delegation – it's about strategic scaling with dedicated business analyst support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
