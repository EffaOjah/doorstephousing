import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeatureSplit() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div
        className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative z-10 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80"
              alt="Comfortable student housing"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Subtle Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-surface rounded-full -z-10 blur-3xl opacity-60" />
          <div className="absolute top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full -z-10 blur-2xl" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <span className="inline-block px-3 py-1 rounded-full bg-brand-surface text-brand-primary text-xs font-semibold mb-6 tracking-wide uppercase">
            Designed for convenience
          </span>
          <h2 className="text-3xl lg:text-5xl font-medium text-brand-primary mb-8 leading-[1.1] tracking-tight">
            Apartment hunting, <span className="text-brand-accent bg-brand-primary px-2 rounded-lg">tailored</span> for students
          </h2>
          <p className="text-base lg:text-lg text-slate-500 mb-10 font-light leading-relaxed max-w-xl">
            Finding off-campus housing shouldn't be a full-time job. DoorStep offers a curated experience specifically for the Calabar student community.
          </p>

          <div className="grid gap-6">
            {[
              { title: "No hidden agent fees", desc: "Transparent pricing with no surprise charges at the point of payment." },
              { title: "Virtual property tours", desc: "See your next home from your phone before booking a physical visit." },
              { title: "Verified residents only", desc: "Join a community of verified students from Unical, CRUTECH, and other institutions in Calabar." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-primary mb-1">{item.title}</h4>
                  <p className="text-slate-500 font-light leading-relaxed text-sm lg:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
