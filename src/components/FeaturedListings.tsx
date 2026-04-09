import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';

export default function FeaturedListings() {
  const listings = [
    {
      id: 1,
      title: "Premium Self-Contain",
      location: "Marian, Calabar",
      price: "₦350,000",
      period: "per year",
      beds: 1,
      baths: 1,
      size: "45 sqm",
      image: "images/apartment1.jpg",
      tag: "Verified"
    },
    {
      id: 2,
      title: "Modern 2-Bedroom Flat",
      location: "Etta Agbor, Calabar",
      price: "₦650,000",
      period: "per year",
      beds: 2,
      baths: 2,
      size: "120 sqm",
      image: "images/apartment2.jpg",
      tag: "Coming Soon"
    },
    {
      id: 3,
      title: "Cozy Student Studio",
      location: "Main Gate, UNICAL",
      price: "₦280,000",
      period: "per year",
      beds: 1,
      baths: 1,
      size: "35 sqm",
      image: "images/apartment3.jpg",
      tag: "Waitlist"
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <span className="text-brand-primary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">Sneak Peek</span>
            <h2 className="text-4xl lg:text-6xl font-medium text-brand-primary mb-6 tracking-tight leading-[1.1]">Browse our <span className="text-brand-accent bg-brand-primary px-3 py-1 rounded-lg">top-tier</span> apartments</h2>
            <p className="text-slate-500 text-lg lg:text-xl font-light leading-relaxed">A preview of what’s coming to the DoorStep platform for the next academic session.</p>
          </div>
          <div className="flex gap-4">
            <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 hover:border-brand-primary transition-colors">
              <span className="sr-only">Previous</span>
              <span className="text-xl">←</span>
            </button>
            <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white hover:bg-slate-800 transition-colors">
              <span className="sr-only">Next</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {listings.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${item.tag === 'Verified' ? 'bg-[#FDE047] text-slate-900' : 'bg-brand-primary text-white'
                    }`}>
                    {item.tag}
                  </span>
                </div>
                <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-brand-primary mb-1">{item.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-6 border-y border-slate-50 mb-6">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-600">{item.beds} Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-600">{item.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-600">{item.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-brand-primary font-sans">{item.price}</span>
                    <span className="text-slate-400 text-sm ml-1">{item.period}</span>
                  </div>
                  <a href="#waitlist" className="bg-brand-accent text-brand-primary px-6 py-3 rounded-2xl font-bold text-sm hover:bg-brand-primary hover:text-white transition-all duration-300">
                    Get Access
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
