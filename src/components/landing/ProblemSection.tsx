import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle, TrendingDown, Clock, Brain, Zap } from "lucide-react";

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              <XCircle className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Traditional studying is broken
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              You spend hours cramming, only to forget 80% within a week. 
              Sound familiar? Most students waste precious time on ineffective 
              study methods that don't build lasting memory.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: TrendingDown, text: "80% forgotten within 7 days" },
                { icon: Clock, text: "Hours wasted on re-reading notes" },
                { icon: Brain, text: "No structured review system" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-destructive" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              The Solution
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              ReviseAI makes learning stick
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our AI-powered platform uses proven spaced repetition science 
              to transform your notes into lasting knowledge. Study smarter, 
              not harder.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Brain, text: "AI builds optimal learning paths" },
                { icon: Clock, text: "Weekly reviews at the perfect time" },
                { icon: Zap, text: "90% retention after 30 days" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-foreground">
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-success" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
