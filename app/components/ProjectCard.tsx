export interface ProjectCardComp {
  id: number;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  link?: { url: string; label?: string };
}
  
  interface ProjectCardProps {
    cards: ProjectCardComp[];
  }
  
  export default function ProjectCard({ cards }: ProjectCardProps) {
    return (
      <div className="flex w-full max-w-5xl flex-col gap-8">
        {cards.map((card, index) => {
          const circleOnLeft = index % 2 === 0;
          return (
            <div
              key={card.id}
              className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 ${!circleOnLeft ? "sm:flex-row-reverse" : ""}`}
            >
               <div className="flex shrink-0 justify-center sm:justify-end">
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-white shadow-md sm:h-28 sm:w-28">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              </div>
  
              <div className="min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-md transition-all duration-200 hover:shadow-lg sm:p-8">
              <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
                {card.title}
              </h2>
              <div className="mt-3 space-y-2 break-words text-sm leading-relaxed text-slate-600">
                {card.description.map((line, i) => (
                  <p key={i}> • {line}</p>
                ))}
                {card.link && (
                  <a
                    href={card.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-medium text-pink-600 transition-colors hover:text-pink-700"
                  >
                    {card.link.label ?? "Read more"}
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    );
  }
  