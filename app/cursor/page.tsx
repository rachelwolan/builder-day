"use client"

export default function Cursor() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Crafted for creators.</div>
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
            <li><a href="#common-themes">Common Themes</a></li>
          </ul>
        </nav>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
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
