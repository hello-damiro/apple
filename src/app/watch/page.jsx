import Disclaimer from '@/components/Disclaimer';
// import Picture from '@/components/Picture';
import PictureAdaptive from '@/components/PictureAdaptive';

export default async function Watch() {
  const srcImage = '/images/home-carousel/1378x774_B.jpg';
  const adaptiveSrcImage = '/images/home-carousel/548x1186_B.jpg';
  return (
    <div>
      <div className='container mx-auto'>
        {/* <Picture src={srcImage} alt='some alts' aspectRatio='aspect-video' className='rounded-xl' /> */}
        <PictureAdaptive src={srcImage} alt='some alts' aspectRatio='aspect-video' className='rounded-xl' />
      </div>
      <Disclaimer>
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
          Apple Watch Series 8 and Apple Watch SE have a water resistance rating of 50 meters under ISO standard
          22810:2010. This means that they may be used for shallow-water activities like swimming in a pool or ocean.
          However, they should not be used for scuba diving, waterskiing, or other activities involving high-velocity
          water or submersion below shallow depth. Water resistance is not a permanent condition and can diminish over
          time. For additional information see support.apple.com/en-us/HT205000. Series 8 is also rated IP6X dust
          resistant.
        </p>
        <p>
          Blood Oxygen app measurements are not intended for medical use, including self-diagnosis or consultation with
          a doctor, and are only designed for general fitness and wellness purposes.
        </p>
        <p>
          The ECG app is available on Apple Watch Series 4 and later (not including Apple Watch SE) with the latest
          version of iOS and watchOS. See apple.com/watch for compatibility details. ECG is not intended for use by
          people under 22 years old. With the ECG app, Apple Watch is capable of generating an ECG similar to a
          single-lead electrocardiogram.
        </p>
        <p>
          Irregular rhythm notification requires the latest version of watchOS and iOS. It is not intended for use by
          people under 22 years old or those who have been previously diagnosed with atrial fibrillation (AFib).
        </p>
        <p>
          The temperature sensing feature is not a medical device and not intended for use in medical diagnosis,
          treatment, or for any other medical purpose.
        </p>
        <p>
          The Cycle Tracking app should not be used as a form of birth control. Data from the Cycle Tracking app should
          not be used to diagnose a health condition.
        </p>
        <p>
          Emergency SOS requires a cellular connection or Wi-Fi Calling with an internet connection from your Apple
          Watch or nearby iPhone.
        </p>
        <p>
          The international emergency calling feature requires an Apple Watch Ultra (Cellular), Apple Watch Series 8
          (GPS + Cellular), Apple Watch Series 7 (GPS + Cellular), or Apple Watch SE (GPS + Cellular) model. For a list
          of supported countries and regions, see apple.com/watchos/feature-availability.
        </p>
        <p>
          Wireless service plan required for cellular service. Contact your service provider for more details.
          Connection may vary based on network availability. Check apple.com/watch/cellular for participating wireless
          carriers and eligibility. See support.apple.com/en-us/HT207578 for additional setup instructions.
        </p>
        <p>
          Not all features will be available if the Apple Watch is set up through Family Setup. Wireless service plan
          required for cellular service. Contact your service provider for more details. Check apple.com/watch/cellular
          for participating wireless carriers and eligibility.
        </p>
        <p>
          Apple Watch Ultra has a water resistance rating of 100 meters under ISO standard 22810. It may be used for
          recreational scuba diving (with compatible third-party app from the App Store) to 40 meters and high-speed
          water sports. Apple Watch Ultra should not be used for diving below 40 meters. Water resistance is not a
          permanent condition and can diminish over time. For additional information see support.apple.com/HT205000.
        </p>
        <p>Apple Watch Ultra is rated IP6X dust resistant.</p>
        <p>
          Tested against subsections for Altitude, High Temperature, Low Temperature, Temperature Shock, Immersion,
          Freeze/Thaw, Shock, and Vibration.
        </p>
        <p>
          Offer available to new subscribers who purchase an eligible device after September 7, 2022. $9.99/month after
          trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group,
          regardless of the number of devices you or your family purchases. This offer is not available if you or your
          Family have previously subscribed to Apple Fitness+. Offer good for 3 months after eligible device activation.
          Plan automatically renews until cancelled. Restrictions and other terms apply.
        </p>
        <p>
          Trade‑in value based on an Apple Watch Series 7 Stainless Steel 45MM Cellular in good condition. Trade‑in
          values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all
          devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or
          for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an
          Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description
          provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store
          trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may
          not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have
          additional requirements. Apple or its trade‑in partners reserve the right to refuse or limit quantity of any
          trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and
          recycling of eligible devices. Restrictions and limitations may apply.
        </p>
        <p>
          The Apple One free trial includes only services that you are not currently using through a free trial or a
          subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.
        </p>
        <p>
          New subscribers only. $10.99/month after free trial. Plan automatically renews after trial until cancelled.
        </p>

        <p>
          To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with
          the latest version of iOS or iPadOS. Update to the latest version by going to Settings {'>'} General {'>'}{' '}
          Software Update. Tap Download and Install.
        </p>
        <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
        <p>Case and band combinations can be made within collections (Apple Watch and Apple Watch Hermès) only.</p>
        <p>
          Apple Watch Ultra, Apple Watch Series 8, and Apple Watch SE require an iPhone 8 or later with iOS 16 or later.
        </p>
        <p>
          Features are subject to change. Some features, applications, and services may not be available in all regions
          or all languages. View complete list.
        </p>
        <p>Bands subject to availability.</p>
      </Disclaimer>
    </div>
  );
}
