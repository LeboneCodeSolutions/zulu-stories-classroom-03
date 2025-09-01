import { Card } from "@/components/ui/card";
import { Film, FileText, Globe, Lightbulb } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Film,
      title: "Engaging Storytelling",
      description: "Culture presented in a modern, relatable format that captures student attention.",
      color: "cultural-red"
    },
    {
      icon: FileText,
      title: "Assessment Ready", 
      description: "Teachers receive grade-appropriate assessments aligned to the film's themes.",
      color: "cultural-green"
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Learners gain authentic insight into Zulu traditions and customs.",
      color: "cultural-blue"
    },
    {
      icon: Lightbulb,
      title: "Curriculum Support",
      description: "Supports Zulu language study across public and private schools.",
      color: "cultural-yellow"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Why Teachers Love Our Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your Zulu language classroom with culturally rich content that engages students and supports your teaching goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 text-center shadow-warm hover:shadow-cultural transition-all duration-300 group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;