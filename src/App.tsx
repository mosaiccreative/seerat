import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionProvider } from "@/hooks/useMotionPreference";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eagerly load the home page for fast initial load
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const Books = lazy(() => import("./pages/Books"));
const About = lazy(() => import("./pages/About"));
const Media = lazy(() => import("./pages/Media"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BookDetail = lazy(() => import("./pages/BookDetail"));
const Store = lazy(() => import("./pages/Store"));
const Course = lazy(() => import("./pages/Course"));
const Policies = lazy(() => import("./pages/Policies"));
const GhazalHistory = lazy(() => import("./pages/GhazalHistory"));
const Tishnagi = lazy(() => import("./pages/Tishnagi"));

const queryClient = new QueryClient();

// Minimal loading fallback to prevent layout shift
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <MotionProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:id" element={<BookDetail />} />
                <Route path="/store" element={<Store />} />
                <Route path="/course" element={<Course />} />
                <Route path="/about" element={<About />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/ghazal-history" element={<GhazalHistory />} />
                <Route path="/tishnagi" element={<Tishnagi />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </MotionProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
