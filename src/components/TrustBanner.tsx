import { motion } from 'framer-motion';
import { Users, CheckCircle, GraduationCap } from 'lucide-react';

export default function TrustBanner() {
  return (
    <section id="how-it-works" className="bg-brand-teal py-10 relative z-20 w-full overflow-hidden">
      <motion.div 
        className="container mx-auto px-8 grid md:grid-cols-3 md:divide-x md:divide-white/30 gap-8 text-white relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-0.5">500+ Students</h3>
            <p className="text-teal-100 text-xs">Waiting for the 2024/25 session launch.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-0.5">Weekly Vetting</h3>
            <p className="text-teal-100 text-xs">New properties across Calabar verified daily.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-0.5">Top Campuses</h3>
            <p className="text-teal-100 text-xs">Full coverage for UNICAL, CRUTECH & more.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
