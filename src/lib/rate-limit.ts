const rateLimit = new Map<string, { count: number; resetTime: number }>();

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10);
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);

export function checkRateLimit(identifier: string): {
  success: boolean;
  remaining: number;
  resetIn: number;
} {
  const now = Date.now();
  const record = rateLimit.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1, resetIn: WINDOW_MS };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      success: false,
      remaining: 0,
      resetIn: record.resetTime - now,
    };
  }

  record.count++;
  return {
    success: true,
    remaining: MAX_REQUESTS - record.count,
    resetIn: record.resetTime - now,
  };
}

// Clean up expired entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimit) {
      if (now > record.resetTime) {
        rateLimit.delete(key);
      }
    }
  }, 60000);
}
