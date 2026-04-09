import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [tab, setTab] = useState<'rent' | 'roommate'>('rent');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#16292C] pt-32 lg:pt-40 pb-20">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 mix-blend-overlay opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-12 lg:gap-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Copy */}
        <motion.div variants={itemVariants} className="max-w-3xl text-white flex flex-col items-center">
          <h1 className="text-4xl lg:text-7xl font-medium leading-[1.05em] tracking-tight mb-6">
            Your trusted <span className="text-[#FDE047]">student housing</span> in Nigeria
          </h1>
          <p className="text-base text-slate-200 lg:text-xl leading-[1.6] mb-8 font-light max-w-2xl">
            Find the perfect apartment or roommate near your campus. Start your search in Calabar today and experience hassle-free renting tailored for students.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 pt-2">
            <a href="#how-it-works" className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/10 transition-colors">
              See how it works
            </a>

            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="flex -space-x-4">
                <img src="images/img1.jpg" alt="User 1" className="w-12 h-12 rounded-full border-2 border-[#16292C] object-cover relative z-30" />
                <img src="images/img2.jpg" alt="User 2" className="w-12 h-12 rounded-full border-2 border-[#16292C] object-cover relative z-20" />
                <img src="images/img3.jpg" alt="User 3" className="w-12 h-12 rounded-full border-2 border-[#16292C] object-cover relative z-10" />
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FDE047] text-[#FDE047]" />
                  ))}
                </div>
                <span className="text-white font-medium text-sm">From 2000+ ratings</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div variants={itemVariants} id="waitlist" className="bg-[#EEF2F6] rounded-[24px] p-8 lg:p-10 shadow-2xl relative w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center text-slate-900 mb-2 tracking-tight">Join the internal waitlist</h2>
          <p className="text-slate-500 text-center mb-8 text-sm">Be the first to know when the best apartments in Calabar go live.</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-[#FDE047] appearance-none text-slate-700 font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setTab('rent')}
                  className={`py-3.5 rounded-xl border-2 transition-all font-semibold text-sm ${tab === 'rent' ? 'bg-white border-[#FDE047] text-slate-900 shadow-sm' : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-300'}`}
                >
                  I need a room
                </button>
                <button
                  type="button"
                  onClick={() => setTab('roommate')}
                  className={`py-3.5 rounded-xl border-2 transition-all font-semibold text-sm ${tab === 'roommate' ? 'bg-white border-[#FDE047] text-slate-900 shadow-sm' : 'text-slate-500 border-slate-200 hover:border-slate-300'}`}
                >
                  I need a roommate
                </button>
              </div>
            </div>

            <button className="w-full bg-[#FDE047] hover:bg-[#FBE124] text-slate-900 font-bold py-4 rounded-2xl mt-4 transition-all flex justify-center items-center gap-2 shadow-lg hover:-translate-y-0.5">
              Secure early access
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-4">
              Join 500+ students already on the waitlist for the 2024/25 session.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
