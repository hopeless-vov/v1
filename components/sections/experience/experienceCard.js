import PropTypes from 'prop-types';
export default function Experience({ job }) {
  const { company, position, description, skills, from, to } = job;
  return (
    <li className='mb-12'>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:cursor-pointer lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase text-slate-500 sm:col-span-2'>
          {from} - {to}
        </header>

        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug'>
            <a
              href='/'
              className='inline-flex transition-all text-slate-200  hover:text-teal-300  text-base'
            >
              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />
              {position} - {company}
            </a>
          </h3>
          <p className='mt-2 text-sm leading-normal'>{description}</p>
          <ul>
            {skills}
          </ul>
        </div>
      </div>
    </li>
  );
}

Experience.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
};

Experience.defaultProps = {
  job: null,
};
