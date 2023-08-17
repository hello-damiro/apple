'use client';

import { useEffect } from 'react';
import { useNav } from '@/context/NavContext';
import { useThemeUpdate } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import Hero from '@/components/Hero';
import Disclaimer from '@/components/Disclaimer';
import Ribbon from '@/components/Ribbon';
import Promo, { Half } from '@/components/Promo';
import { useStickyheadUpdate } from '@/context/StickyheadContext';
import { HeroTitle, HeroSubText, PromoTitle, PromoSubText, LinkText, PreText, MoreText } from '@/components/Texts';

export default function Home() {
  const showNav = useNav();
  const setTheme = useThemeUpdate();
  const setStickyHead = useStickyheadUpdate();

  useEffect(() => {
    setTheme('dark');
    setStickyHead(true);
  }, []);

  return (
    <main className={cn(showNav && 'hidden lg:block', 'min-h-screen')}>
      <Ribbon link='Shop iPhone'>
        Get $200–$640 in credit toward iPhone 14 <br className='block md:hidden' /> or iPhone 14 Pro when you trade in
        iPhone 11 or higher. <sup className='inline text-xxs'>3</sup>
      </Ribbon>

      <Hero
        src='/images/hero/hero_iphone14pro.jpeg'
        altsrc='/images/hero/hero_iphone14pro_mobile.jpeg'
        title='Some title here'
        theme='dark'
      >
        <PreText text='New' />
        <HeroTitle text='iPhone 14 Pro' />
        <HeroSubText>Pro. Beyond.</HeroSubText>
        <div>
          <LinkText text='Learn more' />
          <LinkText text='Buy' />
        </div>
      </Hero>

      <Hero src='/images/hero/hero_iphone14_yellow.jpeg' title='Some title here'>
        <HeroTitle text='iPhone 14' />
        <HeroSubText text='Wonderfull.' />
        <div>
          <LinkText text='Learn more' icon='out' />
          <LinkText text='Buy' />
        </div>
      </Hero>

      <Promo>
        <Half src='/images/promo/promo_bts2023_startframe.jpeg' title='bts 2023'>
          <PromoTitle>
            Save on Mac or iPad <br className='lg:hidden' />
            for college.
          </PromoTitle>
          <PromoSubText text='Plus get a gift card up to $150.' />
          <LinkText text='Shop now' />
        </Half>
        <Half src='/images/promo/promo_watch.jpeg' title='Apple Watch' theme='dark'>
          <PromoTitle text='WATCH' logo={true} />
          <PromoSubText text='A healthy leap ahead' />
          <div>
            <LinkText text='Learn more' />
            <LinkText text='Buy' />
          </div>
        </Half>
      </Promo>
      <Promo>
        <Half src='/images/promo/promo_vision_pro.jpeg' title='Vision Pro' position='down'>
          <PromoTitle text='Vision Pro' logo={true} />
          <PromoSubText>
            Welcome to the era <br className='md:hidden' />
            of spatial computing.
          </PromoSubText>
          <MoreText>Available early next year in the U.S.</MoreText>
          <LinkText text='Learn more' />
        </Half>
        <Half src='/images/promo/promo_iphone_tradein_promo.jpeg' title='Apple Watch'>
          <PromoTitle text='Trade In' logo={true} />
          <PromoSubText>
            Upgrade & save. <br className='md:hidden' />
            Its thet easy
          </PromoSubText>
          <LinkText text='See what your device is worth' />
        </Half>
      </Promo>
      <Promo>
        <Half src='/images/promo/promo_apple_news_womens_world_cup.jpeg' title='News'>
          <PromoTitle text='News' logo={true} />
          <PromoSubText>
            64 matches. 32 teams. <br />
            One place to follow every goal.
          </PromoSubText>
          <LinkText text="Follow the women's tournament" />
        </Half>
        <Half src='/images/promo/promo_card.jpeg' title='Promo Card'>
          <PromoTitle text='Card' logo={true} />
          <PromoSubText>
            Get up to 3% daily Cash Back <br />
            with every purchase.
          </PromoSubText>
          <div>
            <LinkText text='Learn more' />
            <LinkText text='Apply now' />
          </div>
        </Half>
      </Promo>
      <Disclaimer>
        <p>
          1. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying
          Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to
          availability. While supplies last. View full terms and conditions of offer here.
        </p>
        <p>
          2. $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after
          eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
        </p>
        <p>
          Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission.
          This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is
          obtained.
        </p>
        <p>Apple Vision Pro will be available early next year on apple.com and at Apple retail stores in the U.S.</p>
        <p>
          To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with
          the latest version of iOS or iPadOS. Update to the latest version by going to Settings General Software
          Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
        <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
        <p>A subscription is required for Apple TV+.</p>
        <p>
          Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All
          rights reserved.
        </p>
      </Disclaimer>
    </main>
  );
}
