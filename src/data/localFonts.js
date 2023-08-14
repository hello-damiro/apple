import localFont from 'next/font/local';

export const sfpro = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Text-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Text-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sfpro',
  preload: true,
});
