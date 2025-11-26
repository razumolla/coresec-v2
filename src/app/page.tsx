import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            coresec-v2 + shadcn/ui
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Next.js app created with pnpm + Tailwind, now using shadcn
            components.
          </p>
          <Button className="w-full">Test button</Button>
        </CardContent>
      </Card>
    </main>
  );
}
