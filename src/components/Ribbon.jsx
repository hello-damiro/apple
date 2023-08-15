import Link from 'next/link';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { MdChevronRight } from 'react-icons/md';

export default function Ribbon({ children, link, theme }) {
  const textColor = theme === 'dark' ? 'text-brand-white' : 'text-brand-black';
  const bgColor = theme === 'dark' ? '#000' : '#fff';
  const finalColor = theme === 'dark' ? '#1c1c1d' : '#fff';

  return (
    <motion.div
      initial={{ backgroundColor: bgColor, height: 0 }}
      animate={{ backgroundColor: [bgColor, '#007AFF', finalColor], height: 'auto' }}
      transition={{ delay: 1 }}
      className={classNames(textColor, `bg-[${bgColor}], 'w-full flex justify-center items-center'`)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='px-4 py-3 text-center text-sm font-light'
      >
        {children}
        <Link href={'/iphone'} className='text-brand-blue pl-2 inline-block'>
          <div className='flex items-center'>
            {link}
            <MdChevronRight />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
