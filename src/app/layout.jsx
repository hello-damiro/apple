import './globals.css';
import sfpro from '../data/localFonts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { NavProvider } from '@/context/NavContext';
import { BreakpointProvider } from '@/context/breakpointContext';
import { StickyheadProvider } from '@/context/StickyheadContext';

export const metadata = {
  title: 'Apple',
  description: 'Apple website clone generated using create next app',
};

export default function RootLayout({ children }) {
  // HEADER CONFIG
  const theme = 'dark';
  const stickyHead = false;

  return (
    <html lang='en' className='scroll-smooth'>
      <BreakpointProvider>
        <StickyheadProvider>
          <NavProvider>
            <ThemeProvider>
              <body className={sfpro.className}>
                <Header theme={theme} stickyHead={stickyHead} />
                {children}
                <Footer />
              </body>
            </ThemeProvider>
          </NavProvider>
        </StickyheadProvider>
      </BreakpointProvider>
    </html>
  );
}
