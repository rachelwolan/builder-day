"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#purpose', label: '01 Purpose' },
  { href: '#quick-summary', label: '02 Quick Summary' },
  { href: '#what-is-make', label: '03 What is Figma Make' },
  { href: '#when-to-use', label: '04 When to use it' },
  { href: '#capabilities', label: '05 Current Capabilities' },
  { href: '#getting-started', label: '06 Getting Started' },
  { href: '#prompting', label: '07 Prompting & Guidelines' },
  { href: '#collaboration', label: '08 Collaboration & Research' },
  { href: '#roadmap', label: '09 Design System Integration' },
  { href: '#limitations', label: '10 Known Limitations' },
  { href: '#qa', label: '11 Q&A from Training' },
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
                and collaborate with AI—while staying aligned to Webflow systems and quality standards ahead of Builder Day (Nov 12, 2025).
              </p>
            </section>

            <section id="quick-summary" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Quick Summary</h2>
              <p>
                <strong>Figma Make</strong> = prompt-to-prototype with code (React + Tailwind + shadcn/ui) rendered on canvas.
              </p>
              <p>
                Best for early concepting/ideation, bringing static designs to life, and cross-functional collaboration before handing off to engineers.
              </p>
              <p>
                Design craft still matters. Use your design system, clear guidelines, and good prompting to get on-brand results quickly.
              </p>
              
              <h3>Today&apos;s Capabilities</h3>
              <p>Make from scratch or from Figma frames/images; point-and-edit; code view for precise tweaks; export/import tokens; templates; multiplayer; Supabase, Google Analytics, and GitHub integrations.</p>
              
              <h3>On the Roadmap (from Figma)</h3>
              <ul>
                <li>Bring-Your-Own Design System (styles and components) with sync to Make</li>
                <li>Codebase ingest via private/public NPM for component mapping</li>
                <li>MCP client hooks to pull context (PRDs, docs)</li>
                <li>Commenting</li>
                <li>Improved prompt assistance</li>
                <li>Deeper Make↔Design interop</li>
              </ul>
            </section>

            <section id="what-is-make" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>What is Figma Make (in our context)?</h2>
              <p>
                An AI-assisted prototyping space where PMs, Designers, Researchers, and Eng can:
              </p>
              <ul>
                <li>Generate working UIs from prompts (or seeded with Figma frames/images)</li>
                <li>Iterate visually, then refine via Point & Edit or the code layer</li>
                <li>Apply Webflow tokens and (soon) components for brand-true output</li>
                <li>Publish/share quickly, collect feedback, and move to code with context</li>
              </ul>
              <p>
                <strong>&quot;We see AI as a way to get ideas off the ground earlier… 
                then refine in a continuous experience, on brand, and hand off with full design context.&quot;</strong> — Figma
              </p>
            </section>

            <section id="when-to-use" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>When to use it vs. other tools</h2>
              <p><strong>Use Figma Make for:</strong></p>
              <ul>
                <li>Early concepting and product exploration</li>
                <li>Replacing parts of a PRD with clickable behavior</li>
                <li>Rapid experiments and usability validation (GA IDs supported)</li>
                <li>Enable non-designers to prototype quickly using guardrails</li>
              </ul>
              <p><strong>Use an IDE (Cursor/Claude Code/etc.) for:</strong></p>
              <ul>
                <li>Production-ready implementations</li>
                <li>Complex logic, custom libs, or security-sensitive flows</li>
                <li>Importing/using external JS packages beyond current Make scope</li>
              </ul>
            </section>

            <section id="capabilities" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Current Capabilities (Oct 2025)</h2>
              
              <h3>Generation sources</h3>
              <ul>
                <li>Prompt-only</li>
                <li>Prompt + up to 3 Figma frames</li>
                <li>Prompt + images</li>
              </ul>

              <h3>Model</h3>
              <p>Anthropic Claude Sonnet 4.5 (under the hood)</p>

              <h3>Code substrate</h3>
              <p>React + Tailwind + shadcn/ui (editable in Make)</p>

              <h3>Editing</h3>
              <ul>
                <li><strong>Point & Edit:</strong> Targeted changes with instant feedback</li>
                <li><strong>Code edits:</strong> For immediate, precise tweaks</li>
                <li><strong>Design tokens:</strong> Export Figma Variables → Export to Figma Make (point-in-time)</li>
                <li><strong>Templates:</strong> Publish Make outputs or blank guideline starters as templates</li>
                <li><strong>Multiplayer:</strong> Work together live; (Make comments are on roadmap)</li>
                <li><strong>Interop:</strong> Copy Make layers → Figma Design (bi-directional sync on roadmap)</li>
              </ul>

              <h3>Integrations</h3>
              <ul>
                <li><strong>Google Analytics:</strong> Add GA ID for conversion funnels/tests</li>
                <li><strong>Supabase:</strong> Postgres + serverless functions for secure API/data mocks</li>
                <li><strong>GitHub:</strong> (new) push/export code to repos for Eng consumption</li>
                <li><strong>MCP / Dev Mode:</strong> Make can expose design context to MCP-aware IDEs; deeper Make tools are in progress</li>
              </ul>
            </section>

            <section id="getting-started" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Getting Started — Webflow Workflow</h2>
              
              <h3>1. Start from a template</h3>
              <p>Use Wireframe starter template (created by @Kyle Lambert) or a blank template with prefilled Guidelines.</p>
              <p>Open make → See more → Find Wireframe in &quot;From Webflow&quot; section → &quot;Use Template&quot;</p>

              <h3>2. Export tokens to Make</h3>
              <p>In Figma Design System → Publish Library → Export to Figma Make to bring variables (colors, type, spacing).</p>

              <h3>3. Seed your prototype</h3>
              <p>Prompt alone or include up to 3 well-structured frames (Auto Layout, named layers).</p>

              <h3>4. Prompt well (TCEBC)</h3>
              <p>Task (what to build), Context (who/why), Examples, Behavior (interactions/data), Constraints (tokens, components, breakpoints).</p>

              <h3>5. Iterate</h3>
              <p>Use Point & Edit for targeted changes; use code for precise adjustments; keep prompts focused and incremental (avoid overloading context).</p>

              <h3>6. Instrument (optional)</h3>
              <p>Add GA ID to track flows; wire Supabase for data/API mocks.</p>

              <h3>7. Share & test</h3>
              <p>Multiplayer review; gather notes externally until in-Make comments arrive.</p>

              <h3>8. Handoff</h3>
              <p>Copy layers back to Figma Design for polish; or export/push code to GitHub and move work into IDE with MCP context.</p>
            </section>

            <section id="prompting" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Prompting & Guideline Starters</h2>
              <p>
                Authoritative design system guidance lives in the Design System documentation.
              </p>
              <p>
                Snippets below are lightweight starters—use them only as a quick reference.
              </p>

              <h3>Prompt Structure (TCEBC)</h3>
              <ul>
                <li><strong>Task:</strong> Build a responsive [feature/page] for [persona/use case].</li>
                <li><strong>Context:</strong> Brand = Webflow; goal = [outcome]; device targets = [desktop/mobile].</li>
                <li><strong>Examples:</strong> Mirror layout/style of [frame A] and component usage from [frame B].</li>
                <li><strong>Behavior:</strong> Include [states, transitions, validation, a11y].</li>
                <li><strong>Constraints:</strong> Use Webflow tokens for color/typography/spacing; follow grid [Y]; base font = [Z].</li>
              </ul>

              <h3>Evergreen Design Guidelines (examples)</h3>
              <ul>
                <li>Prefer existing components over custom UI.</li>
                <li>Use semantic tokens for color and type (see Design System → Tokens).</li>
                <li>Maintain a 4px spacing scale; avoid arbitrary values.</li>
                <li>Ensure contrast ≥ 4.5:1 and visible focus states.</li>
                <li>Follow Auto Layout and layer naming conventions.</li>
                <li>If rules conflict, follow the most specific DS rule and clarify in prompt.</li>
              </ul>

            </section>

            <section id="collaboration" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>Collaboration & Research</h2>
              <p>Multiplayer works today; use shared sessions for PM/PD/Eng pairing.</p>
              <p>Commenting/annotations in Make are on the roadmap; until then:</p>
              <ul>
                <li>Collect feedback in Figma Design, FigJam, or Slack threads.</li>
                <li>Use GA events for quick validation during user tests.</li>
              </ul>
            </section>

            <section id="roadmap" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>09</span>Design System Integration (Roadmap, from Figma)</h2>
              <ul>
                <li><strong>Near-term:</strong> Import from multiple libraries (styles + components) for brand-true output inside Make.</li>
                <li><strong>By end of year:</strong> Full sync from Figma Design → Make (no manual re-export of variables).</li>
                <li><strong>Codebase mapping:</strong> Ingest private/public NPM to map Make output to your components.</li>
                <li><strong>Make↔Design:</strong> Deeper, more bi-directional layer sync under exploration.</li>
                <li><strong>MCP client hooks:</strong> Pull structured context (PRDs, docs) directly into Make runs.</li>
              </ul>
              <p style={{marginTop: '1rem'}}>
                Webflow can request inclusion in Figma&apos;s next closed/open beta cohorts for these features.
              </p>
            </section>

            <section id="limitations" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>10</span>Known Limitations (Today)</h2>
              <ul>
                <li>Not for production output; engineers should finalize in an IDE.</li>
                <li>No direct external JS package imports yet (beyond codebase ingest work in progress).</li>
                <li>Comments/inline annotations in Make not yet available.</li>
                <li>Variables export to Make is point-in-time (no live sync until roadmap lands).</li>
                <li>Very large frames may exceed model context; split into sections.</li>
              </ul>
            </section>

            <section id="qa" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>11</span>Q&A from the Training (Arun&apos;s responses at 37:00–57:00)</h2>
              
              <h3>Q: What is Make strongest at?</h3>
              <p>A: Early concepting, interactive PRD replacement, and fast alignment across roles; design/eng stay in the loop to refine and ship.</p>

              <h3>Q: Can we comment in Make?</h3>
              <p>A: Not yet; it&apos;s on the roadmap. Use Design/FigJam/Slack in the meantime.</p>

              <h3>Q: How do I bring our system in?</h3>
              <p>A: Export Figma Variables → Make today; upcoming: full Design System (styles + components) sync and codebase ingest.</p>

              <h3>Q: How does Make interact with IDEs (Cursor/Claude Code)?</h3>
              <p>A: Via MCP design context. You can pass Make/Dev Mode context to IDEs and continue implementation there.</p>

              <h3>Q: Bi-directional with Figma Design?</h3>
              <p>A: Copy layers → Design works now; deeper two-way sync is being explored.</p>

              <h3>Q: Why does the UI sometimes say a frame is too complex?</h3>
              <p>A: Model context window limits. Chunk your prompts/frames and build modularly.</p>
            </section>

          </div>
        </div>
      </section>
    </>
  )
}
