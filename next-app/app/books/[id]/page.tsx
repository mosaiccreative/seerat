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

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} | Surinder Seerat`,
      description: book.description,
      images: book.coverImage ? [{ url: book.coverImage }] : undefined,
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
