
const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
        <div className="site-container text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            The Philosophy Behind Care + Candor.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-clay mt-6 md:mt-8 max-w-2xl mx-auto">
            We believe that true growth comes not from doing more, but from doing more of what matters. Our approach is rooted in intentionality, quality, and the profound impact of focused work.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Our Story</h2>
              <p className="text-clay mb-4">
                We founded Care + Candor after witnessing countless talented entrepreneurs hitting the same wall: they had built meaningful businesses, but found themselves trapped in the day-to-day operations that prevented them from creating their life's work.
              </p>
              <p className="text-clay mb-4">
                The problem wasn't lack of vision or capability – it was the absence of the right kind of support. Support that understood not just what needed to be done, but why it mattered.
              </p>
              <p className="text-clay">
                We created a service that goes beyond task delegation. We curate partnerships between entrepreneurs and assistants, fostering relationships built on understanding, trust, and shared commitment to meaningful work.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Thoughtful workspace"
                className="rounded-2xl grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="site-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">Our Mission</h2>
          <p className="text-base md:text-lg lg:text-xl text-clay max-w-4xl mx-auto mb-12">
            To create space for entrepreneurs to focus on their life's work by providing thoughtfully curated partnerships with skilled virtual assistants who understand that every task, no matter how small, contributes to something greater.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-stone-border">
              <h3 className="text-xl font-semibold mb-3">Thoughtful Curation</h3>
              <p className="text-clay">We don't just match skills; we match temperament, values, and working styles to create genuine partnerships.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-stone-border">
              <h3 className="text-xl font-semibold mb-3">Quality Over Quantity</h3>
              <p className="text-clay">Every assistant is rigorously vetted and US-based, ensuring consistent, reliable support that aligns with your standards.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-stone-border">
              <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
              <p className="text-clay">We measure success not by tasks completed, but by the meaningful work our partnerships enable you to create.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="site-container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12">Why Entrepreneurs Choose Care + Candor</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Intentional Partnerships</h3>
              <p className="text-clay text-sm">We believe in the power of genuine working relationships built on mutual understanding and shared values.</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Clarity Over Confusion</h3>
              <p className="text-clay text-sm">Our discovery process eliminates guesswork, providing clear direction on exactly how to leverage support.</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-clay text-sm">Every assistant is rigorously vetted, ensuring you receive support that meets your exacting standards.</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Meaningful Growth</h3>
              <p className="text-clay text-sm">We measure success by the meaningful work our partnerships enable, not just tasks completed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
