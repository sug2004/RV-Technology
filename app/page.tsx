'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              GLOBAL CNC SPARES <br />
              <span className="text-orange-400">RV TECHNOLOGIES</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
              All Type of CNC Spindle, Grinding Spindle & Ballscrew Service. All type of CNC Machine Spare Parts Sales.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Let's Work Together
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We specialize in precision engineering, fast turnaround times, and unmatched reliability for all your CNC machine needs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Complete CNC Spindle Services',
          desc: 'We provide comprehensive spindle repairs, rewinding, bearing replacement, and dynamic balancing to ensure optimal performance and longevity.',
          icon: 'ri-settings-3-line',
          color: 'orange',
        },
        {
          title: 'Precision Ball Screw Repair',
          desc: 'High-accuracy repair and refurbishing of ball screws, lead screws, and roller screws for all machine brands, ensuring micrometric precision.',
          icon: 'ri-tools-line',
          color: 'gray',
        },
        {
          title: 'Fast & Reliable Turnaround',
          desc: 'Minimal downtime with rapid diagnostics, express servicing, and pan-India pickup/delivery of spindles and CNC components.',
          icon: 'ri-time-line',
          color: 'orange',
        },
      ].map(({ title, desc, icon, color }, idx) => (
        <div
          key={idx}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`w-12 h-12 flex items-center justify-center bg-${color}-100 rounded-lg mb-6`}>
            <i className={`${icon} text-2xl text-${color}-600`}></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Featured Services Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Trusted CNC spindle and drive repair services, backed by precision and speed.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      {[
        {
          title: 'CNC Spindle Repair',
          description: 'Dynamic balancing, rewinding, and complete repair of high-speed spindles.',
          image: '/CNC Spindle Repair.jpg',
        },
        {
          title: 'Ball Screw Repair',
          description: 'Anti-backlash treatment for ball screws, lead screws, and roller screws.',
          image: '/Ball Screw Repair.jpeg',
        },
        {
          title: 'Servo & Spindle Motor Repair',
          description: 'Rebuilding of motors with back EMF testing and brake unit exchange.',
          image: '/motor_repair.jpg',
        },
      ].map((service, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <Link
        href="/services"
        className="inline-block border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors"
      >
        View All Services
      </Link>
    </div>
  </div>
</section>



        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let's discuss how we can help you achieve your goals with innovative digital solutions tailored to your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-block border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20collaborating%20in%20modern%20office%2C%20diverse%20group%20of%20people%20working%20together%2C%20creative%20brainstorming%20session%2C%20contemporary%20workspace%2C%20natural%20lighting%2C%20productive%20atmosphere%2C%20teamwork%20and%20innovation%2C%20corporate%20environment%2C%20strategic%20planning%20meeting&width=600&height=400&seq=cta-image&orientation=landscape"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
