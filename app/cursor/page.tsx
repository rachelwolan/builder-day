"use client"

export default function Cursor() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Prototyping for advanced.</div>
        <h1>Cursor</h1>
        <p className="hero-subtitle">
          A practical guide to AI-assisted development for Product Design, 
          Product Management, and Data Science teams
        </p>
      </section>

      {/* Table of Contents */}
      <section style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <nav className="table-of-contents">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#role-guides">Role-Specific Guides</a></li>
            <li><a href="#webflow-cloud">Ship with Webflow Cloud</a></li>
            <li><a href="#common-themes">Common Themes</a></li>
          </ul>
        </nav>
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>
            <section id="overview" className="guide-section">
              <h2>Overview</h2>
              <p>
                Cursor is an AI-powered code editor that helps teams build, prototype, and ship faster. 
                Choose your role-specific guide below to get started with Cursor training tailored to your needs.
              </p>
            </section>

            <section id="role-guides" className="guide-section">
              <h2>Role-Specific Guides</h2>
              <div className="goals-grid" style={{marginTop: '2rem'}}>
                <div className="goal-card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/cursor-for-product-managers'}>
                  <h3>📋 Cursor for Product Managers</h3>
                  <p>Learn how to use Cursor as a builder&apos;s tool to plan, analyze, and ship faster. Create specs, build prototypes, and explore codebases with AI assistance.</p>
                  <a href="/cursor-for-product-managers" style={{color: 'var(--accent)', fontWeight: 500, marginTop: '1rem', display: 'inline-block'}}>
                    View Guide →
                  </a>
                </div>

                <div className="goal-card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/cursor-for-designers'}>
                  <h3>🎨 Cursor for Designers</h3>
                  <p>Turn designs into live prototypes and bridge design–dev workflows. Import Figma frames, generate code, and create interactive experiences.</p>
                  <a href="/cursor-for-designers" style={{color: 'var(--accent)', fontWeight: 500, marginTop: '1rem', display: 'inline-block'}}>
                    View Guide →
                  </a>
                </div>

                <div className="goal-card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/cursor-for-data-science'}>
                  <h3>📊 Cursor for Data Science</h3>
                  <p>Accelerate data science and engineering workflows. Work with notebooks, databases, dbt, and data pipelines using AI-assisted development.</p>
                  <a href="/cursor-for-data-science" style={{color: 'var(--accent)', fontWeight: 500, marginTop: '1rem', display: 'inline-block'}}>
                    View Guide →
                  </a>
                </div>
              </div>
            </section>

            <section id="webflow-cloud" className="guide-section">
              <h2>☁️ Ship with Webflow Cloud</h2>
              <p>
                Once you&apos;ve built your app in Cursor, deploy it to production with <strong>Webflow Cloud</strong>—a
                serverless hosting platform that runs on Cloudflare&apos;s global edge network with sub-50ms response times.
              </p>

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '8px'
              }}>
                <h3 style={{marginTop: 0}}>The Complete Workflow</h3>
                <ol style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
                  <li><strong>Code in Cursor</strong> — Build your app using AI-assisted development with Next.js or Astro</li>
                  <li><strong>Push to GitHub</strong> — Commit your code and push to your repository</li>
                  <li><strong>Deploy on Webflow Cloud</strong> — Automatic deployments across dev, staging, and production environments</li>
                </ol>
              </div>

              <div className="track-card" style={{marginTop: '2rem'}}>
                <h3>What You Get with Webflow Cloud</h3>
                <ul>
                  <li><strong>Edge-powered performance</strong> — Global CDN with Cloudflare Workers for lightning-fast delivery</li>
                  <li><strong>Framework support</strong> — Native Next.js and Astro support, with more frameworks coming</li>
                  <li><strong>Built-in storage</strong> — SQLite databases, Key Value Store for caching, and Object Storage for media files</li>
                  <li><strong>GitHub integration</strong> — Automated CI/CD workflows with environment-based deployments</li>
                  <li><strong>No infrastructure management</strong> — Focus on building, not managing servers</li>
                </ul>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #4353ff 0%, #2d3bb3 100%)',
                borderRadius: '12px',
                color: 'white'
              }}>
                <p style={{margin: 0, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 500}}>
                  Ready to deploy?
                </p>
                <a
                  href="https://developers.webflow.com/webflow-cloud/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'underline',
                    fontSize: '0.9375rem',
                    display: 'inline-block'
                  }}
                >
                  Explore Webflow Cloud documentation →
                </a>
              </div>
            </section>

            <section id="common-themes" className="guide-section">
              <h2>🧩 Common Themes Across Trainings</h2>
              <p>
                Across all Cursor training sessions, several key themes emerge that help teams work 
                more effectively with AI-assisted development.
              </p>

              <div className="track-card">
                <h3>AI as Collaborator</h3>
                <p>
                  Cursor isn&apos;t autocomplete; it&apos;s a reasoning partner that plans, builds, and explains. 
                  Teams use it not just to write code but to scope ideas, debug, and learn faster together.
                </p>
              </div>

              <div className="track-card">
                <h3>Shared Modes</h3>
                <p>
                  The core loop — <strong>Plan → Agent → Ask → Iterate</strong> — supports every discipline. 
                  Plan creates structure, Agent executes, Ask explains, and Iterate refines.
                </p>
              </div>

              <div className="track-card">
                <h3>Cross-Disciplinary Value</h3>
                <ul>
                  <li><strong>Designers</strong> → Build interactive prototypes directly from Figma with MCP</li>
                  <li><strong>PMs</strong> → Create specs, small PRs, and feature experiments</li>
                  <li><strong>Insights</strong> → Explore data, analyze metrics, and connect to Snowflake or Gong MCP</li>
                </ul>
              </div>

              <div className="track-card">
                <h3>Mindset</h3>
                <p>
                  Prototype to learn, not to perfect. Match fidelity to intent: quick and directional early, 
                  more polished when sharing broadly.
                </p>
              </div>

              <div className="track-card">
                <h3>Context Matters</h3>
                <p>
                  Add component names, design system docs, and indexed specs for sharper results. 
                  The more context you share, the smarter Cursor becomes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
