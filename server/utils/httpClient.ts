export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 3
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        timeout: 10000,
      });

      if (!response.ok) {
        if (response.status >= 500 && attempt < maxRetries - 1) {
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 * Math.pow(2, attempt))
          );
          continue;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      lastError =
        error instanceof Error
          ? error
          : new Error("Unknown error during fetch");

      if (attempt < maxRetries - 1) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, attempt))
        );
      }
    }
  }

  throw (
    lastError || new Error(`Failed to fetch after ${maxRetries} attempts`)
  );
}

export async function safeJsonParse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Response is not valid JSON");
  }

  return response.json() as Promise<T>;
}
