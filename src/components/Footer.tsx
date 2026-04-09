import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="images/doorstep-logo.png" alt="DoorStep Logo" className="h-18 md:h-24 w-auto" />
            </div>
            <p className="text-slate-500 font-light text-base leading-relaxed mb-8">
              Changing the way students living in Calabar find and secure their next home.
            </p>
            <div className="flex gap-5 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Facebook</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-primary text-lg mb-6 tracking-tight">Platform</h4>
            <ul className="space-y-4 text-slate-500 leading-none">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Find Apartments</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Find Roommates</a></li>
              <li><a href="#waitlist" className="hover:text-brand-primary transition-colors">Waitlist Access</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Safety Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-primary text-lg mb-6 tracking-tight">Locations</h4>
            <ul className="space-y-4 text-slate-500 leading-none">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Marian</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Etta Agbor</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">State Housing</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Satellite Town</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-primary text-lg mb-6 tracking-tight">Support</h4>
            <ul className="space-y-4 text-slate-500 leading-none">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Safety Guide</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-brand-primary text-lg mb-6 tracking-tight">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">Get the latest property alerts and student housing tips.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-primary text-brand-accent px-4 rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors">
                Go
              </button>
            </form>
          </div>
        </motion.div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <p className="font-medium">&copy; {new Date().getFullYear()} DoorStep. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="font-medium text-slate-500">Built for student in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
