export default function OpportunitySolutionAlignment() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-tagline">Crafted for creators.</div>
          <h1>Opportunity-Solution Alignment (OSA)</h1>
          <p className="hero-subtitle">
            A collaborative framework for cross-functional teams to align on customer 
            opportunities and explore solutions together
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-content">
            <nav className="table-of-contents">
              <div style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb'}}>
                <a href="/" style={{color: '#4353ff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem'}}>
                  ← Back to Builder Day in a Box
                </a>
              </div>
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#what-is-osa">What is an OSA?</a></li>
                <li><a href="#why-use">Why use an OSA?</a></li>
                <li><a href="#when-to-use">When to use an OSA</a></li>
                <li><a href="#getting-set-up">Getting Set Up</a></li>
                <li><a href="#how-to-run">How to Run an OSA</a></li>
                <li><a href="#outcomes">Outcomes and Next Steps</a></li>
                <li><a href="#resources">Resources</a></li>
              </ul>
            </nav>

            <div className="guide-body">
              <section id="what-is-osa" className="guide-section">
                <h2>What is an OSA?</h2>
                
                <div className="info-box" style={{marginBottom: '2rem'}}>
                  <p>
                    This guide is adapted from{" "}
                    <a 
                      href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: '#4353ff', fontWeight: 500}}
                    >
                      Melanie Richards's comprehensive guide to Opportunity-Solution Alignment
                    </a>
                    . For the full detailed walkthrough, templates, and examples, visit her blog post.
                  </p>
                </div>

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
                    Leverage everyone's unique perspective to dream up compelling potential solutions 
                    to these opportunities
                  </li>
                </ul>
                <p>
                  The most important concept is that you <strong>collaborate as a cross-functional team 
                  as early as possible in discovery phases</strong>, moving away from the traditional 
                  waterfall approach where a PM throws a fully-featured spec "over the wall."
                </p>
              </section>

              <section id="why-use" className="guide-section">
                <h2>Why use an OSA?</h2>
                <p>
                  OSAs leverage the entire team's creativity and unique perspectives to unearth compelling 
                  solutions to important customer problems. An engineer might build on a designer's idea 
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
              </section>

              <section id="when-to-use" className="guide-section">
                <h2>When to use an OSA</h2>
                <div className="track-card">
                  <p><strong>✅ Releases</strong> are the best scope of work to explore with OSAs. 
                  They're substantive enough that you'll have different pathways to explore, without 
                  getting totally lost in the weeds.</p>
                  
                  <p><strong>⚠️ Initiatives</strong> can be explored with an OSA, but you'll need to 
                  structure them more carefully to keep the field of opportunity manageable. You may 
                  want to run an OSA at the beginning of an initiative, and later on for a specific release.</p>
                  
                  <p><strong>⚠️ Quality of life (QoL) updates</strong> are often small enough that they 
                  don't warrant an OSA. However, you might run one for a more substantial QoL where there 
                  are multiple valid but mutually-exclusive ways to address the customer problem. In this 
                  case, make the OSA shorter in length and with a smaller guest list.</p>
                  
                  <p><strong>❌ Bugs</strong> can be fixed quickly without this ceremony.</p>
                </div>
              </section>

              <section id="getting-set-up" className="guide-section">
                <h2>Getting Set Up</h2>
                
                <div className="step-card">
                  <h3>Securing Buy-In</h3>
                  <p>
                    If you work in an organization where some functions aren't accustomed to this type of 
                    early discovery and ideation, frame the exercise as a pilot—something to try out. 
                    Assure your peers that the PM is ultimately responsible for the outcomes of the OSA, 
                    but that you value everyone's point of view and believe the team can generate creative 
                    solutions together.
                  </p>
                </div>

                <div className="step-card">
                  <h3>Assembling Your Team</h3>
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
                </div>

                <div className="step-card">
                  <h3>Making the Time</h3>
                  <p>
                    At 2–3 hours, an OSA can be a notable time commitment. Tactics to make this lighter:
                  </p>
                  <ul>
                    <li>Trial an OSA for your more impactful and nebulous Releases</li>
                    <li>Break the OSA up into smaller sessions (suggest two sessions)</li>
                    <li>Reduce the time spent on a particular step</li>
                    <li>Take advantage of async time to share opportunity context or request input</li>
                    <li>Optimize for a smaller handful of required participants' calendars</li>
                  </ul>
                  <p>
                    Ultimately, a couple hours of alignment early in a project can save you exponential 
                    amounts of time spinning your wheels and creating team alignment throughout the 
                    software development lifecycle.
                  </p>
                </div>
              </section>

              <section id="how-to-run" className="guide-section">
                <h2>How to Run an OSA</h2>
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

                <div className="step-card">
                  <h3>Session 1</h3>
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
                    Once brainstorming time is up, ask participants to quietly group the ideas into "like" 
                    groups. Folks can come off mic to ask each other clarifying questions.
                  </p>
                </div>

                <div className="step-card">
                  <h3>Session 2</h3>
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
                    Remind the team these are very rough estimates—you're not asking for ETAs.
                  </p>
                  
                  <p><strong>Step 6: Voting Exercise</strong></p>
                  <p>
                    Once all your stickies are in place on the matrix, lead the team in a ~10 minute 
                    voting exercise. Everyone gets 3 👍 and 3 👎. The point is to express enthusiasm for 
                    something that might be further down the priority list—or disagreement that a solution 
                    should be explored further.
                  </p>
                </div>
              </section>

              <section id="outcomes" className="guide-section">
                <h2>Outcomes and Next Steps</h2>
                <p>
                  Teams that go through an OSA should now be aligned on the customer opportunity space, 
                  and have a good sense of solutions they'd like to explore further. From here:
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
                    If something new and compelling pops up during further discovery—or customers aren't 
                    responding well to the solutions—pay attention to these insights! Pivot your approach 
                    as needed and discuss this evolution continuously as a cross-functional team.
                  </li>
                </ul>
              </section>

              <section id="resources" className="guide-section">
                <h2>Resources</h2>
                <div className="cta-box">
                  <p><strong>Want the full detailed guide?</strong></p>
                  <p>
                    <a 
                      href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: '#ffffff', textDecoration: 'underline'}}
                    >
                      Read Melanie Richards's complete Opportunity-Solution Alignment guide →
                    </a>
                  </p>
                  <p style={{fontSize: '0.875rem', marginTop: '0.5rem'}}>
                    Includes Figma Community Template, detailed step-by-step instructions, and real-world examples
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

