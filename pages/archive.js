import Link from 'next/link';
import { Icon } from '@/components/icons';
import { Table, TableHead, TableRow, TableColumn } from '@/components';
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
      <Table className='mt-12 w-full border-collapse text-left'>
        <TableHead>
          {headers.map(({ text, styling }, index) => (
            <th
              key={index}
              className={`py-4 pr-8 text-sm font-semibold text-slate-200 ${styling}`}
            >
              {text}
            </th>
          ))}
        </TableHead>
        <tbody>
          {portfolio.map((project, index) => (
            <TableRow key={index}>
              <TableColumn>{project.year}</TableColumn>
              <TableColumn>{project.project}</TableColumn>
              <TableColumn>{project.madeAt}</TableColumn>
              <TableColumn>React</TableColumn>
              <TableColumn>{project.url}</TableColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
