"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#purpose', label: '01 Purpose' },
  { href: '#quick-summary', label: '02 Quick Summary' },
  { href: '#what-is-make', label: '03 What is Figma Make' },
  { href: '#when-to-use', label: '04 When to Use It' },
  { href: '#capabilities', label: '05 Current Capabilities' },
  { href: '#getting-started', label: '06 Getting Started' },
]

export default function FigmaMakeTraining() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Prototyping for beginners.</div>
        <h1>Figma Make</h1>
        <p className="hero-subtitle">
          A practical guide to AI-assisted prototyping for Product Design,
          Product Management, and Insights teams
        </p>
        <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>
          <strong>For:</strong> Product Management, Product Design, Data Science, and User Research Teams
        </div>
      </section>

      {/* Video - Full width section */}
      <section style={{padding: '0 2rem 4rem', width: '100%', maxWidth: '100vw'}}>
        <div style={{
          maxWidth: '1920px',
          margin: '0 auto',
          width: '100%'
        }}>
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
              src="https://www.youtube.com/embed/LF-dUF-EYBs"
              title="Figma Make Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <TableOfContents items={tocItems} />
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>
            <section id="purpose" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Purpose</h2>
              <p>
                Give the Product org a fast, practical on-ramp to Figma Make so more people can ideate, prototype,
                and collaborate with AI—while staying aligned to Webflow systems and quality standards.
              </p>
            </section>

            <section id="quick-summary" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Quick Summary</h2>
              <p>
                <strong>Figma Make</strong> = prompt-to-prototype with code (React + Tailwind + shadcn/ui) rendered on canvas.
                Best for early concepting/ideation, bringing static designs to life, and cross-functional collaboration before handing off to engineers.
              </p>

              <h3 style={{marginTop: '2rem'}}>Key Points:</h3>
              <ul>
                <li><strong>Technology</strong> — React + Tailwind + shadcn/ui powered by Claude Sonnet 4.5</li>
                <li><strong>Best For</strong> — Early concepting, bringing static designs to life, cross-functional collaboration</li>
                <li><strong>Design Craft</strong> — Use your design system, clear guidelines, and good prompting for on-brand results</li>
                <li><strong>Capabilities</strong> — Make from scratch or from Figma frames/images; point-and-edit; code view; export/import tokens; templates; multiplayer; Supabase, Google Analytics, and GitHub integrations</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>On the Roadmap (from Figma):</h3>
              <ul>
                <li>Bring-Your-Own Design System (styles and components) with sync to Make</li>
                <li>Codebase ingest via private/public NPM for component mapping</li>
                <li>MCP client hooks to pull context (PRDs, docs)</li>
                <li>Commenting and improved prompt assistance</li>
                <li>Deeper Make↔Design interop</li>
              </ul>
            </section>

            <section id="what-is-make" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>What is Figma Make?</h2>
              <p>
                An AI-assisted prototyping space where PMs, Designers, Researchers, and Engineers can collaborate to build interactive prototypes quickly.
              </p>

              <h3 style={{marginTop: '2rem'}}>Core Capabilities:</h3>
              <ul>
                <li><strong>Generate Working UIs</strong> — From prompts or seeded with Figma frames/images</li>
                <li><strong>Iterate Visually</strong> — Then refine via Point & Edit or the code layer</li>
                <li><strong>Apply Design Tokens</strong> — Use Webflow tokens and (soon) components for brand-true output</li>
                <li><strong>Publish & Share</strong> — Quickly collect feedback and move to code with context</li>
              </ul>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                borderLeft: '3px solid #7C3AED',
                borderRadius: '8px',
                fontStyle: 'italic'
              }}>
                <p style={{margin: 0}}>
                  &quot;We see AI as a way to get ideas off the ground earlier… then refine in a continuous experience, on brand, and hand off with full design context.&quot; — Figma
                </p>
              </div>
            </section>

            <section id="when-to-use" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>When to Use It</h2>

              <h3>Use Figma Make for:</h3>
              <ul>
                <li>Early concepting and product exploration</li>
                <li>Replacing parts of a PRD with clickable behavior</li>
                <li>Rapid experiments and usability validation (GA IDs supported)</li>
                <li>Enable non-designers to prototype quickly using guardrails</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Use an IDE (Cursor/Claude Code) for:</h3>
              <ul>
                <li>Production-ready implementations</li>
                <li>Complex logic, custom libs, or security-sensitive flows</li>
                <li>Importing/using external JS packages beyond current Make scope</li>
              </ul>
            </section>

            <section id="capabilities" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Current Capabilities</h2>

              <h3>Generation Sources:</h3>
              <ul>
                <li><strong>Prompt-only</strong> — Text description of what you want to build</li>
                <li><strong>Prompt + Figma frames</strong> — Up to 3 well-structured frames (Auto Layout, named layers)</li>
                <li><strong>Prompt + images</strong> — Screenshots or mockups to inspire the output</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Technology Stack:</h3>
              <ul>
                <li><strong>Model</strong> — Anthropic Claude Sonnet 4.5 (under the hood)</li>
                <li><strong>Code substrate</strong> — React + Tailwind + shadcn/ui (editable in Make)</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Editing & Workflow:</h3>
              <ul>
                <li><strong>Point & Edit</strong> — Targeted changes with instant feedback</li>
                <li><strong>Code edits</strong> — For immediate, precise tweaks</li>
                <li><strong>Design tokens</strong> — Export Figma Variables → Export to Figma Make (point-in-time)</li>
                <li><strong>Templates</strong> — Publish Make outputs or blank guideline starters as templates</li>
                <li><strong>Multiplayer</strong> — Work together live (Make comments are on roadmap)</li>
                <li><strong>Interop</strong> — Copy Make layers → Figma Design (bi-directional sync on roadmap)</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Integrations:</h3>
              <ul>
                <li><strong>Google Analytics</strong> — Add GA ID for conversion funnels/tests</li>
                <li><strong>Supabase</strong> — Postgres + serverless functions for secure API/data mocks</li>
                <li><strong>GitHub</strong> — Push/export code to repos for Engineering consumption</li>
                <li><strong>MCP / Dev Mode</strong> — Make can expose design context to MCP-aware IDEs</li>
              </ul>
            </section>

            <section id="getting-started" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Getting Started</h2>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem'}}>
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #7C3AED'
                }}>
                  <h3 style={{marginTop: 0}}>1. Start from a Template</h3>
                  <p>Use Wireframe starter template (created by @Kyle Lambert) or a blank template with prefilled Guidelines.</p>
                  <p style={{marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                    Open make → See more → Find Wireframe in &quot;From Webflow&quot; section → &quot;Use Template&quot;
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #7C3AED'
                }}>
                  <h3 style={{marginTop: 0}}>2. Export Tokens to Make</h3>
                  <p style={{marginBottom: 0}}>
                    In Figma Design System → Publish Library → Export to Figma Make to bring variables (colors, type, spacing).
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #7C3AED'
                }}>
                  <h3 style={{marginTop: 0}}>3. Seed Your Prototype</h3>
                  <p style={{marginBottom: 0}}>
                    Prompt alone or include up to 3 well-structured frames (Auto Layout, named layers).
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #7C3AED'
                }}>
                  <h3 style={{marginTop: 0}}>4. Prompt Well (TCEBC)</h3>
                  <ul style={{marginBottom: 0}}>
                    <li><strong>Task:</strong> Build a responsive [feature/page] for [persona/use case]</li>
                    <li><strong>Context:</strong> Brand = Webflow; goal = [outcome]; device targets = [desktop/mobile]</li>
                    <li><strong>Examples:</strong> Mirror layout/style of [frame A] and component usage from [frame B]</li>
                    <li><strong>Behavior:</strong> Include [states, transitions, validation, a11y]</li>
                    <li><strong>Constraints:</strong> Use Webflow tokens for color/typography/spacing</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #7C3AED'
                }}>
                  <h3 style={{marginTop: 0}}>5. Iterate & Refine</h3>
                  <p style={{marginBottom: 0}}>
                    Use Point & Edit for targeted changes; use code for precise adjustments; keep prompts focused and incremental (avoid overloading context).
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #7C3AED'
                }}>
                  <h3 style={{marginTop: 0}}>6. Share & Handoff</h3>
                  <p>Multiplayer review; gather notes externally until in-Make comments arrive.</p>
                  <p style={{marginBottom: 0}}>
                    Copy layers back to Figma Design for polish; or export/push code to GitHub and move work into IDE with MCP context.
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: '#fef3c7',
                borderRadius: '12px',
                border: '1px solid #fbbf24'
              }}>
                <h4 style={{marginTop: 0, color: '#92400e'}}>💡 Pro Tip</h4>
                <p style={{marginBottom: 0, color: '#78350f'}}>
                  Start simple and add complexity incrementally. The AI works best with clear, focused prompts rather than trying to build everything at once.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div style={{
              marginTop: '4rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h2 style={{marginTop: 0, color: 'white'}}>Ready to Start Prototyping?</h2>
              <p style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>
                Open Figma Make and start building your first prototype today
              </p>
              <a
                href="https://help.figma.com/hc/en-us/articles/23589883777687-Guide-to-Figma-Make"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2rem',
                  backgroundColor: 'white',
                  color: '#7C3AED',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}
              >
                Learn More About Figma Make
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
