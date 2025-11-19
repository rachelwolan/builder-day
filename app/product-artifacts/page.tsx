import Link from 'next/link'

export default function ProductArtifacts() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-tagline">Crafted for creators.</div>
          <h1>Product Artifacts</h1>
          <p className="hero-subtitle">
            Understanding where and when to use different artifacts throughout 
            the feature development process
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
                <source src="/builder-day/building-collaborative-builder-culture.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p style={{fontSize: '0.875rem', color: '#6b7280', textAlign: 'center'}}>
              <strong>Video:</strong> Building a Collaborative Builder Culture<br />
              <strong>Featuring:</strong> Melanie Richards (Group Product Manager at Webflow) and Kev Wong (VP, Product and Content Design at Webflow)
            </p>
          </div>

          <div className="guide-content">
            <nav className="table-of-contents">
              <div style={{marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb'}}>
                <Link href="/" style={{color: '#4353ff', textDecoration: 'none', fontWeight: 500, fontSize: '0.9375rem'}}>
                  ← Back to Builder Day in a Box
                </Link>
              </div>
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#what-is-prototype">What is a Prototype?</a></li>
                <li><a href="#why-prototype">Why Prototype?</a></li>
                <li><a href="#creating-artifact">Creating the Right Artifact</a></li>
                <li><a href="#tools-approach">Tools and Approach by Fidelity</a></li>
                <li><a href="#fidelity-guide">Fidelity Guide</a></li>
              </ul>
            </nav>

            <div className="guide-body">
              <section id="overview" className="guide-section">
                <h2>Overview</h2>
                <p>
                  Prototypes serve as invaluable tools throughout the feature development process, 
                  enabling quicker and more informed decision-making. Understanding the impact of 
                  the fidelity on your objectives and target audience is essential.
                </p>
                <p>
                  This guide outlines best practices to help you plan your next design project and 
                  choose the right artifact at the right time.
                </p>
              </section>

              <section id="what-is-prototype" className="guide-section">
                <h2>What is a Prototype?</h2>
                <p>
                  A prototype is a quick, simplified version of a product or idea. It helps you 
                  test how something works or feels before building the real thing.
                </p>
                <p>
                  Prototypes can range from simple sketches and wireframes to fully interactive 
                  experiences, depending on what you need to learn and communicate.
                </p>
              </section>

              <section id="why-prototype" className="guide-section">
                <h2>Why Prototype?</h2>
                <p>
                  Prototyping helps you learn fast. It shows what works and what doesn't early on, 
                  so you can:
                </p>
                <ul>
                  <li>Make better decisions with real feedback</li>
                  <li>Avoid wasted effort by catching issues early</li>
                  <li>Build with more confidence knowing your direction is validated</li>
                  <li>Communicate ideas more effectively to stakeholders and team members</li>
                </ul>
              </section>

              <section id="creating-artifact" className="guide-section">
                <h2>Creating the Right Artifact</h2>
                <p>
                  Prototypes are a form of communication artifact with different fidelities of detail. 
                  That detail determines what your collaborator will focus on.
                </p>
                <div className="track-card">
                  <h3>Pick the Fidelity Based on What You Need to Learn</h3>
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
                      <strong>Start simple, level up as needed</strong> — don't over-invest in fidelity 
                      until you know what you're building
                    </li>
                  </ul>
                </div>
              </section>

              <section id="tools-approach" className="guide-section">
                <h2>Tools and Approach by Prototype Fidelity</h2>
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
                <h2>Fidelity Guide</h2>
                
                <div className="prep-grid">
                  <div className="prep-card">
                    <h3>Low to Medium Fidelity</h3>
                    <p><strong>Best for:</strong> Discovery & Exploration</p>
                    <ul>
                      <li>Sketches and wireframes</li>
                      <li>Quick flow exploration</li>
                      <li>Early concept validation</li>
                      <li>Team alignment on direction</li>
                    </ul>
                    <p><strong>Tools:</strong> Figma wireframes, sketches, simple mockups</p>
                  </div>

                  <div className="prep-card">
                    <h3>Medium to High Fidelity</h3>
                    <p><strong>Best for:</strong> Design Phase</p>
                    <ul>
                      <li>Interactive flows</li>
                      <li>Critical feature UX</li>
                      <li>Design system integration</li>
                      <li>Frequent iteration and feedback</li>
                    </ul>
                    <p><strong>Tools:</strong> Figma Make, Figma prototypes, interactive demos</p>
                  </div>

                  <div className="prep-card">
                    <h3>High Fidelity</h3>
                    <p><strong>Best for:</strong> Build Phase</p>
                    <ul>
                      <li>Fully interactive experiences</li>
                      <li>Edge case handling</li>
                      <li>User testing</li>
                      <li>Engineering handoff</li>
                    </ul>
                    <p><strong>Tools:</strong> Figma Make, code prototypes, production-like experiences</p>
                  </div>
                </div>

                <div className="info-box" style={{marginTop: '2rem'}}>
                  <h3>💡 Key Takeaway</h3>
                  <p>
                    The right fidelity at the right time saves time and improves outcomes. Start with 
                    low fidelity to explore broadly, then increase fidelity as you narrow in on specific 
                    solutions and need to communicate details to stakeholders and engineering teams.
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

