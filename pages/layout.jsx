import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <main className="relative font-montserrat overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
