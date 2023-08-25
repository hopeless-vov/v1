import Image from 'next/image';
import { Card } from '@/components';
import { portfolio } from '@/public/helpers';

export default function Projects() {
  const { projects } = portfolio;
  return (
    <section id='projects'>
      <div className='section-heading'>
        <h2>
          Projects
        </h2>
      </div>
      <div>
        <ol className='group/list'>
          {projects.map(
            ({ title, description, technologies, url, imageName }, index) => (
              <Card
                key={index}
                content={{
                  title,
                  url,
                  description,
                  tags: technologies,
                }}
                className='order-1 sm:order-2'
              >
                <Image
                  src={require(`../../public/images/projects/${imageName}.png`)}
                  className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 order-2 sm:order-1 sm:col-span-2 sm:translate-y-1 mt-4 sm:mt-0'
                  width={200}
                  height={100}
                  alt={imageName}
                />
              </Card>
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
