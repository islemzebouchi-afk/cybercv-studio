import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BuilderPage from "./pages/BuilderPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { default as Footer } from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/builder" element={<BuilderPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
  {/* الأكواد الموجودة حالياً */}
  <Footer /> 

      
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
