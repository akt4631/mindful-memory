import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Target, TrendingUp, Smile } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Stop wasting time on ineffective study methods. Our AI optimizes every minute you spend learning.",
    stat: "10+",
    statLabel: "Hours saved",
  },
  {
    icon: Target,
    title: "Boost Retention by 3x",
    description: "Spaced repetition ensures information moves from short-term to long-term memory effectively.",
    stat: "3x",
    statLabel: "Better retention",
  },
  {
    icon: TrendingUp,
    title: "Improve Your Grades",
    description: "Students using Revisely report an average improvement of one full grade within a semester.",
    stat: "1+",
    statLabel: "Grade increase",
  },
  {
    icon: Smile,
    title: "Reduce Study Stress",
    description: "No more cramming sessions or exam anxiety. Study confidently with a proven system.",
    stat: "90%",
    statLabel: "Less stress",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Benefits
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transform how you learn
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of students who are studying smarter and achieving more.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex gap-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Stat */}
              <div className="flex-shrink-0 text-center">
                <div className="text-4xl font-display font-bold text-gradient-primary">
                  {benefit.stat}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {benefit.statLabel}
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <benefit.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
