export default function BuilderDayInABox() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-tagline">Crafted for creators.</div>
          <h1>Builder Day in a Box</h1>
          <p className="hero-subtitle">
            A complete guide to transforming your team into an AI-native organization. 
            Empower your team to build, experiment, and learn together. Made for leaders 
            and builders in Product Management, Product Design, Data Science, User Research 
            and Marketing teams.
          </p>
          <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: '#6b7280', lineHeight: '1.6'}}>
            Written By: Rachel Wolan, Chief Product Officer @ Webflow<br />
            Last Updated: November, 2025
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-content">
            <nav className="table-of-contents">
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#overview">🎯 Overview</a></li>
                <li><a href="#goals">💡 Goals & Outcomes</a></li>
                <li><a href="#tracks">🎨 Event Tracks</a></li>
                <li><a href="#schedule">🗓️ Event Schedule</a></li>
                <li><a href="#preparation">🧠 Preparation</a></li>
                <li><a href="#awards">🏆 Awards & Showcase</a></li>
                <li><a href="#success">📈 Measuring Success</a></li>
                <li><a href="#resources">🔗 Resources & Templates</a></li>
                <li style={{marginTop: '1rem'}}>
                  <a href="#additional-resources" style={{fontWeight: 600}}>Additional Resources</a>
                </li>
                <li style={{marginLeft: '1rem'}}>
                  <a href="/builder-day-in-a-box/figma-make-training">Figma Make Training</a>
                </li>
                <li style={{marginLeft: '1rem'}}>
                  <a href="/builder-day-in-a-box/figma-make-how-to">Figma Make How-To</a>
                </li>
                <li style={{marginLeft: '1rem'}}>
                  <a href="/builder-day-in-a-box/product-artifacts">Product Artifacts</a>
                </li>
                <li style={{marginLeft: '1rem'}}>
                  <a href="/builder-day-in-a-box/building-builder-culture">Building a Builder Culture</a>
                </li>
                <li style={{marginLeft: '1rem'}}>
                  <a href="/builder-day-in-a-box/cursor-training">Become 10x with Cursor</a>
                </li>
              </ul>
            </nav>

            <div className="guide-body">
              <section id="overview" className="guide-section">
                <h2>🎯 Overview</h2>
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
                <div className="info-box">
                  <h3>💡 Why This Works</h3>
                  <p>
                    Builder Day creates a safe space for experimentation, removes the pressure of 
                    production deadlines, and encourages cross-functional collaboration. It's a 
                    powerful way to build organizational confidence in new tools and methodologies 
                    while generating real, tangible work that can inform future product decisions.
                  </p>
                </div>
              </section>

              <section id="goals" className="guide-section">
                <h2>💡 Goals & Outcomes</h2>
                <p>When planning your Builder Day, define clear goals that align with your organization's needs:</p>
                
                <div className="goals-grid">
                  <div className="goal-card">
                    <h3>🎯 Boost Confidence</h3>
                    <p>Increase org-wide confidence in AI-assisted prototyping and analysis tools</p>
                  </div>
                  <div className="goal-card">
                    <h3>⚡ Spark Adoption</h3>
                    <p>Encourage everyday use of new tools across Product, Design, and Data teams</p>
                  </div>
                  <div className="goal-card">
                    <h3>🚀 Accelerate Workflows</h3>
                    <p>Encourage earlier prototypes and data insights in your product development lifecycle</p>
                  </div>
                  <div className="goal-card">
                    <h3>🌱 Build Culture</h3>
                    <p>Strengthen your AI-native culture through hands-on experimentation</p>
                  </div>
                </div>
              </section>

              <section id="tracks" className="guide-section">
                <h2>🎨 Event Tracks</h2>
                <p>
                  Builder Day works best with parallel tracks that allow different roles to focus 
                  on what they do best while still maintaining a shared experience.
                </p>

                <div className="track-card">
                  <h3>🧩 Prototyping Track (Product Design + PM)</h3>
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
                </div>

                <div className="track-card">
                  <h3>📊 Insights Track (Data + Research)</h3>
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
                </div>
              </section>

              <section id="schedule" className="guide-section">
                <h2>🗓️ Event Schedule</h2>
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
                        <td>Drop-in session for help, feedback, or to show what you're building. Staffed by internal experts and tool vendors.</td>
                      </tr>
                      <tr>
                        <td>End of Day Local</td>
                        <td>Submissions</td>
                        <td>Submit final deliverables: video walkthrough and prototype/analysis link.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="step-card">
                  <h3>📋 Submission Requirements</h3>
                  <p>Make it easy for participants to submit their work:</p>
                  <ul>
                    <li>🎥 A ≤5-minute video walkthrough covering goal, approach, and learnings</li>
                    <li>🔗 A prototype or analysis link</li>
                    <li>💬 Submission via your team's communication platform (Slack, Teams, etc.)</li>
                  </ul>
                </div>
              </section>

              <section id="preparation" className="guide-section">
                <h2>🧠 Preparation</h2>
                <p>
                  Success starts with preparation. Ensure everyone feels confident and equipped 
                  before Builder Day begins.
                </p>

                <div className="prep-grid">
                  <div className="prep-card">
                    <h3>🎓 Training Sessions</h3>
                    <p>Schedule training sessions for key tools 1-2 weeks before the event:</p>
                    <ul>
                      <li>AI design tool training</li>
                      <li>AI code editor workshops</li>
                      <li>Data analysis platform tutorials</li>
                    </ul>
                    <p style={{marginTop: '1rem'}}>
                      <a href="/builder-day-in-a-box/figma-make-training" style={{color: '#4353ff', textDecoration: 'none', fontWeight: 500}}>
                        → View Figma Make Training Guide
                      </a>
                      <br />
                      <a href="/builder-day-in-a-box/figma-make-how-to" style={{color: '#4353ff', textDecoration: 'none', fontWeight: 500}}>
                        → View Figma Make How-To Guide
                      </a>
                      <br />
                      <a href="/builder-day-in-a-box/cursor-training" style={{color: '#4353ff', textDecoration: 'none', fontWeight: 500}}>
                        → View Become 10x with Cursor Guide
                      </a>
                    </p>
                  </div>

                  <div className="prep-card">
                    <h3>📝 Pre-Work</h3>
                    <p>Help participants get ready:</p>
                    <ul>
                      <li>Short warm-up assignments to confirm tool access</li>
                      <li>Idea submission form to collect concepts ahead of time</li>
                      <li>Setup verification checklist</li>
                    </ul>
                  </div>

                  <div className="prep-card">
                    <h3>💬 Support Channels</h3>
                    <p>Create clear support pathways:</p>
                    <ul>
                      <li>Dedicated communication channel for questions</li>
                      <li>Open office hours for setup help</li>
                      <li>Day-of vendor support (if applicable)</li>
                      <li>Resource hub with guides and templates</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="awards" className="guide-section">
                <h2>🏆 Awards & Showcase</h2>
                <p>
                  Close out Builder Day with an all-org celebration recognizing creativity, learning, 
                  and impact. A judging panel announces winners and celebrates standout work.
                </p>

                <div className="step-card">
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
                </div>

                <div className="info-box">
                  <h3>🏅 Prizes & Recognition</h3>
                  <p>
                    Each category winner receives recognition and a prize (consider gift cards, 
                    company swag, or professional development budgets). Winners' projects are 
                    announced during a live ceremony and shared company-wide.
                  </p>
                </div>

                <h3>Categories</h3>
                <div className="categories-grid">
                  <div className="category-card">
                    <h4>Prototype for Learning</h4>
                    <p>For prototypes that show exploration and help clarify or test ideas. Ideal for early or low-fidelity prototypes focused on learning and insight.</p>
                  </div>
                  <div className="category-card">
                    <h4>Interaction Design / Feel</h4>
                    <p>For UX, motion, or usability demos that explore design interactions, flow, or behavior.</p>
                  </div>
                  <div className="category-card">
                    <h4>Workflow / Systems Prototype</h4>
                    <p>For end-to-end or multi-user journeys that demonstrate system thinking or connected experiences.</p>
                  </div>
                  <div className="category-card">
                    <h4>Data, Insight, or Automation</h4>
                    <p>For AI-powered analyses, automations, or data workflows that accelerate learning and decision-making.</p>
                  </div>
                  <div className="category-card">
                    <h4>Creative / Experimental Use of AI</h4>
                    <p>For bold, unexpected, or boundary-pushing uses of AI that inspire new ways of working or creating.</p>
                  </div>
                </div>
              </section>

              <section id="success" className="guide-section">
                <h2>📈 Measuring Success</h2>
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
                <h2>🔗 Resources & Templates</h2>
                <p>Create a resource hub with everything participants need:</p>

                <div className="resource-list">
                  <div className="resource-item">
                    <h4>📘 Setup Guides</h4>
                    <p>Step-by-step instructions for accessing and configuring tools</p>
                  </div>
                  <div className="resource-item">
                    <h4>🎥 Training Recordings</h4>
                    <p>Recorded sessions for those who can't attend live training</p>
                  </div>
                  <div className="resource-item">
                    <h4>📝 Starter Templates</h4>
                    <p>Pre-configured project templates to help teams get started quickly</p>
                  </div>
                  <div className="resource-item">
                    <h4>💡 Idea Bank</h4>
                    <p>Collection of example projects and inspiration</p>
                  </div>
                  <div className="resource-item">
                    <h4>✅ Submission Checklist</h4>
                    <p>Clear list of what to include in final submissions</p>
                  </div>
                  <div className="resource-item">
                    <h4>❓ FAQ</h4>
                    <p>Answers to common questions about tools, process, and expectations</p>
                  </div>
                </div>

                <div className="cta-box">
                  <p><strong>Ready to run your own Builder Day?</strong></p>
                  <p>Use this guide as a starting point and adapt it to your organization's needs.</p>
                  <p className="tagline">Build, experiment, learn—together.</p>
                </div>
              </section>

              <section id="additional-resources" className="guide-section">
                <h2>Additional Resources</h2>
                <p>Deep dive into specific tools and methodologies:</p>

                <div className="categories-grid">
                  <a href="/builder-day-in-a-box/figma-make-training" className="category-card" style={{textDecoration: 'none', display: 'block'}}>
                    <h4>Figma Make Training</h4>
                    <p>Comprehensive guide to Figma Make capabilities, workflows, and best practices for AI-assisted prototyping.</p>
                  </a>
                  <a href="/builder-day-in-a-box/figma-make-how-to" className="category-card" style={{textDecoration: 'none', display: 'block'}}>
                    <h4>Figma Make How-To</h4>
                    <p>Step-by-step setup instructions, prompting guidance, and troubleshooting tips for using Figma Make.</p>
                  </a>
                  <a href="/builder-day-in-a-box/product-artifacts" className="category-card" style={{textDecoration: 'none', display: 'block'}}>
                    <h4>Product Artifacts</h4>
                    <p>Understanding where and when to use different prototype fidelities throughout the feature development process.</p>
                  </a>
                  <a href="/builder-day-in-a-box/building-builder-culture" className="category-card" style={{textDecoration: 'none', display: 'block'}}>
                    <h4>Building a Builder Culture</h4>
                    <p>Collaborative frameworks including Opportunity-Solution Alignment (OSA) and Prototyping 101 for product teams.</p>
                  </a>
                  <a href="/builder-day-in-a-box/cursor-training" className="category-card" style={{textDecoration: 'none', display: 'block'}}>
                    <h4>Become 10x with Cursor</h4>
                    <p>Learn how to use Cursor for AI-assisted development, from idea to working prototype in minutes.</p>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

