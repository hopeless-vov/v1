import ExperienceCard from './experienceCard';
import { experience } from '@/public/helpers';

export default function Experience() {
  const { jobs } = experience;
  return (
    <section id='experience'>
      {/* <div>Expirience</div> */}
      <div>
        <ol className='group/list'>
          {jobs.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}

// Experience.propTypes = {
//   children: PropTypes.node,
// };

// Experience.defaultProps = {
//   children: null,
// };
