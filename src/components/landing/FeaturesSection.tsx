import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Mic, 
  Brain, 
  FileText, 
  HelpCircle, 
  Calendar, 
  BarChart3,
  Smartphone,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice & Text Input",
    description: "Record lectures or type notes—our AI processes both seamlessly.",
  },
  {
    icon: Brain,
    title: "AI Context Building",
    description: "Intelligent linking of concepts across all your subjects and notes.",
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description: "Auto-generated revision notes that focus on what matters most.",
  },
  {
    icon: HelpCircle,
    title: "Adaptive Quizzes",
    description: "Questions that adapt to your knowledge level and weak points.",
  },
  {
    icon: Calendar,
    title: "Spaced Repetition",
    description: "Science-backed review schedule for maximum long-term retention.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed insights and stats.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Study anywhere with our responsive web app on any device.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your notes are encrypted and never shared with third parties.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="section-padding bg-card">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to ace your exams
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools designed specifically for students who want to learn smarter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
