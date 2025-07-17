'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* About Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industrial Repair, Spares, and Service — your cost-efficient alternative to buying new OEM parts. We specialize in extending the life of your equipment through expert refurbishment.
              </p>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-6">
                  We reduce downtime and maintenance costs for manufacturing plants across India by repairing old and obsolete industrial electronics. Our highly skilled technicians offer professional and prompt service with exceptional results.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether it’s a servo motor, spindle drive, PCB, or teach pendant, we restore it to original performance—often with better turnaround and cost savings than OEM replacements.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">160+</h3>
                    <p className="text-gray-600">Supplier Partnerships</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">1000+</h3>
                    <p className="text-gray-600">OEM Brands Serviced</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">60,000+</h3>
                    <p className="text-gray-600">Parts Repaired</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600 mb-2">2x ROI</h3>
                    <p className="text-gray-600">In Cost Savings</p>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src="/Factory repair stats.png"
                  alt="Factory repair stats"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
                />
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
              {[
                { label: '40–60% Cost Savings', desc: 'Compared to buying new OEM parts' },
                { label: 'Rapid Turnaround', desc: 'Repairs completed within 2 weeks' },
                { label: 'Warranty Guaranteed', desc: '1-year in-service, 5-year shelf life' },
                { label: '60% Fewer Failures', desc: 'With fully tested refurbished units' },
              ].map(({ label, desc }, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">{label}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            {/* What We Do */}
            <div className="mb-20 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We specialize in the repair and service of FANUC, Mitsubishi, Siemens, and Yaskawa CNC components — including spindle amplifiers, servo motors, PCB boards, I/O modules, controllers, and accessories. All parts are tested before shipment using our in-house testing facilities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
