import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="text-center max-w-lg">
        <span className="chapter-label block mb-6">Page Not Found</span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6">
          <span className="text-gold">404</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
          The page you&apos;re looking for seems to have wandered off,
          like a verse waiting to be found.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-gold"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>

          <Link
            href="/books"
            className="btn-minimal"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore Books
          </Link>
        </div>
      </div>
    </div>
  );
}
