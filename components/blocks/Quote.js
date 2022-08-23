import { useInView } from 'react-intersection-observer';

export default function Quote({ block }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const inViewClass = inView ? 'fade-down-on' : 'fade-down-off';

  return (
    <section
      ref={ref}
      className={`${inViewClass} fade-down container text-center relative mt-12 py-20 lg:mt-24 lg:py-36 before:content-['“'] before:text-accent before:absolute before:text-[6rem] before:leading-none before:left-1/2 before:-translate-x-1/2 before:-top-0 lg:before:text-[10rem]`}
    >
      <div className="font-heading italic text-alt max-w-prose mx-auto mb-6 lg:text-lg xl:mb-12">
        {block.text}
      </div>
      <div className="font-bold text-xs uppercase text-accent tracking-widest my-2">
        {block.authorName}
      </div>
    </section>
  );
}
