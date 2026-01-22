type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
            {subtitle ? (
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{subtitle}</p>
            ) : null}
          </div>

          <div className="lg:col-span-8 lg:border-l lg:border-white/10 lg:pl-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
