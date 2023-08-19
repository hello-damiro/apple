import Card from '@/components/Card';
import { H3 } from '@/components/Texts';

export default function SliderExperience({ width }) {
  return (
    <>
      <Card width={480} src='/images/store-experience/store-card-50-tv-services-mls.jpeg' alt='alt' href='/' />

      <Card width={480} src='/images/store-experience/store-card-50-subscriptions.jpeg' alt='alt' href='/'>
        <H3 className='pt-4'>Six Apple services. One easy subscription.</H3>
      </Card>

      <Card width={480} src='/images/store-experience/store-card-40-applecare.jpeg' alt='alt' href='/'>
        <H3 className='pt-4'>We've got you covered.</H3>
        <p className='text-sm md:text-base'>
          AppleCare+ now comes with unlimited repairs for accidental damage protection.
        </p>
      </Card>
    </>
  );
}
