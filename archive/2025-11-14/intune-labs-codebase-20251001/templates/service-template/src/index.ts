export function handler() {
  return { status: 200, body: 'Hello from service-template' };
}

if (require.main === module) {
  // Basic local runner for quick testing.
  // In production this service should launch via a dedicated framework/server.
  // eslint-disable-next-line no-console
  console.log(handler());
}
