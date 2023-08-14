export default function Disclaimer({ children }) {
  return (
    <div className='w-full bg-gray-lt text-xs font-light text-gray-rg'>
      <div className='container max-w-5xl mx-auto px-6'>
        <div className='space-y-2 py-6 border-b border-gray-md text-gray-dk'>{children}</div>
      </div>
    </div>
  );
}
