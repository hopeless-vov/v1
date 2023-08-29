import PropTypes from 'prop-types';
import { Tag } from '@/components';
import { Icon } from '@/components/icons';

export default function Card({ content, children, className }) {
  const { title, description, tags, url } = content;
  return (
    <li className='mb-12'>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:cursor-pointer lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

        {children}
        <div className={`z-10 sm:col-span-6 ${className}`}>
          <h3 className='font-medium leading-snug'>
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='inline-flex transition-all text-slate-200  hover:text-teal-300 focus-visible:text-teal-300 text-base items-center group/link'
            >
              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block' />
              {title}
              <span className='transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none ml-1 translate-y-px rotate-[-45deg]'>
                <Icon name='Link' />
              </span>
            </a>
          </h3>
          <p className='mt-2 text-sm leading-normal'>{description}</p>
          {tags && (
            <ul className='mt-2 flex flex-wrap'>
              {tags.map((tag, index) => (
                <li key={index} className='mr-1.5 mt-2'>
                  <Tag tag={tag} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

Card.defaultProps = {
  content: null,
  children: null,
  className: '',
};
