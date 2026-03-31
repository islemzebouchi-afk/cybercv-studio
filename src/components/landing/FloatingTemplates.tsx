import { motion } from 'framer-motion';

export const FloatingTemplates = () => {
  return (
    <div className="relative h-[500px] w-full" style={{ perspective: '1200px' }}>
      {/* Template 1 - Minimalist */}
      <motion.div
        animate={{ y: [0, -20, 0], rotateX: [5, 8, 5], rotateY: [-5, -8, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-8 w-56 h-72 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden border border-primary/20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="bg-white p-4 h-full">
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-3" />
          <div className="h-2 w-24 bg-gray-800 rounded mb-1" />
          <div className="h-1.5 w-16 bg-gray-400 rounded mb-4" />
          <div className="space-y-1.5">
            <div className="h-1 w-full bg-gray-100 rounded" />
            <div className="h-1 w-4/5 bg-gray-100 rounded" />
            <div className="h-1 w-3/5 bg-gray-100 rounded" />
          </div>
          <div className="mt-4 h-1.5 w-20 bg-gray-300 rounded mb-2" />
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-100 rounded" />
            <div className="h-1 w-5/6 bg-gray-100 rounded" />
          </div>
        </div>
      </motion.div>

      {/* Template 2 - Modern Dark */}
      <motion.div
        animate={{ y: [0, -15, 0], rotateX: [-3, -6, -3], rotateY: [5, 8, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-20 right-4 w-60 h-80 rounded-xl shadow-2xl shadow-secondary/20 overflow-hidden border border-secondary/20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="bg-gray-900 p-4 h-full">
          <div className="h-16 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg mb-3 flex items-center px-3">
            <div className="w-8 h-8 rounded-full bg-cyan-400/30 mr-2" />
            <div>
              <div className="h-2 w-20 bg-white/80 rounded mb-1" />
              <div className="h-1.5 w-14 bg-white/40 rounded" />
            </div>
          </div>
          <div className="space-y-1.5 mb-3">
            <div className="h-1 w-full bg-gray-700 rounded" />
            <div className="h-1 w-4/5 bg-gray-700 rounded" />
          </div>
          <div className="h-1.5 w-16 bg-cyan-400/60 rounded mb-2" />
          <div className="space-y-1">
            <div className="h-1 w-full bg-gray-700 rounded" />
            <div className="h-1 w-3/4 bg-gray-700 rounded" />
          </div>
        </div>
      </motion.div>

      {/* Template 3 - Creative Blue */}
      <motion.div
        animate={{ y: [0, -18, 0], rotateX: [2, 5, 2], rotateY: [-3, -6, -3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-8 left-24 w-52 h-68 rounded-xl shadow-2xl shadow-blue-500/20 overflow-hidden border border-blue-500/20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="bg-white h-full">
          <div className="h-20 bg-gradient-to-br from-blue-600 to-blue-400 p-3">
            <div className="h-2 w-20 bg-white/80 rounded mb-1" />
            <div className="h-1.5 w-14 bg-white/50 rounded" />
          </div>
          <div className="p-3 space-y-2">
            <div className="flex gap-1">
              <div className="h-4 w-12 bg-blue-100 rounded text-[6px] flex items-center justify-center text-blue-600">React</div>
              <div className="h-4 w-8 bg-blue-100 rounded text-[6px] flex items-center justify-center text-blue-600">TS</div>
            </div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-gray-100 rounded" />
              <div className="h-1 w-5/6 bg-gray-100 rounded" />
              <div className="h-1 w-4/5 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
    </div>
  );
};
