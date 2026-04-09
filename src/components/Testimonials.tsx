import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: "Tobi A.",
      uni: "University of Calabar",
      text: "DoorStep made finding my off-campus apartment so easy. No stress with agents, and the place looked exactly like the pictures!",
      img: "images/img1.jpg"
    },
    {
      name: "Chidinma O.",
      uni: "CRUTECH",
      text: "I used the roommate matching feature and found the perfect flatmate. We split a 2-bedroom at State Housing seamlessly.",
      img: "images/img2.jpg"
    },
    {
      name: "Daniel E.",
      uni: "University of Calabar",
      text: "The payment security is what won me over. Knowing I wouldn't get scammed in Calabar gave my parents peace of mind.",
      img: "images/img3.jpg"
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
    <section className="py-24 bg-brand-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Social Proof</span>
          <h2 className="text-4xl lg:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
            Loved by <span className="text-brand-accent italic underline decoration-white/20 underline-offset-8">students</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg lg:text-xl font-light leading-relaxed">
            Join the growing community of students in Calabar who are changing the way they live.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent/5 rounded-full blur-[120px] -z-10" />

          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-brand-surface p-10 rounded-[40px] shadow-2xl relative group hover:-translate-y-4 transition-all duration-700"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-brand-primary/5 group-hover:text-brand-accent/20 transition-colors duration-500" />

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="text-brand-primary/80 lg:text-lg italic mb-10 leading-relaxed font-light">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-brand-primary/5">
                <img src={rev.img} alt={rev.name} className="w-14 h-14 rounded-2xl object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <div>
                  <h4 className="font-bold text-brand-primary text-lg">{rev.name}</h4>
                  <p className="text-sm text-slate-500 font-medium tracking-tight uppercase">{rev.uni}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
