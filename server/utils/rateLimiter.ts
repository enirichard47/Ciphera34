import Bottleneck from "bottleneck";

// Outgoing API rate limiter for providers
export const providerLimiter = new Bottleneck({
  reservoir: 10,               // Max calls available
  reservoirRefreshAmount: 10,  // Refills 10 calls...
  reservoirRefreshInterval: 1000, // ...every 1 sec → 10 req/sec max
  maxConcurrent: 2,            // How many at once
  minTime: 100                 // 100ms between calls
});
