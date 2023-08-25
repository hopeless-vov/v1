import { Card } from '@/components';
import { experience } from '@/public/helpers';

export default function Experience() {
  const { jobs } = experience;
  return (
    <section id='experience'>
      <div className='section-heading'>
        <h2>
          Expirience
        </h2>
      </div>
      <div>
        <ol className='group/list'>
          {jobs.map(
            (
              { company, position, description, skills, from, to, url },
              index,
            ) => (
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
                  {from} &#8213; {to}
                </header>
              </Card>
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
