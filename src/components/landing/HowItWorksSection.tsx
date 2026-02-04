import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Sparkles, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mic,
    title: "Capture Your Knowledge",
    description: "Record voice notes or type summaries after lectures. Our AI understands your content instantly.",
    color: "primary",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Builds Your Context",
    description: "Our AI organizes your notes, identifies key concepts, and creates connections across topics.",
    color: "accent",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Get Smart Revision Materials",
    description: "Receive personalized flashcards, quizzes, and notes optimized for your learning style.",
    color: "primary",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Master Through Review",
    description: "Weekly spaced repetition sessions ensure you never forget what you've learned.",
    color: "accent",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-background relative">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Four steps to lasting knowledge
          </h2>
          <p className="text-muted-foreground text-lg">
            From capture to mastery—our AI-powered system guides you every step of the way.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card p-6 h-full hover:shadow-lg transition-all duration-300">
                {/* Number */}
                <span className="text-6xl font-display font-bold text-border/50 absolute top-4 right-4">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                    step.color === "primary" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
