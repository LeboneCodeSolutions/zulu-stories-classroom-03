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
            We're here to support educators who value authentic cultural education.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 shadow-warm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="school">School *</Label>
                <Input 
                  id="school" 
                  placeholder="School name" 
                  required 
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@school.co.za" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+27 XX XXX XXXX" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                placeholder="Tell us about your school's interest in our Zulu cultural learning package..."
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;