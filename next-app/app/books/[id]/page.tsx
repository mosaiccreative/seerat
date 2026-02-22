import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookDetailContent } from '@/components/pages/BookDetailContent';
import { books } from '@/data/books';

interface BookPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all books
export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

// Generate metadata for each book
export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  const pageTitle = `${book.title} (${book.year}) — ${book.type}`;
  const pageDescription = book.description.length > 160
    ? book.description.substring(0, 157) + '...'
    : book.description;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://surinderseerat.com/books/${id}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: book.coverImage ? [{ url: book.coverImage }] : ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: book.coverImage ? [book.coverImage] : ['/og-image.png'],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  return <BookDetailContent bookId={id} />;
}
