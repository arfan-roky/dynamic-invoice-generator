"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ThumbsUp, Send } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [feedbackType, setFeedbackType] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the feedback to your server here
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="flex-1">
      <div className="container mx-auto py-12">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Feedback</h1>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">We Value Your Feedback</CardTitle>
              <CardDescription>
                Your feedback helps us improve our invoice generator and provide
                a better experience for all users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="feedback" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="feedback">Submit Feedback</TabsTrigger>
                  <TabsTrigger value="feature">Request Feature</TabsTrigger>
                </TabsList>

                <TabsContent value="feedback" className="mt-6">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <ThumbsUp className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Thank You for Your Feedback!
                      </h3>
                      <p className="text-muted-foreground max-w-md">
                        We appreciate you taking the time to share your thoughts
                        with us. Your feedback is valuable and helps us improve
                        our service.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="feedback-type">Feedback Type</Label>
                        <RadioGroup
                          defaultValue="general"
                          onValueChange={setFeedbackType}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general">General Feedback</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bug" id="bug" />
                            <Label htmlFor="bug">Bug Report</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="suggestion"
                              id="suggestion"
                            />
                            <Label htmlFor="suggestion">Suggestion</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="compliment"
                              id="compliment"
                            />
                            <Label htmlFor="compliment">Compliment</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {feedbackType === "bug" && (
                        <div className="space-y-2">
                          <Label htmlFor="bug-location">
                            Where did you encounter the bug?
                          </Label>
                          <Input
                            id="bug-location"
                            placeholder="e.g., Invoice creation page, Dashboard, etc."
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="feedback-subject">Subject</Label>
                        <Input
                          id="feedback-subject"
                          placeholder="Brief description of your feedback"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="feedback-details">Details</Label>
                        <Textarea
                          id="feedback-details"
                          placeholder={
                            feedbackType === "bug"
                              ? "Please describe the bug in detail. What were you trying to do? What happened? What did you expect to happen?"
                              : "Please provide details about your feedback"
                          }
                          rows={6}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="feedback-email">
                          Your Email (optional)
                        </Label>
                        <Input
                          id="feedback-email"
                          type="email"
                          placeholder="Enter your email if you'd like us to follow up"
                        />
                        <p className="text-sm text-muted-foreground">
                          We'll only use your email to respond to your feedback
                        </p>
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" /> Submit Feedback
                      </Button>
                    </form>
                  )}
                </TabsContent>

                <TabsContent value="feature" className="mt-6">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <ThumbsUp className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Feature Request Received!
                      </h3>
                      <p className="text-muted-foreground max-w-md">
                        Thank you for suggesting a new feature. Our product team
                        will review your request and consider it for future
                        updates.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="feature-title">Feature Title</Label>
                        <Input
                          id="feature-title"
                          placeholder="Give your feature request a concise title"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="feature-description">
                          Feature Description
                        </Label>
                        <Textarea
                          id="feature-description"
                          placeholder="Describe the feature you'd like to see. What problem would it solve? How would it work?"
                          rows={6}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="feature-benefit">
                          How would this feature benefit users?
                        </Label>
                        <Textarea
                          id="feature-benefit"
                          placeholder="Explain how this feature would improve the user experience"
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="feature-email">
                          Your Email (optional)
                        </Label>
                        <Input
                          id="feature-email"
                          type="email"
                          placeholder="Enter your email if you'd like updates on this feature"
                        />
                        <p className="text-sm text-muted-foreground">
                          We'll only use your email to provide updates on this
                          feature request
                        </p>
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" /> Submit Feature Request
                      </Button>
                    </form>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-muted-foreground text-center max-w-md">
                We review all feedback and feature requests, though we may not
                be able to respond to each one individually. Thank you for
                helping us improve!
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
