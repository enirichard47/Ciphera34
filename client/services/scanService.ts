import { ScanResponse } from "@shared/types";

export async function scanToken(address: string): Promise<ScanResponse> {
  const response = await fetch(`/api/scan/${encodeURIComponent(address)}`);

  if (!response.ok) {
    return {
      success: false,
      error: `Failed to scan token: ${response.statusText}`,
    };
  }

  return response.json();
}
