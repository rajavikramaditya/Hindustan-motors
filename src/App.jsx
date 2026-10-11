import { Toaster } from 'sonner';
import Home from '@/pages/Home';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Home />
        <Toaster position="top-right" richColors closeButton duration={3000} />
      </TooltipProvider>
    </ThemeProvider>
  );
}
