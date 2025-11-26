import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          Oops! Page Not Found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Button asChild size="lg">
          <Link href="/">BACK TO HOME</Link>
        </Button>
      </div>
    </div>
  );
}
