// Genera public/cv-en.pdf, cv-ca.pdf i cv-es.pdf a partir dels textos de la web.
// Fa servir Chrome o Edge en mode headless. Us: npm run cv
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { projects, profile, skillGroups } from '../src/data/profile.ts'
import { ca } from '../src/i18n/ca.ts'
import { en } from '../src/i18n/en.ts'
import { es } from '../src/i18n/es.ts'

const CITY = 'Barcelona'
const CV_PROJECTS = ['pastisseria', 'budget', 'italumni', 'movies']

const browsers = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
]
const browser = browsers.find(existsSync)
if (!browser) throw new Error('Chrome or Edge not found')

const outDir = resolve('node_modules/.cache/cv')
mkdirSync(outDir, { recursive: true })

const item = ({ title, place, period }) => `
  <div class="row">
    <div><strong>${title}</strong><br><span>${place}</span></div>
    <span class="period">${period}</span>
  </div>`

const html = (lang, t) => `<!doctype html>
<html lang="${lang}">
<meta charset="utf-8">
<title>CV ${profile.name}</title>
<style>
  @page { size: A4; margin: 12mm 14mm; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #1d2433; font: 9.6pt/1.38 'Segoe UI', Arial, sans-serif; }
  h1 { margin: 0; font-size: 21pt; line-height: 1.1; }
  h2 { margin: 9pt 0 3pt; padding-bottom: 1pt; border-bottom: 1px solid #0f6e56; color: #0f6e56; font-size: 10.5pt; }
  p { margin: 0; }
  a { color: inherit; text-decoration: none; }
  .role { color: #0f6e56; font-size: 11pt; font-weight: 600; }
  .contact { color: #5b6475; font-size: 8.8pt; }
  .row { display: flex; justify-content: space-between; gap: 12pt; margin-bottom: 2.5pt; break-inside: avoid; }
  .row span { color: #5b6475; }
  .period { flex: none; font-size: 8.8pt; }
  .tech { color: #0f6e56; font-size: 8.8pt; }
  .project { margin-bottom: 3pt; break-inside: avoid; }
</style>
<h1>${profile.name}</h1>
<p class="role">${t.home.role}</p>
<p class="contact">${profile.email} · ${CITY} · ${profile.github.replace('https://', '')} · ${profile.linkedin.replace('https://www.', '')}</p>
<h2>${t.cv.summaryTitle}</h2>
<p>${t.cv.summary}</p>
<h2>${t.cv.skillsTitle}</h2>
${skillGroups.map((g) => `<p><strong>${t.cv.skillGroups[g.id]}:</strong> ${g.items.join(', ')}</p>`).join('')}
<h2>${t.projects.title}</h2>
${CV_PROJECTS.map((id) => {
  const project = projects.find((p) => p.id === id)
  const text = t.projects.items[id]
  return `<div class="project"><strong>${text.title}</strong> <span class="tech">${project.tech.join(', ')}</span><br>${text.description}</div>`
}).join('')}
<h2>${t.cv.experienceTitle}</h2>
${t.cv.experience.map(item).join('')}
<h2>${t.cv.educationTitle}</h2>
${t.cv.education.map(item).join('')}
<h2>${t.cv.otherTitle}</h2>
<p>${t.cv.other.join(' · ')}</p>
</html>`

for (const [lang, t] of Object.entries({ en, ca, es })) {
  const htmlPath = resolve(outDir, `cv-${lang}.html`)
  writeFileSync(htmlPath, html(lang, t))
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--user-data-dir=${resolve(outDir, 'profile')}`,
    `--print-to-pdf=${resolve('public', `cv-${lang}.pdf`)}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' })
  console.log(`public/cv-${lang}.pdf`)
}
