
import { useState } from "react";
import { Check } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Assessment request for:", email);
    // Handle assessment request
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
        <div className="site-container text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            Space to Create Your Life's Work.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-clay mt-6 md:mt-8 max-w-2xl mx-auto">
            We handle the essential tasks that consume your time, so you can focus on the work only you can do. Our assistants provide the foundation for profound growth.
          </p>
          <div className="mt-8 md:mt-12">
            <button
              onClick={handleAssessmentSubmit}
              className="btn-primary px-8 py-4 text-base font-medium rounded-full"
            >
              Start Your Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <section className="site-container">
        <div className="h-48 md:h-64 lg:h-80 bg-stone rounded-2xl overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Elegant workspace"
            className="w-full h-full object-cover grayscale"
            loading="lazy"
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 md:py-24 lg:py-32">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Eliminate the Non-Essential.
            </h2>
            <p className="text-base md:text-lg text-clay mt-4 md:mt-6">
              Our philosophy is simple: true productivity isn't about doing more, it's about doing more of what matters. We provide rigorously vetted, US-based virtual assistants who integrate seamlessly into your workflow, creating leverage and protecting your most valuable asset—your focus.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="site-container pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 border-t border-stone-border pt-12 md:pt-16">
          <div>
            <span className="text-base md:text-lg font-semibold text-clay">01</span>
            <h3 className="text-xl md:text-2xl mt-2">Discovery</h3>
            <p className="text-sm md:text-base text-clay mt-3 md:mt-4">A conversation, not a questionnaire. We listen to understand the nuances of your work, your goals, and the friction points in your day-to-day operations.</p>
          </div>
          <div>
            <span className="text-base md:text-lg font-semibold text-clay">02</span>
            <h3 className="text-xl md:text-2xl mt-2">Curation</h3>
            <p className="text-sm md:text-base text-clay mt-3 md:mt-4">We don't just find an assistant; we curate a partnership. Based on our discovery, we match you with a professional whose skills and temperament are a natural extension of your own.</p>
          </div>
          <div>
            <span className="text-base md:text-lg font-semibold text-clay">03</span>
            <h3 className="text-xl md:text-2xl mt-2">Integration</h3>
            <p className="text-sm md:text-base text-clay mt-3 md:mt-4">Your assistant becomes a trusted member of your team. We facilitate a smooth onboarding process, ensuring they are equipped to begin adding value from day one.</p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="bg-white py-16 md:py-24 lg:py-32">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Structured for Your Stage of Growth.
            </h2>
            <p className="text-base md:text-lg text-clay mt-4 md:mt-6">
              Simple, transparent plans designed to provide the right level of support as your needs evolve. No hidden fees. No long-term contracts.
            </p>
          </div>

          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Foundation Plan */}
            <div className="border border-stone-border rounded-2xl p-6 md:p-8 flex flex-col">
              <h3 className="text-xl md:text-2xl">Foundation</h3>
              <p className="text-clay mt-2 text-sm md:text-base">For focused individuals.</p>
              <p className="mt-4 md:mt-6 text-3xl md:text-4xl font-medium tracking-tight">$25 <span className="text-sm md:text-base text-clay font-normal">/ week</span></p>
              <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-xs md:text-sm text-clay flex-grow">
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>12 hours per week</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Dedicated US-based assistant</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Core administrative tasks</li>
              </ul>
              <button className="mt-6 md:mt-8 w-full py-3 md:py-4 text-center rounded-full text-xs md:text-sm font-medium btn-secondary">Select Plan</button>
            </div>

            {/* Growth Plan (Highlighted) */}
            <div className="border-2 border-stone-border rounded-2xl p-6 md:p-8 flex flex-col relative">
              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl">Growth</h3>
                <span className="bg-foreground text-background text-xs font-semibold px-2 md:px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>
              </div>
              <p className="text-clay mt-2 text-sm md:text-base">For scaling businesses.</p>
              <p className="mt-4 md:mt-6 text-3xl md:text-4xl font-medium tracking-tight">$199 <span className="text-sm md:text-base text-clay font-normal">/ week</span></p>
              <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-xs md:text-sm text-clay flex-grow">
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>25 hours per week</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Everything in Foundation</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Social media management</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Client success manager</li>
              </ul>
              <button className="mt-6 md:mt-8 w-full py-3 md:py-4 text-center rounded-full text-xs md:text-sm font-medium btn-primary">Select Plan</button>
            </div>

            {/* Scale Plan */}
            <div className="border border-stone-border rounded-2xl p-6 md:p-8 flex flex-col">
              <h3 className="text-xl md:text-2xl">Scale</h3>
              <p className="text-clay mt-2 text-sm md:text-base">For established teams.</p>
              <p className="mt-4 md:mt-6 text-3xl md:text-4xl font-medium tracking-tight">$399 <span className="text-sm md:text-base text-clay font-normal">/ week</span></p>
              <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-xs md:text-sm text-clay flex-grow">
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>40 hours per week</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Everything in Growth</li>
                <li className="flex items-start"><span className="mr-3 mt-1">—</span>Project management support</li>
              </ul>
              <button className="mt-6 md:mt-8 w-full py-3 md:py-4 text-center rounded-full text-xs md:text-sm font-medium btn-secondary">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Assessment */}
      <section id="assessment" className="py-16 md:py-24 lg:py-32">
        <div className="site-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Begin the Conversation.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-clay mt-4 md:mt-6 max-w-2xl mx-auto">
            Start with a simple, no-obligation assessment. It's a chance for us to understand your world and for you to see how we can help.
          </p>
          <div className="mt-8 md:mt-12">
            <button
              onClick={handleAssessmentSubmit}
              className="btn-primary px-8 py-4 text-base font-medium rounded-full"
            >
              Take the First Step
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
