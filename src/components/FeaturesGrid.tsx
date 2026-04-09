import { Shield, Zap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      desc: "Every listing in Calabar is thoroughly vetted by our team."
    },
    {
      icon: Zap,
      title: "Fast Booking",
      desc: "Secure your accommodation in minutes, totally online."
    },
    {
      icon: MapPin,
      title: "Close to Campus",
      desc: "We focus on properties within walking distance to Unical & CRUTECH."
    }
  ];

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
    <section className="py-24 bg-brand-surface">
      <div className="container mx-auto px-6 text-center">
        <span className="text-brand-primary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">The DoorStep Advantage</span>
        <h2 className="text-3xl lg:text-5xl font-medium text-brand-primary mb-6 tracking-tight">Why choose DoorStep</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-20 text-base lg:text-lg font-light leading-relaxed">
          We’ve re-engineered the student rental experience from the ground up to focus on safety, speed, and local Calabar expertise.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 text-left group hover:-translate-y-2 border border-transparent hover:border-brand-accent/20"
            >
              <div className="bg-brand-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:rotate-6 transition-transform duration-500">
                <div className="text-brand-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-sm lg:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
