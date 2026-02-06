import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionProvider } from "@/hooks/useMotionPreference";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Books from "./pages/Books";
import About from "./pages/About";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BookDetail from "./pages/BookDetail";
import Store from "./pages/Store";
import Course from "./pages/Course";
import Policies from "./pages/Policies";
import GhazalHistory from "./pages/GhazalHistory";
import Tishnagi from "./pages/Tishnagi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
        </BrowserRouter>
      </TooltipProvider>
    </MotionProvider>
  </QueryClientProvider>
);

export default App;
