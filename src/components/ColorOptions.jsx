export default function Color({ hex }) {
  return (
    <div
      className='w-2.5 aspect-square rounded-full my-3 md:my-6 shadow-inner shadow-black/20'
      style={{ backgroundColor: hex }}
    />
  );
}
