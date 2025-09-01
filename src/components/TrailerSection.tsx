import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const TrailerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Watch the Trailer
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get a preview of our 15-minute short film exploring Zulu traditions of love. 
            See how culture comes to life in your classroom.
          </p>
          
          <Card className="overflow-hidden shadow-cultural bg-gradient-to-br from-background to-muted/50">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/IQks8QYUNz0"
                title="Zulu Culture Short Film Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
            
            <div className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Play className="w-5 h-5" />
                <span className="font-semibold"><a href="https://www.youtube.com/embed/IQks8QYUNz0">15-minute educational short film</a></span>
              </div>
              <p className="text-muted-foreground mb-6">
                Perfect for Heritage Day and year-round cultural education in Grades 9–11
              </p>
             
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;