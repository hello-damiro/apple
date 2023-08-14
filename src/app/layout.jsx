import './globals.css';
import sfpro from '../data/localFonts';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Apple',
  description: 'Apple website clone generated using create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={sfpro}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
