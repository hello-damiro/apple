import './globals.css';
import sfpro from '../data/localFonts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavProvider } from '@/context/NavContext';
import { BreakpointProvider } from '@/context/breakpointContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { StickyheadProvider } from '@/context/StickyheadContext';

export const metadata = {
  title: 'Apple',
  description: 'Apple website clone generated using create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <BreakpointProvider>
        <ThemeProvider>
          <StickyheadProvider>
            <NavProvider>
              <body className={sfpro.className}>
                <Header />
                {children}
                <Footer />
              </body>
            </NavProvider>
          </StickyheadProvider>
        </ThemeProvider>
      </BreakpointProvider>
    </html>
  );
}
