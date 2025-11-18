'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log('Newsletter signup:', data);

      // In production, send to API:
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setSubmitStatus('success');
      reset();

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="glass-card p-8 max-w-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-medium mb-2">Stay Updated</h3>
      <p className="text-sm text-text-secondary mb-6">
        Get the latest news and updates from SKC delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <div className="relative">
            <input
              {...register('email')}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 pr-32 bg-background-secondary border border-white/10 rounded-lg focus:border-skc-red/50 focus:outline-none focus:ring-2 focus:ring-skc-red/20 transition-all"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-1 top-1 px-6 py-2 bg-gradient-skc text-white text-sm font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </motion.button>
          </div>

          {errors.email && (
            <motion.p
              className="text-skc-red text-sm mt-2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>

        {submitStatus === 'success' && (
          <motion.div
            className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ✓ Successfully subscribed!
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ✕ Subscription failed. Please try again.
          </motion.div>
        )}
      </form>

      <p className="text-xs text-text-tertiary mt-4">
        By subscribing, you agree to receive marketing emails from SKC. You can unsubscribe at any time.
      </p>
    </motion.div>
  );
}
