import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are the landlords on DoorStep verified?",
      a: "Absolutely. Every landlord and property manager on our platform undergoes a multi-step verification process, including physical site visits and document verification to ensure you're dealing with legitimate owners in Calabar."
    },
    {
      q: "How do I secure an apartment from the waitlist?",
      a: "Students on the waitlist get a 24-hour head start on all new listings. You'll receive a notified via email with a private link to book your preferred unit before it goes public."
    },
    {
      q: "Are there extra agency or legal fees?",
      a: "No. DoorStep is built to eliminate the 'Agent Fee' headache. You pay the rent and a small, transparent service charge. We handle all the legal documentation at no extra cost to you."
    },
    {
      q: "What if I need a roommate to split the cost?",
      a: "Our roommate matching service uses a lifestyle algorithm to pair you with students of similar habits, budgets, and campus location. You can chat and meet virtually before committing."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div
        className="container mx-auto px-6 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-brand-primary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">Help Center</span>
          <h2 className="text-4xl lg:text-6xl font-medium text-brand-primary tracking-tight leading-[1.1]">
            Common <span className="text-brand-accent bg-brand-primary px-3 py-1 rounded-lg italic">questions</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-[32px] transition-all duration-500 overflow-hidden border ${openIdx === idx
                  ? 'bg-brand-surface border-brand-accent shadow-[0_20px_40px_rgba(0,0,0,0.04)]'
                  : 'bg-white border-slate-100 hover:border-brand-accent/30'
                }`}
            >
              <button
                className="w-full px-8 py-7 text-left flex justify-between items-center gap-6 group transition-colors focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${openIdx === idx ? 'text-brand-primary' : 'text-slate-600'
                  }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIdx === idx ? 'bg-brand-primary text-brand-accent rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-brand-accent group-hover:text-brand-primary'
                  }`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <p className="text-slate-500 leading-relaxed font-light text-base lg:text-lg max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
