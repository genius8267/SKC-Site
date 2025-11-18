import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ThemeToggle } from '@/components/advanced/ThemeToggle';
import { ScrollProgress, ReadingProgress } from '@/components/advanced/ScrollProgress';
import { BackToTop, BackToTopWithProgress } from '@/components/advanced/BackToTop';
import { CookieConsent } from '@/components/advanced/CookieConsent';
import { AccessibilityMenu } from '@/components/advanced/AccessibilityMenu';
import { SocialShare } from '@/components/advanced/SocialShare';
import { ReadingTime, ReadingTimeBadge } from '@/components/advanced/ReadingTime';

// Sample content for reading time demo
const sampleArticle = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  `.repeat(50); // ~300 words

export default function AdvancedFeaturesPage() {
  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="section-shell space-y-32">
          {/* Page header */}
          <section className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              <span className="text-gradient-skc">Advanced</span> Features
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              World-class UX features: dark mode, accessibility, social sharing, and more
            </p>
            <div className="mt-6">
              <ReadingTimeBadge content={sampleArticle} />
            </div>
          </section>

          {/* Dark Mode */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Dark Mode</h2>
              <p className="text-text-secondary mb-8">
                System preference detection + manual toggle
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-medium mb-2">Theme Toggle</h3>
                  <p className="text-sm text-text-secondary">
                    Switch between light and dark modes. Theme persists across sessions.
                  </p>
                </div>
                <ThemeToggle />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="glass-card p-4">
                  <div className="font-medium mb-1">Features:</div>
                  <ul className="text-text-secondary space-y-1">
                    <li>• System preference detection</li>
                    <li>• Smooth transitions</li>
                    <li>• localStorage persistence</li>
                    <li>• SSR-safe (no flicker)</li>
                  </ul>
                </div>
                <div className="glass-card p-4">
                  <div className="font-medium mb-1">Uses:</div>
                  <ul className="text-text-secondary space-y-1">
                    <li>• next-themes</li>
                    <li>• CSS custom properties</li>
                    <li>• Framer Motion animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Scroll Progress */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Scroll Progress</h2>
              <p className="text-text-secondary">
                Visual reading progress indicator at the top
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <p className="text-text-secondary">
                  The red gradient bar at the very top of this page shows your scroll progress.
                  Try scrolling up and down to see it in action!
                </p>
                <div className="p-4 bg-background-secondary rounded-lg">
                  <code className="text-sm text-accent-primary">
                    &lt;ScrollProgress /&gt;
                  </code>
                  <p className="text-xs text-text-tertiary mt-2">
                    Uses Framer Motion's useScroll hook for smooth animations
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Top */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Back to Top Button</h2>
              <p className="text-text-secondary">
                Floating button with scroll progress circle
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <p className="text-text-secondary mb-4">
                Scroll down 500px to see the back-to-top button appear in the bottom-right corner.
                The circular progress ring shows how far you've scrolled.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="glass-card p-4">
                  <div className="font-medium mb-2">Features:</div>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Appears after 500px scroll</li>
                    <li>• Progress circle indicator</li>
                    <li>• Smooth scroll animation</li>
                    <li>• Hover/tap animations</li>
                  </ul>
                </div>
                <div className="glass-card p-4">
                  <div className="font-medium mb-2">Variants:</div>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Basic (simple arrow)</li>
                    <li>• WithProgress (circle)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Consent */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Cookie Consent</h2>
              <p className="text-text-secondary">
                GDPR-compliant cookie consent banner
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <p className="text-text-secondary mb-4">
                The cookie banner appears 1 second after page load (if not previously accepted).
                Clear your cookies or use incognito mode to see it again.
              </p>
              <div className="p-4 bg-background-secondary rounded-lg">
                <div className="font-medium mb-2">Stores:</div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• <code>cookie-consent: accepted</code> (365 days)</li>
                  <li>• <code>cookie-consent: declined</code> (30 days)</li>
                </ul>
                <p className="text-xs text-text-tertiary mt-3">
                  Integrates with Google Analytics consent mode
                </p>
              </div>
            </div>
          </section>

          {/* Accessibility Menu */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Accessibility Menu</h2>
              <p className="text-text-secondary">
                Font size, contrast, and motion controls
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <p className="text-text-secondary mb-4">
                Click the ♿ button in the bottom-right (above back-to-top) to open the accessibility panel.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl mb-2">A+</div>
                  <div className="text-sm font-medium">Font Size</div>
                  <div className="text-xs text-text-tertiary mt-1">3 levels</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl mb-2">◐</div>
                  <div className="text-sm font-medium">Contrast</div>
                  <div className="text-xs text-text-tertiary mt-1">Normal/High</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl mb-2">⏸</div>
                  <div className="text-sm font-medium">Motion</div>
                  <div className="text-xs text-text-tertiary mt-1">Reduce/Normal</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-background-secondary rounded-lg text-sm text-text-secondary">
                Preferences persist in localStorage and apply site-wide instantly.
              </div>
            </div>
          </section>

          {/* Social Share */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Social Sharing</h2>
              <p className="text-text-secondary">
                Share to Twitter, LinkedIn, Facebook, Email
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Horizontal</h3>
                  <SocialShare
                    variant="horizontal"
                    title="SKC Advanced Features"
                    description="Check out these amazing features on SKC's website!"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-3">Vertical</h3>
                  <SocialShare
                    variant="vertical"
                    title="SKC Advanced Features"
                  />
                </div>
                <div className="p-4 bg-background-secondary rounded-lg text-sm text-text-secondary">
                  Tracks share events with Google Analytics. Mobile devices show native share menu.
                </div>
              </div>
            </div>
          </section>

          {/* Reading Time */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Reading Time Estimator</h2>
              <p className="text-text-secondary">
                Automatically calculates reading time for articles
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">This sample article:</span>
                  <ReadingTime content={sampleArticle} />
                </div>
                <div className="p-4 bg-background-secondary rounded-lg">
                  <div className="font-medium mb-2">How it works:</div>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Counts words in content</li>
                    <li>• Assumes 200 words per minute</li>
                    <li>• Strips HTML tags if present</li>
                    <li>• Rounds up to nearest minute</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4">
                    <div className="text-xs text-text-tertiary mb-1">Inline</div>
                    <ReadingTime content="Short text here" />
                  </div>
                  <div className="glass-card p-4">
                    <div className="text-xs text-text-tertiary mb-1">Badge</div>
                    <ReadingTimeBadge content={sampleArticle} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Print Optimization */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4">Print Optimization</h2>
              <p className="text-text-secondary">
                Printer-friendly styles (try Cmd/Ctrl + P)
              </p>
            </div>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <p className="text-text-secondary mb-4">
                Press <kbd className="px-2 py-1 bg-white/5 rounded">⌘P</kbd> (Mac) or{' '}
                <kbd className="px-2 py-1 bg-white/5 rounded">Ctrl+P</kbd> (Windows) to preview print styles.
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-background-secondary rounded-lg">
                  <div className="font-medium mb-1">Hidden on print:</div>
                  <div className="text-text-secondary">
                    Header, footer, back-to-top, accessibility menu, cookie banner, social share buttons
                  </div>
                </div>
                <div className="p-3 bg-background-secondary rounded-lg">
                  <div className="font-medium mb-1">Optimized:</div>
                  <div className="text-text-secondary">
                    White background, black text, simplified borders, URLs shown for links
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="glass-card p-12 text-center">
            <h3 className="text-3xl font-light mb-8">All Advanced Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: '🌓', label: 'Dark Mode', desc: 'Light/dark themes' },
                { icon: '📊', label: 'Scroll Progress', desc: 'Reading indicator' },
                { icon: '↑', label: 'Back to Top', desc: 'With progress' },
                { icon: '🍪', label: 'Cookie Consent', desc: 'GDPR compliant' },
                { icon: '♿', label: 'Accessibility', desc: 'Font/contrast' },
                { icon: '↗️', label: 'Social Share', desc: '4 platforms' },
                { icon: '📖', label: 'Reading Time', desc: 'Auto-calculate' },
                { icon: '🖨️', label: 'Print Styles', desc: 'Optimized' },
              ].map((feature) => (
                <div key={feature.label} className="text-center">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <div className="font-medium text-sm">{feature.label}</div>
                  <div className="text-xs text-text-tertiary mt-1">{feature.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-background-secondary rounded-lg">
              <p className="text-sm text-text-secondary">
                All features are production-ready, fully tested, and follow WCAG 2.1 AA accessibility standards.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />

      {/* Advanced Features (active on this page) */}
      <BackToTopWithProgress />
      <AccessibilityMenu />
      <CookieConsent />
    </>
  );
}
