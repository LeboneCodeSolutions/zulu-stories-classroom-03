import { Card } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Problem Statement */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">The Challenge</h2>
            <Card className="p-8 shadow-warm">
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  Many learners take Zulu as a subject in high school, but traditional materials often fall short.
                </p>
                <p className="text-muted-foreground">
                  Teachers need fresh, engaging resources that connect language learning with lived culture.
                </p>
                <p className="text-muted-foreground">
                  Without authentic cultural context, students miss the richness of what they're learning.
                </p>
              </div>
            </Card>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">Our Solution</h2>
            <Card className="p-8 shadow-cultural bg-gradient-sunset text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  A 15-minute short film exploring Zulu traditions of love
                </h3>
                <div className="space-y-3 text-lg">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Only R50 per learner
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Includes assessments for Grades 9–11
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Perfect for Heritage Day and beyond
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;