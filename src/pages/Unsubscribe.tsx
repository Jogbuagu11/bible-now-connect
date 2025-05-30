
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResubscribe, setShowResubscribe] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
      handleUnsubscribe(emailParam);
    }
  }, [searchParams]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUnsubscribe = async (emailToUnsubscribe: string) => {
    if (!emailToUnsubscribe.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(emailToUnsubscribe)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ unsubscribed: true })
        .eq('email', emailToUnsubscribe);

      if (error) {
        console.error('Unsubscribe error:', error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      } else {
        setIsUnsubscribed(true);
        toast({
          title: "Successfully unsubscribed",
          description: "You have been removed from our newsletter.",
        });
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResubscribe = async (e: React.FormEvent) => {
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
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ unsubscribed: false })
        .eq('email', email);

      if (error) {
        console.error('Resubscribe error:', error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      } else {
        setIsUnsubscribed(false);
        setShowResubscribe(false);
        toast({
          title: "Successfully resubscribed",
          description: "You have been added back to our newsletter.",
        });
      }
    } catch (error) {
      console.error('Resubscribe error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualUnsubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    handleUnsubscribe(email);
  };

  return (
    <div className="min-h-screen bg-gradient-primary text-bible-beige-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {isUnsubscribed ? (
            <Card className="bg-gradient-card border-bible-brown-700 shadow-2xl animate-scale-in">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-bible-gold-400 mx-auto mb-4" />
                <h1 className="text-2xl font-semibold text-bible-beige-50 mb-4">
                  You have successfully unsubscribed from BibleNOW's newsletter.
                </h1>
                <p className="text-bible-beige-200 mb-6">
                  We're sorry to see you go! You will no longer receive newsletter emails from us.
                </p>
                <Button 
                  onClick={() => setShowResubscribe(true)}
                  variant="outline"
                  className="border-bible-gold-400 text-bible-gold-400 hover:bg-bible-gold-400 hover:text-bible-brown-950"
                >
                  Changed your mind? Resubscribe
                </Button>
              </CardContent>
            </Card>
          ) : showResubscribe ? (
            <Card className="bg-gradient-card border-bible-brown-700 shadow-2xl animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Mail className="w-12 h-12 text-bible-gold-400 mx-auto mb-4" />
                  <h1 className="text-2xl font-semibold text-bible-beige-50 mb-2">
                    Resubscribe to BibleNOW Newsletter
                  </h1>
                  <p className="text-bible-beige-200">
                    Enter your email to start receiving our updates again
                  </p>
                </div>

                <form onSubmit={handleResubscribe} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="resubscribe-email" className="text-bible-beige-100">
                      Email Address
                    </Label>
                    <Input
                      id="resubscribe-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-bible-brown-800 border-bible-brown-600 text-bible-beige-50 placeholder:text-bible-beige-400 focus:border-bible-gold-400 focus:ring-bible-gold-400"
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-bible-gold-400 hover:bg-bible-gold-500 text-bible-brown-950 font-semibold py-3 transition-all duration-200 transform hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Resubscribing...' : 'Resubscribe'}
                  </Button>
                </form>

                <Button 
                  onClick={() => setShowResubscribe(false)}
                  variant="ghost"
                  className="w-full mt-4 text-bible-beige-300 hover:text-bible-beige-100"
                >
                  Cancel
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gradient-card border-bible-brown-700 shadow-2xl animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <AlertCircle className="w-12 h-12 text-bible-gold-400 mx-auto mb-4" />
                  <h1 className="text-2xl font-semibold text-bible-beige-50 mb-2">
                    Unsubscribe from BibleNOW Newsletter
                  </h1>
                  <p className="text-bible-beige-200">
                    Enter your email address to unsubscribe from our newsletter
                  </p>
                </div>

                <form onSubmit={handleManualUnsubscribe} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="unsubscribe-email" className="text-bible-beige-100">
                      Email Address
                    </Label>
                    <Input
                      id="unsubscribe-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-bible-brown-800 border-bible-brown-600 text-bible-beige-50 placeholder:text-bible-beige-400 focus:border-bible-gold-400 focus:ring-bible-gold-400"
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-bible-gold-400 hover:bg-bible-gold-500 text-bible-brown-950 font-semibold py-3 transition-all duration-200 transform hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Unsubscribing...' : 'Unsubscribe'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Unsubscribe;
