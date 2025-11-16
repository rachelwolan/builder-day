export default function BuilderCultureAndPrototyping() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Crafted for creators.</div>
        <h1>Builder Culture and Prototyping</h1>
        <p className="hero-subtitle">
          Frameworks and practices for building collaborative, AI-native product teams 
          that prototype early, learn fast, and ship with confidence
        </p>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <div style={{maxWidth: '900px', margin: '0 auto 4rem'}}>
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
                  <source src="/building-collaborative-builder-culture.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center'}}>
                <strong>Video:</strong> Building a Collaborative Builder Culture<br />
                <strong>Featuring:</strong> Melanie Richards, Group Product Manager at <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow</a> and Kev Wong, VP, Product and Content Design at <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow</a>
              </p>
            </div>
              <section id="introduction" className="guide-section">
                <h2>Introduction</h2>
                <p>
                  Building an AI-native organization requires more than just adopting new tools—it demands 
                  a fundamental shift in how teams collaborate, make decisions, and bring ideas to life. 
                  This guide combines two essential frameworks: <strong>Opportunity-Solution Alignment (OSA)</strong>, 
                  a collaborative exercise that brings cross-functional teams together to align on customer 
                  opportunities and explore solutions early in the discovery process, and <strong>Prototyping</strong>, 
                  the practice of creating quick, iterative artifacts that enable faster learning and better 
                  decision-making throughout the product development lifecycle.
                </p>
                <p>
                  Together, these approaches help teams move away from waterfall handoffs and toward a culture 
                  where Product, Design, Engineering, and Insights work as thought partners from day one. 
                  You&apos;ll learn how to run OSAs to surface ideas and create shared understanding. For guidance 
                  on choosing the right prototype fidelity and using artifacts to communicate effectively, see 
                  our <a href="/builder-day-in-a-box/prototyping-101">Prototyping 101</a> guide. Whether you&apos;re 
                  planning a Builder Day event or looking to transform your team&apos;s everyday workflow, these 
                  frameworks will help you build faster, learn sooner, and ship with greater confidence.
                </p>
              </section>

              <section id="osa" className="guide-section">
                <h2>Opportunity-Solution Alignment (OSA)</h2>
                
                <p>
                  This section is adapted from{" "}
                  <a 
                    href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Melanie Richards&apos;s comprehensive guide to Opportunity-Solution Alignment
                  </a>
                  . For the full detailed walkthrough, templates, and examples, visit her blog post.
                </p>

                <h3>What is an OSA?</h3>
                <p>
                  An Opportunity-Solution Alignment exercise is a collaborative framework that brings 
                  cross-functional teams together to:
                </p>
                <ul>
                  <li>
                    Align on a deep, shared understanding of the customer opportunities the team 
                    intends to solve for in an upcoming investment—and why those are important to solve for now
                  </li>
                  <li>
                    Leverage everyone&apos;s unique perspective to dream up compelling potential solutions 
                    to these opportunities
                  </li>
                </ul>
                <p>
                  The most important concept is that you <strong>collaborate as a cross-functional team 
                  as early as possible in discovery phases</strong>, moving away from the traditional 
                  waterfall approach where a PM throws a fully-featured spec &quot;over the wall.&quot;
                </p>

                <h3>Why use an OSA?</h3>
                <p>
                  OSAs leverage the entire team&apos;s creativity and unique perspectives to unearth compelling 
                  solutions to important customer problems. An engineer might build on a designer&apos;s idea 
                  with a simple solution proposal. A product marketing manager could flag a fresh insight 
                  from the market.
                </p>
                <p>
                  OSAs also create a stronger sense of camaraderie and shared ownership. Team members 
                  that have a stake in the early direction feel a sense of pride that can translate into 
                  customer empathy, attention to quality, a willingness to experiment, and effective 
                  collaboration. The early alignment you do as a team enables you to accelerate the pace 
                  of decisions throughout the product development lifecycle.
                </p>

                <h3>When to use an OSA</h3>
                <ul>
                  <li><strong>✅ Releases</strong> are the best scope of work to explore with OSAs. They&apos;re substantive enough that you&apos;ll have different pathways to explore, without getting totally lost in the weeds.</li>
                  <li><strong>⚠️ Initiatives</strong> can be explored with an OSA, but you&apos;ll need to structure them more carefully to keep the field of opportunity manageable. You may want to run an OSA at the beginning of an initiative, and later on for a specific release.</li>
                  <li><strong>⚠️ Quality of life (QoL) updates</strong> are often small enough that they don&apos;t warrant an OSA. However, you might run one for a more substantial QoL where there are multiple valid but mutually-exclusive ways to address the customer problem. In this case, make the OSA shorter in length and with a smaller guest list.</li>
                  <li><strong>❌ Bugs</strong> can be fixed quickly without this ceremony.</li>
                </ul>

                <h3>Getting Set Up</h3>
                
                <h4>Securing Buy-In</h4>
                <p>
                  If you work in an organization where some functions aren&apos;t accustomed to this type of 
                  early discovery and ideation, frame the exercise as a pilot—something to try out. 
                  Assure your peers that the PM is ultimately responsible for the outcomes of the OSA, 
                  but that you value everyone&apos;s point of view and believe the team can generate creative 
                  solutions together.
                </p>

                <h4>Assembling Your Team</h4>
                <p>
                  At a minimum, an OSA should include the core product trio: product manager, designer, 
                  engineering manager, and any tech leads for the project. Ideally, invite other key 
                  contributors, such as engineers who will work on this project.
                </p>
                <p>
                  You can get creative with the invite list! Consider product marketing managers, 
                  solution/sales engineers, technical support pros, docs writers, data scientists, 
                  researchers, and stakeholders. Anyone who has unique perspective or insight on the 
                  opportunity space could be included. Keep the list manageable though—probably 
                  <strong> ~10 people is a reasonable maximum</strong>.
                </p>

                <h4>Making the Time</h4>
                <p>
                  At 2–3 hours, an OSA can be a notable time commitment. Tactics to make this lighter:
                </p>
                <ul>
                  <li>Trial an OSA for your more impactful and nebulous Releases</li>
                  <li>Break the OSA up into smaller sessions (suggest two sessions)</li>
                  <li>Reduce the time spent on a particular step</li>
                  <li>Take advantage of async time to share opportunity context or request input</li>
                  <li>Optimize for a smaller handful of required participants&apos; calendars</li>
                </ul>
                <p>
                  Ultimately, a couple hours of alignment early in a project can save you exponential 
                  amounts of time spinning your wheels and creating team alignment throughout the 
                  software development lifecycle.
                </p>

                <h3>How to Run an OSA</h3>
                <p>
                  OSAs typically run in two sessions. Melanie Richards has created a{" "}
                  <a 
                    href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{color: '#4353ff'}}
                  >
                    Figma Community Template for OSAs
                  </a>
                  {" "}that you can use for these brainstorming exercises.
                </p>

                <h4>Session 1</h4>
                <p><strong>Step 1: Opportunity Alignment</strong></p>
                <p>
                  Before the OSA begins, gather context on the customer opportunity space. Share materials 
                  as a pre-read that include: the customer problem or opportunity set, target customer 
                  segment, why this is important to solve now, and non-goals. Walk through them together 
                  live and prompt for questions, additional insights, and discussion.
                </p>
                
                <p><strong>Step 2: Solution Ideation</strong></p>
                <p>
                  Set a timer for 15 minutes and ask participants to generate customer-facing solutions 
                  to the aligned-upon customer opportunity set. Encourage folks not to worry about 
                  implementation details yet.
                </p>
                
                <p><strong>Step 3: Solution Grouping</strong></p>
                <p>
                  Once brainstorming time is up, ask participants to quietly group the ideas into &quot;like&quot; 
                  groups. Folks can come off mic to ask each other clarifying questions.
                </p>

                <h4>Session 2</h4>
                <p><strong>Step 4: Solution Alignment — Value</strong></p>
                <p>
                  As a team, place your sticky groups vertically on a matrix, from high to low value. 
                  This should be an objective discussion: how well do you hypothesize the idea would 
                  solve the customer opportunity in a delightful way? Highest impact on the opportunity 
                  = highest value. Feasibility is not a factor now.
                </p>
                
                <p><strong>Step 5: Solution Alignment — Effort</strong></p>
                <p>
                  As a team, move your sticky groups horizontally on the matrix, from low to high effort. 
                  Remind the team these are very rough estimates—you&apos;re not asking for ETAs.
                </p>
                
                <p><strong>Step 6: Voting Exercise</strong></p>
                <p>
                  Once all your stickies are in place on the matrix, lead the team in a ~10 minute 
                  voting exercise. Everyone gets 3 👍 and 3 👎. The point is to express enthusiasm for 
                  something that might be further down the priority list—or disagreement that a solution 
                  should be explored further.
                </p>

                <h3>Outcomes and Next Steps</h3>
                <p>
                  Teams that go through an OSA should now be aligned on the customer opportunity space, 
                  and have a good sense of solutions they&apos;d like to explore further. From here:
                </p>
                <ul>
                  <li>
                    The PM should share a summary of the high-priority solutions the team aligned on, 
                    potentially in a product requirements document (PRD)
                  </li>
                  <li>
                    The cross-functional team can now explore the solution ideas further with design mocks, 
                    prototypes, usability testing, customer interviews, etc.
                  </li>
                  <li>
                    If something new and compelling pops up during further discovery—or customers aren&apos;t 
                    responding well to the solutions—pay attention to these insights! Pivot your approach 
                    as needed and discuss this evolution continuously as a cross-functional team.
                  </li>
                </ul>

                <p style={{marginTop: '3rem'}}>
                  <strong>Want the full detailed guide?</strong>{" "}
                  <a 
                    href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read Melanie Richards&apos;s complete Opportunity-Solution Alignment guide →
                  </a>
                  {" "}Includes Figma Community Template, detailed step-by-step instructions, and real-world examples.
                </p>
              </section>
          </div>

          <nav className="table-of-contents">
            <h3>Table of Contents</h3>
            <ul>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#osa">Opportunity-Solution Alignment</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

