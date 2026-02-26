"use client";

const education = [
  {
    id: 1,
    school: "Carnegie Mellon University",
    period: "Aug 2024 – Dec 2025",
    degree: "M.S. in Software Engineering",
    gpa: "GPA 4.0",
    coursework: 
    "Relevant coursework: Data Science, Machine Learning Foundations, Software Verification & Testing, Browser Security, Software Engineering Methods ",
    logo: "/cmu-logo.png",
    logoAlt: "Carnegie Mellon University logo",
  },
  {
    id: 2,
    school: "Polish-Japanese Academy of Information Technology",
    period: "October 2020 – Feb 2024",
    degree: "B.Eng in Computer Science",
    gpa: "GPA: 4.77/5",
    coursework:
      "Relevant coursework: Artificial Intelligence, Data Science, Software Engineering, Networks, Linear Algebra, Data Structures",
    logo: "/pjatk-logo.png",
    logoAlt: "PJAIT logo",
  },
];

export default function Education() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center px-6 pt-10 font-sans sm:px-4 sm:pt-12 md:pt-16">
      <div className="flex w-full max-w-4xl flex-col gap-8">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6"
          >
            {/* Logo bubble - left */}
            <div className="flex shrink-0 justify-center sm:justify-end">
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-white shadow-md sm:h-28 sm:w-28">
                {/* Add cmu-logo.png and pjatk-logo.png to the public folder */}
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="h-full w-full object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback instanceof HTMLElement) fallback.hidden = false;
                  }}
                />
                <span
                  className="absolute inset-0 flex items-center justify-center bg-slate-100 text-xs font-medium text-slate-400"
                  hidden
                  aria-hidden
                >
                  Logo
                </span>
              </div>
            </div>

            {/* Card with school info */}
            <div className="min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-md transition-all duration-200 hover:shadow-lg sm:p-8">
              <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
                {item.school}
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {item.period}
              </p>
              <p className="mt-2 text-slate-700">{item.degree}</p>
              <p className="mt-1 text-sm text-slate-600">{item.gpa}</p>
              {item.coursework && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.coursework}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
