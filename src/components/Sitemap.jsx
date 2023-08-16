import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Sitemap({ column, site }) {
  const selectedSite = site.find((siteItem) => siteItem.column === column);
  if (!selectedSite) return null;
  return (
    <nav className='flex flex-col text-gray-dk'>
      {/* MOBILE VERSION */}
      <Accordion type='multiple' className='md:hidden'>
        {selectedSite.collection.map((section, index) => (
          <AccordionItem key={index} value={`site-${index}`} className=''>
            <AccordionTrigger className='font-semibold text-xs pb-3 hover:no-underline'>
              {section.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col gap-2'>
                {section.content.map((item, itemIndex) => (
                  <Link key={itemIndex} href={item.href} className='hover:underline text-xs'>
                    {item.link}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* DESKTOP VERSION */}
      <div className='hidden md:block space-y-6'>
        {selectedSite.collection.map((section, index) => (
          <div key={index} className=''>
            <h3 className='font-semibold pb-2'>{section.title}</h3>
            <div className='flex flex-col gap-2'>
              {section.content.map((item, itemIndex) => (
                <Link key={itemIndex} href={item.href} className='hover:underline'>
                  {item.link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
