import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    message: "",
    inquiryType: "assessment"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We've received your message and will get back to you within 24 hours. 
            If you requested an assessment, we'll send you a calendar link to book your free consultation.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Start Your <span className="text-rose-100">Growth Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-4xl mx-auto">
            Ready to scale beyond yourself? Get in touch for your free business assessment or ask us anything about how we can accelerate your growth.
          </p>
        </div>
      </div>

      <div className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600">We typically respond within 2 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Business Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-semibold text-gray-700 mb-2">
                      Monthly Revenue Range
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select range</option>
                      <option value="0-5k">$0 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-15k">$10,000 - $15,000</option>
                      <option value="15k-25k">$15,000 - $25,000</option>
                      <option value="25k+">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    What can we help you with? *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="assessment">Free Business Assessment</option>
                    <option value="pricing">Questions About Pricing</option>
                    <option value="matching">Assistant Matching Process</option>
                    <option value="existing">I'm an existing client</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your business and goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors resize-none"
                    required
                    placeholder="What challenges are you facing? What are your growth goals? What kind of support are you looking for?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600 mb-2">For general inquiries and support</p>
                      <a href="mailto:hello@scalebeyond.com" className="text-rose-500 hover:text-rose-600 font-medium">
                        hello@scalebeyond.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600 mb-2">Speak directly with our team</p>
                      <a href="tel:+1-555-SCALE-UP" className="text-rose-500 hover:text-rose-600 font-medium">
                        +1 (555) SCALE-UP
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM EST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                      <p className="text-gray-600">We're a distributed team serving entrepreneurs globally</p>
                      <p className="text-gray-600">Based in Austin, Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-rose-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  <a
                    href="/pricing"
                    className="block w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center border border-gray-200"
                  >
                    View Detailed Pricing
                  </a>
                  
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'assessment' }))}
                    className="block w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all text-center"
                  >
                    Book Free Assessment
                  </button>
                  
                  <a
                    href="/about"
                    className="block w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center border border-gray-200"
                  >
                    Learn About Our Process
                  </a>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-yellow-50 rounded-2xl shadow-lg p-6 border-2 border-yellow-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Existing Client Support</h3>
                <p className="text-gray-700 mb-4">
                  Need immediate assistance with your current virtual assistant or have an urgent business matter?
                </p>
                <a
                  href="mailto:urgent@scalebeyond.com"
                  className="inline-flex items-center text-yellow-700 hover:text-yellow-800 font-semibold"
                >
                  <Mail className="mr-2" size={16} />
                  urgent@scalebeyond.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our comprehensive FAQ section or schedule a free consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing#faq"
              className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View FAQ
            </a>
            <button
              onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'assessment' }))}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;