'use client';

import Script from 'next/script';

/**
 * ElevenLabs Conversational AI Widget Provider
 * Loads the ElevenLabs widget script and renders the widget element.
 * The widget appears as a floating chat interface on all pages.
 */
export function ElevenLabsProvider() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || 'agent_6601ka7afwrte42bd6b9wyjezv7j';

  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        async
        type="text/javascript"
      />
      <div dangerouslySetInnerHTML={{ __html: `<elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>` }} />
    </>
  );
}
