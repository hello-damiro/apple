'use client';

import { useEffect } from 'react';
import { useNav } from '@/context/NavContext';
import { useThemeUpdate } from '@/context/ThemeContext';
import { useStickyheadUpdate } from '@/context/StickyheadContext';
import { cn } from '@/lib/utils';
import Hero from '@/components/Hero';
import Ribbon from '@/components/Ribbon';
import Disclaimer from '@/components/Disclaimer';
import { HeroTitle, HeroSubText, PromoTitle, PromoSubText, LinkText, PreText, MoreText } from '@/components/Texts';

export default function Mac() {
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
      <Hero src='/images/hero/hero_iphone14_yellow.jpeg' title='Some title here'>
        <HeroTitle text='iPhone 14' />
        <HeroSubText text='Wonderfull.' />
        <div>
          <LinkText text='Learn more' icon='out' />
          <LinkText text='Buy' />
        </div>
      </Hero>

      <Disclaimer>
        <p>
          ◊ Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying
          Location. Only one Promotion Product per eligible Mac or eligible iPad per Qualified Purchaser. Offer subject
          to availability. While supplies last. View full terms and conditions of offer here.
        </p>
        <p>
          The promotional Apple Education Pricing on AppleCare+ is available for eligible products only when the
          eligible product and AppleCare+ are purchased directly from an Apple Store or concurrently from the online
          Apple Store for Education during the promotional period and cannot be combined with non-promotional Apple
          Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible
          for this promotional rate.
        </p>
        <p>
          This promotional AppleCare+ Education Pricing is applicable only to two-year paid upfront AppleCare+ for iPad
          and three-year paid upfront AppleCare+ for Mac and is not applicable to any recurring payment AppleCare+
          plans.
        </p>
        <p>
          Apple Education Pricing is available to current and newly accepted university students and their parents, as
          well as teachers and staff at all levels. Quantity limits apply.
        </p>
        <p>
          * Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at
          checkout in the U.S. for eligible Apple products purchased at Apple Store locations, apple.com, the Apple
          Store app, or by calling 1‑800‑MY‑APPLE, and is subject to credit approval and credit limit. See
          support.apple.com/kb/HT211204 for more information about eligible products. APR ranges may vary based on when
          you accepted an Apple Card. Cardholders who accept an Apple Card on and/or after August 10, 2023: Variable
          APRs for Apple Card, other than ACMI, range from 19.24% to 29.49% based on creditworthiness. Rates as of
          August 10, 2023. Existing cardholders: See your Customer Agreement for applicable rates and fee. If you buy an
          ACMI eligible product by choosing to pay in full with Apple Card (instead of using ACMI), that purchase is
          subject to the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI purchases are subject to the
          variable APR, not 0% APR. You’ll need to select AT&T, T‑Mobile, or Verizon as your carrier when you check out.
          An iPhone purchased with ACMI is always unlocked, so you can switch carriers at any time. ACMI is not
          available for purchases made online at the following special stores: Apple Employee Purchase Plan;
          participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and
          Veterans and Military Purchase Programs, or on refurbished devices. The last month’s payment for each product
          will be the product's purchase price, less all other payments at the monthly payment amount. ACMI financing is
          subject to change at any time for any reason, including but not limited to, installment term lengths and
          eligible products. See support.apple.com/kb/HT211204 for information about upcoming changes to ACMI financing.
          See the Apple Card Customer Agreement for more information about ACMI financing.
        </p>
        <p>
          ** Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at
          checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes
          and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer
          Agreement for more information. ACMI is not available for purchases made online at special storefronts. The
          last month’s payment for each product will be the product's purchase price, less all other payments at the
          monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not
          limited to, installment term lengths and eligible products. See support.apple.com/kb/HT211204 for information
          about upcoming changes to ACMI financing.
        </p>
        <ol className='space-y-2 ml-5 list-decimal'>
          <li>
            Screen size is measured diagonally. The displays on the 13-inch and 15-inch MacBook Air with M2 and the
            14-inch and 16-inch MacBook Pro have rounded corners at the top. When measured as a standard rectangular
            shape, the screens are 13.6 inches, 15.3 inches, 14.2 inches, and 16.2 inches diagonally (actual viewable
            area is less).
          </li>
          <li>1TB = 1 trillion bytes; actual formatted capacity less.</li>
          <li>
            Testing conducted by Apple in October 2020 using preproduction MacBook Air systems with Apple M1 chip and
            8-core GPU, configured with 8GB of RAM and 512GB SSD. The Apple TV app movie playback test measures battery
            life by playing back HD 1080p content with display brightness set to 8 clicks from bottom. Battery life
            varies by use and configuration. See apple.com/batteries for more information.
          </li>
          <li>
            Testing conducted by Apple in April and May 2023 using preproduction 15-inch MacBook Air systems with Apple
            M2, 8-core CPU, 10-core GPU, 8GB of RAM, and 256GB SSD. The Apple TV app movie playback test measures
            battery life by playing back HD 1080p content with display brightness set to 8 clicks from bottom. Battery
            life varies by use and configuration. See apple.com/batteries for more information.
          </li>
          <li>
            Testing conducted by Apple in May 2022 using preproduction 13‑inch MacBook Pro systems with Apple M2, 8‑core
            CPU, 10‑core GPU, 8GB of RAM, and 256GB SSD. The wireless web test measures battery life by wirelessly
            browsing 25 popular websites with display brightness set to 8 clicks from bottom. The Apple TV app movie
            playback test measures battery life by playing back HD 1080p content with display brightness set to 8 clicks
            from bottom. Battery life varies by use and configuration. See apple.com/batteries for more information.
          </li>
          <li>
            Testing conducted by Apple in November and December 2022 using preproduction 16‑inch MacBook Pro systems
            with Apple M2 Pro, 12‑core CPU, 19‑core GPU, 16GB of RAM, and 1TB SSD. The wireless web test measures
            battery life by wirelessly browsing 25 popular websites with display brightness set to 8 clicks from bottom.
            The Apple TV app movie playback test measures battery life by playing back HD 1080p content with display
            brightness set to 8 clicks from bottom. Battery life varies by use and configuration. See
            apple.com/batteries for more information.
          </li>
          <li>Actual diagonal screen size is 23.5 inches.</li>
          <li>
            Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
            Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for
            credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or
            added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the
            description provided when estimate was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this
            information). Offer may not be available in all stores, and may vary between in-store and online trade-in.
            Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or
            limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in
            partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </li>
          <li>
            The Apple One free trial includes only services that you are not currently using through a free trial or a
            subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.
          </li>
          <li>
            New and qualified returning subscribers only. $6.99/month after free trial. Only one offer per Apple ID and
            only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you
            or your family purchases. This offer is not available if you or your Family have previously accepted an
            Apple TV+ three months free or one year free offer. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
          </li>
          <li>
            New and qualified returning subscribers only. $4.99/month after free trial. Only one offer per Apple ID and
            only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you
            or your family purchases. This offer is not available if you or your Family have previously accepted an
            Apple Arcade three months free offer. Offer good for 3 months after eligible device activation. Plan
            automatically renews until cancelled. Restrictions and other terms apply.
          </li>
          <li>
            Offer available to new subscribers who purchase an eligible device on or after September 7, 2022.
            $9.99/month after trial. Only one offer per Apple ID and only one offer per family if you’re part of a
            Family Sharing group, regardless of the number of devices you or your family purchases. Offer good for 3
            months after eligible device activation, from December 12, 2022. Plan automatically renews until cancelled.
            Restrictions and other terms apply.
          </li>
        </ol>
        <p>
          To access and use all Apple Card features and products available only to Apple Card users, you must add Apple
          Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is
          subject to credit approval, available only for qualifying applicants in the United States, and issued by
          Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
        <p>
          If you reside in the U.S. territories, please call Goldman Sachs at 877‑255‑5923 with questions about Apple
          Card.
        </p>
      </Disclaimer>
    </main>
  );
}
