'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.enum(['general', 'products', 'partnership', 'career', 'investor'], {
    errorMap: () => ({ message: 'Please select a subject' }),
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form data:', data);

      // In production, send to API:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-medium mb-6">Contact Us</h3>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-skc-red">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all"
            placeholder="Your full name"
          />
          {errors.name && (
            <motion.p
              className="text-skc-red text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-skc-red">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all"
            placeholder="you@example.com"
          />
          {errors.email && (
            <motion.p
              className="text-skc-red text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        {/* Company & Phone (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all"
              placeholder="Your company (optional)"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject <span className="text-skc-red">*</span>
          </label>
          <select
            {...register('subject')}
            id="subject"
            className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="products">Product Information</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="career">Career Opportunities</option>
            <option value="investor">Investor Relations</option>
          </select>
          {errors.subject && (
            <motion.p
              className="text-skc-red text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.subject.message}
            </motion.p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-skc-red">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="w-full px-4 py-3 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all resize-none"
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && (
            <motion.p
              className="text-skc-red text-sm mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message.message}
            </motion.p>
          )}
        </div>

        {/* Submit button */}
        <div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-skc text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>

        {/* Status messages */}
        {submitStatus === 'success' && (
          <motion.div
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✓ Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✕ Something went wrong. Please try again.
          </motion.div>
        )}
      </div>
    </motion.form>
  );
}
