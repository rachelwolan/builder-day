import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#what-is-prototype', label: '02 What is a Prototype?' },
  { href: '#why-prototype', label: '03 Why Prototype?' },
  { href: '#right-artifact', label: '04 Creating the Right Artifact' },
  { href: '#tools-approach', label: '05 Tools and Approach by Fidelity' },
  { href: '#fidelity-guide', label: '06 Fidelity Guide' },
]

export default function Prototyping101() {

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Crafted for creators.</div>
        <h1>Prototyping 101</h1>
        <p className="hero-subtitle">
          A practical guide to choosing the right prototype fidelity for your objectives 
          and creating artifacts that enable faster learning and better decision-making
        </p>
        <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>
          Written By: Kev Wong, VP, Product and Content Design @ <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow</a><br />
          Last Updated: November, 2025
        </div>
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
                  <source src="/building-collaborative-builder-culture-part1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center'}}>
                <strong>Video:</strong> Building a Collaborative Builder Culture<br />
                <strong>Featuring:</strong> Kev Wong, VP, Product and Content Design at <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow</a>
              </p>
            </div>
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
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>What is a Prototype?</h2>
              <p>
                A prototype is a quick, simplified version of a product or idea. It helps you 
                test how something works or feels before building the real thing. Prototypes can 
                range from simple sketches and wireframes to fully interactive experiences, depending 
                on what you need to learn and communicate.
              </p>
            </section>

            <section id="why-prototype" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Why Prototype?</h2>
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
            </section>

            <section id="right-artifact" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>Creating the Right Artifact</h2>
              <p>
                Prototypes are a form of communication artifact with different fidelities of detail. 
                That detail determines what your collaborator will focus on. Pick the fidelity based 
                on what you need to learn.
              </p>
              <p><strong>Pick the Fidelity Based on What You Need to Learn:</strong></p>
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
            </section>

            <section id="tools-approach" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Tools and Approach by Prototype Fidelity</h2>
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
            </section>

            <section id="fidelity-guide" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Fidelity Guide</h2>
              <p>
                Here&apos;s a breakdown of different prototype fidelities and their ideal use cases:
              </p>
              
              <h3>Low to Medium Fidelity</h3>
              <p><strong>Best for:</strong> Discovery & Exploration</p>
              <ul>
                <li>Sketches and wireframes</li>
                <li>Quick flow exploration</li>
                <li>Early concept validation</li>
                <li>Team alignment on direction</li>
              </ul>
              <p><strong>Tools:</strong> Figma wireframes, sketches, simple mockups</p>

              <h3>Medium to High Fidelity</h3>
              <p><strong>Best for:</strong> Design Phase</p>
              <ul>
                <li>Interactive flows</li>
                <li>Critical feature UX</li>
                <li>Design system integration</li>
                <li>Frequent iteration and feedback</li>
              </ul>
              <p><strong>Tools:</strong> Figma Make, Figma prototypes, interactive demos</p>

              <h3>High Fidelity</h3>
              <p><strong>Best for:</strong> Build Phase</p>
              <ul>
                <li>Fully interactive experiences</li>
                <li>Edge case handling</li>
                <li>User testing</li>
                <li>Engineering handoff</li>
              </ul>
              <p><strong>Tools:</strong> Figma Make, code prototypes, production-like experiences</p>

              <p style={{marginTop: '2rem'}}>
                <strong>💡 Key Takeaway:</strong> The right fidelity at the right time saves time and improves outcomes. Start with 
                low fidelity to explore broadly, then increase fidelity as you narrow in on specific 
                solutions and need to communicate details to stakeholders and engineering teams.
              </p>
            </section>
          </div>

          <TableOfContents items={tocItems} />
        </div>
      </section>
    </>
  )
}
