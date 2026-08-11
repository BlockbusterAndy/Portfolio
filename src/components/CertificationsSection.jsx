import { BadgeCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Unity Junior Programmer',
    image: '/badges/unity-junior-programmer.png',
    accent: 'purple',
    credentialUrl: 'https://www.credly.com/badges/e9d66dc3-b5b0-44c5-bea6-68201ee2b431',
    description: 'The Unity Junior Programmer Pathway validates skills and competencies to be a proficient junior programmer writing scripts in C# to create interactive experiences with the Unity Editor.'
  },
  {
    title: 'Unity Essentials',
    image: '/badges/unity-essentials.png',
    accent: 'emerald',
    credentialUrl: 'https://www.credly.com/badges/c729fcbe-c56d-47c0-af3f-902b26f0762a',
    description: 'Unity Essentials is the pathway for interested creators who are just getting started with Unity and real-time content creation. To achieve this pathway badge participants will create their first simple interactive experience with Unity. Learners who achieve the Unity Essentials Pathway badge can define real-time production, use the essentials features of the Unity Editor, navigate in 3D space, create and manage Scenes, GameObjects, Prefabs, and publish a simple Unity project.'
  }
];

const CertificationsSection = () => (
  <section className="relative w-full overflow-hidden bg-[#0A0A0A] py-20" id="certifications">
    <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-[100px]" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-14 max-w-2xl"
      >
        <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Credentials</span>
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Unity <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Pathways</span>
        </h2>
        <p className="text-lg leading-relaxed text-secondaryText">
          Verified learning milestones that support my work building interactive experiences with Unity and C#.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {certifications.map((certification, index) => {
          const accentClasses = certification.accent === 'purple'
            ? 'from-purple-500/20 via-transparent to-transparent group-hover:border-purple-400/40'
            : 'from-emerald-500/20 via-transparent to-transparent group-hover:border-emerald-400/40';

          return (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-6 transition-colors md:p-8 ${accentClasses}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col gap-6 sm:flex-row sm:items-center">
                <div className="mx-auto w-40 shrink-0 sm:mx-0 md:w-44">
                  <img
                    src={certification.image}
                    alt={`${certification.title} badge`}
                    className="h-auto w-full drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]"
                    loading="lazy"
                  />
                </div>

                <div className="flex h-full flex-col text-center sm:text-left">
                  <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-white sm:justify-start">
                    <BadgeCheck size={18} className={certification.accent === 'purple' ? 'text-purple-400' : 'text-emerald-400'} />
                    Verified credential
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{certification.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-secondaryText">{certification.description}</p>
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black sm:self-start"
                  >
                    View credential <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
