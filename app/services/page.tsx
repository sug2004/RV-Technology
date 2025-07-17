'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'CNC Spindle Repair',
      description:
        'Dynamic balancing, rewinding, and complete repair of high-speed spindles including ceramic bearing replacement and reassembly.',
      image: '/CNC Spindle Repair.jpg',
    },
    {
      title: 'Ball Screw Repair',
      description:
        'Precision restoration and anti-backlash treatment for ball screws, lead screws, and roller screws of all makes.',
      image: '/Ball Screw Repair.jpeg',
    },
    {
      title: 'Servo & Spindle Motor Repair',
      description:
        'Complete rebuilding of servo/spindle motors including back EMF testing, brake unit exchange, and repainting.',
      image: '/motor_repair.jpg',
    },
    {
      title: 'Drive & VFD Repair',
      description:
        'Refurbishment of servo/spindle drives, robot 6-axis drives, and power units—tested with original FANUC & Siemens controllers.',
      image: '/Drive & VFD Repair.jpg',
    },
    {
      title: 'PCB Board Repair',
      description:
        'Testing and repair of CNC control PCBs, robot controllers, and industrial printed circuit boards using high-end diagnostics.',
      image: '/PCB Board Repair.jpeg',
    },
    {
      title: 'Encoder & Resolver Repair',
      description:
        'Accurate testing, realignment, and repair of encoders and resolvers from Heidenhain, Tamagawa, Panasonic, and more.',
      image: '/Encoder & Resolver Repair.webp',
    },
    {
      title: 'CNC Accessories',
      description:
        'Supply and support for teach pendants, LCD displays, operator panels, I/O boards, cables, and connectors.',
      image: '/CNC Accessories.jpg',
    },
    {
      title: 'Spare Parts Sales',
      description:
        'We stock and supply all major CNC machine spare parts including encoders, sensors, relays, contactors, and panel hardware.',
      image: '/Spare Parts Sales.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of CNC machine repair and refurbishing services, delivering precision, speed, and reliability for industries across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Need Help With CNC Machine Repairs?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                From single spindle service to complete machine overhaul, we’re equipped and ready. Contact us today for fast turnaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Card Component with Image
function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
