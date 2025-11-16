export default function FigmaMakeTraining() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Crafted for creators.</div>
        <h1>Figma Make</h1>
        <p className="hero-subtitle">
          A practical guide to AI-assisted prototyping for Product Design, 
          Product Management, and Insights teams
        </p>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="overview" className="guide-section">
              <h2>Overview</h2>
              <p>
                Figma Make is an AI-powered prototyping space that generates working, interactive UIs from 
                natural language prompts. It combines generative design and code-based prototyping (React + Tailwind + shadcn/ui) 
                in one environment, enabling teams to quickly bring ideas to life without waiting on engineering.
              </p>
              <p>
                <strong>Figma Make</strong> = prompt-to-prototype with code rendered on canvas. Best for early concepting/ideation, 
                bringing static designs to life, and cross-functional collaboration before handing off to engineers.
              </p>
            </section>

            <section id="what-is-make" className="guide-section">
              <h2>What is Figma Make?</h2>
              <p>
                An AI-assisted prototyping space where Product Managers, Designers, Researchers, and Engineers can:
              </p>
              <ul>
                <li>Generate working UIs from prompts (or seeded with Figma frames/images)</li>
                <li>Iterate visually, then refine via Point & Edit or the code layer</li>
                <li>Apply design tokens and (soon) components for brand-true output</li>
                <li>Publish/share quickly, collect feedback, and move to code with context</li>
              </ul>
              <p>
                <strong>Figma&apos;s vision:</strong> &quot;We see AI as a way to get ideas off the ground earlier… 
                then refine in a continuous experience, on brand, and hand off with full design context.&quot;
              </p>
            </section>

            <section id="when-to-use" className="guide-section">
              <h2>When to Use It</h2>
              <p><strong>Use Figma Make for:</strong></p>
              <ul>
                <li>Early concepting and product exploration</li>
                <li>Replacing parts of a PRD with clickable behavior</li>
                <li>Rapid experiments and usability validation (GA IDs supported)</li>
                <li>Enabling non-designers to prototype quickly using guardrails</li>
              </ul>
              <p><strong>Use an IDE (Cursor/Claude Code/etc.) for:</strong></p>
              <ul>
                <li>Production-ready implementations</li>
                <li>Complex logic, custom libs, or security-sensitive flows</li>
                <li>Importing/using external JS packages beyond current Make scope</li>
              </ul>
            </section>

            <section id="capabilities" className="guide-section">
              <h2>Current Capabilities</h2>
              
              <h3>Generation Sources</h3>
              <ul>
                <li>Prompt-only</li>
                <li>Prompt + up to 3 Figma frames</li>
                <li>Prompt + images</li>
              </ul>

              <h3>Model & Code</h3>
              <ul>
                <li>Model: Anthropic Claude Sonnet 4.5 (under the hood)</li>
                <li>Code substrate: React + Tailwind + shadcn/ui (editable in Make)</li>
              </ul>

              <h3>Editing</h3>
              <ul>
                <li><strong>&quot;Point & Edit&quot;:</strong> Click any element to adjust copy, layout, or styling. Make regenerates only that section, keeping context intact.</li>
                <li><strong>Code View:</strong> Switch to Code mode to make precise tweaks in React or Tailwind syntax. Changes update in real time.</li>
                <li><strong>Design tokens:</strong> Export Figma Variables → Export to Figma Make (point-in-time)</li>
                <li><strong>Templates:</strong> Publish Make outputs or blank guideline starters as templates</li>
                <li><strong>Multiplayer:</strong> Work together live (Make comments are on roadmap)</li>
                <li><strong>Interop:</strong> Copy Make layers → Figma Design (bi-directional sync on roadmap)</li>
              </ul>

              <h3>Integrations</h3>
              <ul>
                <li><strong>Google Analytics:</strong> Add GA ID for conversion funnels/tests</li>
                <li><strong>Supabase:</strong> Postgres + serverless functions for secure API/data mocks</li>
                <li><strong>GitHub:</strong> Push/export code to repos for engineering consumption</li>
                <li><strong>MCP / Dev Mode:</strong> Make can expose design context to MCP-aware IDEs; deeper Make tools are in progress</li>
              </ul>
            </section>

            <section id="getting-started" className="guide-section">
              <h2>Getting Started</h2>
              
              <h3>1. Access Figma Make</h3>
              <ol>
                <li>Visit <a href="https://figma.com/make" target="_blank" rel="noopener noreferrer">figma.com/make</a></li>
                <li>Sign in with your organization&apos;s Figma account</li>
                <li>You&apos;ll automatically have access to Make under your organization workspace</li>
              </ol>

              <h3>2. Start from a Template or Scratch</h3>
              <p><strong>From Template:</strong></p>
              <ol>
                <li>Open Figma Make → click &quot;See more&quot; under templates</li>
                <li>Find &quot;Wireframe&quot; in your organization&apos;s template section</li>
                <li>Click &quot;Use Template&quot; to create your own working copy</li>
              </ol>
              <p><strong>From Scratch:</strong></p>
              <ol>
                <li>Create a new Figma Make file</li>
                <li>Before prompting, connect your design system&apos;s Components Library to better match your brand&apos;s design system</li>
              </ol>

              <h3>3. Export Tokens to Make</h3>
              <p>In your Figma Design System → Publish Library → Export to Figma Make to bring variables (colors, type, spacing).</p>

              <h3>4. Seed Your Prototype</h3>
              <p>You can start in three ways:</p>
              <ul>
                <li><strong>Prompt-only:</strong> Describe what you want to build in plain text</li>
                <li><strong>Prompt + frames:</strong> Include up to 3 well-structured Figma frames (use Auto Layout + named layers)</li>
                <li><strong>Prompt + images:</strong> Provide reference visuals for layout or style</li>
              </ul>

              <h3>5. Iterate</h3>
              <p>Follow this process for best results:</p>
              <ul>
                <li><strong>Generate</strong> → <strong>Evaluate</strong> → <strong>Refine</strong></li>
                <li>Use Point & Edit for targeted changes; use code for precise adjustments</li>
                <li>Keep prompts focused and incremental — add one layer of context at a time</li>
                <li>Save useful outputs as templates to use later</li>
              </ul>

              <h3>6. Share & Handoff</h3>
              <ul>
                <li>Invite team members to share access or enable live collaboration</li>
                <li>Copy layers back into Figma Design for polishing or export code to GitHub for engineering continuation</li>
                <li>Add a Google Analytics ID or Supabase mock data for more realistic prototypes</li>
              </ul>
            </section>

            <section id="prompting" className="guide-section">
              <h2>Prompting: The TCEBC Framework</h2>
              <p>Use this structure to help Make understand what you want clearly and consistently:</p>
              
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>T — Task</strong></td>
                      <td>What to build</td>
                      <td>&quot;Build a responsive sign-up form for mobile and desktop.&quot;</td>
                    </tr>
                    <tr>
                      <td><strong>C — Context</strong></td>
                      <td>Who/why it&apos;s for</td>
                      <td>&quot;Brand = [Your Brand]; goal = [outcome]; device targets = [desktop/mobile].&quot;</td>
                    </tr>
                    <tr>
                      <td><strong>E — Examples</strong></td>
                      <td>Visual or layout cues</td>
                      <td>&quot;Mirror the spacing from frame A; use the button style from component B.&quot;</td>
                    </tr>
                    <tr>
                      <td><strong>B — Behavior</strong></td>
                      <td>Expected interactions</td>
                      <td>&quot;Include form validation and success toast on submit.&quot;</td>
                    </tr>
                    <tr>
                      <td><strong>C — Constraints</strong></td>
                      <td>Rules and limits</td>
                      <td>&quot;Use design tokens for color/typography/spacing; follow grid [Y]; base font = [Z].&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Prompting Tips</h3>
              <ul>
                <li><strong>Keep it scoped:</strong> Don&apos;t overload Make with multiple unrelated requests</li>
                <li><strong>Reference your design system:</strong> Use phrases like &quot;Use the standard primary button&quot; to keep results on-brand</li>
                <li><strong>Use iterative prompts:</strong> Try &quot;Now make this modal slide in from the bottom&quot; for incremental changes</li>
                <li><strong>Avoid over-specifying:</strong> Let tokens guide style rather than specifying exact colors, typography, or microcopy</li>
              </ul>

              <h3>Design Guidelines</h3>
              <ul>
                <li>Prefer existing components over custom UI</li>
                <li>Use semantic tokens for color and type (see Design System → Tokens)</li>
                <li>Maintain a consistent spacing scale; avoid arbitrary values</li>
                <li>Ensure contrast ≥ 4.5:1 and visible focus states</li>
                <li>Follow Auto Layout and layer naming conventions</li>
                <li>If rules conflict, follow the most specific design system rule and clarify in prompt</li>
              </ul>
            </section>

            <section id="best-practices" className="guide-section">
              <h2>Best Practices</h2>
              
              <h3>Stay System-Aligned</h3>
              <ul>
                <li>Use existing components before custom UI</li>
                <li>Maintain semantic tokens for color and type</li>
                <li>Follow spacing scale (4px or 8px) and Auto Layout naming</li>
                <li>Check accessibility (contrast ≥ 4.5:1, focus states visible)</li>
              </ul>

              <h3>Build to Learn</h3>
              <ul>
                <li>Use prototypes as learning tools, not deliverables</li>
                <li>Avoid over-investing in fidelity; aim for clarity and alignment</li>
                <li>Don&apos;t build one mega-prototype — use smaller experiments to test hypotheses</li>
              </ul>

              <h3>Collaborate Early</h3>
              <ul>
                <li>Invite PMs and Engineers into your Make files for early input</li>
                <li>Discuss logic and behavior as you iterate</li>
                <li>Share prototypes early to gather feedback before over-investing</li>
                <li>Use shared sessions for PM/PD/Eng pairing</li>
                <li>Collect feedback in Figma Design, FigJam, or your team&apos;s communication platform (comments in Make are on roadmap)</li>
                <li>Use GA events for quick validation during user tests</li>
              </ul>
            </section>

            <section id="roadmap" className="guide-section">
              <h2>Roadmap</h2>
              <ul>
                <li><strong>Near-term:</strong> Import from multiple libraries (styles + components) for brand-true output inside Make</li>
                <li><strong>By end of year:</strong> Full sync from Figma Design → Make (no manual re-export of variables)</li>
                <li><strong>Codebase mapping:</strong> Ingest private/public NPM to map Make output to your components</li>
                <li><strong>Make↔Design:</strong> Deeper, more bi-directional layer sync under exploration</li>
                <li><strong>MCP client hooks:</strong> Pull structured context (PRDs, docs) directly into Make runs</li>
                <li><strong>Commenting:</strong> Inline annotations in Make (on roadmap)</li>
                <li><strong>Improved prompt assistance:</strong> Better AI guidance for prompting</li>
              </ul>
            </section>

            <section id="limitations" className="guide-section">
              <h2>Known Limitations</h2>
              <ul>
                <li>Not for production output; engineers should finalize in an IDE</li>
                <li>No direct external JS package imports yet (beyond codebase ingest work in progress)</li>
                <li>Comments/inline annotations in Make not yet available</li>
                <li>Variables export to Make is point-in-time (no live sync until roadmap lands)</li>
                <li>Very large frames may exceed model context; split into sections</li>
              </ul>
            </section>

            <section id="troubleshooting" className="guide-section">
              <h2>Troubleshooting & FAQs</h2>
              
              <h3>Q: What is Make strongest at?</h3>
              <p>A: Early concepting, interactive PRD replacement, and fast alignment across roles; design/eng stay in the loop to refine and ship.</p>

              <h3>Q: Why does Make say my frame is too complex?</h3>
              <p>A: The model has a context limit — split your prototype into smaller chunks. Break down complex interfaces into separate components or pages.</p>

              <h3>Q: Can I comment directly in Make?</h3>
              <p>A: Not yet — use Figma Design, FigJam, or your team&apos;s communication platform for now. Commenting features are on the roadmap.</p>

              <h3>Q: How do I bring our design system in?</h3>
              <p>A: Export Figma Variables → Make today; upcoming: full Design System (styles + components) sync and codebase ingest.</p>

              <h3>Q: How does Make interact with IDEs (Cursor/Claude Code)?</h3>
              <p>A: Via MCP design context. You can pass Make/Dev Mode context to IDEs and continue implementation there.</p>

              <h3>Q: Bi-directional with Figma Design?</h3>
              <p>A: Copy layers → Design works now; deeper two-way sync is being explored.</p>

              <h3>Q: Can I use external JS packages?</h3>
              <p>A: Not currently; use Cursor or an IDE for advanced logic. Make supports React + Tailwind + shadcn/ui out of the box.</p>

              <h3>Q: Is Make output production-ready?</h3>
              <p>A: No — it&apos;s for rapid prototyping. Engineers should finalize in an IDE. Use Make to explore ideas and validate concepts, then hand off to engineering for production implementation.</p>

              <h3>Q: My design tokens didn&apos;t sync.</h3>
              <p>A: Re-export from Figma; current export is snapshot-only. Token sync is point-in-time until full bi-directional sync is available on the roadmap.</p>
            </section>

            <section id="resources" className="guide-section">
              <h2>Resources</h2>
              <ul>
                <li><a href="https://getstartedwithfigmamake2.splashthat.com/" target="_blank" rel="noopener noreferrer">Get Started with Figma Make (Webinar)</a></li>
                <li><a href="https://www.figma.com/blog/8-ways-to-build-with-figma-make/" target="_blank" rel="noopener noreferrer">8 Ways to Build with Figma Make (Figma Blog)</a></li>
                <li><a href="https://www.figma.com/blog/turn-your-chatgpt-brainstorms-into-figjam-diagrams/" target="_blank" rel="noopener noreferrer">Turn ChatGPT Brainstorms into FigJam Diagrams</a></li>
                <li><a href="https://help.figma.com/hc/en-us/categories/31304285531543" target="_blank" rel="noopener noreferrer">Figma Help Center – AI & Make</a></li>
                <li><a href="https://help.figma.com/hc/en-us/articles/24004778051479-Make-interactions-with-AI" target="_blank" rel="noopener noreferrer">Make Interactions with AI (Help Article)</a></li>
                <li><a href="https://supabase.com/blog/figma-make-support-for-supabase" target="_blank" rel="noopener noreferrer">Supabase quickstart for prototypes</a></li>
                <li><a href="https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server" target="_blank" rel="noopener noreferrer">MCP overview for Figma Dev Mode</a></li>
              </ul>
            </section>
          </div>

          <nav className="table-of-contents">
            <h3>Table of Contents</h3>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#what-is-make">What is Figma Make?</a></li>
              <li><a href="#when-to-use">When to Use It</a></li>
              <li><a href="#capabilities">Current Capabilities</a></li>
              <li><a href="#getting-started">Getting Started</a></li>
              <li><a href="#prompting">Prompting: The TCEBC Framework</a></li>
              <li><a href="#best-practices">Best Practices</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#limitations">Known Limitations</a></li>
              <li><a href="#troubleshooting">Troubleshooting & FAQs</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
