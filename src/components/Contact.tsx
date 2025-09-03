import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Ready to bring culture into your classroom?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us to learn more about our Zulu cultural learning package. 
            We're here to support educators who value authentic cultural education.<br/><br/>
            info@culturedafrica.co.za
          </p>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;