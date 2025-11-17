import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#common-themes', label: '02 Common Themes' },
  { href: '#builder-day-enablement', label: '03 Builder Day 2.0 Enablement' },
  { href: '#for-designers', label: '04 Cursor for Designers' },
  { href: '#cursor-101', label: '05 Cursor 101 – Foundations' },
  { href: '#cursor-201', label: '06 Cursor 201 – Advanced' },
  { href: '#resources', label: '07 Related Resources' },
]

export default function CursorForDesigners() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Crafted for creators.</div>
        <h1>Cursor for Designers</h1>
        <p className="hero-subtitle">
          A practical guide to turning designs into live prototypes and bridging design–dev workflows
        </p>
        <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>
          <strong>For:</strong> Product Design Teams<br />
          Last Updated: November, 2025
        </div>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="overview" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
              <p>
                Cursor enables designers to move from static design files to building with real behavior and data. 
                Prototypes become a natural extension of the design process, allowing you to create interactive 
                experiences directly from Figma frames.
              </p>
            </section>

            <section id="common-themes" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>🧩 Common Themes Across Trainings</h2>
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

            <section id="builder-day-enablement" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>🎯 Cursor Training: Builder Day 2.0 Enablement</h2>
              <p style={{fontSize: '0.9375rem', color: '#6b7280', marginBottom: '1rem'}}>
                <strong>Date:</strong> Wed, Oct 29 · 10:00 PT / 1:00 ET
              </p>
              <p>
                <strong>Focus:</strong> A live, hands-on session with the Cursor team and Webflow&apos;s prototyping working group 
                exploring how PMs, Designers, and Insights can use Cursor to plan, build, and debug prototypes. The training 
                walked through practical demos of Plan, Agent, and Ask modes; connecting to Figma via MCP; and working from 
                Webflow&apos;s internal Spring prototype repo to accelerate experimentation and learning with AI-assisted code.
              </p>

              <div style={{margin: '3rem 0'}}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/eQk5naqGXFY"
                    title="Cursor Training: Builder Day 2.0 Enablement"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  ></iframe>
                </div>
              </div>

              <h3>Key Topics</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Plan → Agent → Ask Workflow</h4>
                  <p>Overview of workflow and when to use each mode</p>
                </div>
                <div className="goal-card">
                  <h4>Figma MCP Integration</h4>
                  <p>Quick translation from design frames to runnable code</p>
                </div>
                <div className="goal-card">
                  <h4>Plan Mode</h4>
                  <p>Scope prompts into clear, multi-step build plans</p>
                </div>
                <div className="goal-card">
                  <h4>Live Prototyping</h4>
                  <p>Building, previewing, and iterating live prototypes within Cursor</p>
                </div>
                <div className="goal-card">
                  <h4>Ask Mode</h4>
                  <p>Code exploration, styling explanations, and safe debugging</p>
                </div>
                <div className="goal-card">
                  <h4>Model Selection</h4>
                  <p>Switching between model types (fast vs. deep reasoning) for better performance</p>
                </div>
                <div className="goal-card">
                  <h4>Spring Repo Walkthrough</h4>
                  <p>Structure, primitives vs. composed components, and targeted edits via @-references</p>
                </div>
                <div className="goal-card">
                  <h4>Prototype Fidelity</h4>
                  <p>Discussion on prototype fidelity vs. audience, and best practices for early vs. polished builds</p>
                </div>
                <div className="goal-card">
                  <h4>Insights & Data Use Cases</h4>
                  <p>Using Cursor for light analysis, metrics review, and documentation updates</p>
                </div>
              </div>
            </section>

            <section id="for-designers" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>🎨 Cursor for Designers</h2>
              <p>
                <strong>Focus:</strong> Turning designs into live prototypes and bridging design–dev workflows.
              </p>

              <h3>Key Topics</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Figma MCP Integration</h4>
                  <p>Import Figma frames; generate responsive, production-ready code.</p>
                </div>
                <div className="goal-card">
                  <h4>Prototype Creation</h4>
                  <p>Go from static mockups → interactive pages within minutes.</p>
                </div>
                <div className="goal-card">
                  <h4>Plan vs. Agent Mode</h4>
                  <p>Plan to scope ideas first; Agent to execute changes.</p>
                </div>
                <div className="goal-card">
                  <h4>Iterative &quot;Sculpting&quot; Process</h4>
                  <p>AI as a creative partner — refine step-by-step.</p>
                </div>
                <div className="goal-card">
                  <h4>Design System Alignment</h4>
                  <p>Use tokens/components (ShadCN, Tailwind, etc.) for consistent styling.</p>
                </div>
                <div className="goal-card">
                  <h4>Quick Fixes in Code</h4>
                  <p>Designers can make small production edits and open PRs directly.</p>
                </div>
              </div>

              <div className="info-box" style={{marginTop: '2rem'}}>
                <h4>Mindset Shift</h4>
                <p>
                  Move from static design files to building with real behavior and data. 
                  Prototypes become a natural extension of the design process.
                </p>
              </div>
            </section>

            <section id="cursor-101" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>⚙️ Cursor 101 – Foundations</h2>
              <p>
                <strong>Focus:</strong> Core product walkthrough and mental model for AI-native coding.
              </p>

              <h3>Core Tools</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Tab</h4>
                  <p>Next-action autocomplete</p>
                </div>
                <div className="goal-card">
                  <h4>Command K</h4>
                  <p>Inline edits/refactors</p>
                </div>
                <div className="goal-card">
                  <h4>Agent / Plan Mode</h4>
                  <p>Multi-file reasoning & task orchestration</p>
                </div>
              </div>

              <h3>Key Topics</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Plan Mode Basics</h4>
                  <p>Collaborate on a build plan before execution.</p>
                </div>
                <div className="goal-card">
                  <h4>Model Overview</h4>
                  <p>Auto vs. standard vs. thinking models—when to use each.</p>
                </div>
                <div className="goal-card">
                  <h4>Context Management</h4>
                  <p>Checkpoints, multiple chats, avoiding &quot;context rot.&quot;</p>
                </div>
                <div className="goal-card">
                  <h4>CLI Option</h4>
                  <p>Use cursor agent in other IDEs or for automation.</p>
                </div>
              </div>

              <div className="info-box" style={{marginTop: '2rem'}}>
                <h4>Mindset</h4>
                <p>
                  Move from static hand-offs to co-building with an AI teammate. Cursor becomes 
                  a collaborative partner in the development process.
                </p>
              </div>
            </section>

            <section id="cursor-201" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>🚀 Cursor 201 – Advanced Techniques</h2>
              <p>
                <strong>Focus:</strong> Power-user methods for prompting, model strategy, and long-form work.
              </p>

              <h3>Advanced Prompting & Context Engineering</h3>
              <ul style={{marginBottom: '2rem'}}>
                <li>Keep chats single-purpose</li>
                <li>Start new sessions when focus changes</li>
                <li>Use @-references (files, docs, commits) to shape context</li>
              </ul>

              <h3>Model Selection Strategy</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Standard</h4>
                  <p>Speed, low cost</p>
                </div>
                <div className="goal-card">
                  <h4>Thinking</h4>
                  <p>Deep reasoning (chain-of-thought)</p>
                </div>
                <div className="goal-card">
                  <h4>Max Mode</h4>
                  <p>Million-token context for large audits</p>
                </div>
              </div>

              <h3>Key Topics</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <h4>Prompt Flow Management</h4>
                  <p>Queue or inject prompts while agent works.</p>
                </div>
                <div className="goal-card">
                  <h4>Troubleshooting</h4>
                  <p>Switch models, use &quot;think for 10 paragraphs,&quot; or start a new session.</p>
                </div>
                <div className="goal-card">
                  <h4>Long-Horizon Tasks</h4>
                  <p>Write a spec + checklist markdown, then have the agent execute step-by-step. Include validation (&quot;write & run tests&quot;) for autonomous runs.</p>
                </div>
                <div className="goal-card">
                  <h4>Rules & Custom Commands</h4>
                  <p>Save reusable prompts as /commands or project rules.</p>
                </div>
              </div>
            </section>

            <section id="resources" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>🔗 Related Resources</h2>
              
              <h3>Additional Training Videos</h3>
              <div style={{margin: '2rem 0'}}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hhF_oa0fGNE"
                    title="Cursor Training Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  ></iframe>
                </div>
              </div>

              <h3>Related Guides</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <h4>
                    <a href="/builder-day-in-a-box/cursor-for-product-managers">
                      Cursor for Product Managers
                    </a>
                  </h4>
                  <p>Learn how PMs use Cursor to plan, analyze, and ship faster</p>
                </div>

                <div className="resource-item">
                  <h4>
                    <a href="/builder-day-in-a-box/cursor-for-data-science">
                      Cursor for Data Science
                    </a>
                  </h4>
                  <p>Explore how data scientists use Cursor for analysis and pipelines</p>
                </div>

                <div className="resource-item">
                  <h4>
                    <a href="/builder-day-in-a-box/figma-make-training">
                      Figma Make Training
                    </a>
                  </h4>
                  <p>Learn how to use Figma Make for AI-assisted prototyping</p>
                </div>

                <div className="resource-item">
                  <h4>
                    <a href="/builder-day-in-a-box/prototyping-101">
                      Prototyping 101
                    </a>
                  </h4>
                  <p>A practical guide to choosing the right prototype fidelity</p>
                </div>

                <div className="resource-item">
                  <h4>
                    <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">
                      Cursor Official Website
                    </a>
                  </h4>
                  <p>Learn more about Cursor and download the editor</p>
                </div>
              </div>
            </section>
          </div>

          <TableOfContents items={tocItems} />
        </div>
      </section>
    </>
  )
}

