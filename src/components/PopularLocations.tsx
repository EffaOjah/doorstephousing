import { motion } from 'framer-motion';

export default function PopularLocations() {
  const locations = [
    {
      name: "Marian",
      properties: "45 Properties",
      image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Etta Agbor",
      properties: "32 Properties",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "State Housing",
      properties: "28 Properties",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "8 Miles",
      properties: "15 Properties",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Neighborhood Guide</span>
            <h2 className="text-4xl lg:text-6xl font-medium mb-6 tracking-tight leading-[1.1]">Top student hubs in <span className="text-brand-accent">Calabar</span></h2>
            <p className="text-slate-400 text-lg lg:text-xl font-light leading-relaxed">Discover the most secure and vibrant neighborhoods favored by the student community.</p>
          </div>
          <a href="#waitlist" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:gap-4 transition-all duration-300 group">
            Explore all locations <span className="text-xl">→</span>
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group cursor-pointer rounded-[32px] overflow-hidden relative aspect-[3/4] bg-slate-900 shadow-2xl"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{loc.name}</h3>
                <div className="flex items-center gap-2 text-brand-accent font-medium">
                  <span className="font-sans">{loc.properties}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  <span>View map</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
