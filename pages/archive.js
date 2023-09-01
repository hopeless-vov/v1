import Link from 'next/link';
import { Icon } from '@/components/icons';
import {
  Table,
  TableHead,
  TableRow,
  TableColumn,
  IconLink,
  Tag,
} from '@/components';
import { portfolio } from '@/public/helpers';

const headers = [
  {
    text: 'Year',
    styling: '',
  },
  {
    text: 'Project',
    styling: '',
  },
  {
    text: 'Made at',
    styling: 'hidden lg:table-cell',
  },
  {
    text: 'Built with',
    styling: 'hidden lg:table-cell',
  },
  {
    text: 'Link',
    styling: 'hidden sm:table-cell',
  },
];

export default function Archive() {
  return (
    <div className='lg:py-24' id='archive'>
      <Link
        href='/'
        className='group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300'
      >
        <span className='mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2 flex items-center'>
          <Icon name='Arrow' />
        </span>
        Volodymyr Bondarenko
      </Link>
      <h1>All Projects</h1>
      <Table className='mt-12 w-full border-collapse text-left text-sm'>
        <TableHead>
          {headers.map(({ text, styling }, index) => (
            <th
              key={index}
              className={`py-4 pr-8 font-semibold text-slate-200 ${styling}`}
            >
              {text}
            </th>
          ))}
        </TableHead>
        <tbody>
          {portfolio.map(
            ({ project, year, madeAt, technologies, url }, index) => {
              const isGitLink = url?.includes('github');
              return (
                <TableRow key={index}>
                  <TableColumn>{year}</TableColumn>
                  <TableColumn>
                    <div className='text-base text-slate-200 font-semibold'>
                      <IconLink className='block sm:hidden' text={project} />
                      <div className='hidden sm:block'>{project}</div>
                    </div>
                  </TableColumn>
                  <TableColumn className='hidden lg:table-cell'>
                    {madeAt}
                  </TableColumn>
                  <TableColumn className='hidden lg:table-cell'>
                    <ul className='flex -translate-y-1.5 flex-wrap'>
                      {technologies.map((technology, id) => (
                        <li key={id} className='my-1 mr-1.5'>
                          <Tag tag={technology} />
                        </li>
                      ))}
                    </ul>
                  </TableColumn>
                  <TableColumn className='hidden sm:table-cell'>
                    {url && (
                      <IconLink
                        url={url}
                        text={isGitLink ? 'GitHub' : url}
                        icon={isGitLink ? 'GitHub' : 'Arrow'}
                      />
                    )}
                  </TableColumn>
                </TableRow>
              );
            },
          )}
        </tbody>
      </Table>
    </div>
  );
}
