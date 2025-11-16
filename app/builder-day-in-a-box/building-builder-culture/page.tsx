export default function BuildingBuilderCulture() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-tagline">Crafted for creators.</div>
          <h1>Building a Builder Culture</h1>
          <p className="hero-subtitle">
            Collaborative frameworks for product teams to align on opportunities 
            and explore solutions together
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-content">
            <nav className="table-of-contents">
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#osa">Opportunity-Solution Alignment (OSA)</a></li>
                <li><a href="#prototyping-101">Prototyping 101</a></li>
              </ul>
            </nav>

            <div className="guide-body">
              <section id="osa" className="guide-section">
                <h2>Opportunity-Solution Alignment (OSA)</h2>
                
                <div className="info-box" style={{marginBottom: '2rem'}}>
                  <p>
                    This section is adapted from{" "}
                    <a 
                      href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: '#4353ff', fontWeight: 500}}
                    >
                      Melanie Richards&apos;s comprehensive guide to Opportunity-Solution Alignment
                    </a>
                    . For the full detailed walkthrough, templates, and examples, visit her blog post.
                  </p>
                </div>

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
                <div className="track-card">
                  <p><strong>✅ Releases</strong> are the best scope of work to explore with OSAs. 
                  They&apos;re substantive enough that you&apos;ll have different pathways to explore, without 
                  getting totally lost in the weeds.</p>
                  
                  <p><strong>⚠️ Initiatives</strong> can be explored with an OSA, but you&apos;ll need to 
                  structure them more carefully to keep the field of opportunity manageable. You may 
                  want to run an OSA at the beginning of an initiative, and later on for a specific release.</p>
                  
                  <p><strong>⚠️ Quality of life (QoL) updates</strong> are often small enough that they 
                  don&apos;t warrant an OSA. However, you might run one for a more substantial QoL where there 
                  are multiple valid but mutually-exclusive ways to address the customer problem. In this 
                  case, make the OSA shorter in length and with a smaller guest list.</p>
                  
                  <p><strong>❌ Bugs</strong> can be fixed quickly without this ceremony.</p>
                </div>

                <h3>Getting Set Up</h3>
                
                <div className="step-card">
                  <h4>Securing Buy-In</h4>
                  <p>
                    If you work in an organization where some functions aren&apos;t accustomed to this type of 
                    early discovery and ideation, frame the exercise as a pilot—something to try out. 
                    Assure your peers that the PM is ultimately responsible for the outcomes of the OSA, 
                    but that you value everyone&apos;s point of view and believe the team can generate creative 
                    solutions together.
                  </p>
                </div>

                <div className="step-card">
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
                </div>

                <div className="step-card">
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
                </div>

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

                <div className="step-card">
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
                </div>

                <div className="step-card">
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
                </div>

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

                <div className="cta-box" style={{marginTop: '3rem'}}>
                  <p><strong>Want the full detailed guide?</strong></p>
                  <p>
                    <a 
                      href="https://melanie-richards.com/blog/opportunity-solution-alignment/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: '#ffffff', textDecoration: 'underline'}}
                    >
                      Read Melanie Richards&apos;s complete Opportunity-Solution Alignment guide →
                    </a>
                  </p>
                  <p style={{fontSize: '0.875rem', marginTop: '0.5rem'}}>
                    Includes Figma Community Template, detailed step-by-step instructions, and real-world examples
                  </p>
                </div>
              </section>

              <section id="prototyping-101" className="guide-section">
                <h2>Prototyping 101</h2>
                <p>
                  Prototypes serve as invaluable tools throughout the feature development process, 
                  enabling quicker and more informed decision-making. Understanding the impact of 
                  the fidelity on your objectives and target audience is essential.
                </p>

                <h3>What is a Prototype?</h3>
                <p>
                  A prototype is a quick, simplified version of a product or idea. It helps you 
                  test how something works or feels before building the real thing.
                </p>

                <h3>Why Prototype?</h3>
                <p>
                  Prototyping helps you learn fast. It shows what works and what doesn&apos;t early on, 
                  so you can:
                </p>
                <ul>
                  <li>Make better decisions with real feedback</li>
                  <li>Avoid wasted effort by catching issues early</li>
                  <li>Build with more confidence knowing your direction is validated</li>
                  <li>Communicate ideas more effectively to stakeholders and team members</li>
                </ul>

                <h3>Creating the Right Artifact</h3>
                <p>
                  Prototypes are a form of communication artifact with different fidelities of detail. 
                  That detail determines what your collaborator will focus on. Pick the fidelity based 
                  on what you need to learn.
                </p>
                <div className="track-card">
                  <ul>
                    <li>
                      <strong>Use low fidelity</strong> (like sketches or wireframes) to explore 
                      ideas quickly and get early feedback on concepts
                    </li>
                    <li>
                      <strong>Use high fidelity</strong> (with real interactions or visuals) when 
                      you need to test details, communicate clearly with others, or get realistic feedback
                    </li>
                    <li>
                      <strong>Start simple, level up as needed</strong> — don&apos;t over-invest in fidelity 
                      until you know what you&apos;re building
                    </li>
                  </ul>
                </div>

                <h3>Tools and Approach by Fidelity</h3>
                <p>
                  Different phases of development call for different levels of fidelity. Use this guide 
                  to match your prototype to your current phase and learning objectives.
                </p>

                <div className="table-container">
                  <table className="fidelity-table">
                    <thead>
                      <tr>
                        <th>Phase</th>
                        <th>Fidelity</th>
                        <th>Focus Areas</th>
                        <th>Audience</th>
                        <th>Purpose</th>
                        <th>Approach</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Discovery & Exploration</strong></td>
                        <td>Low to Medium Fidelity</td>
                        <td>
                          <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
                            <li>Flows</li>
                            <li>States</li>
                            <li>Behaviors</li>
                            <li>Hierarchy</li>
                          </ul>
                        </td>
                        <td>XFN Feature Teams</td>
                        <td>
                          Surface ideas from the ether, draw out conflicts, create shared understanding
                        </td>
                        <td>
                          Consists of a few screens with voiceover showing key flows
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Design</strong></td>
                        <td>Medium to High Fidelity</td>
                        <td>
                          <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
                            <li>Critical feature UX</li>
                            <li>Common cases</li>
                            <li>Interoperability</li>
                            <li>Design system impact</li>
                          </ul>
                        </td>
                        <td>XFN Teams</td>
                        <td>
                          Maintain momentum, get specific feedback, show daily progress
                        </td>
                        <td>
                          Consists of interactive flows updated frequently with Loom records to express 
                          unbuilt ideas or call for specific feedback or points of concern
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Build</strong></td>
                        <td>High Fidelity</td>
                        <td>
                          <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
                            <li>Edge cases</li>
                            <li>Complex state</li>
                            <li>Detailed interaction design</li>
                            <li>Detailed visual design</li>
                          </ul>
                        </td>
                        <td>XFN Teams, Stakeholders, and Leadership</td>
                        <td>
                          Supports user testing, final details, engineering alignment
                        </td>
                        <td>
                          Consists of fully interactive experiences
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="info-box" style={{marginTop: '2rem'}}>
                  <h3>💡 Key Takeaway</h3>
                  <p>
                    The right fidelity at the right time saves time and improves outcomes. Start with 
                    low fidelity to explore broadly, then increase fidelity as you narrow in on specific 
                    solutions and need to communicate details to stakeholders and engineering teams.
                  </p>
                </div>

                <p style={{marginTop: '2rem'}}>
                  <a href="/builder-day-in-a-box/product-artifacts" style={{color: '#4353ff', fontWeight: 500}}>
                    → View the complete Product Artifacts guide for more detailed prototyping guidance
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

