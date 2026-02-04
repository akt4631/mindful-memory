import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Revisely different from other study apps?",
    answer: "Revisely combines AI-powered content understanding with science-backed spaced repetition. Unlike simple flashcard apps, we analyze your notes, build contextual understanding, and create personalized learning paths that adapt to how you learn best.",
  },
  {
    question: "How does the voice input feature work?",
    answer: "Simply speak your thoughts after a lecture or study session. Our AI transcribes, organizes, and extracts key concepts from your voice notes automatically. It works in multiple languages and understands technical terminology across various subjects.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. All your notes and data are encrypted end-to-end. We never share or sell your information to third parties. Your study materials remain completely private and under your control.",
  },
  {
    question: "What subjects does Revisely support?",
    answer: "Revisely works with any subject—from sciences and medicine to law, humanities, and languages. Our AI adapts to the specific terminology and concepts of your field of study.",
  },
  {
    question: "Can I use Revisely on mobile devices?",
    answer: "Yes! Revisely is a responsive web application that works beautifully on any device—smartphone, tablet, or desktop. Study wherever you are, whenever you have a moment.",
  },
  {
    question: "How much does Revisely cost?",
    answer: "We're currently offering free early access to students who join our waitlist. Early adopters will receive 3 months free once we launch, plus a significant discount on our premium plans.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="section-padding bg-card">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Revisely.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
