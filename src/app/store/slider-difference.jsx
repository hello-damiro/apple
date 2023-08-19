import { differenceData } from '@/data/storeDifference';
import Card from '@/components/Card';
import { H3 } from '@/components/Texts';

const data = differenceData;

export default function SliderDifference({ width }) {
  return (
    <>
      {data.map((item) => {
        return (
          <Card key={item.id} width={width} src={item.src} alt={item.alt} href={item.href}>
            <H3>{item.title}</H3>
          </Card>
        );
      })}
    </>
  );
}
