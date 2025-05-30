
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Replace with actual Supabase integration
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Newsletter signup:', { email, timestamp: new Date().toISOString() });
      
      setIsSubmitted(true);
      setEmail('');
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-card border-bible-brown-700 animate-scale-in">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-20 h-20 text-bible-gold-400 mx-auto mb-6" />
          <h3 className="text-3xl font-semibold text-bible-beige-50 mb-4">
            Thank you for subscribing to BibleNOW!
          </h3>
          <p className="text-lg text-bible-beige-200 mb-8">
            You'll receive our latest updates and insights directly in your inbox.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-bible-gold-400 text-bible-gold-400 hover:bg-bible-gold-400 hover:text-bible-brown-950"
          >
            Subscribe Another Email
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card border-bible-brown-700 shadow-2xl animate-fade-in">
      <CardContent className="p-12">
        <div className="text-center mb-8">
          <Mail className="w-16 h-16 text-bible-gold-400 mx-auto mb-6" />
          <h3 className="text-3xl font-semibold text-bible-beige-50 mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-lg text-bible-beige-200">
            Stay connected with BibleNOW updates and insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-bible-beige-100 text-lg">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-bible-brown-800 border-bible-brown-600 text-bible-beige-50 placeholder:text-bible-beige-400 focus:border-bible-gold-400 focus:ring-bible-gold-400 h-12 text-lg"
              disabled={isLoading}
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-bible-gold-400 hover:bg-bible-gold-500 text-bible-brown-950 font-semibold py-4 text-lg transition-all duration-200 transform hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>

        <div className="mt-8 flex items-center justify-center text-bible-beige-300">
          <Shield className="w-5 h-5 mr-3" />
          <span className="text-center">We respect your privacy and won't spam. Unsubscribe anytime.</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;
