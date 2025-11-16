import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#goals', label: '02 Goals & Outcomes' },
  { href: '#tracks', label: '03 Event Tracks' },
  { href: '#schedule', label: '04 Event Schedule' },
  { href: '#preparation', label: '05 Preparation' },
  { href: '#awards', label: '06 Awards & Showcase' },
  { href: '#success', label: '07 Measuring Success' },
  { href: '#resources', label: '08 Resources & Templates' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Crafted for creators.</div>
        <h1>Builder Day in a Box</h1>
        <p className="hero-subtitle">
          A complete guide to transforming your team into an AI-native organization. 
          Empower your team to build, experiment, and learn together. Made for leaders 
          and builders in Product Management, Product Design, Data Science, User Research 
          and Marketing teams.
        </p>
        <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>
          Written By: Rachel Wolan, Chief Product Officer @ Webflow<br />
          Last Updated: November, 2025
        </div>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
              <section id="overview" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
                <p>
                  Builder Day is a full-day, hands-on experience where your entire Product organization 
                  builds, experiments, and learns together using AI-powered tools. This event brings 
                  together Product Management, Design, and Data teams to explore how AI can help 
                  ideate, validate, and share product concepts faster.
                </p>
                <p>
                  The goal is to make prototyping and analysis a natural part of everyday work, 
                  helping your organization become more AI-native where every builder can bring 
                  ideas to life quickly, creatively, and confidently.
                </p>
                <p>
                  <strong>Why This Works:</strong> Builder Day creates a safe space for experimentation, 
                  removes the pressure of production deadlines, and encourages cross-functional collaboration. 
                  It&apos;s a powerful way to build organizational confidence in new tools and methodologies 
                  while generating real, tangible work that can inform future product decisions.
                </p>
              </section>

              <section id="goals" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Goals & Outcomes</h2>
                <p>When planning your Builder Day, define clear goals that align with your organization&apos;s needs:</p>
                <ul>
                  <li><strong>Boost Confidence</strong> — Increase org-wide confidence in AI-assisted prototyping and analysis tools</li>
                  <li><strong>Spark Adoption</strong> — Encourage everyday use of new tools across Product, Design, and Data teams</li>
                  <li><strong>Accelerate Workflows</strong> — Encourage earlier prototypes and data insights in your product development lifecycle</li>
                  <li><strong>Build Culture</strong> — Strengthen your AI-native culture through hands-on experimentation</li>
                </ul>
              </section>

              <section id="tracks" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Event Tracks</h2>
                <p>
                  Builder Day works best with parallel tracks that allow different roles to focus 
                  on what they do best while still maintaining a shared experience.
                </p>

                    <h3>Prototyping Track (Product Design + PM)</h3>
                    <p><strong>Objective:</strong> Create functional prototypes using AI-powered design and development tools.</p>

                    <h4>Recommended Tools:</h4>
                    <ul>
                      <li><strong>AI-Enabled Design Tools</strong> – No-code, AI-assisted prototyping for quick UX explorations and early concept validation</li>
                      <li><strong>AI Code Editors</strong> – AI-first development environments for functional prototyping. Consider providing starter templates or repos to help teams get started quickly</li>
                    </ul>

                    <h4>Assignment Focus:</h4>
                    <ul>
                      <li>Exploring new product ideas</li>
                      <li>Validating user interactions</li>
                      <li>Testing product concepts</li>
                      <li>Building end-to-end workflows</li>
                    </ul>

                    <h3 style={{marginTop: '3rem'}}>Insights Track (Data + Research)</h3>
                    <p><strong>Objective:</strong> Use AI tools to uncover meaningful findings and implement automations in your data stack.</p>

                    <h4>Recommended Tools:</h4>
                    <ul>
                      <li><strong>AI Analysis Platforms</strong> – Tools that help automate data synthesis and pattern recognition</li>
                      <li><strong>AI Code Assistants</strong> – For building custom data workflows and automations</li>
                    </ul>

                    <h4>Assignment Focus:</h4>
                    <ul>
                      <li>Discovering patterns in user behavior or product data</li>
                      <li>Automating data synthesis and reporting</li>
                      <li>Turning data into actionable insights</li>
                      <li>Building agentic AI tools for research</li>
                    </ul>
              </section>

              <section id="schedule" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>Event Schedule</h2>
                <p>
                  Structure your Builder Day to accommodate different time zones while maintaining 
                  moments of connection and support throughout the day.
                </p>

                <div className="table-container">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Activity</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>9:00 AM Local</td>
                        <td>Independent Work</td>
                        <td>Start Builder Day independently in your local time zone. Join the live kickoff at a designated time.</td>
                      </tr>
                      <tr>
                        <td>9:15 AM PT</td>
                        <td>Kickoff</td>
                        <td>Gather as a product org for a short live kickoff to go over the Builder Day agenda and resources.</td>
                      </tr>
                      <tr>
                        <td>All Day</td>
                        <td>Heads-Down Work</td>
                        <td>Build, explore, and share progress. Teams work on their prototypes or analyses.</td>
                      </tr>
                      <tr>
                        <td>9:30 AM–2:00 PM PT</td>
                        <td>Open Jam Room</td>
                        <td>Drop-in session for help, feedback, or to show what you&apos;re building. Staffed by internal experts and tool vendors.</td>
                      </tr>
                      <tr>
                        <td>End of Day Local</td>
                        <td>Submissions</td>
                        <td>Submit final deliverables: video walkthrough and prototype/analysis link.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                    <h3>Submission Requirements</h3>
                    <p>Make it easy for participants to submit their work:</p>
                    <ul>
                      <li>A ≤5-minute video walkthrough covering goal, approach, and learnings</li>
                      <li>A prototype or analysis link</li>
                      <li>Submission via your team&apos;s communication platform (Slack, Teams, etc.)</li>
                      <li>GitHub repo (optional)</li>
                    </ul>
              </section>

              <section id="preparation" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Preparation</h2>
                <p>
                  Success starts with preparation. Ensure everyone feels confident and equipped 
                  before Builder Day begins.
                </p>

                    <h3>Training Sessions</h3>
                    <p>Schedule training sessions for key tools 1-2 weeks before the event:</p>
                    <ul>
                      <li>AI design tool training</li>
                      <li>AI code editor workshops</li>
                      <li>Data analysis platform tutorials</li>
                    </ul>
                    <p>
                      <a href="/builder-day-in-a-box/figma-make-training">→ Figma Make</a> · 
                      <a href="/builder-day-in-a-box/cursor-training"> Become 10x with Cursor</a>
                    </p>

                    <h3 style={{marginTop: '3rem'}}>Pre-Work</h3>
                    <p>Help participants get ready:</p>
                    <ul>
                      <li>Short warm-up assignments to confirm tool access</li>
                      <li>Idea submission form to collect concepts ahead of time</li>
                      <li>Setup verification checklist</li>
                    </ul>

                    <h3 style={{marginTop: '3rem'}}>Support Channels</h3>
                    <p>Create clear support pathways:</p>
                    <ul>
                      <li>Dedicated communication channel for questions</li>
                      <li>Open office hours for setup help</li>
                      <li>Day-of vendor support (if applicable)</li>
                      <li>Resource hub with guides and templates</li>
                    </ul>
              </section>

              <section id="awards" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Awards & Showcase</h2>
                <p>
                  Close out Builder Day with an all-org celebration recognizing creativity, learning, 
                  and impact. A judging panel announces winners and celebrates standout work.
                </p>

                    <h3>Judging Panel</h3>
                    <p>
                      Assemble a diverse panel of leaders from across your organization. Consider
                      including representation from:
                    </p>
                    <ul>
                      <li>Executive leadership</li>
                      <li>Product management</li>
                      <li>Design leadership</li>
                      <li>Engineering leadership</li>
                      <li>Customer-facing teams</li>
                    </ul>

                    <h3 style={{marginTop: '3rem'}}>Prizes & Recognition</h3>
                    <p>
                      Each category winner receives recognition and a prize (consider gift cards,
                      company swag, or professional development budgets). Winners&apos; projects are
                      announced during a live ceremony and shared company-wide.
                    </p>

                    <h3 style={{marginTop: '3rem'}}>Categories</h3>
                    <ul>
                      <li><strong>Prototype for Learning</strong> — For prototypes that show exploration and help clarify or test ideas. Ideal for early or low-fidelity prototypes focused on learning and insight.</li>
                      <li><strong>Interaction Design / Feel</strong> — For UX, motion, or usability demos that explore design interactions, flow, or behavior.</li>
                      <li><strong>Workflow / Systems Prototype</strong> — For end-to-end or multi-user journeys that demonstrate system thinking or connected experiences.</li>
                      <li><strong>Data, Insight, or Automation</strong> — For AI-powered analyses, automations, or data workflows that accelerate learning and decision-making.</li>
                      <li><strong>Creative / Experimental Use of AI</strong> — For bold, unexpected, or boundary-pushing uses of AI that inspire new ways of working or creating.</li>
                    </ul>
              </section>

              <section id="success" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Measuring Success</h2>
                <p>Define what success looks like for your Builder Day. Consider tracking:</p>

                <div className="table-container">
                  <table className="success-table">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>Target</th>
                        <th>How to Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Participation</td>
                        <td>High participation across all teams</td>
                        <td>Registration and submission rates</td>
                      </tr>
                      <tr>
                        <td>Completion</td>
                        <td>100% of participants create and share work</td>
                        <td>Submission tracking</td>
                      </tr>
                      <tr>
                        <td>Tool Adoption</td>
                        <td>Measurable uptick in new tool usage</td>
                        <td>Tool analytics and surveys</td>
                      </tr>
                      <tr>
                        <td>Confidence</td>
                        <td>Increased comfort with AI tools</td>
                        <td>Pre/post event surveys</td>
                      </tr>
                      <tr>
                        <td>Ongoing Impact</td>
                        <td>Continued use of prototypes/insights in product work</td>
                        <td>Follow-up surveys and usage tracking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="resources" className="guide-section">
                <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>Resources & Templates</h2>
                <p>Create a resource hub with everything participants need:</p>

                    <ul>
                      <li><strong>Setup Guides</strong> — Step-by-step instructions for accessing and configuring tools</li>
                      <li><strong>Training Recordings</strong> — Recorded sessions for those who can&apos;t attend live training</li>
                      <li><strong>Starter Templates</strong> — Pre-configured project templates to help teams get started quickly</li>
                      <li><strong>Idea Bank</strong> — Collection of example projects and inspiration</li>
                      <li><strong>Submission Checklist</strong> — Clear list of what to include in final submissions</li>
                      <li><strong>FAQ</strong> — Answers to common questions about tools, process, and expectations</li>
                    </ul>

                    <div style={{
                      marginTop: '4rem',
                      padding: '2rem',
                      background: 'var(--bg-secondary)',
                      borderLeft: '3px solid var(--accent)',
                      borderRadius: '8px'
                    }}>
                      <p style={{marginBottom: '0.5rem'}}><strong>Ready to run your own Builder Day?</strong></p>
                          <p style={{marginBottom: 0}}>Use this guide as a starting point and adapt it to your organization&apos;s needs.</p>
                    </div>
              </section>
          </div>

          <TableOfContents items={tocItems} />
        </div>
      </section>
    </>
  )
}
