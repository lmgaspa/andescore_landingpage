// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Stack.tsx
// ──────────────────────────────────────────────────────────────────────────────

import { IconPill } from "../components/ui/IconPill";
import {
  SiAmazon,
  SiGooglecloud,
  SiHeroku,
  SiRender,
  SiVercel,
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
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiSpring,
  SiDjango,
  SiFastapi,
  SiKotlin,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGrafana,
  SiPrometheus,
  SiGithubactions,
  SiGoogleanalytics,
  SiGooglebigquery,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiAuth0,
  SiRabbitmq,
  SiJenkins,
  SiGitlab,
  SiSonarqube,
  SiVitest,
  SiCypress,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export function Stack() {
  const CLOUD = [
    { I: SiAmazon, t: "AWS" },
    { I: SiGooglecloud, t: "Google Cloud" },
    { I: SiHeroku, t: "Heroku" },
    { I: SiRender, t: "Render" },
    { I: SiVercel, t: "Vercel" },
  ];
  const FE = [
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
  ];
  const BE = [
    { I: SiNodedotjs, t: "Node.js" },
    { I: SiNestjs, t: "Nest" },
    { I: SiExpress, t: "Express" },
    { I: SiSpring, t: "Spring" },
    { I: SiDjango, t: "Django" },
    { I: SiFastapi, t: "FastAPI" },
    { I: DiJava, t: "Java" },
    { I: SiKotlin, t: "Kotlin" },
  ];
  const DATA = [
    { I: SiGoogleanalytics, t: "GA4" },
    { I: SiGooglebigquery, t: "BigQuery" },
    { I: SiPostgresql, t: "PostgreSQL" },
    { I: SiMysql, t: "MySQL" },
    { I: SiMongodb, t: "MongoDB" },
  ];
  const DEVOPS = [
    { I: SiDocker, t: "Docker" },
    { I: SiKubernetes, t: "Kubernetes" },
    { I: SiNginx, t: "NGINX" },
    { I: SiGrafana, t: "Grafana" },
    { I: SiPrometheus, t: "Prometheus" },
    { I: SiGithubactions, t: "GH Actions" },
    { I: SiJenkins, t: "Jenkins" },
    { I: SiGitlab, t: "GitLab CI" },
    { I: SiSonarqube, t: "SonarQube" },
  ];
  const TEST = [
    { I: SiVitest, t: "Vitest" },
    { I: SiCypress, t: "Cypress" },
  ];
  const MOBILE = [
    { I: SiReact, t: "React Native" },
    { I: SiFirebase, t: "Firebase" },
    { I: SiAuth0, t: "Auth0" },
    { I: SiRabbitmq, t: "RabbitMQ" },
  ];

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl my-4">
      <h2 className="text-2xl md:text-3xl font-bold">Stack by categories</h2>
      <p className="mt-2 text-slate-600">
        Key technologies and providers we use daily.
      </p>
      <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">Cloud</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {CLOUD.map(({ I, t }) => (
              <IconPill key={t} icon={I} label={t} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">Front‑end</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {FE.map((I, i) => (
              <IconPill key={i} icon={I} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">Back‑end</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {BE.map(({ I, t }) => (
              <IconPill key={t} icon={I} label={t} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">Data & Analytics</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {DATA.map(({ I, t }) => (
              <IconPill key={t} icon={I} label={t} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">DevOps, CI/CD & Observability</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {DEVOPS.map(({ I, t }) => (
              <IconPill key={t} icon={I} label={t} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">Testing</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {TEST.map(({ I, t }) => (
              <IconPill key={t} icon={I} label={t} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">Mobile, Auth & Messaging</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {MOBILE.map(({ I, t }) => (
              <IconPill key={t} icon={I} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
