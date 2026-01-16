import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppChat from "@/components/ui/whatsapp-chat";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home.tsx";
import Services from "@/pages/services.tsx";
import Destinations from "@/pages/destinations.tsx";
import About from "@/pages/about.tsx";
import Resources from "@/pages/resources.tsx";
import Contact from "@/pages/contact.tsx";
import UniversityGuide from "@/pages/university-guide.tsx";
import EssayTips from "@/pages/essay-tips.tsx";
import TestPrep from "@/pages/test-prep.tsx";
import Scholarships from "@/pages/scholarships.tsx";
import Checklist from "@/pages/checklist.tsx";
import VisaRequirements from "@/pages/visa-requirements.tsx";
import Booking from "@/pages/booking.tsx";
import NotFound from "@/pages/not-found.tsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/destinations" component={Destinations} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/university-guide" component={UniversityGuide} />
      <Route path="/resources/essay-tips" component={EssayTips} />
      <Route path="/resources/test-prep" component={TestPrep} />
      <Route path="/resources/scholarships" component={Scholarships} />
      <Route path="/resources/checklist" component={Checklist} />
      <Route path="/resources/visa-requirements" component={VisaRequirements} />
      <Route path="/booking" component={Booking} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-slate-50">
          <ScrollToTop />
          <Header />
          <main className="relative">
            <Router />
          </main>
          <Footer />
        </div>
        <WhatsAppChat />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
