import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  ServerCog,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import profileAsset from "@/assets/aditya-profile.png";

const EMAILJS_SERVICE_ID = "service_ccbhirf";
const EMAILJS_TEMPLATE_ID = "template_2s49lrp";
const EMAILJS_PUBLIC_KEY = "xzylCwcDWPZ00DAQB";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aditya Subhash Chavan — Web Developer & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Aditya Subhash Chavan, an MCA student in Sangli building practical web applications and growing in data analytics.",
      },
      { property: "og:title", content: "Aditya Subhash Chavan — Portfolio" },
      {
        property: "og:description",
        content: "MCA student, aspiring web developer, and data analyst based in Sangli.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navItems = ["About", "Skills", "Projects", "Contact"];

const skillMain = {
  number: "01",
  title: "Frontend",
  icon: Braces,
  detail: "Fast, responsive interfaces built with clean structure and considered visual detail.",
  tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
};

const skillSmall = [
  { number: "02", title: "Backend logic", icon: ServerCog, detail: "Java core application logic — reliable, maintainable systems." },
  { number: "03", title: "Databases", icon: Database, detail: "MySQL · MongoDB · Data modelling for well-organized information." },
];

const skillWide = {
  number: "04",
  title: "In progress",
  icon: Sparkles,
  detail: "Python · Data analysis — deepening the toolkit with hands-on data work.",
};

const services = [
  ["Static websites", "Fast, responsive pages with clean structure and considered visual detail."],
  ["Dynamic applications", "Practical web solutions shaped around real user and admin workflows."],
  ["Database design", "Well-organized relational and document data for maintainable applications."],
  ["Bug fixing", "Focused diagnosis and repair for layout, logic, and database issues."],
];

const projects = [
  {
    index: "01",
    title: "Event Management System",
    label: "BCA FINAL YEAR · JAN—APR 2024",
    description: "Admin dashboards, participant registration, and attendee tracking in one complete academic platform.",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    mark: "EMS",
  },
  {
    index: "02",
    title: "Farming Management System",
    label: "MCA PROJECT · JAN—APR 2025",
    description: "Farmer registration, crop tracking, land records, and expense management brought into one system.",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "MongoDB"],
    mark: "FMS",
  },
  {
    index: "03",
    title: "Next build in progress",
    label: "UPCOMING · 2026",
    description: "A practical web project taking shape with a stronger focus on data and structured decision-making.",
    tech: ["Research", "Planning", "In progress"],
    mark: "WIP",
  },
];

const stats = [
  ["BCA", "Graduate"],
  ["MCA", "Student"],
  ["Sangli / Kolhapur", "Based in"],
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-primary">
      <span className="h-px w-7 bg-primary" />
      {children}
    </p>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const sendInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setStatus("sent");
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:flex sm:justify-between sm:px-8 lg:px-12">
          <a href="#home" className="flex min-w-0 items-center gap-3 font-display text-sm font-bold" aria-label="Aditya Chavan, home">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">A.</span>
            <span className="truncate">Aditya Chavan</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">{item}</a>)}
          </nav>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-foreground md:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-3 font-display text-lg text-muted-foreground">{item}</a>)}
          </nav>
        )}
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="pointer-events-none absolute -top-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[oklch(0.32_0.09_265)] opacity-30 blur-[140px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="space-y-8 lg:col-span-7">
            <p className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Available for internships · 2026</span>
            </p>
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">Web development · Data analytics</p>
            <h1 className="flex select-none flex-col font-architect text-6xl font-extrabold uppercase leading-[0.85] tracking-tighter sm:text-8xl">
              Aditya
              <span className="ml-[0.15em] -mt-1 font-architect-serif text-7xl font-light italic normal-case leading-[0.8] text-primary sm:-mt-3 sm:ml-[0.45em] sm:text-9xl">Chavan</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              MCA student at V.P. Institute of Management Studies and Research, Sangli — turning realistic academic problems into clean, working web systems, with a growing focus on data.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors duration-300 hover:bg-foreground hover:text-background">
                View projects <ArrowDown size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-4 font-display text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:border-primary hover:text-primary">
                Get in touch <ArrowUpRight size={16} />
              </a>
              <div className="flex items-center gap-4 pl-1">
                <a href="https://github.com/adiichavan-dev" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub"><Github size={19} /></a>
                <a href="https://www.linkedin.com/in/aditya--chavan/" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn"><Linkedin size={19} /></a>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-panel lg:max-w-none">
              <img src={profileAsset} alt="Aditya Subhash Chavan" className="h-full w-full object-cover object-top" loading="eager" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-foreground/10" />
              <div className="absolute bottom-8 left-0 hidden rounded-r-2xl bg-primary px-6 py-4 md:block">
                <p className="font-display text-[10px] font-bold uppercase tracking-widest text-primary-foreground">SANGLI · MAHARASHTRA</p>
              </div>
              <span className="absolute right-5 top-5 rounded-full border border-foreground/15 bg-background/70 px-4 py-1.5 font-mono text-[9px] uppercase tracking-widest text-foreground backdrop-blur">PROFILE</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border/60 bg-canvas px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>01 / About</SectionLabel>
            <h2 className="mt-7 font-display text-4xl font-bold leading-tight sm:text-5xl">
              A hands-on path from BCA to <span className="font-editorial font-normal italic text-primary">MCA.</span>
            </h2>
          </div>
          <div className="space-y-7 lg:col-span-7">
            <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">I approach academic work like a real product: understand the people, organize the information, then build a solution that holds together.</p>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">I’m actively pursuing internships in web development or data analytics where I can contribute, learn quickly, and work alongside experienced teams.</p>
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-border/50 bg-panel px-8 py-9">
              <strong className="font-display text-3xl font-bold text-primary sm:text-4xl">{value}</strong>
              <span className="mt-3 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="border-t border-border/60 bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>02 / Skills & services</SectionLabel>
              <h2 className="mt-7 font-display text-4xl font-bold sm:text-6xl">
                Clean code. <span className="font-editorial font-normal italic text-primary">Working outcomes.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground lg:col-span-4 lg:col-start-9">A practical toolkit for building useful interfaces, application logic, and well-organized data.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-3xl border border-border/50 bg-panel p-9 transition-colors duration-300 hover:border-primary/40 md:col-span-2 md:row-span-2 md:p-12">
              <div>
                <div className="mb-8 flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><skillMain.icon size={22} /></div>
                  <span className="font-mono text-xs text-muted-foreground">{skillMain.number}</span>
                </div>
                <h3 className="font-display text-3xl font-bold">{skillMain.title}</h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{skillMain.detail}</p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                {skillMain.tags.map((tag) => <span key={tag} className="rounded-full border border-border/60 bg-background/40 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">{tag}</span>)}
              </div>
            </article>

            {skillSmall.map(({ number, title, icon: Icon, detail }) => (
              <article key={title} className="rounded-3xl border border-border/50 bg-panel p-9 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-6 flex items-start justify-between">
                  <Icon size={22} className="text-primary" />
                  <span className="font-mono text-xs text-muted-foreground">{number}</span>
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
              </article>
            ))}

            <article className="rounded-3xl bg-primary p-9 text-primary-foreground md:col-span-3 md:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <skillWide.icon size={24} />
                  <div>
                    <h3 className="font-display text-xl font-bold">{skillWide.title}</h3>
                    <p className="mt-1 text-sm opacity-75">{skillWide.detail}</p>
                  </div>
                </div>
                <span className="font-mono text-xs opacity-60">{skillWide.number}</span>
              </div>
            </article>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2">
            {services.map(([title, detail], index) => (
              <div key={title} className="rounded-3xl border border-border/50 bg-canvas p-8">
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <div>
                    <h4 className="font-display text-lg font-bold">{title}</h4>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border/60 bg-panel px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>03 / Selected work</SectionLabel>
              <h2 className="mt-7 font-display text-4xl font-bold sm:text-6xl">
                Selected <span className="font-editorial font-normal italic text-primary">work.</span>
              </h2>
            </div>
            <a href="https://github.com/adiichavan-dev" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-primary/40 px-5 py-3 font-display text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:self-auto">
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {projects.map((project, index) => (
              <article key={project.title} className={`group ${index === 1 ? "md:mt-24" : ""} ${index === 2 ? "md:col-span-2" : ""}`}>
                <div className={`relative mb-8 overflow-hidden rounded-3xl border border-border/50 ${index === 2 ? "aspect-[21/9] bg-primary/10" : "aspect-[16/10] bg-canvas"}`}>
                  <span className="absolute left-7 top-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Project / {project.index}</span>
                  <span className={`absolute -bottom-6 right-4 font-display font-extrabold opacity-10 ${index === 2 ? "text-7xl sm:text-8xl" : "text-8xl"}`}>{project.mark}</span>
                  <span className={`absolute bottom-7 left-7 font-display text-3xl font-bold ${index === 2 ? "text-primary" : ""}`}>{project.mark}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">{project.label}</p>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {project.tech.map((item) => <span key={item} className="font-mono text-[10px] uppercase tracking-wider text-ink-subtle">{item}</span>)}
                    </div>
                  </div>
                  <ArrowUpRight size={22} className="mt-1 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>04 / Contact</SectionLabel>
            <h2 className="mt-7 font-display text-5xl font-bold leading-tight">
              Have an opportunity? <span className="font-editorial font-normal italic text-primary">Let’s talk.</span>
            </h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">I’m open to web development and data analytics internships, project conversations, and thoughtful collaborations.</p>
            <div className="mt-10 space-y-6">
              <a href="https://www.linkedin.com/in/aditya--chavan/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background"><Linkedin size={18} /></span>
                <span className="font-display text-lg font-semibold border-b-2 border-transparent transition-colors group-hover:border-primary">Connect on LinkedIn</span>
              </a>
              <a href="https://github.com/adiichavan-dev" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Github size={18} className="shrink-0" /> github.com/adiichavan-dev
              </a>
            </div>
          </div>

          <form onSubmit={sendInquiry} className="grid grid-cols-1 gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Name
                <input required name="name" className="w-full border-b border-border bg-transparent py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-primary" placeholder="Your name" />
              </label>
              <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Email
                <input required type="email" name="email" className="w-full border-b border-border bg-transparent py-4 text-sm text-foreground outline-none transition-colors duration-300 focus:border-primary" placeholder="you@example.com" />
              </label>
            </div>
            <label className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Message
              <textarea required name="message" rows={4} className="w-full resize-none border-b border-border bg-transparent py-4 text-sm leading-6 text-foreground outline-none transition-colors duration-300 focus:border-primary" placeholder="Tell Aditya about the opportunity or project..." />
            </label>
            <div className="flex items-center justify-between gap-6">
              <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-xl bg-primary px-9 py-5 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors duration-300 hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60">
                {status === "sending" ? <>Sending…</> : status === "sent" ? <><Check size={16} /> Message sent</> : <><Send size={16} /> Send message</>}
              </button>
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground"><Mail size={14} className="text-primary" /> GOES STRAIGHT TO MY INBOX</p>
            </div>
            {status === "sent" && (
              <p aria-live="polite" className="text-xs text-primary">Message sent — thanks, I’ll reply soon.</p>
            )}
            {status === "error" && (
              <p aria-live="polite" className="text-xs text-muted-foreground">
                Something went wrong sending that. Please try again, or reach me on{" "}
                <a href="https://www.linkedin.com/in/aditya--chavan/" target="_blank" rel="noreferrer" className="text-primary underline">LinkedIn</a>.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-canvas px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 text-xs text-muted-foreground">
          <p>© 2026 Aditya Subhash Chavan</p>
          <a href="#home" className="transition-colors hover:text-primary">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
