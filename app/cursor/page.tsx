"use client"

import TableOfContents from '@/components/TableOfContents'

export default function Cursor() {
  const tocItems = [
    { href: '#overview', label: '01 Overview' },
    { href: '#common-themes', label: '02 Common Themes' },
    { href: '#foundations', label: '03 Foundations' },
    { href: '#advanced', label: '04 Advanced Techniques' },
    { href: '#for-product-managers', label: '05 Cursor for Product Managers' },
    { href: '#for-designers', label: '06 Cursor for Designers' },
    { href: '#for-data-scientists', label: '07 Cursor for Data Scientists' },
    { href: '#webflow-cloud', label: '08 Ship with Webflow Cloud' },
  ]

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
        <TableOfContents items={tocItems} />
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>
            <section id="overview" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
              <p>
                Cursor is an AI-powered code editor that helps teams build, prototype, and ship faster. An advanced tool for developers and technical roles who want full code control.
              </p>
            </section>

            <section id="common-themes" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Common Themes</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Key themes that help teams work effectively with AI-assisted development.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>AI as Collaborator</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Reasoning partner that plans, builds, and explains</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Shared Modes</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Plan → Agent → Ask → Iterate</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Cross-Disciplinary</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Designers, PMs, and Data teams collaborate</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Prototype to Learn</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Match fidelity to intent, not perfection</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Context Matters</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Add docs, specs, and system details for better results</p>
                </div>
              </div>
            </section>

            <section id="foundations" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Foundations</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Core product walkthrough and mental model for AI-native coding.
              </p>

              {/* Video */}
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto 2rem',
                width: '100%'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src="https://www.youtube.com/embed/jY_YMV47H0Q"
                    title="Cursor 101 – Foundations"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Core Tools</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Tab</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Next-action autocomplete</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Command K</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Inline edits and refactors</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Agent / Plan Mode</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Multi-file reasoning & task orchestration</p>
                </div>
              </div>

              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Key Concepts</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Plan Mode Basics</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Collaborate on a build plan before execution</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Model Overview</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Auto vs. standard vs. thinking models</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Context Management</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Checkpoints, multiple chats, avoiding "context rot"</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>CLI Option</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Use cursor agent in other IDEs or for automation</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Mindset Shift</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Move from static hand-offs to co-building with an AI teammate</p>
                </div>
              </div>
            </section>

            <section id="advanced" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>Advanced Techniques</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Power-user methods for prompting, model strategy, and long-form work.
              </p>

              {/* Video */}
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto 2rem',
                width: '100%'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src="https://www.youtube.com/embed/PTKFhSfJzFY"
                    title="Advanced Cursor Techniques"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Advanced Prompting & Context Engineering</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Single-Purpose Chats</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Keep chats focused on one task or topic</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Fresh Sessions</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Start new sessions when focus changes</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>@-References</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Use @files, @docs, @commits to shape context</p>
                </div>
              </div>

              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Model Selection Strategy</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Standard Mode</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Speed and low cost for routine tasks</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Thinking Mode</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Deep reasoning with chain-of-thought</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Max Mode</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Million-token context for large audits</p>
                </div>
              </div>

              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Additional Techniques</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Prompt Flow Management</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Queue or inject prompts while agent works</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Troubleshooting</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Switch models, use "think for 10 paragraphs," or start new session</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Long-Horizon Tasks</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Write spec + checklist markdown, then execute step-by-step with validation</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Rules & Custom Commands</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Save reusable prompts as /commands or project rules</p>
                </div>
              </div>
            </section>

            <section id="for-product-managers" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Cursor for Product Managers</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Using Cursor as a builder&apos;s tool to plan, analyze, and ship faster.
              </p>

              {/* Video */}
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto 2rem',
                width: '100%'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src="https://www.youtube.com/embed/hhF_oa0fGNE"
                    title="Cursor for Product Managers"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Codebase Exploration</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Use Ask Mode to trace logic, dependencies, or find root causes</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Spec & Plan Creation</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Generate technical plans directly from natural language; integrate code context</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Rapid Prototyping</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Create or adjust front-end components to express product intent</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Documentation Ownership</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Update and push doc changes with PRs</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Data Analysis</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Load transcripts or analytics exports for summarization and insight generation</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Model Selection</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>When to use "thinking" vs. "speed" models</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>MCP Integrations</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Connect Jira, Figma, Notion for richer context</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Future of PM Work</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Closer to code, shorter loops between planning and validation</p>
                </div>
              </div>
            </section>

            <section id="for-designers" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Cursor for Designers</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Turn designs into live prototypes and bridge design–dev workflows.
              </p>

              {/* Video */}
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto 2rem',
                width: '100%'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src="https://www.youtube.com/embed/eQk5naqGXFY"
                    title="Cursor for Designers"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Figma MCP Integration</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Import frames, generate production code</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Prototype Creation</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Mockups → interactive pages in minutes</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Plan vs. Agent Mode</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Plan to scope, Agent to execute</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Iterative Sculpting</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>AI as creative partner, refine step-by-step</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Design System Alignment</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>ShadCN, Tailwind, consistent styling</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Quick Code Fixes</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Make edits, open PRs directly</p>
                </div>
              </div>
            </section>

            <section id="for-data-scientists" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Cursor for Data Scientists</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Using Cursor for data science and data engineering workflows.
              </p>

              {/* Video */}
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto 2rem',
                width: '100%'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src="https://www.youtube.com/embed/botg4dlg_BY"
                    title="Cursor for Data Scientists"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Dev Containers & Docker</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Reproducible local environments for notebooks and dbt</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>AI-Assisted Notebooks</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Generate or expand Jupyter notebooks; perform EDA</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Inline Code Editing</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Command K and inline prompts for analysis and plotting</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Database Connections</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Access Postgres or Snowflake from within Cursor</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>DBT Integration</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Generate models, YAML docs, and tests automatically</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>MCP & Extensions</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Snowflake extension for direct querying; MCP for agent-level reasoning</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>AI Pipelines</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Scaffold transformations (dbt/Snowflake) end-to-end, debug, and validate</p>
                </div>
                <div>
                  <strong style={{color: 'var(--accent)'}}>Reproducibility & Security</strong>
                  <p style={{margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Store credentials safely, share containerized projects</p>
                </div>
              </div>
            </section>

            <section id="webflow-cloud" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Ship with Webflow Cloud</h2>
              <p>
                Once you&apos;ve built your app in Cursor, deploy it to production with <strong>Webflow Cloud</strong>—a
                serverless hosting platform that runs on Cloudflare&apos;s global edge network with sub-50ms response times.
              </p>

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                borderLeft: '3px solid #10B981',
                borderRadius: '8px'
              }}>
                <h3 style={{marginTop: 0}}>The Complete Workflow</h3>
                <ol style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
                  <li><strong>Code in Cursor</strong> — Build your app using AI-assisted development with Next.js or Astro</li>
                  <li><strong>Push to GitHub</strong> — Commit your code and push to your repository</li>
                  <li><strong>Deploy on Webflow Cloud</strong> — Automatic deployments across dev, staging, and production environments</li>
                </ol>
              </div>

              <h3 style={{marginTop: '2rem'}}>What You Get:</h3>
              <ul>
                <li><strong>Edge-Powered Performance</strong> — Global CDN with Cloudflare Workers for lightning-fast delivery</li>
                <li><strong>Framework Support</strong> — Native Next.js and Astro support, with more frameworks coming</li>
                <li><strong>Built-in Storage</strong> — SQLite databases, Key Value Store for caching, and Object Storage for media files</li>
                <li><strong>GitHub Integration</strong> — Automated CI/CD workflows with environment-based deployments</li>
                <li><strong>Zero Infrastructure</strong> — Focus on building, not managing servers</li>
              </ul>

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px'
              }}>
                <p style={{margin: 0, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)'}}>
                  Ready to deploy?
                </p>
                <a
                  href="https://developers.webflow.com/webflow-cloud/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  Explore Webflow Cloud documentation →
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
