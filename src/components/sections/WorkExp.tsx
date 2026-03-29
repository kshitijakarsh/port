export default function WorkExp() {
  const workExp = [
    {
      id: '0',
      title: 'Frontend Developer Intern',
      company: 'BuildUp Bharat',
      fromDate: 'Jan, 2026',
      toDate: 'Present',
      field: 'Web Dev',
      type: 'Internship',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
      details: [
        'Frontend Development Architecture: Leading end-to-end frontend development in React, establishing scalable component architecture, responsive UI systems, and maintaining overall code quality and best practices.',
        'API Integration & Optimization: Integrating REST APIs, managing seamless data flow, and continuously optimizing application performance and user experience.',
        'Internationalization, RBAC & Multi-Tenancy: Built internal admin panels and implemented internationalization, role-based access control, and tenant-based operations.',
      ],
    },
    {
      id: '1',
      title: 'Frontend Engineer',
      company: 'MedExa',
      fromDate: 'Dec, 2025',
      toDate: 'Jan, 2026',
      field: 'Healthcare',
      type: 'Freelance',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      details: [
        'Frontend Development: Designed and developed scalable frontend interfaces for a hospital management system using Next.js, focusing on maintainable component architecture, responsive UI, and seamless API integration.',
        'Internationalization: Built a dedicated admin panel for internal company operations, enabling management of bookings, treks, users, and operational workflows. Implemented structured UI flows, reusable components, and integrated backend APIs to support day-to-day business operations.',
        'Role Based Access: Worked on role-based access control and tenant-based operations to enable multi-role users and multi-tenant hospital environments.',
      ],
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      company: 'The Trek Traveller',
      fromDate: 'Sept, 2025',
      toDate: 'Dec, 2025',
      field: 'Web Dev',
      type: 'Freelance',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      details: [
        'The Trek Traveller : Public Website & CMS: Designed and developed the complete frontend using Next.js, including a CMS that enabling non-technical users to control website content efficiently.',
        'The Trek Traveller : Operations Admin Panel: Built a dedicated admin panel for internal company operations, enabling management of bookings, treks, users, and operational workflows.',
      ],
    },
  ];

  return (
    <section className="w-full p-4 sm:px-4 border-t-2 border-b-2 border-double">
      <h1 className="font-serif text-xl pb-4">Work Experience</h1>
      <div className="flex gap-4">
        <div className="w-px bg-border my-2"></div>
        <div className="flex-1 flex flex-col gap-4">
          {workExp.map((work) => (
            <div
              key={work.id}
              className="group bg-muted/50 p-4 border border-border rounded-lg w-full transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-3">
                  <h2 className="font-serif text-xl">{work.company}</h2>
                  <WorkType worktype={work.type} />
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap font-sans">
                  {work.fromDate} - {work.toDate}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{work.title}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {work.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-sm outline-1 outline-border outline-offset-1 transition-colors hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                <div className="overflow-hidden flex gap-4">
                  <div className="w-px bg-border my-2 shrink-0" />
                  <div className="flex flex-col gap-3 py-2">
                    {work.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const WorkType = ({ worktype }: { worktype: string }) => {
  if (worktype === 'Freelance') {
    return (
      <span className="text-xs outline-1 outline-amber-300 outline-offset-1 rounded-sm px-2 py-0.5 bg-amber-200/50 ">
        Freelance
      </span>
    );
  }
  if (worktype === 'Internship') {
    return (
      <span className="text-xs outline-1 outline-blue-300 outline-offset-1 rounded-sm px-2 py-0.5 bg-blue-200/50">
        Internship
      </span>
    );
  }
  if (worktype === 'Full Time') {
    return (
      <span className="text-xs outline-1 outline-green-300 outline-offset-1 rounded-sm px-2 py-0.5 bg-green-200/50">
        Full Time
      </span>
    );
  }
  return null;
};
