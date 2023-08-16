import './globals.css';
import sfpro from '../data/localFonts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavProvider } from '@/context/NavContext';
import { BreakpointProvider } from '@/context/breakpointContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'Apple',
  description: 'Apple website clone generated using create next app',
};

export default function RootLayout({ children }) {
  // HEADER CONFIG
  const theme = 'dark';
  const stickyHead = true;

  return (
    <html lang='en' className='scroll-smooth'>
      <BreakpointProvider>
        <ThemeProvider>
          <NavProvider>
            <body className={sfpro.className}>
              <Header theme={theme} stickyHead={stickyHead} />
              {children}
              <Footer />
            </body>
          </NavProvider>
        </ThemeProvider>
      </BreakpointProvider>
    </html>
  );
}
