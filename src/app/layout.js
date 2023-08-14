import './globals.css';
import { sfpro } from '@/data/localFonts';

export const metadata = {
  title: 'Apple',
  description: 'Apple website clone generated using create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={classNames(sfpro.className)}>{children}</body>
    </html>
  );
}
