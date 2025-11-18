'use client';

import { motion } from 'framer-motion';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useInView } from '@/hooks/useInView';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  autoplay?: boolean;
}

export function VideoEmbed({ videoId, title, description, autoplay = false }: VideoEmbedProps) {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // Access to player in all event handlers via event.target
    console.log('YouTube player ready:', event.target);
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="relative aspect-video bg-background-secondary">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
          className="absolute inset-0 w-full h-full"
          iframeClassName="w-full h-full"
        />
      </div>

      {(title || description) && (
        <div className="p-6">
          {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
          {description && <p className="text-sm text-text-secondary">{description}</p>}
        </div>
      )}
    </motion.div>
  );
}

// Multi-video grid component
interface VideoGridProps {
  videos: Array<{
    id: string;
    videoId: string;
    title: string;
    description?: string;
  }>;
  columns?: 2 | 3;
}

export function VideoGrid({ videos, columns = 2 }: VideoGridProps) {
  const gridCols = columns === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-8`}>
      {videos.map((video) => (
        <VideoEmbed
          key={video.id}
          videoId={video.videoId}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
  );
}
