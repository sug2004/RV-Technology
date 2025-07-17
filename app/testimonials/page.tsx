'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStore Inc.',
      company: 'TechStore Inc.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%2C%20confident%20female%20executive%2C%20corporate%20headshot%2C%20business%20portrait%2C%20professional%20attire%2C%20modern%20office%20background%2C%20leadership%2C%20success%2C%20contemporary%20business%20leader&width=150&height=150&seq=testimonial-1&orientation=squarish',
      quote: 'The team delivered an exceptional e-commerce platform that exceeded our expectations. Our sales increased by 200% in the first quarter alone. Their attention to detail and commitment to excellence is unmatched.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, SecureBank',
      company: 'SecureBank',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20man%20CTO%2C%20confident%20male%20executive%2C%20corporate%20headshot%2C%20technology%20leader%2C%20business%20portrait%2C%20professional%20attire%2C%20modern%20office%20setting%2C%20innovation%2C%20tech%20industry%20professional&width=150&height=150&seq=testimonial-2&orientation=squarish',
      quote: 'Working with this team on our mobile banking app was a game-changer. They understood our security requirements perfectly and delivered a solution that our customers love. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GlobalTech',
      company: 'GlobalTech Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20business%20woman%20marketing%20director%2C%20confident%20female%20executive%2C%20corporate%20headshot%2C%20business%20portrait%2C%20professional%20attire%2C%20marketing%20professional%2C%20contemporary%20business%20leader&width=150&height=150&seq=testimonial-3&orientation=squarish',
      quote: 'Our new corporate website has transformed our online presence. Lead generation increased by 180% and we now rank on the first page for all our key terms. Outstanding work!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder, HealthFit App',
      company: 'HealthFit',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20man%20founder%20entrepreneur%2C%20confident%20male%20executive%2C%20corporate%20headshot%2C%20startup%20founder%2C%20business%20portrait%2C%20professional%20attire%2C%20innovative%20leader%2C%20tech%20entrepreneur&width=150&height=150&seq=testimonial-4&orientation=squarish',
      quote: 'The mobile app they developed for us is incredibly user-friendly and feature-rich. Our user engagement has increased dramatically, and the feedback from our customers has been overwhelmingly positive.',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Operations Manager, FoodieDelight',
      company: 'FoodieDelight',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20woman%20operations%20manager%2C%20confident%20female%20executive%2C%20corporate%20headshot%2C%20business%20portrait%2C%20professional%20attire%2C%20restaurant%20industry%20professional%2C%20contemporary%20business%20leader&width=150&height=150&seq=testimonial-5&orientation=squarish',
      quote: 'The restaurant ordering system they built has streamlined our entire operation. Order accuracy improved by 95% and customer satisfaction is at an all-time high. Exceptional service!',
      rating: 5
    },
    {
      id: 6,
      name: 'Robert Williams',
      position: 'VP of Technology, DataFlow',
      company: 'DataFlow Systems',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20man%20VP%20technology%2C%20confident%20male%20executive%2C%20corporate%20headshot%2C%20technology%20leader%2C%20business%20portrait%2C%20professional%20attire%2C%20data%20industry%20professional%2C%20innovation%20leader&width=150&height=150&seq=testimonial-6&orientation=squarish',
      quote: 'Their SaaS dashboard solution transformed how we visualize and analyze our data. The real-time analytics have given us insights we never had before. Truly impressive work!',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400`}
      ></i>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.slice(currentSlide * 3, (currentSlide + 1) * 3).map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover object-top mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center mt-8 space-x-4">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                        i === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
                      }`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers speak louder than words. Here's the impact we've made for our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">250%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">6</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create your own success story and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Start Your Project
              </a>
              <a 
                href="/projects"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}