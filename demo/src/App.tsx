import { useState } from 'react';
import {
  DynamicIconLoad,
  Css,
  Cypress,
  Git,
  Github,
  Globe,
  Html5,
  Javascript,
  Linkedin,
  Next,
  Php,
  Postgresql,
  React as ReactIcon,
  Tailwindcss,
  Typescript,
  Vercel,
  Vite,
  Window,
  Zod,
  Zustand,
} from 'portfolio-svg-icon-provider';
import type { SvgIconName } from 'portfolio-svg-icon-provider';

const iconList = [
  { name: 'Css' as const, label: 'Css', Component: Css },
  { name: 'Cypress' as const, label: 'Cypress', Component: Cypress },
  { name: 'Git' as const, label: 'Git', Component: Git },
  { name: 'Github' as const, label: 'Github', Component: Github },
  { name: 'Globe' as const, label: 'Globe', Component: Globe },
  { name: 'Html5' as const, label: 'Html5', Component: Html5 },
  { name: 'Javascript' as const, label: 'Javascript', Component: Javascript },
  { name: 'Linkedin' as const, label: 'Linkedin', Component: Linkedin },
  { name: 'Next' as const, label: 'Next', Component: Next },
  { name: 'Php' as const, label: 'Php', Component: Php },
  { name: 'Postgresql' as const, label: 'Postgresql', Component: Postgresql },
  { name: 'React' as const, label: 'React', Component: ReactIcon },
  { name: 'Tailwindcss' as const, label: 'Tailwindcss', Component: Tailwindcss },
  { name: 'Typescript' as const, label: 'Typescript', Component: Typescript },
  { name: 'Vercel' as const, label: 'Vercel', Component: Vercel },
  { name: 'Vite' as const, label: 'Vite', Component: Vite },
  { name: 'Window' as const, label: 'Window', Component: Window },
  { name: 'Zod' as const, label: 'Zod', Component: Zod },
  { name: 'Zustand' as const, label: 'Zustand', Component: Zustand },
] as const;

export const App = () => {
  const [selectedIcon, setSelectedIcon] = useState<SvgIconName>('React');
  const [size, setSize] = useState<number>(72);

  return (
    <div className="app-shell">
      <header>
        <h1>SVG Icon Provider Demo</h1>
        <p>Interactively test icons, props, and dynamic loading.</p>
      </header>

      <section className="controls">
        <div className="control-row">
          <label htmlFor="icon-select">Choose an icon</label>
          <select
            id="icon-select"
            value={selectedIcon}
            onChange={(event) => setSelectedIcon(event.target.value as SvgIconName)}
          >
            {iconList.map((icon) => (
              <option key={icon.name} value={icon.name}>
                {icon.label}
              </option>
            ))}
          </select>
        </div>

        <div className="control-row">
          <label htmlFor="icon-size">Size</label>
          <input
            id="icon-size"
            type="number"
            min={24}
            max={256}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
          />
        </div>
      </section>

      <section className="preview-panel">
        <h2>Selected icon preview</h2>
        <div className="preview-box">
          <DynamicIconLoad name={selectedIcon} size={size}/>
          <div className="preview-meta">
            <strong>{selectedIcon}</strong>
            <span>{size}px</span>
          </div>
        </div>
      </section>

      <section className="grid-panel">
        <h2>All icons</h2>
        <div className="icon-grid">
          {iconList.map((icon) => {
            const IconComponent = icon.Component;
            return (
              <article key={icon.name} className="icon-card">
                <IconComponent size={48} color="#111827" />
                <span>{icon.label}</span>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
