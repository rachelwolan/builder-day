"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#summary', label: '01 Summary Overview' },
  { href: '#key-themes', label: '02 Key Themes & Learnings' },
  { href: '#sentiment-analysis', label: '03 Sentiment Analysis' },
  { href: '#cursor', label: '04 Cursor Feedback' },
  { href: '#figma-make', label: '05 Figma Make Feedback' },
  { href: '#hex', label: '06 Hex Feedback' },
  { href: '#marvin', label: '07 Marvin Feedback' },
  { href: '#other-tools', label: '08 Other Tools' },
  { href: '#recommendations', label: '09 Recommendations' },
]

export default function WebflowsLearnings() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Learn from our learnings.</div>
        <h1>Webflow&apos;s Builder Day</h1>
        <p className="hero-subtitle">
          Direct reflections from 86 participants in Builder Day 2.0, sharing their experiences with AI-powered tools for prototyping, design, and data analysis.
        </p>
      </section>

      {/* Table of Contents */}
      <section style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <TableOfContents items={tocItems} />
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>

            {/* Summary Overview */}
            <section id="summary" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Summary Overview</h2>
              <p>
                The reflections show strong enthusiasm, learning, and experimentation, balanced with a
                realistic understanding of AI&apos;s current limitations.
              </p>
              <p>
                <strong>Overall sentiment:</strong> 88% positive, 9% neutral, 3% frustrated (mainly technical setup issues).
              </p>
              <p>
                Emotionally, participants described the day as <strong>fun, empowering, motivating, and eye-opening</strong>,
                with frequent mentions of feeling more confident, curious, and connected to the product org&apos;s AI journey.
              </p>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px',
                padding: '2rem',
                margin: '2rem 0'
              }}>
                <p style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--accent)'}}>
                  Most reflections emphasized two key mindsets:
                </p>
                <blockquote style={{
                  borderLeft: '4px solid var(--accent)',
                  paddingLeft: '1.5rem',
                  margin: '1.5rem 0',
                  fontStyle: 'italic',
                  fontSize: '1.125rem'
                }}>
                  &quot;AI is not a shortcut — it&apos;s a multiplier when used thoughtfully.&quot;
                </blockquote>
                <blockquote style={{
                  borderLeft: '4px solid var(--accent)',
                  paddingLeft: '1.5rem',
                  margin: '1.5rem 0',
                  fontStyle: 'italic',
                  fontSize: '1.125rem'
                }}>
                  &quot;You learn faster by making, even if it&apos;s messy.&quot;
                </blockquote>
              </div>
            </section>

            {/* Key Themes */}
            <section id="key-themes" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Key Themes & Learnings</h2>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>

                {/* Theme 1 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>1. Learning by Building Works</h3>
                  <ul style={{marginBottom: '1rem'}}>
                    <li>Builders valued having dedicated time to explore without delivery pressure — it encouraged risk-taking and creativity.</li>
                    <li>Many reflected on the joy of hands-on learning, often describing it as &quot;fun,&quot; &quot;energizing,&quot; and &quot;a reminder of why I love to build.&quot;</li>
                    <li>Confidence grew as prototypes and automations started to work; participants described wanting more frequent Builder Days or mini build sessions.</li>
                  </ul>
                  <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', fontStyle: 'italic'}}>
                    Sample reflections: &quot;I could do this all week.&quot; • &quot;Having space to play around helped ideas form organically.&quot; • &quot;The protected time made all the difference.&quot;
                  </p>
                </div>

                {/* Theme 2 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>2. Working With AI Tools — Strengths & Frictions</h3>

                  <h4>Cursor</h4>
                  <ul>
                    <li>Excellent for rapid prototyping, syntax help, and scaffolding ideas quickly.</li>
                    <li>Less effective for deep architecture, debugging, or UI polish.</li>
                    <li>Works best when builders give it structured plans, small prompts, and guardrails (&quot;Plan mode&quot; cited frequently).</li>
                    <li>Builders learned to treat it as a thinking partner, not an autopilot.</li>
                  </ul>

                  <h4>Figma Make</h4>
                  <ul>
                    <li>Great for low-fidelity interaction prototypes and visual exploration.</li>
                    <li>Some found it &quot;too eager&quot; — jumping to implementation before confirming details.</li>
                    <li>Especially useful when paired with Cursor (using Figma for visuals and Cursor for logic).</li>
                  </ul>

                  <h4>Marvin, Hex, and Insights Tools</h4>
                  <ul>
                    <li>Marvin and Hex sped up data analysis, research synthesis, and SQL generation.</li>
                    <li>Insights participants highlighted the need for better data structure and export formats.</li>
                    <li>AI-assisted data work revealed friction around trust and transparency: understanding why the AI produced a given result.</li>
                  </ul>
                </div>

                {/* Theme 3 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>3. Prompts, Process, and Planning</h3>
                  <p><strong>A universal learning theme:</strong> &quot;Think first, prompt second.&quot;</p>
                  <ul>
                    <li>Builders who spent time planning prompts or writing pseudo-PRDs achieved faster, more accurate results.</li>
                    <li>Iterative, incremental prompting consistently outperformed single large requests.</li>
                    <li>Combining multiple tools (e.g., Figma → Cursor → ChatGPT for JSON) created powerful workflows.</li>
                    <li>Participants emphasized balancing fidelity vs. learning — getting rough ideas working before refining visuals.</li>
                  </ul>

                  <div style={{background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
                    <p style={{fontWeight: 600, marginBottom: '0.5rem'}}>Common techniques shared:</p>
                    <ul style={{margin: 0}}>
                      <li>Use Plan mode to outline features step-by-step.</li>
                      <li>Test in small phases, debug early.</li>
                      <li>Include screenshots or Figma sketches in prompts.</li>
                      <li>Write structured instructions or JSON formats.</li>
                    </ul>
                  </div>
                </div>

                {/* Theme 4 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>4. Craft, Fidelity, and Focus</h3>
                  <ul>
                    <li>Many learned that perfectionism slows learning — low fidelity leads to faster insights.</li>
                    <li>Builders reframed success as &quot;getting something working&quot; rather than matching pixel-perfect mocks.</li>
                    <li>A recurring theme: &quot;Focus on flow and storytelling, not polish.&quot;</li>
                    <li>Participants cited the value of quick user feedback: even 15–20 minute interviews clarified priorities and scope.</li>
                  </ul>
                </div>

                {/* Theme 5 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>5. Collaboration & Support</h3>
                  <ul>
                    <li>Builders frequently co-debugged or shared solutions with others — spontaneous cross-functional pairing emerged.</li>
                    <li>Mentions of #builder-day threads, Open Jam Room, and vendor office hours show high engagement with support channels.</li>
                    <li>Many thanked team members for help debugging or prompting guidance.</li>
                  </ul>
                  <p style={{fontStyle: 'italic', color: 'var(--text-secondary)'}}>
                    Recommendation: Keep emphasizing real-time pairing and shared learning in future events.
                  </p>
                </div>

                {/* Theme 6 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>6. Insights Track Highlights</h3>
                  <p>
                    Builders using Marvin and Hex showed that AI can accelerate research synthesis and data exploration,
                    but data prep and structure remain critical.
                  </p>
                  <p><strong>Insights participants noted:</strong></p>
                  <ul>
                    <li>Need for centralized, searchable data sources (Glean, Drive, Confluence).</li>
                    <li>Importance of human validation: &quot;AI can compile, but we still need to read and fact-check.&quot;</li>
                    <li>Excitement about agentic AI tools like Braintrust and Hex Agent for research automation.</li>
                  </ul>
                  <blockquote style={{
                    borderLeft: '4px solid var(--accent)',
                    paddingLeft: '1.5rem',
                    margin: '1.5rem 0',
                    fontStyle: 'italic'
                  }}>
                    &quot;AI can speed up synthesis, but it still needs human judgment to interpret and trust the results.&quot;
                  </blockquote>
                </div>

                {/* Theme 7 */}
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>7. Cultural Impact & Takeaways</h3>
                  <ul>
                    <li><strong>Hands-on time = confidence.</strong> Repetition across submissions showed that direct experimentation built lasting comfort with AI tools.</li>
                    <li><strong>Cross-functional learning.</strong> Designers learned code structure; PMs prototyped; analysts automated.</li>
                    <li><strong>Shift in mindset.</strong> Participants recognized that AI fluency isn&apos;t about output speed — it&apos;s about understanding how to think with the tools.</li>
                    <li><strong>Desire for more.</strong> Multiple reflections suggested doing Builder Day quarterly or extending it to multi-day hackathons.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Sentiment Analysis */}
            <section id="sentiment-analysis" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Sentiment Analysis & Metrics</h2>

              <div className="info-box" style={{marginBottom: '2rem'}}>
                <h4 style={{marginTop: 0}}>About the Sentiment Analysis</h4>
                <p>
                  The sentiment metrics below summarize overall tone and themes across 42 participant reflections.
                  Each dimension was scored on a 1–5 scale using manual coding of keywords and tone indicators from
                  the written reflections (for example, &quot;fun,&quot; &quot;frustrating,&quot; &quot;confident,&quot; &quot;stuck&quot;).
                </p>
                <p style={{marginBottom: 0}}>
                  The analysis provides a directional view of how participants experienced Builder Day 2.0 — highlighting
                  where the day generated energy, where tools excelled, and where future enablement can reduce friction.
                </p>
              </div>

              <div className="table-container">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Dimension</th>
                      <th>Score</th>
                      <th>Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Overall Sentiment</strong></td>
                      <td>4.6 / 5</td>
                      <td>Overwhelmingly positive, with consistent mentions of excitement, curiosity, and satisfaction.</td>
                    </tr>
                    <tr>
                      <td><strong>Learning & Growth</strong></td>
                      <td>4.8 / 5</td>
                      <td>Builders expressed clear skill growth and tool confidence.</td>
                    </tr>
                    <tr>
                      <td><strong>Frustration (Setup/Debug)</strong></td>
                      <td>2.7 / 5</td>
                      <td>Minor frustrations mainly around technical setup, dependency management, and AI overconfidence.</td>
                    </tr>
                    <tr>
                      <td><strong>Collaboration & Support</strong></td>
                      <td>4.7 / 5</td>
                      <td>Strong peer-to-peer collaboration and appreciation for available help.</td>
                    </tr>
                    <tr>
                      <td><strong>Tool Usefulness</strong></td>
                      <td>Cursor 4.5<br/>Figma Make 4.3<br/>Hex 4.6<br/>Marvin 4.2</td>
                      <td>Cursor fastest for prototyping; Hex best for data work; Marvin valuable but needs export improvements.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{
                background: 'var(--bg-secondary)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginTop: '2rem'
              }}>
                <h4 style={{marginTop: 0, color: 'var(--accent)'}}>Builder Mindset Themes</h4>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <tbody>
                    <tr>
                      <td style={{padding: '0.75rem 0', borderBottom: '1px solid var(--border)', fontWeight: 600}}>From output to insight</td>
                      <td style={{padding: '0.75rem 0', borderBottom: '1px solid var(--border)'}}>Success measured by what you learned, not what you finished.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem 0', borderBottom: '1px solid var(--border)', fontWeight: 600}}>From tool use to tool thinking</td>
                      <td style={{padding: '0.75rem 0', borderBottom: '1px solid var(--border)'}}>Builders now see AI as a creative partner, not a generator.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem 0', borderBottom: '1px solid var(--border)', fontWeight: 600}}>From solo work to shared learning</td>
                      <td style={{padding: '0.75rem 0', borderBottom: '1px solid var(--border)'}}>Openness and collaboration accelerate fluency.</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem 0', fontWeight: 600}}>From &quot;perfect&quot; to &quot;possible&quot;</td>
                      <td style={{padding: '0.75rem 0'}}>Builders embrace iteration and roughness as part of discovery.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cursor Feedback */}
            <section id="cursor" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>⚙️ Cursor Feedback</h2>
              <p>
                Builders described Cursor as fast, intuitive, and fun to use. It helped them move from ideas to working
                prototypes quickly and reduced friction in setup. Friction mainly appeared during more complex debugging or UI polish.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💪 Strengths</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Cursor reduced the friction of opening a new codebase.&quot;</li>
                    <li>&quot;It&apos;s so great at getting ideas out quickly.&quot;</li>
                    <li>&quot;Using AI (via Cursor) to create AI-powered products … is incredibly fun and powerful.&quot;</li>
                    <li>&quot;Really easy to spin up interactions in Cursor and create callouts to OpenAI.&quot;</li>
                    <li>&quot;I found it super helpful … as I don&apos;t work with Zustand and node.js regularly I would have had to google the syntax.&quot;</li>
                    <li>&quot;Cursor rules take time to set up and fine tune, but very fun to use once they&apos;re ready.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>⚠️ Pain Points & Limitations</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Ultimately my learning was that I&apos;d use Cursor for prototypes or demos and assistance with syntax, but not for the structural, architectural, or logic bits of dev.&quot;</li>
                    <li>&quot;It&apos;s not a shortcut to avoid thinking. Either you think first or you think later.&quot;</li>
                    <li>&quot;Very hard to dependency manage or problem solve in Cloud and have AI fix things.&quot;</li>
                    <li>&quot;Doing any fine tuning on the UI can be difficult and quickly doesn&apos;t feel worth the time investment.&quot;</li>
                    <li>&quot;Cursor had weird sample data … ask for the JSON format it needs then generate sample data separately.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💡 Tips from Builders</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Small, more frequent prompts yield the best results.&quot;</li>
                    <li>&quot;Spending the time up front to work through a plan before going into agent mode was helpful.&quot;</li>
                    <li>&quot;Plan mode was helpful to brainstorm different ideas.&quot;</li>
                    <li>&quot;Used Plan mode to break complex features up as a PRD with phases.&quot;</li>
                    <li>&quot;For net-new UIs, Cursor did better once I started wireframing and mapped out UI flows very precisely in text or flows.&quot;</li>
                    <li>&quot;Include screenshots of designs to kick things off. Cursor works better when it can see context.&quot;</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Figma Make Feedback */}
            <section id="figma-make" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>🎨 Figma Make Feedback</h2>
              <p>
                Figma Make was praised for its speed and flexibility in creating quick, visual prototypes. Builders
                appreciated how it could fill in logic gaps automatically and help visualize ideas early, though some
                noted over-eager behavior and inconsistent styling.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💪 Strengths</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;I think Figma Make is so good for low fi prototypes. It&apos;s great at visual design and interactions.&quot;</li>
                    <li>&quot;Really helpful in quickly prototyping a new experience.&quot;</li>
                    <li>&quot;It helped fill in logic gaps without needing me to add in every step in between.&quot;</li>
                    <li>&quot;Had a great experience trying out Figma Make. It added an &apos;apply animation&apos; button when I told it the action I wanted it to do.&quot;</li>
                    <li>&quot;Used screenshots of the existing live Webflow experience to prompt new experiences.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>⚠️ Pain Points & Limitations</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;It was often too eager, just implements code without confirming if that&apos;s what I want.&quot;</li>
                    <li>&quot;Sometimes it was harder than expected to get the prototype to look like the Figma mocks.&quot;</li>
                    <li>&quot;Hard to not focus too much on small design details … forced myself to move on when it wasn&apos;t working.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💡 Tips from Builders</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Start with screenshots and rough sketches. High fidelity isn&apos;t necessary to get good results.&quot;</li>
                    <li>&quot;Figma Make and Cursor work well together. Use Figma for visuals and Cursor for logic.&quot;</li>
                    <li>&quot;Small, frequent prompts and iterating in Make led to better outputs than one big ask.&quot;</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Hex Feedback */}
            <section id="hex" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>🧮 Hex Feedback</h2>
              <p>
                Participants were enthusiastic about Hex&apos;s speed and accuracy for generating queries and automating
                analysis. Builders called it &quot;amazing&quot; for time savings and insight generation, with most challenges
                centered on debugging and setup.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💪 Strengths</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Hex agent is amazing. We barely fed it 2 sentences, and it produced exactly what we needed, including the SQL that we can now refine and reuse.&quot;</li>
                    <li>&quot;It probably would have taken me a week without Hex&apos;s AI assistant.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>⚠️ Pain Points & Limitations</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Most of my time was spent debugging, but especially for math heavy functions AI was so much faster.&quot;</li>
                    <li>&quot;Configuration of the cloud agents&apos; virtual machines is challenging … difficult to troubleshoot.&quot;</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Marvin Feedback */}
            <section id="marvin" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>🧠 Marvin Feedback</h2>
              <p>
                Builders saw Marvin as a promising tool for speeding up research synthesis and amplifying insights.
                The main friction points involved data structure and export capabilities rather than the assistant&apos;s
                analysis itself.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💪 Strengths</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;This POC showed how much potential AI has to speed up research synthesis and amplify how we communicate insights.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>⚠️ Pain Points & Limitations</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;My biggest obstacle was structuring Marvin&apos;s data in a way that AI tools could easily interpret and trust.&quot;</li>
                    <li>&quot;I&apos;m not sure yet whether that friction came from my own workflow choices or from limitations in Marvin&apos;s current export capabilities.&quot;</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Other Tools */}
            <section id="other-tools" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>🤖 Braintrust, Augment & Glean</h2>
              <p>
                Builders saw strong potential in these tools for automating workflows, improving prompt testing, and
                surfacing insights. Most feedback reflected curiosity and exploration rather than deep critique.
              </p>

              <div style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', marginTop: '2rem'}}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>💬 Feedback Highlights</h3>
                <ul style={{margin: 0}}>
                  <li>&quot;Braintrust is super powerful! It definitely requires some setup, but there&apos;s a lot of value we can get out of it today without any more work.&quot;</li>
                  <li>&quot;Even more value if we invest in setting up remote evals … to let non-engineers use the playground for evaluation and optimization of more complex prompts and interactions.&quot;</li>
                  <li>&quot;We need to better identify where Glean can search through for existing research reports … these are all scattered across different folders.&quot;</li>
                  <li>&quot;Think of it as an assistant who&apos;s compiling all of the resources, but you still need to read and fact check.&quot;</li>
                </ul>
              </div>

              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Sentiment (1–5)</th>
                      <th>Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cursor</strong></td>
                      <td>4.6</td>
                      <td>Fast, intuitive, and enjoyable for prototyping. Builders praised its speed and flexibility, with friction mostly in advanced debugging and UI polish.</td>
                    </tr>
                    <tr>
                      <td><strong>Figma Make</strong></td>
                      <td>4.3</td>
                      <td>Great for quick, low-fidelity prototypes and creative exploration. Minor friction with polish and over-eager code suggestions.</td>
                    </tr>
                    <tr>
                      <td><strong>Hex</strong></td>
                      <td>4.6</td>
                      <td>Powerful for analysis and automation, delivering major time savings. Some debugging and setup friction.</td>
                    </tr>
                    <tr>
                      <td><strong>Marvin</strong></td>
                      <td>4.2</td>
                      <td>Valuable for research synthesis and communication of insights. Dependent on data formatting and export reliability.</td>
                    </tr>
                    <tr>
                      <td><strong>Braintrust / Augment / Glean</strong></td>
                      <td>—</td>
                      <td>Early experimentation showed strong potential for automation, evaluation, and knowledge retrieval. Feedback focused on setup and accessibility.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recommendations */}
            <section id="recommendations" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>09</span>Recommendations for Future Builder Days</h2>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Enablement & Setup</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Better documentation for how AI tools connect with Cloud would make setup smoother.&quot;</li>
                    <li>&quot;Keep early tool access and office hours, those made it easier to get unblocked.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Prompting & Process</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Short refreshers on how to plan and write good prompts would go a long way.&quot;</li>
                    <li>&quot;Start small and build step by step, Plan mode and simple checklists really help.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Collaboration & Support</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Pairing up or asking questions in Slack threads made a huge difference, keep encouraging that kind of real-time help.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Building Mindset</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Focus on functionality and flow, not polish. The best insights came from rough builds.&quot;</li>
                    <li>&quot;Having protected time to play and learn is what made this work, keep that spirit.&quot;</li>
                  </ul>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, color: 'var(--accent)'}}>After the Event</h3>
                  <ul style={{margin: 0}}>
                    <li>&quot;Would love more chances to share what we built, maybe a gallery or mini-showcase.&quot;</li>
                  </ul>
                </div>

              </div>
            </section>

          </div>
        </div>
      </section>
    </>
  )
}
