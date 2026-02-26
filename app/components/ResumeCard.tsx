export interface ResumeCardComp {
  id: number;
  title: string;
  description: string[];
  employer: string;
  date: string;
  logo: string;
  logoAlt: string;
}

interface ResumeCardProps {
  cards: ResumeCardComp[];
}

export default function ResumeCard({ cards }: ResumeCardProps) {
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
                  src={card.logo}
                  alt={card.logoAlt}
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

            <div className="min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-md transition-all duration-200 hover:shadow-lg sm:p-8">
            <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl">
              {card.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-600">
              {card.date}
            </p>
            <p className="mt-2 text-slate-700">{card.employer}</p>
            <div className="mt-3 space-y-2 break-words text-sm leading-relaxed text-slate-600">
              {card.description.map((line, i) => (
                <p key={i}> • {line}</p>
              ))}
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
}
