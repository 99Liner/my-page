import Image from 'next/image';
import styles from './projects.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Projects by Denice Jaquez',
};

const projects = [
  {
    number: '01',
    name: 'Sample Project One',
    type: 'Web Application',
    label: 'Tools and features',
    tools: 'Next.js, React, JavaScript, CSS',
    image: '/project-placeholder-1.jpg',
    id: 'project-1',
    description:
      'This is the description for Sample Project One. You can explain what the project does, why you built it, and what you personally worked on.',
  
    },
  {
    number: '02',
    name: 'I Spy Water Safety',
    type: 'Unity Game',
    label: 'Tools and features',
    tools: 'Unity, C#, Blender, Git',
    image: '/project-placeholder-1.jpg',
    id: 'project-2',
    description:
      'A 3D educational video game developed for the US Army Corps of Engineers to promote water safety among children. ' 
      +'The game features interactive levels that teach players about the dangers of unsupervised swimming and the importance of wearing life jackets.'
      +' My role involved game design, coding, and team coordination.',
 
  },
  {
    number: '03',
    name: 'Sample Project Three',
    type: 'Data / Analytics',
    label: 'Tools and features',
    tools: 'Python, Pandas, Visualization',
    image: '/project-placeholder-1.jpg',
    id: 'project-3',
    description:
      'This is the description for Sample Project One. You can explain what the project does, why you built it, and what you personally worked on.',
 
  },
];

export default function Projects() {
  return (
    <main className={styles.projectsPage}>

      <section className={styles.projectIndex}>
        <h1>
          My <span>Projects</span>
        </h1>

        <div className={styles.projectStrip}>
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className={styles.projectCard}
            >

              {/* Alternate content/image position */}
              {index % 2 === 0 ? (
                <>
                  <ProjectInfo project={project} />

                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={700}
                      height={450}
                      className={styles.cardImage}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={700}
                      height={450}
                      className={styles.cardImage}
                    />
                  </div>

                  <ProjectInfo project={project} />
                </>
              )}

            </a>
          ))}
        </div>
      </section>

//SECTIONS PROJECT DETAILS
      <section className={styles.projectDetails}>

        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
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


            <div className={styles.detailImageWrapper}>
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={700}
                className={styles.detailImage}
              />
            </div>


            <div className={styles.detailContent}>

              <div>
                <h3>About the Project</h3>
                <p>{project.description}</p>
              </div>

              <div>
                <h3>{project.label}</h3>
                <p>{project.tools}</p>
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
        <h3>{project.label}</h3>
        <p>{project.tools}</p>
      </div>

      <span className={styles.viewProject}>
        View Project ↓
      </span>

    </div>
  );
}