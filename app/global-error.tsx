"use client";
import { Button } from "@/components/ui/button";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="flex flex-col justify-between items-center">
        <h1>Global Error</h1>
        <pre>{error.message}</pre>

        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
