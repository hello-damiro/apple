import './globals.css';
import sfpro from '../data/localFonts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { NavProvider } from '@/context/NavContext';

export const metadata = {
  title: 'Apple',
  description: 'Apple website clone generated using create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <NavProvider>
        <ThemeProvider>
          <body className={sfpro}>
            <Header />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </NavProvider>
    </html>
  );
}
