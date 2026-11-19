import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from '../common/ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-text font-alexandria antialiased selection:bg-brand-primary selection:text-brand-dark">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
