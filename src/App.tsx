import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import {
  // social
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
  // cloud
  SiAmazon,
  SiGooglecloud,
  // front-end
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiVite,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  // back-end
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiSpring,
  SiDjango,
  SiFastapi,
  SiKotlin,
  // devops
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGrafana,
  SiPrometheus,
  SiGithubactions,
  // data
  SiGoogleanalytics,
  SiGooglebigquery,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  // auth / queue / mobile
  SiAuth0,
  SiRabbitmq,
  SiFlutter,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const projects = [
  {
    title: "E-commerce Books",
    desc: "Loja virtual com carrinho, Pix e Cartão.",
    stack: ["React", "Node", "PostgreSQL", "Pix"],
  },
  {
    title: "Marketplace Auto Parts",
    desc: "Multi-lojista com split e busca avançada.",
    stack: ["Angular", "Spring", "Efi"],
  },
  {
    title: "SaaS Analytics",
    desc: "Plataforma B2B com planos e billing.",
    stack: ["Next.js", "Stripe", "Prisma"],
  },
  {
    title: "Delivery Restaurants",
    desc: "Painel admin + app entregador.",
    stack: ["React", "Nest", "Fargate"],
  },
  {
    title: "Classificados Regionais",
    desc: "Posts, chat e planos premium.",
    stack: ["React", "Firebase", "Cloud Functions"],
  },
  {
    title: "Dashboard Autoras",
    desc: "Vendas, funil e GA4 + BigQuery.",
    stack: ["GA4", "BigQuery", "ECharts"],
  },
  {
    title: "Agendamento Clínico",
    desc: "Agenda, prontuário e lembretes SMS.",
    stack: ["Flutter", "Supabase"],
  },
  {
    title: "ERP Light",
    desc: "Produtos, estoque e NFe.",
    stack: ["Vue", "Laravel", "MySQL"],
  },
  {
    title: "Clube de Assinaturas",
    desc: "Renovação recorrente e cupons.",
    stack: ["Next.js", "Stripe"],
  },
  {
    title: "Landing Imobiliária",
    desc: "Captação de leads e CRM.",
    stack: ["React", "Express", "Mongo"],
  },
  {
    title: "Educação Online",
    desc: "Cursos, aulas e provas.",
    stack: ["React", "Nest", "PostgreSQL"],
  },
  {
    title: "Fintech Wallet",
    desc: "Saldo, extrato e Pix webhook.",
    stack: ["Kotlin", "Kafka", "Pix"],
  },
  {
    title: "B2B Catálogo",
    desc: "Pedidos por representante.",
    stack: ["Angular", "Spring"],
  },
  {
    title: "Blog Headless",
    desc: "CMS + SEO avançado.",
    stack: ["Next.js", "GraphCMS"],
  },
  {
    title: "Monitoramento",
    desc: "Observabilidade fim-a-fim.",
    stack: ["Grafana", "Prometheus", "OTel"],
  },
  {
    title: "Chat Atendimento",
    desc: "Realtime e bots.",
    stack: ["React", "WebSocket"],
  },
  {
    title: "App Eventos",
    desc: "Ingressos e QR-Code.",
    stack: ["React Native", "Firebase"],
  },
  {
    title: "Docs Internos",
    desc: "Portal e permissões.",
    stack: ["Next.js", "Auth.js"],
  },
  {
    title: "Loja Artesanato",
    desc: "Checkout simples e frete.",
    stack: ["Vite", "Stripe", "Correios"],
  },
  {
    title: "SaaS CRM",
    desc: "Pipeline, tarefas e relatórios.",
    stack: ["React", "Nest", "PG"],
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-app-gradient text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 py-2 z-30 bg-chrome-gradient text-white border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <img
            src="/AndesCore.jpg"
            alt="AndesCore"
            className="w-14 h-14 rounded-2xl"
          />
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <a href="#projetos" className="hover:text-yellow-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-yellow-400">
                Serviços
              </a>
            </li>
            <li>
              <a href="#stack" className="hover:text-yellow-400">
                Stack
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-yellow-400">
                Contato
              </a>
            </li>
          </ul>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:bg-yellow-400 transition"
          >
            Fale conosco <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* Hero (logo à direita) */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* texto */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Desenvolva seu <span className="text-slate-700">site</span>,{" "}
              <span className="text-slate-700">e-commerce</span>,{" "}
              <span className="text-slate-700">SaaS</span> e qualquer outro
              sistema conosco.
            </motion.h1>
            <p className="mt-5 text-slate-600 max-w-xl">
              Da ideia ao deploy em nuvem com observabilidade, segurança e
              performance. Nós cuidamos do backend, frontend, mobile, CI/CD e
              infraestrutura.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Arquitetura sob medida",
                "Infra AWS gerenciada",
                "Pagamentos (Pix/Cartão)",
                "Suporte e evolução",
              ].map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full hover:bg-yellow-400"
                >
                  <CheckCircle2 className="w-4 h-4" /> {t}
                </span>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              <a
                href="#contato"
                className="rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-blue-500"
              >
                Quero um orçamento
              </a>
              <a
                href="#projetos"
                className="rounded-2xl px-5 py-3 bg-white border border-slate-300 text-slate-800 hover:bg-blue-500"
              >
                Ver projetos
              </a>
            </div>
          </div>

          {/* imagem */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-sm grid place-items-center overflow-hidden">
              <img
                src="/AndesCore.jpg"
                alt="AndesCore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Serviços
        </h2>
        <p className="mt-8 text-slate-600 max-w-3xl">
          Construímos produtos digitais modernos: APIs escaláveis, front-ends
          rápidos, apps mobile e infraestrutura em nuvem com CI/CD.
        </p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              t: "Web & E-commerce",
              d: "Next.js/React, SEO, checkout, integrações (Pix/Cartão).",
            },
            {
              t: "APIs & SaaS",
              d: "Node/Nest/Spring, multi-tenant, billing e observabilidade.",
            },
            {
              t: "Mobile",
              d: "React Native/Flutter com push, mapas e offline.",
            },
            {
              t: "Cloud & DevOps",
              d: "AWS, Docker, Kubernetes, monitoramento e custos.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:bg-blue-200"
            >
              <h3 className="font-semibold text-slate-900">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos (20) */}
      <section id="projetos" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Projetos entregues
          </h2>
          <p className="mt-2 text-slate-600">
            Mais de 20 soluções publicadas, do MVP ao enterprise.
          </p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <article
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm transition p-5"
              >
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tag, k) => (
                    <span
                      key={k}
                      className="text-xs bg-white border border-slate-200 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STACK por categorias */}
      <section id="stack" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Stack por categorias</h2>
        <p className="mt-2 text-slate-600">
          Principais tecnologias e provedores que utilizamos no dia a dia.
        </p>

        <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Cloud */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">Cloud</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { I: SiAmazon, t: "AWS" },
                { I: SiGooglecloud, t: "Google Cloud" },
              ].map(({ I, t }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400"
                >
                  <I className="w-5 h-5" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Front-end */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">Front-end</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                SiReact,
                SiNextdotjs,
                SiVuedotjs,
                SiNuxtdotjs,
                SiVite,
                SiAngular,
                SiJavascript,
                SiTypescript,
                SiTailwindcss,
                SiBootstrap,
              ].map((I, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400"
                >
                  <I className="w-5 h-5" />
                </span>
              ))}
            </div>
          </div>

          {/* Back-end */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">Back-end</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { I: SiNodedotjs, t: "Node.js" },
                { I: SiNestjs, t: "Nest" },
                { I: SiExpress, t: "Express" },
                { I: SiSpring, t: "Spring" },
                { I: SiDjango, t: "Django" },
                { I: SiFastapi, t: "FastAPI" },
                { I: DiJava, t: "Java" },
                { I: SiKotlin, t: "Kotlin" },
              ].map(({ I, t }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400"
                >
                  <I className="w-5 h-5" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Dados & Analytics */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">Dados & Analytics</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { I: SiGoogleanalytics, t: "GA4" },
                { I: SiGooglebigquery, t: "BigQuery" },
                { I: SiPostgresql, t: "PostgreSQL" },
                { I: SiMysql, t: "MySQL" },
                { I: SiMongodb, t: "MongoDB" },
              ].map(({ I, t }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400"
                >
                  <I className="w-5 h-5" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">DevOps, CI/CD e Observabilidade</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { I: SiDocker, t: "Docker" },
                { I: SiKubernetes, t: "Kubernetes" },
                { I: SiNginx, t: "NGINX" },
                { I: SiGrafana, t: "Grafana" },
                { I: SiPrometheus, t: "Prometheus" },
                { I: SiGithubactions, t: "GH Actions" },
              ].map(({ I, t }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400"
                >
                  <I className="w-5 h-5" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile, Auth & Mensageria */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">Mobile, Auth & Mensageria</h3>
            <div className="mt-3 flex flex-wrap gap-3 ">
              {[
                { I: SiReact, t: "React Native"},
                { I: SiFlutter, t: "Flutter" },
                { I: SiFirebase, t: "Firebase" },
                { I: SiAuth0, t: "Auth0" },
                { I: SiRabbitmq, t: "RabbitMQ" },
              ].map(({ I, t }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 hover:bg-yellow-400"
                >
                  <I className="w-5 h-5" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Pronto para começar?
            </h2>
            <p className="mt-2 text-slate-300 max-w-xl">
              Conte sua ideia e receba um escopo enxuto, com prazos, custos e um
              plano de evolução contínua.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#contato"
              className="rounded-2xl bg-white text-slate-900 px-5 py-3 hover:bg-blue-500"
            >
              Solicitar proposta
            </a>
            <a
              href="#projetos"
              className="rounded-2xl border border-white/30 px-5 py-3 hover:bg-white/10"
            >
              Ver cases
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO enxuto */}
      <section id="contato" className="mx-auto max-w-6xl px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h2 className="text-xl md:text-2xl font-semibold">
            Entre em contato
          </h2>
          <p className="mt-2 text-slate-600">
            Mande um e-mail com uma breve descrição do que quer construir.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="mailto:andescoresoftware@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-blue-500"
            >
              <Mail className="w-4 h-4" /> andescoresoftware@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER minimal + WhatsApp */}
      <footer className="border-t border-white/10 bg-chrome-gradient text-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-center md:text-left">
              <p className="hover:text-yellow-400">© {new Date().getFullYear()} AndesCore</p>
              <p className="mt-1 hover:text-yellow-400">
                Contato:{" "}
                <a
                  href="mailto:andescoresoftware@gmail.com"
                  className="underline"
                >
                  andescoresoftware@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                className="hover:text-yellow-400"
                href="https://wa.me/5571994105740"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                className="hover:text-yellow-400"
                href="https://github.com/lmgaspa"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                className="hover:text-yellow-400"
                href="https://www.linkedin.com/in/luiz-gasparetto-tech/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
