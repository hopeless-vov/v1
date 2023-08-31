import Image from 'next/image';
import { Card } from '@/components';
import { portfolio } from '@/public/helpers';
import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function Projects() {
  const projects = portfolio.filter((project) => project?.publickView);
  return (
    <section id='projects'>
      <div className='section-heading'>
        <h2>Projects</h2>
      </div>
      <div>
        <ol className='group/list'>
          {projects.map(
            ({ project, description, technologies, url, imageName }, index) => (
              <Card
                key={index}
                content={{
                  title: project,
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

        <Link
          href='/archive'
          className='group mb-2 inline-flex items-center font-semibold leading-tight text-slate-200 hover:text-teal-300'
        >
          View Full Project Archive

          <span className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-2 flex items-center'>
            <Icon name='Arrow' />
          </span>

        </Link>

      </div>
    </section>
  );
}
