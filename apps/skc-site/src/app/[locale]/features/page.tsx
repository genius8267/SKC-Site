import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ContactForm } from '@/components/features/ContactForm';
import { ImageGallery, type GalleryImage } from '@/components/features/ImageGallery';
import { VideoGrid } from '@/components/features/VideoEmbed';
import { NewsletterSignup } from '@/components/features/NewsletterSignup';

// Sample gallery images (replace with actual SKC images)
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    alt: 'SKC Battery Manufacturing',
    title: 'Battery Manufacturing Facility',
    description: 'State-of-the-art copper foil production line',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    alt: 'Semiconductor Clean Room',
    title: 'Semiconductor Clean Room',
    description: 'Advanced semiconductor materials production',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800',
    alt: 'Research & Development',
    title: 'R&D Laboratory',
    description: 'Innovation in ESG materials',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    alt: 'Eco-friendly Materials',
    title: 'Eco-friendly Production',
    description: 'Biodegradable materials manufacturing',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    alt: 'Quality Control',
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800',
    alt: 'Global Operations',
    title: 'Global Operations',
    description: 'SKC facilities worldwide',
  },
];

// Sample videos (replace with actual SKC YouTube video IDs)
const videos = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ', // Replace with actual SKC video ID
    title: 'SKC Company Overview',
    description: 'Learn about our mission, values, and global impact',
  },
  {
    id: '2',
    videoId: 'dQw4w9WgXcQ', // Replace with actual SKC video ID
    title: 'Battery Materials Innovation',
    description: 'Advancing electric vehicle technology with copper foil',
  },
  {
    id: '3',
    videoId: 'dQw4w9WgXcQ', // Replace with actual SKC video ID
    title: 'Sustainable Manufacturing',
    description: 'Our commitment to eco-friendly production',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="section-shell space-y-32">
          {/* Page header */}
          <section className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              <span className="text-gradient-skc">Premium</span> Features
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experience our interactive components: search, contact forms, image galleries, and video showcases
            </p>
          </section>

          {/* Search demo */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Site-Wide Search</h2>
              <p className="text-text-secondary mb-8">
                Try pressing <kbd className="px-2 py-1 bg-white/5 rounded text-sm">⌘K</kbd> (Mac) or <kbd className="px-2 py-1 bg-white/5 rounded text-sm">Ctrl+K</kbd> (Windows) to open search
              </p>
              <div className="glass-card p-8 max-w-2xl mx-auto">
                <p className="text-sm text-text-secondary">
                  Our intelligent search powered by Fuse.js indexes all pages, products, news, and company information.
                  Try searching for: "battery", "CEO", "news", or "sustainability"
                </p>
              </div>
            </div>
          </section>

          {/* Contact form */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Contact Form</h2>
              <p className="text-text-secondary">
                Full validation with React Hook Form + Zod
              </p>
            </div>
            <ContactForm />
          </section>

          {/* Newsletter */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Newsletter Signup</h2>
              <p className="text-text-secondary">
                Stay updated with SKC news and announcements
              </p>
            </div>
            <div className="flex justify-center">
              <NewsletterSignup />
            </div>
          </section>

          {/* Image gallery */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Image Gallery</h2>
              <p className="text-text-secondary mb-8">
                Click any image to open the lightbox viewer
              </p>
            </div>
            <ImageGallery images={galleryImages} columns={3} />
          </section>

          {/* Video grid */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Video Showcase</h2>
              <p className="text-text-secondary">
                YouTube embeds with responsive design
              </p>
            </div>
            <VideoGrid videos={videos} columns={2} />
          </section>

          {/* Features summary */}
          <section className="glass-card p-12 text-center">
            <h3 className="text-3xl font-light mb-6">All Features Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-medium mb-2">Intelligent Search</h4>
                <p className="text-sm text-text-secondary">Fuse.js fuzzy search with keyboard shortcuts</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-medium mb-2">Contact Forms</h4>
                <p className="text-sm text-text-secondary">Zod validation + React Hook Form</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📰</div>
                <h4 className="font-medium mb-2">Newsletter</h4>
                <p className="text-sm text-text-secondary">Email subscription with validation</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🖼️</div>
                <h4 className="font-medium mb-2">Image Gallery</h4>
                <p className="text-sm text-text-secondary">Lightbox viewer with navigation</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎥</div>
                <h4 className="font-medium mb-2">Video Embeds</h4>
                <p className="text-sm text-text-secondary">YouTube integration with React YouTube</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-medium mb-2">Animations</h4>
                <p className="text-sm text-text-secondary">Framer Motion throughout</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
