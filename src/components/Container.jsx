export default function Container({ children, uncontained = null, ...props }) {
  return (
    <section className='w-full bg-gray-lt'>
      <div className='container max-w-5xl mx-auto px-6'>
        <div {...props}>{children}</div>
      </div>
      {uncontained}
    </section>
  );
}
