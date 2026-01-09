import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import PropTypes from 'prop-types'
import { useTestimonials } from '../hooks/useTestimonials'

const TestimonialsSection = () => {
  const { testimonials } = useTestimonials();

  // Don't render anything if there are no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full py-20 bg-[#0A0A0A] overflow-hidden" id="testimonials">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2 block">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-secondaryText text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what people have to say about our collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id || index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
    >
      <Quote className="text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors" size={40} />

      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${i < testimonial.rating
                ? 'fill-yellow-500 text-yellow-500'
                : 'fill-gray-800 text-gray-800'
              }`}
          />
        ))}
      </div>

      <p className="text-secondaryText text-base leading-relaxed mb-8 flex-grow">
        &quot;{testimonial.content}&quot;
      </p>

      <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5">
          <img
            src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(testimonial.name)}&size=80&backgroundColor=1a1a1a`}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h4 className="text-white font-semibold text-base">
            {testimonial.name}
          </h4>
          <p className="text-secondaryText/60 text-xs uppercase tracking-wider font-medium mt-0.5">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

    </motion.div>
  )
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default TestimonialsSection
