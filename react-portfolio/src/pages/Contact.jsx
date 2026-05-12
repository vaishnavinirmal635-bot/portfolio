import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-32 px-8 md:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Ready to collaborate on your next analytics or business solution? Send me a message and let's make it happen.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-12 text-slate-300">
            <div className="space-y-6">
              <p className="text-xl font-semibold text-white">Quick Contact</p>
              <p className="leading-relaxed text-lg">
                I’m available for freelance projects, full-time opportunities, or consulting on business analytics and data-driven marketing.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 mb-2">Email</p>
                  <a href="mailto:vaishnavinirmal635@gmail.com" className="text-white hover:text-yellow-300 transition duration-200 text-lg font-medium">vaishnavinirmal635@gmail.com</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 mb-2">LinkedIn</p>
                  <a href="https://linkedin.com/in/vaishnavi-nirmal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition duration-200 text-lg font-medium">linkedin.com/in/vaishnavi-nirmal</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 mb-2">GitHub</p>
                  <a href="https://github.com/vaishnavi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition duration-200 text-lg font-medium">github.com/vaishnavi</a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl font-semibold text-white">What I Offer</p>
              <ul className="space-y-4 text-lg">
                <li>• Business analytics dashboards</li>
                <li>• Data storytelling and reporting</li>
                <li>• Power BI and Excel automation</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/15 bg-transparent px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/15 bg-transparent px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full rounded-2xl border border-white/15 bg-transparent px-6 py-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10 text-lg resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded-full bg-yellow-400 px-8 py-4 text-black font-semibold hover:bg-yellow-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && (
              <p className={`text-center text-lg ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;