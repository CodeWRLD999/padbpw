import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    callTime: '',
    service: '',
    businessSector: '',
    email: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleConsultation = () => {
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.callTime) tempErrors.callTime = 'Call time is required';
    if (!formData.service) tempErrors.service = 'Service is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.mobile) tempErrors.mobile = 'Mobile number is required';
    else if (!/^\+?[\d\s-]{10,}$/.test(formData.mobile)) tempErrors.mobile = 'Mobile number is invalid';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/sendConsultationEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setSubmitted(true);
          setIsModalOpen(false);
        } else {
          alert(data.message || 'Failed to send consultation request');
        }
      } catch (err) {
        alert('An error occurred. Please try again later.');
        console.error('Submission error:', err);
      }
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#FF4040] to-[#4A2C2C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-lg sm:text-xl text-white/90">We'll contact you soon to confirm your consultation.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#FF4040] to-[#4A2C2C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-white/20 mb-6 sm:mb-8">
            <Calendar size={40} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Schedule your FREE consultation today and discover how we can transform your digital presence
          </p>
          <motion.button
            onClick={handleConsultation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#FF4040] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-xl inline-flex items-center gap-2 transition-all duration-300 shadow-lg"
          >
            Book Free Consultation
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isModalOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 bg-[#1A1A1A]/80 flex items-center justify-center z-50 ${isModalOpen ? '' : 'hidden'}`}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1A1A] p-6 sm:p-8 rounded-xl max-w-md w-full text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Book Your Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#4A4A4A] mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#4A4A4A] rounded-lg p-2 focus:outline-none focus:border-[#FF4040]"
                />
                {errors.name && <p className="text-[#FF4040] text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-[#4A4A4A] mb-2">Call Booking Time (London GMT) *</label>
                <input
                  type="datetime-local"
                  name="callTime"
                  value={formData.callTime}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#4A4A4A] rounded-lg p-2 focus:outline-none focus:border-[#FF4040]"
                />
                {errors.callTime && <p className="text-[#FF4040] text-sm mt-1">{errors.callTime}</p>}
              </div>
              <div>
                <label className="block text-[#4A4A4A] mb-2">Service Required *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#4A4A4A] rounded-lg p-2 focus:outline-none focus:border-[#FF4040] text-white"
                >
                  <option value="">Select a service</option>
                  <option value="All three">All three</option>
                  <option value="Webdesign/SEO">Webdesign/SEO</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="AI automation">AI automation</option>
                </select>
                {errors.service && <p className="text-[#FF4040] text-sm mt-1">{errors.service}</p>}
              </div>
              <div>
                <label className="block text-[#4A4A4A] mb-2">Business Sector</label>
                <input
                  type="text"
                  name="businessSector"
                  value={formData.businessSector}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#4A4A4A] rounded-lg p-2 focus:outline-none focus:border-[#FF4040]"
                />
              </div>
              <div>
                <label className="block text-[#4A4A4A] mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#4A4A4A] rounded-lg p-2 focus:outline-none focus:border-[#FF4040]"
                />
                {errors.email && <p className="text-[#FF4040] text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-[#4A4A4A] mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-[#4A4A4A] rounded-lg p-2 focus:outline-none focus:border-[#FF4040]"
                />
                {errors.mobile && <p className="text-[#FF4040] text-sm mt-1">{errors.mobile}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF4040] text-white py-2 rounded-lg hover:bg-[#4A2C2C] transition-colors duration-300 font-bold"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-[#4A4A4A] hover:text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}