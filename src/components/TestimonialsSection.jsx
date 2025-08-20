import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import PropTypes from 'prop-types'
import { useTestimonials } from '../hooks/useTestimonials'

const TestimonialsSection = () => {
  const { testimonials } = useTestimonials();
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Don't render anything if there are no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    )
  }

  StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
  }

  const TestimonialCard = ({ testimonial, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col p-6 border-2 border-dashed border-primaryText rounded-xl bg-cardBg hover:border-blue-400 transition-colors duration-300 group h-full"
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <Quote className="text-blue-400 mb-4 group-hover:text-green-400 transition-colors duration-300" size={24} />
        
        <StarRating rating={testimonial.rating} />
          <p className="text-secondaryText text-base leading-relaxed mb-6 flex-grow">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        
        <div className="flex items-center gap-4 mt-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-green-400 transition-colors duration-300">
            <img 
                src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(testimonial.name)}&size=80&radius=20&backgroundColor=ffcc00`}
                alt="avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                }}
            />
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-full hidden items-center justify-center">
              <span className="text-white font-bold text-lg">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-primaryText font-semibold text-lg">
              {testimonial.name}
            </h4>
            <p className="text-secondaryText text-sm">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </motion.div>    )
  }

  TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
  }

  return (
    <section className="w-full min-h-[80vh] py-16" id="testimonials">
      <motion.div 
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 mx-[8vw]"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primaryText mb-4">
          Client <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Testimonials</span>
        </h2>
        <p className="text-secondaryText text-lg max-w-2xl mx-auto">
          Don&apos;t just take my word for it. Here&apos;s what my clients/peers have to say about working with me.
        </p>
      </motion.div>
      
      <div 
        ref={testimonialsRef}
        className="mx-[8vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id || index} 
            testimonial={testimonial} 
            index={index}
          />
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default TestimonialsSection
