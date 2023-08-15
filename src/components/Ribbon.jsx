import Link from 'next/link';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { MdChevronRight } from 'react-icons/md';

export default function Ribbon({ children, link, theme, delay = 1 }) {
  const textColor = theme === 'dark' ? 'text-brand-white' : 'text-brand-black';
  const bgColor = theme === 'dark' ? 'bg-gray-bk' : 'bg-brand-white';
  const finalColor = theme === 'dark' ? '#1c1c1d' : '#fff';

  return (
    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ delay: delay }}>
      <motion.div
        initial={{ backgroundColor: finalColor }}
        animate={{ backgroundColor: [finalColor, '#007AFF', finalColor] }}
        transition={{ delay: delay, duration: 1.2 }}
        className={classNames(textColor, bgColor, 'w-full flex justify-center items-center')}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          className='px-4 py-3 text-center text-sm font-light'
        >
          {children}
          <Link href={'/iphone'} className='text-brand-blue pl-2 inline-block'>
            <div className='flex items-center hover:underline underline-offset-4'>
              {link}
              <MdChevronRight size={18} className='pt-0.5' />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
