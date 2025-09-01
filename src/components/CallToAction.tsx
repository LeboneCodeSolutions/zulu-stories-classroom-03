import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-5xl font-bold mb-6">
            Make Heritage Day Unforgettable
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join educators across South Africa who are bringing authentic Zulu culture into their classrooms. 
            Your students deserve engaging, culturally rich learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get in Touch with Us
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Pre-Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;