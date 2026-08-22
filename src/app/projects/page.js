import Image from 'next/image';
import styles from './projects.module.css';
import clientPromise from '../../lib/mongodb';

export const metadata = {
  title: 'Projects',
  description: 'Projects by Denice Jaquez',
};

export default async function Projects() {
  const client = await clientPromise;

  const db = client.db('Portfolio');

  const projects = await db
    .collection('projects')
    .find({})
    .sort({ number: 1 })
    .toArray();

  return (
    <main className={styles.projectsPage}>

      {/* PROJECT INDEX */}
      <section className={styles.projectIndex}>
        <h1>
          My <span>Projects</span>
        </h1>

        <div className={styles.projectStrip}>
          {projects.map((project, index) => (
            <a
              key={project._id.toString()}
              href={`#project-${project.number}`}
              className={styles.projectCard}
            >

              {index % 2 === 0 ? (
                <>
                  <ProjectInfo project={project} />

                  {project.image && (
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={700}
                        height={450}
                        className={styles.cardImage}
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {project.image && (
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={700}
                        height={450}
                        className={styles.cardImage}
                      />
                    </div>
                  )}

                  <ProjectInfo project={project} />
                </>
              )}

            </a>
          ))}
        </div>
      </section>


      {/* FULL PROJECT SECTIONS */}
      <section className={styles.projectDetails}>
        {projects.map((project) => (
          <article
            key={project._id.toString()}
            id={`project-${project.number}`}
            className={styles.projectDetail}
          >

            <div className={styles.detailHeading}>
              <span className={styles.detailNumber}>
                {project.number}
              </span>

              <div>
                <h2>{project.name}</h2>
                <p>{project.type}</p>
              </div>
            </div>


            {project.image && (
              <div className={styles.detailImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1200}
                  height={700}
                  className={styles.detailImage}
                />
              </div>
            )}


            <div className={styles.detailContent}>
              <div>
                <h3>About the Project</h3>
                <p>{project.description}</p>
              </div>

              <div>
                <h3>{project.label || 'Tools and features'}</h3>

                <p>
                  {Array.isArray(project.tools)
                    ? project.tools.join(', ')
                    : project.tools}
                </p>
              </div>
            </div>

          </article>
        ))}
      </section>

    </main>
  );
}


function ProjectInfo({ project }) {
  return (
    <div className={styles.projectInfo}>

      <span className={styles.projectNumber}>
        {project.number}
      </span>

      <div className={styles.projectName}>
        <h2>{project.name}</h2>
        <p>{project.type}</p>
      </div>

      <div className={styles.projectTools}>
        <h3>{project.label || 'Tools and features'}</h3>

        <p>
          {Array.isArray(project.tools)
            ? project.tools.join(', ')
            : project.tools}
        </p>
      </div>

      <span className={styles.viewProject}>
        View Project ↓
      </span>

    </div>
  );
}