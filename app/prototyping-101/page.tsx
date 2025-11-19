"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#what-is-prototype', label: '02 What Is a Prototype' },
  { href: '#why-prototype', label: '03 Why Prototyping Matters' },
  { href: '#tools-expand', label: '04 Tools That Expand' },
  { href: '#common-traps', label: '05 Common Traps to Avoid' },
  { href: '#choosing-fidelity', label: '06 Choosing the Right Fidelity' },
  { href: '#review-prototypes', label: '07 How to Review Prototypes' },
  { href: '#builder-mindset', label: '08 Builder Mindset' },
]

// Use R2 storage in production, public directory in development
const isProduction = process.env.NODE_ENV === 'production'
const videoBasePath = isProduction ? '/builder-day/api/assets' : '/builder-day'

export default function Prototyping101() {

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Prototype with purpose.</div>
        <h1>Prototyping 101</h1>
        <p className="hero-subtitle">
          A practical guide to choosing the right prototype fidelity for your objectives 
          and creating artifacts that enable faster learning and better decision-making
        </p>
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
            <video
              controls
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              <source src={`${videoBasePath}/building-collaborative-builder-culture-part1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center'}}>
            <strong>Video:</strong> Prototyping 101<br />
            <strong>Featuring:</strong> Kev Wong, VP, Product and Content Design at <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow</a>
          </p>
        </div>
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
                Prototypes serve as invaluable tools throughout the feature development process, 
                enabling quicker and more informed decision-making. Understanding the impact of 
                the fidelity on your objectives and target audience is essential. This guide outlines 
                best practices to help you plan your next design project and choose the right artifact 
                at the right time.
              </p>
            </section>

            <section id="what-is-prototype" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>What Is a Prototype</h2>
              <p>
                A prototype is a quick, simplified version of a product or idea. It helps us test how something works or feels before building the real thing.
              </p>
              <p><strong>Prototyping helps us:</strong></p>
              <ul>
                <li>Visualize and validate ideas early</li>
                <li>Identify friction, dependencies, and misalignment before build</li>
                <li>Enable faster, more confident decisions</li>
                <li>Reduce waste and refine direction collaboratively</li>
                <li>Build shared understanding across cross-functional partners</li>
              </ul>
            </section>

            <section id="why-prototype" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Why Prototyping Matters</h2>
              <p>
                At its core, prototyping is about bringing ideas to life quickly.
              </p>
              <p>
                It allows us to explore, test, and communicate how something works or feels before we commit to building it.
              </p>
              <p><strong>Prototypes:</strong></p>
              <ul>
                <li>Turn &quot;what if&quot; into &quot;let&apos;s do this or that.&quot;</li>
                <li>Serve as communication accelerators across PM, Engineering, Marketing, and Design.</li>
                <li>Surface edge cases and dependencies early.</li>
                <li>Help us find misalignment fast so we can align sooner.</li>
                <li>Enable faster, more confident decisions as a team.</li>
              </ul>
            </section>

            <section id="tools-expand" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>Tools That Expand What&apos;s Possible</h2>
              <p>
                Designers now have access to a broader and more powerful toolkit, including Cursor, Figma Make, and emerging options like Claude Code.
              </p>
              <p><strong>These tools help us:</strong></p>
              <ul>
                <li>Simulate advanced behaviors and logic without engineering support</li>
                <li>Explore conditional logic, branching states, and real-time responses directly</li>
                <li>Prototype complex user flows and interactions that once required code</li>
              </ul>
              <p>
                This shift raises our ceiling as designers and enables us to think more holistically about systems, logic, and interaction design.
              </p>
            </section>

            {/* Second Video - Above Common Traps */}
            <div style={{
              gridColumn: '1 / -1',
              margin: '4rem 0',
              maxWidth: '100%'
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
                <video
                  controls
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                  onLoadedMetadata={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.playbackRate = 1.25;
                  }}
                >
                  <source src={`${videoBasePath}/building-collaborative-builder-culture-part2.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem'}}>
                <strong>Video:</strong> Building a Collaborative Builder Culture - Part 2
              </p>
            </div>

            <section id="common-traps" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Common Traps to Avoid</h2>
              <p>
                As we use AI-assisted and high-fidelity prototyping tools, a few pitfalls are worth watching for:
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0}}>Over-Investing in Fidelity</h3>
                  <p style={{marginBottom: '0.5rem'}}>
                    Prototypes can look so real that we start treating them like production builds.
                  </p>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    → Remember: they are learning tools, not deliverables.
                  </p>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0}}>Time Overload</h3>
                  <p style={{marginBottom: '0.5rem'}}>
                    High-fidelity prototypes can take longer than expected. Avoid unsustainable effort such as late nights or weekends.
                  </p>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    → They should reduce debate time, not create burnout.
                  </p>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0}}>Expectation Creep</h3>
                  <p style={{marginBottom: '0.5rem'}}>
                    When prototypes feel real, expectations across teams can increase.
                  </p>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    → Not everything needs to be polished. Sometimes a simple flow is the right answer.
                  </p>
                </div>

                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0}}>Trying to Do Too Much</h3>
                  <p style={{marginBottom: '0.5rem'}}>
                    Avoid building one large prototype to answer every question.
                  </p>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    → Split work by question, for example, one prototype for layout, another for logic or branching, and another for states or animation.
                  </p>
                </div>
              </div>
            </section>

            <section id="choosing-fidelity" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Choosing the Right Fidelity</h2>
              <p>
                Think of fidelity as a dial you adjust based on what you need to learn and who your audience is. Start simple and increase fidelity only when needed.
              </p>
              
              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Fidelity</th>
                      <th>Audience</th>
                      <th>Purpose</th>
                      <th>Approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Discovery & Exploration</strong></td>
                      <td>Low to Medium</td>
                      <td>XFN feature teams</td>
                      <td>Surface ideas, identify conflicts, and create shared understanding</td>
                      <td>A few screens or flows with a Loom voiceover showing key paths</td>
                    </tr>
                    <tr>
                      <td><strong>Design</strong></td>
                      <td>Medium to High</td>
                      <td>XFN teams</td>
                      <td>Maintain momentum, get specific feedback, show daily progress</td>
                      <td>Interactive flows updated frequently with Loom recordings to express unbuilt ideas or to call for specific feedback or points of concern</td>
                    </tr>
                    <tr>
                      <td><strong>Build</strong></td>
                      <td>High</td>
                      <td>XFN teams, stakeholders, and leadership</td>
                      <td>Support user testing, finalize details, and align with engineering</td>
                      <td>Fully interactive prototypes showing realistic behavior</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{marginTop: '2rem'}}>
                <strong>Prototype to learn, not to impress.</strong>
              </p>
              <p>
                Use high-fidelity prototypes to validate interoperability and Spring design patterns before committing engineering time.
              </p>
            </section>

            <section id="review-prototypes" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>How to Review Prototypes Effectively</h2>
              <p>
                When reviewing a prototype, match your feedback to the fidelity level.
              </p>
              
              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Prototype Type</th>
                      <th>Focus Feedback On</th>
                      <th>Avoid Focusing On</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Low Fidelity</strong></td>
                      <td>Structure, clarity, intent</td>
                      <td>Color, polish</td>
                    </tr>
                    <tr>
                      <td><strong>Medium Fidelity</strong></td>
                      <td>Flow, logic, interaction rhythm</td>
                      <td>Pixel perfection</td>
                    </tr>
                    <tr>
                      <td><strong>High Fidelity</strong></td>
                      <td>Realism, behavior, detail accuracy</td>
                      <td>Personal preference or style</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{marginTop: '2rem'}}><strong>Before giving feedback, ask:</strong></p>
              <ul>
                <li>&quot;What project phase are they in right now?&quot;</li>
                <li>&quot;What question is this prototype trying to answer?&quot;</li>
                <li>&quot;Which type of feedback is most useful now vs later?&quot;</li>
              </ul>

              <p style={{marginTop: '1.5rem'}}>
                Frame your feedback around learning, not judgment.
              </p>
              <p>
                Anchor discussions on outcomes: Does this serve our customers and help us achieve company goals?
              </p>
            </section>

            <section id="builder-mindset" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>Encouraging a Builder Mindset</h2>
              <p>
                Prototyping is a core part of how we learn, align, and collaborate.
              </p>
              <p>
                <strong>The rougher the prototype, the closer we are to real insight.</strong>
              </p>
              
              <p style={{marginTop: '1.5rem'}}><strong>We celebrate:</strong></p>
              <ul>
                <li><strong>Curiosity:</strong> trying new tools and approaches</li>
                <li><strong>Iteration:</strong> making progress visible early</li>
                <li><strong>Collaboration:</strong> sharing work-in-progress to build alignment</li>
              </ul>

              <p style={{marginTop: '2rem', fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--text-secondary)'}}>
                Making something rough is better than perfecting the conversation about it.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
