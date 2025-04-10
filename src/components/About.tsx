
import { CheckCircle } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 
    'Node.js', 'HTML & CSS', 'Tailwind CSS',
    'Git', 'RESTful APIs', 'Database Design',
    'Responsive Web Design', 'Next.js', 'Docker'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate software developer specializing in building modern web applications.
                I enjoy creating things that live on the internet, whether that be websites, applications, 
                or anything in between. My goal is to always build products that provide pixel-perfect, 
                performant experiences.
              </p>
              <p>
                I graduated with a degree in Computer Science and have been working in the field for
                several years. Throughout my career, I've collaborated with talented people to create
                digital products for both business and consumer use.
              </p>
              <p>
                When I'm not at the computer, I enjoy hiking, reading, and exploring new coffee shops.
                I'm always looking to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Senior Frontend Developer</h4>
                  <p className="text-primary">Company Name • 2021 - Present</p>
                  <p className="text-muted-foreground mt-1">
                    Worked on various projects implementing responsive interfaces and improving user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Web Developer</h4>
                  <p className="text-primary">Previous Company • 2018 - 2021</p>
                  <p className="text-muted-foreground mt-1">
                    Developed and maintained web applications using modern JavaScript frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
