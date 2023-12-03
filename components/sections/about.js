export default function About() {
  const styling = 'mb-4 tracking-widest';

  return (
    <section id='about'>
    <div className='section-heading'>
      <h2>About</h2>
    </div>
    <div>
      <p className={styling}>
        Back in 2018, I decided to try my hand at creating web interfaces, and
        plunged headfirst into the world of web development. Back to today,
        I'm developing software for my company, trying to develop my
        leadership qualities, learning new technologies, making cool apps and
        trying to get to know the world of technology better.
      </p>
      <p className={styling}>
        My main focus these days is building products with the{' '}
        <a
          href='https://www.worthsystems.com/'
          target='_blank'
          rel='noreferrer'
          className='inline-flex font-medium transition-all text-slate-200  hover:text-teal-300 focus-visible:text-teal-300 text-base items-center group/link'
        >
          Worth
        </a>{' '}
        for our customers.
      </p>
      <p className={styling}>
        In my free time, I usually learn to play the guitar, hang out with my
        friends, travel or play my favorite Video Games.
      </p>
    </div>
  </section>
  );
}
