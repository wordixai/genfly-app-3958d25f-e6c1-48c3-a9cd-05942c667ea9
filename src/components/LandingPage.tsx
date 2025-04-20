import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Check, 
  ArrowRight, 
  Globe, 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  Star 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const LandingPage = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">SXHDQWZMB</div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Get Started <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unlock Your Digital Potential with SXHDQWZMB
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The most comprehensive solution for your online business needs. Boost your productivity and reach new heights.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8">
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {!submitted ? (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email Address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="cn">China</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <p className="text-sm text-gray-500">
                              I agree to the terms and conditions
                            </p>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-6">Your submission has been received. We'll be in touch shortly.</p>
                <Button 
                  variant="outline" 
                  className="mx-auto"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Response
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the tools that will transform your digital experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="h-10 w-10 text-blue-600" />}
              title="Global Reach"
              description="Connect with customers around the world with our international platform."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Advanced Security"
              description="Keep your data safe with enterprise-grade security protocols."
            />
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Lightning Fast"
              description="Experience blazing fast performance with our optimized infrastructure."
            />
            <FeatureCard 
              icon={<Clock className="h-10 w-10 text-blue-600" />}
              title="24/7 Support"
              description="Our dedicated team is available around the clock to assist you."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Team Collaboration"
              description="Work seamlessly with your team members in real-time."
            />
            <FeatureCard 
              icon={<Star className="h-10 w-10 text-blue-600" />}
              title="Premium Quality"
              description="Enjoy the highest quality service with attention to every detail."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional value that sets us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitItem 
              title="Increased Productivity"
              description="Our tools help you work smarter, not harder, boosting your productivity by up to 40%."
            />
            <BenefitItem 
              title="Cost Effective"
              description="Save money with our affordable pricing plans that deliver maximum value."
            />
            <BenefitItem 
              title="Scalable Solutions"
              description="Grow your business with confidence knowing our platform scales with your needs."
            />
            <BenefitItem 
              title="User Friendly"
              description="Intuitive interface designed for users of all technical skill levels."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="SXHDQWZMB has completely transformed how we operate. The efficiency gains have been remarkable."
              author="Sarah Johnson"
              company="Tech Innovations"
            />
            <TestimonialCard 
              quote="The customer support team is exceptional. They're always available and genuinely care about our success."
              author="Michael Chen"
              company="Global Solutions"
            />
            <TestimonialCard 
              quote="We've tried many solutions, but nothing compares to the quality and reliability of SXHDQWZMB."
              author="Emma Rodriguez"
              company="Creative Studios"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with SXHDQWZMB.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SXHDQWZMB</h3>
              <p className="text-gray-400">
                The leading solution for digital transformation and business growth.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@sxhdqwzmb.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">123 Business Ave, Suite 100</li>
                <li className="text-gray-400">San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 SXHDQWZMB. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitItem = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        <div className="bg-blue-600 rounded-full p-1">
          <Check className="h-5 w-5 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const TestimonialCard = ({ quote, author, company }: { quote: string, author: string, company: string }) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="mb-4 text-yellow-500 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPage;