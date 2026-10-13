import { Toaster } from 'sonner';
import Home from '@/pages/Home';
import Models from '@/pages/Models';
import ModelDetail from '@/pages/ModelDetail';
import About from '@/pages/About';
import Dealership from '@/pages/Dealership';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useRoute } from '@/lib/router';

function Page({ path }) {
  if (path === '/models') return <Models />;
  if (path.startsWith('/models/')) return <ModelDetail slug={path.slice('/models/'.length)} />;
  if (path === '/about') return <About />;
  if (path === '/dealership') return <Dealership />;
  return <Home />;
}

export default function App() {
  const { path } = useRoute();
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Header path={path} />
          <main>
            <Page path={path} />
          </main>
          <Footer />
          <WhatsAppFab />
        </div>
        <Toaster position="top-right" richColors closeButton duration={3000} />
      </TooltipProvider>
    </ThemeProvider>
  );
}
