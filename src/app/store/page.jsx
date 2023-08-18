'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useNav } from '@/context/NavContext';
import { useThemeUpdate } from '@/context/ThemeContext';
import { useStickyheadUpdate } from '@/context/StickyheadContext';
import { PillText, H3 } from '@/components/Texts';
import Ribbon from '@/components/Ribbon';
import Disclaimer from '@/components/Disclaimer';
import Container from '@/components/Container';
import Slider from '@/components/Slider';
import SliderStore from './slider-store.jsx';
import SliderLatest from './slider-latest.jsx';
import StoreDisclaimer from './store-disclaimer';
import StoreHero from './store-hero';

export default function Store() {
  const showNav = useNav();
  const setTheme = useThemeUpdate();
  const setStickyHead = useStickyheadUpdate();

  useEffect(() => {
    setTheme('light');
    setStickyHead(false);
  }, []);

  return (
    <main className={cn(showNav && 'hidden lg:block', 'min-h-screen')}>
      <Ribbon link='Shop iPhone'>
        Get $200–$640 in credit toward iPhone 14 <br className='block md:hidden' /> or iPhone 14 Pro when you trade in
        iPhone 11 or higher. <sup className='inline text-xxs'>3</sup>
      </Ribbon>

      <Container
        className='flex lg:flex-row flex-col w-full lg:items-center gap-12 py-20 justify-between'
        children={<StoreHero />}
        uncontained={
          <Slider scrollWidth={120} className={'pb-2'}>
            <SliderStore width={120} />
          </Slider>
        }
      />

      <Container
        className='pt-14 pb-2'
        uncontained={
          <Slider scrollWidth={400}>
            <SliderLatest width={400} />
          </Slider>
        }
      >
        <H3>
          The latest. <span className='text-gray-dk'>Take a look at what’s new, right now.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-6'>
        <H3>
          Help is here. <span className='text-gray-dk'>Whenever and however you need it.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-6'>
        <H3>
          The Apple Store difference. <span className='text-gray-dk'>Even more reasons to shop with us.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-6'>
        <H3>
          Accessories. <span className='text-gray-dk'>Essentials that pair perfectly with your favorite devices.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-6'>
        <H3>
          Loud and clear. <span className='text-gray-dk'>Unparalleled choices for rich, high-quality sound.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-6'>
        <H3>
          The Apple experience. <span className='text-gray-dk'>Do even more with Apple products and services.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-6'>
        <H3>
          Special stores. <span className='text-gray-dk'>Exclusive savings for businesses, school, and more.</span>
        </H3>
      </Container>

      <Container className='pt-14 pb-10 flex flex-col gap-5'>
        <H3>Quick Links</H3>
        <div className='flex flex-row flex-wrap gap-3'>
          <PillText text={'Order Status'} />
          <PillText text={'Shopping Help'} />
          <PillText text={'Returns'} />
          <PillText text={'Your Saves'} />
        </div>
      </Container>

      <Disclaimer>
        <StoreDisclaimer />
      </Disclaimer>
    </main>
  );
}
