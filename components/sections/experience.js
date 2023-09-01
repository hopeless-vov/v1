import Link from 'next/link';
import { Card } from '@/components';
import { experience } from '@/public/helpers';
import { Icon } from '@/components/icons';
// import resume from '@/public/CV-Volodymyr.pdf';

export default function Experience() {
  const { jobs } = experience;
  return (
    <section id='experience'>
      <div className='section-heading'>
        <h2>Expirience</h2>
      </div>
      <div>
        <ol className='group/list'>
          {jobs.map(
            ({ company, position, description, skills, range, url }, index) => (
              <Card
                key={index}
                content={{
                  title: position + ' - ' + company,
                  url,
                  description,
                  tags: skills,
                }}
              >
                <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase text-slate-500 sm:col-span-2 flex gap-1'>
                  {range}
                </header>
              </Card>
            ),
          )}
        </ol>

        <Link
          href='/resume.pdf'
          className='group mb-2 inline-flex items-center font-semibold leading-tight text-slate-200 hover:text-teal-300'
        >
          View Full Resume
          <span className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-2 flex items-center'>
            <Icon name='Arrow' />
          </span>
        </Link>
      </div>
    </section>
  );
}
