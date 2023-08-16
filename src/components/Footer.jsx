'use client';

import { twMerge as merge } from 'tailwind-merge';
import { siteData } from '@/data/site';
import { Separator } from '@/components/ui/separator';
import { useNav } from '@/context/NavContext';
import Sitemap from './Sitemap';

const sites = siteData;

export default function Footer() {
  const showNav = useNav();
  return (
    <footer className={merge(showNav && 'hidden md:block', 'w-full bg-gray-lt text-xs font-light')}>
      <div className='container max-w-5xl mx-auto p-6'>
        <div className='grid grid-cols-1 md:grid-cols-5 md:gap-4'>
          {sites.map((site) => {
            return (
              <div key={site.column}>
                <Sitemap key={site.column} column={site.column} site={sites} />
              </div>
            );
          })}
        </div>
        <div className='mt-6 lg:mt-12 space-y-4 lg:space-y-2 text-gray-dk'>
          <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
          <Separator className='hidden md:block bg-gray-md' />
          <div className='flex flex-col-reverse md:flex-row justify-between gap-4'>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-10'>
              <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
              <div className='md:flex flex-row'>
                <h5 className='inline-block pr-2'>
                  Privacy <span className='pl-1'>&#124;</span>
                </h5>
                <h5 className='inline-block pr-2'>
                  Policy <span className='pl-1'>&#124;</span>
                </h5>
                <h5 className='inline-block pr-2'>
                  Terms of Use <span className='pl-1'>&#124;</span>
                </h5>
                <h5 className='inline-block pr-2'>
                  Sales and Refunds <span className='pl-1'>&#124;</span>
                </h5>
                <h5 className='inline-block pr-2'>
                  Legal <span className='pl-1'>&#124;</span>
                </h5>
                <h5 className='inline-block pr-2'>Site Map</h5>
              </div>
            </div>
            <h4>United States</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
