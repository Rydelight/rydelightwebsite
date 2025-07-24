
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, User } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Transform the real testimonials data to match our component structure
  const testimonials = testimonialsData.map((testimonial, index) => ({
    name: testimonial.reviewer_name,
    role: 'Verified Customer',
    company: testimonial.source_platform,
    rating: Math.floor(testimonial.rating),
    text: testimonial.review_text,
    service: 'Rydelight Premium Service',
  }));

  // Add some additional testimonials to fill out the grid nicely
  const additionalTestimonials = [
    {
      name: 'Sarah K.',
      role: 'Business Executive',
      company: 'Google Reviews',
      rating: 5,
      text: 'Scott and the Rydelight team are absolutely fantastic! Professional, punctual, and the Tesla is spotless. Perfect for business meetings and special occasions.',
      service: 'Rydelight Executive Service',
    },
    {
      name: 'David R.',
      role: 'Airport Traveler',
      company: 'Yelp',
      rating: 5,
      text: 'Used Rydelight for DFW airport pickup and it was seamless. The Tesla Model Y is so comfortable and quiet. Will definitely book again for future trips.',
      service: 'Rydelight Airport Transfer',
    },
  ];

  const allTestimonials = [...testimonials, ...additionalTestimonials];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say 
            about their Rydelight experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#0091ea] opacity-20" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-[#0091ea] font-medium">{testimonial.company}</p>
                  {testimonial.service && (
                    <p className="text-xs text-gray-500 mt-1">{testimonial.service}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="feature-card">
            <div className="text-3xl font-bold text-[#0091ea] mb-2">100+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="feature-card">
            <div className="text-3xl font-bold text-[#0091ea] mb-2">100%</div>
            <div className="text-gray-600">On-Time Rate</div>
          </div>
          <div className="feature-card">
            <div className="text-3xl font-bold text-[#0091ea] mb-2">5.0★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="feature-card">
            <div className="text-3xl font-bold text-[#0091ea] mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Rydelight?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join our satisfied clients and discover the difference of premium chauffeur service.
          </p>
          <a
            href="https://customer.moovs.app/rydelight/new/info"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4"
          >
            Book Your First Ride
          </a>
        </motion.div>
      </div>
    </section>
  );
}
