import Script from 'next/script'
import { CONTACT_EMAIL } from '../lib/site'

export const metadata = {
  title: 'Rye Young | Home',
  description: 'Rye Young 个人主页，采用 SimonAKing HomePage 风格的互动首页。',
}

export default function Home() {
  return (
    <main className="homepage-master">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SimonAKing/font/font.min.css" />
      <link rel="stylesheet" href="/homepage-master.css" />

      <div className="content content-intro">
        <div className="content-inner">
          <canvas id="background"></canvas>
          <div className="wrap fade">
            <a
              className="github-corner"
              href="https://github.com/youngyang1113"
              aria-label="View source on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 250 250"
                style={{ fill: 'transparent', color: '#fff', position: 'absolute', top: 0, border: 0, right: 0 }}
                aria-hidden="true"
              >
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                <path
                  d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                  fill="currentColor"
                  className="octo-arm"
                />
                <path
                  d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                  fill="currentColor"
                  className="octo-body"
                />
              </svg>
            </a>
            <style>
              {`.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}`}
            </style>
            <h2 className="content-title">Rye Young</h2>
            <h3 className="content-subtitle" original-content="Front end Engineer & Open Source">
              &nbsp;
            </h3>
            <a className="enter">enter</a>
            <div className="arrow arrow-1" />
            <div className="arrow arrow-2" />
          </div>
        </div>
        <div className="shape-wrap">
          <svg className="shape" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <path
              d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"
              pathdata-id="M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z"
            />
          </svg>
        </div>
      </div>

      <div className="content content-main">
        <div id="card">
          <div className="card-inner fade">
            <header>
              <img src="/assets/avatar.jpg" width="100" height="100" alt="avatar" />
              <h1 data-translate="name">Rye Young</h1>
              <h2 id="signature" data-translate="signature">
                Front End Engineering · Open Source
              </h2>
            </header>
            <ul>
              <li>
                <a href="/blog" aria-label="Blog">
                  <i className="icon icon-bokeyuan" />
                  <span data-translate="Blog">Blog</span>
                </a>
              </li>
              <li>
                <a href="/about" aria-label="About">
                  <i className="icon icon-xiaolian" />
                  <span data-translate="About">About</span>
                </a>
              </li>
              <li>
                <a href={`/contact?email=${encodeURIComponent(CONTACT_EMAIL)}`} aria-label="Email">
                  <i className="icon icon-email" />
                  <span data-translate="Email">Email</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/youngyang1113" aria-label="Github" target="_blank" rel="noopener noreferrer">
                  <i className="icon icon-github" />
                  <span data-translate="Github">Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <canvas className="grid-background" id="gridCanvas" />
      </div>

      <Script
        id="homepage-dom-shim"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.$=window.$||function(t){return document.querySelector(t)};window.$$=window.$$||function(t){return document.querySelectorAll(t)};window.hiddenProperty="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":"msHidden"in document?"msHidden":null;window.visibilityChangeEvent=window.hiddenProperty?window.hiddenProperty.replace(/hidden/i,"visibilitychange"):"visibilitychange";window.config=window.config||{SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:30,g:31,b:33},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.4,BLOOM_THRESHOLD:.8,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};`,
        }}
      />
      <Script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js" strategy="afterInteractive" />
      <Script src="/js/homepage-main.js" strategy="afterInteractive" />
      <Script src="/js/homepage-background.js" strategy="afterInteractive" />
    </main>
  )
}
