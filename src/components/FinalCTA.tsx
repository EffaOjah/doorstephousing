import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl lg:text-7xl font-medium text-white mb-8 leading-[1.1] tracking-tight">
          Ready to find your <br />
          <span className="text-brand-accent italic underline decoration-white/10 underline-offset-8">ideal home?</span>
        </h2>
        <p className="text-slate-400 text-lg lg:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 500+ Calabar students already on the waitlist for the next academic session. Don't miss out.
        </p>
        <a
          href="#waitlist"
          className="inline-block bg-brand-accent hover:bg-[#FBE124] text-brand-primary font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-brand-accent/10 hover:shadow-brand-accent/30 transform hover:-translate-y-1"
        >
          Secure early access
        </a>
      </motion.div>
    </section>
  );
}
