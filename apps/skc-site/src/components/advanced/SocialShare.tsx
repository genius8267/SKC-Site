'use client';

import { motion } from 'framer-motion';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  variant?: 'horizontal' | 'vertical' | 'floating';
}

export function SocialShare({ url, title, description, variant = 'horizontal' }: SocialShareProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'Check out this page from SKC';
  const shareDescription = description || 'SKC - Global ESG Material Solutions Company';

  const platforms = [
    {
      name: 'Twitter',
      icon: '𝕏',
      color: '#000000',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: '#0077b5',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: '👥',
      color: '#1877f2',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Email',
      icon: '📧',
      color: '#ea4335',
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareDescription + '\n\n' + shareUrl)}`,
    },
  ];

  const handleShare = (platform: typeof platforms[0]) => {
    window.open(platform.url, '_blank', 'width=600,height=400');

    // Track share event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share', {
        method: platform.name,
        content_type: 'article',
        item_id: shareUrl,
      });
    }
  };

  const containerClass = {
    horizontal: 'flex items-center gap-3',
    vertical: 'flex flex-col gap-3',
    floating: 'fixed right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3',
  }[variant];

  return (
    <div className={containerClass}>
      <span className="text-sm text-text-secondary">Share:</span>
      {platforms.map((platform, index) => (
        <motion.button
          key={platform.name}
          onClick={() => handleShare(platform)}
          className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:border-skc-red/40 transition-all"
          initial={{ opacity: 0, x: variant === 'floating' ? 20 : 0, y: variant === 'horizontal' ? 10 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Share on ${platform.name}`}
        >
          <span className="text-lg">{platform.icon}</span>
        </motion.button>
      ))}

      {/* Native share (mobile) */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <motion.button
          onClick={() => {
            navigator.share({
              title: shareTitle,
              text: shareDescription,
              url: shareUrl,
            });
          }}
          className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:border-skc-red/40 transition-all md:hidden"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Share"
        >
          <span className="text-lg">↗️</span>
        </motion.button>
      )}
    </div>
  );
}
