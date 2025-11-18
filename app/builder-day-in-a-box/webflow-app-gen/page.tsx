"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#purpose', label: '01 Purpose' },
  { href: '#quick-summary', label: '02 Quick Summary' },
  { href: '#what-is-app-gen', label: '03 What is Webflow App Gen' },
  { href: '#when-to-use', label: '04 When to use it vs. other tools' },
  { href: '#capabilities', label: '05 Current Capabilities' },
  { href: '#getting-started', label: '06 Getting Started' },
  { href: '#building-first-app', label: '07 Building Your First App' },
  { href: '#modifying-apps', label: '08 Best Practices & Refining' },
  { href: '#use-cases', label: '09 Marketing Use Cases' },
  { href: '#deployment', label: '10 Deployment & Hosting' },
]

export default function WebflowAppGen() {

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Vibe Marketing</div>
        <h1>Webflow App Gen</h1>
        <p className="hero-subtitle">
          A practical guide to AI-assisted prototyping to build full-stack web apps with AI that integrate with your CMS and design system
        </p>
        <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>
          <strong>For:</strong> Marketing Teams
        </div>
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
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src="https://www.youtube.com/embed/-t-Um5td6Ic"
              title="Webflow App Gen Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center'}}>
            <strong>Video:</strong> Introduction to Webflow App Gen
          </p>
        </div>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="purpose" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Purpose</h2>
              <p>
                Give Marketers a fast, practical on-ramp to Webflow App Gen so they can prototype and launch interactive marketing experiences with AI—while maintaining brand consistency and quality standards.
              </p>
              <div style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <p style={{margin: 0}}>
                  <strong>🚀 Get Started:</strong> <a href="https://webflow.com/feature/code-gen" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Sign up for Webflow App Gen</a>
                </p>
              </div>
            </section>

            <section id="quick-summary" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Quick Summary</h2>
              <p>
                <strong>Webflow App Gen</strong> = prompt-to-production apps with AI that integrate seamlessly with your CMS and design system.
              </p>
              <p>
                Best for creating interactive marketing experiences, conversion tools, and engaging brand moments without engineering dependencies.
              </p>
              <p>
                While in public beta, App Gen is free to use. Build production-grade apps and deploy them directly to Webflow Cloud alongside your website.
              </p>
              
              <h3>Today&apos;s Capabilities</h3>
              <p>Generate full-stack web apps from prompts; connect to CMS collections and components; edit via AI prompts or code directly; customize with design system variables; deploy to Webflow Cloud with custom domains; integrations with external services (Airtable, Firebase, Auth0) for extended functionality.</p>
              
              <h3>On the Roadmap (from Webflow)</h3>
              <ul>
                <li>Native database support for data storage and management</li>
                <li>Built-in authentication capabilities</li>
                <li>Expanded app limits beyond 5 apps on Starter plan</li>
                <li>Component Gen capabilities for open access (currently in private beta)</li>
                <li>Enhanced AI Assistant with improved context understanding</li>
                <li>Workspace transfers and Library sharing for AI-generated sites</li>
              </ul>
            </section>

            <section id="what-is-app-gen" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>What is Webflow App Gen (in our context)?</h2>
              <p>
                An AI-powered app development tool where Marketers can:
              </p>
              <ul>
                <li>Generate full-stack web apps from natural-language prompts</li>
                <li>Connect apps to CMS data and import components for brand consistency</li>
                <li>Iterate via AI prompts or edit code directly for precise control</li>
                <li>Deploy to Webflow Cloud and host on custom domains alongside your site</li>
              </ul>
              <p>
                <strong>&quot;We see AI as empowering marketers to create production-grade interactive experiences without engineering dependencies—staying on-brand and moving fast.&quot;</strong>
              </p>
              
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <h4 style={{marginTop: 0}}>Apps vs. Components</h4>
                <p style={{marginBottom: 0}}>
                  <strong>Web apps</strong> are standalone applications deployed to Webflow Cloud and hosted on your custom domain. <strong>Components</strong> are modular UI elements added directly into pages. Both can be AI-generated, but apps offer more complex functionality and interactivity.
                </p>
              </div>
            </section>

            <section id="when-to-use" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>When to use it vs. other tools</h2>
              <p><strong>Use Webflow App Gen for:</strong></p>
              <ul>
                <li>Interactive marketing experiences and conversion tools</li>
                <li>Campaign microsites with dynamic functionality</li>
                <li>Quick prototyping and launch of customer-facing tools</li>
                <li>Brand experiences that need CMS integration and design system consistency</li>
              </ul>
              <p><strong>Use an IDE (Cursor/Claude Code/etc.) for:</strong></p>
              <ul>
                <li>Complex production applications with custom architecture</li>
                <li>Apps requiring extensive third-party integrations</li>
                <li>Projects with specific security or compliance requirements</li>
                <li>Applications needing advanced database operations or authentication flows</li>
              </ul>
            </section>

            <section id="capabilities" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Current Capabilities (Nov 2025)</h2>
              
              <h3>Generation</h3>
              <ul>
                <li>Prompt-based app generation using Webflow AI Assistant</li>
                <li>Connect to CMS collections for dynamic data</li>
                <li>Import components from your site for consistency</li>
                <li>Claude Sonnet 4.5 model (under the hood)</li>
              </ul>

              <h3>Editing</h3>
              <ul>
                <li><strong>AI prompts:</strong> Continue refining with natural language</li>
                <li><strong>Code editor:</strong> Direct access to app code with Navigator, Dev Server, Terminal</li>
                <li><strong>Design variables:</strong> Customize colors, spacing, typography via Variables panel</li>
                <li><strong>Preview:</strong> Live preview with refresh and open-in-new-tab options</li>
              </ul>

              <h3>Deployment</h3>
              <ul>
                <li><strong>Webflow Cloud:</strong> Deploy apps alongside your site</li>
                <li><strong>Custom domains:</strong> Apps accessible on your domain (e.g., yourdomain.com/app-path)</li>
                <li><strong>Path management:</strong> Customize URL slugs for each app</li>
              </ul>

              <h3>Integrations</h3>
              <ul>
                <li><strong>CMS:</strong> Pull structured content from Webflow CMS</li>
                <li><strong>Components:</strong> Import site components for brand consistency</li>
                <li><strong>External services:</strong> Integrate with Airtable, Firebase, Auth0, and other APIs</li>
              </ul>
            </section>

            <section id="getting-started" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Getting Started</h2>
              
              <h3>Access & Permissions</h3>
              <ul>
                <li>Workspace Owners and Admins can enable/disable Webflow AI</li>
                <li>All site roles except Reviewers can generate apps (Site managers, Designers, Marketers, Content editors)</li>
                <li>For Enterprise: Webflow AI must be enabled in individual Site settings</li>
              </ul>

              <h3>Opening App Gen</h3>
              <p>Click the <strong>"App Gen"</strong> tab in the top navigation bar to enter the App Gen experience.</p>

              <h3>Beta Program</h3>
              <p>App Gen is currently in <strong>public beta</strong>. While in beta, this functionality is free to use. Pricing and availability may change when transitioning out of beta.</p>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <p style={{margin: 0}}>
                  <strong>Note:</strong> Apps deployed to production follow <a href="https://webflow.com/pricing" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow Cloud pricing</a>.
                </p>
              </div>
            </section>

            <section id="building-first-app" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Building Your First App — Example Walkthrough</h2>
              <p>
                Let's walk through building a sample app—a conference schedule browser. This example demonstrates how to connect your app to CMS data and create interactive experiences.
              </p>

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '2px solid var(--border)'
              }}>
                <h3 style={{marginTop: 0}}>Sample Project: 3D Visionaries Conference</h3>
                <p>
                  <strong>Background:</strong> The 3D Visionaries Conference brings together leading industry figures and emerging talent in the 3D and immersive technologies space to exchange ideas, share knowledge, and build networks. It offers speaking sessions, workshops, and an exhibition hall featuring top innovators.
                </p>
              </div>

              <h3 style={{marginTop: '3rem'}}>Step-by-Step Instructions</h3>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem'}}>
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h4 style={{marginTop: 0}}>Step 1: Add Context to Your Prompt</h4>
                  <p>Click the <strong>plus button (+)</strong> to add:</p>
                  <ul>
                    <li>The <strong>"Conference talks" CMS collection</strong></li>
                    <li>The <strong>"Navigation" component</strong></li>
                  </ul>
                  <p style={{marginBottom: 0, fontSize: '0.875rem', color: 'var(--text-secondary)'}}>
                    💡 This connects your app to existing content and design elements
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h4 style={{marginTop: 0}}>Step 2: Enter Your Prompt</h4>
                  <div style={{
                    padding: '1.5rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    border: '1px solid #e5e7eb',
                    color: '#1f2937'
                  }}>
                    <p style={{margin: 0}}>
                      I want you to build an app that lets people browse my conference schedule. There should be a tab for each day of the conference (June 8-10, 2026). On each tab, there should be a column for each of the talk locations (hall a, b, c). The talks are each one hour long, and I want people to be able to see the schedule. They should also be able to favorite a talk and filter the view to only show favorites. Use the events from my Conference Talks collection. Add my nav bar at the top.
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h4 style={{marginTop: 0}}>Step 3: Generate Your App</h4>
                  <ul>
                    <li>Click the <strong>arrow button</strong> in the prompt box to submit</li>
                    <li>Generation can take a few minutes</li>
                    <li>You'll see a live preview once complete</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h4 style={{marginTop: 0}}>Step 4: Preview Your App</h4>
                  <p>When generation is complete:</p>
                  <ul>
                    <li>A <strong>live preview</strong> opens within Webflow</li>
                    <li>Use the <strong>Code/Preview toggle</strong> to switch between views</li>
                    <li>Click <strong>"Refresh"</strong> if changes aren't showing</li>
                    <li>Click <strong>"Open in new tab"</strong> to view in a separate browser window</li>
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: '3rem',
                padding: '1.5rem',
                backgroundColor: '#fef3c7',
                borderRadius: '12px',
                border: '1px solid #fbbf24'
              }}>
                <h4 style={{marginTop: 0, color: '#92400e'}}>💡 Pro Tip: Start Simple</h4>
                <p style={{marginBottom: 0, color: '#78350f'}}>
                  Begin with a basic version of your app and iterate. It's easier to add complexity through follow-up prompts than to debug a complex initial build.
                </p>
              </div>
            </section>

            <section id="modifying-apps" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>Best Practices & Refining Apps</h2>

              <h3 style={{marginTop: '2rem'}}>Start Simple</h3>
              <p>Begin with a basic version of your app and iterate. It's easier to add complexity through follow-up prompts than to debug a complex initial build.</p>

              <h3>Iterate Incrementally</h3>
              <p>Continue prompting the assistant to make changes. The best results come from working iteratively—make one change at a time and test.</p>
              
              <p><strong>Example refinement prompts:</strong></p>
              <ul>
                <li>"Add a search bar to filter talks by speaker name"</li>
                <li>"Change the tab design to be more minimal"</li>
                <li>"Add animation when switching between days"</li>
                <li>"Include speaker bios in a modal when clicking a talk"</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Editing Code Directly</h3>
              <p>For developers or advanced users:</p>
              <ul>
                <li>Click the <strong>"Code"</strong> tab to access the code editor</li>
                <li>Use the <strong>Navigator</strong> (left toolbar) to browse files and folders</li>
                <li>Access <strong>Dev Server, Terminal, and Deployment</strong> tools at the bottom</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Customizing Styles with Variables</h3>
              <ul>
                <li>Click the <strong>"Variables"</strong> button in the left toolbar</li>
                <li>Edit variables to adjust colors, spacing, typography</li>
                <li>Changes apply across the entire app for consistency</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Connect Your CMS and Components</h3>
              <p>Use the plus button (+) to add CMS collections and components to your prompt for brand-consistent, data-driven apps.</p>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <h4 style={{marginTop: 0}}>Note About Custom Code</h4>
                <p style={{marginBottom: 0}}>
                  Webflow Support can't help troubleshoot or validate custom code. If you encounter issues, you can use the Webflow AI Assistant to fix them, work with a developer, or reach out on the <a href="https://forum.webflow.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Webflow Forum</a>.
                </p>
              </div>
            </section>

            <section id="use-cases" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>09</span>Marketing Use Cases</h2>
              <p>
                Here are powerful ways Marketers can use Webflow App Gen:
              </p>

              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Marketing Goal</th>
                      <th>Example Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pricing Calculators</strong></td>
                      <td>Lead generation & qualification</td>
                      <td>ROI calculator, savings estimator, plan selector with real-time pricing</td>
                    </tr>
                    <tr>
                      <td><strong>Product Finders</strong></td>
                      <td>Guide users to the right solution</td>
                      <td>Quiz-based recommendation engine, comparison tool with filtering</td>
                    </tr>
                    <tr>
                      <td><strong>Event Experiences</strong></td>
                      <td>Drive registrations & engagement</td>
                      <td>Interactive schedule, speaker directory, session favorites</td>
                    </tr>
                    <tr>
                      <td><strong>Location Finders</strong></td>
                      <td>Drive foot traffic</td>
                      <td>Store locator with maps, filtering by services, hours, and amenities</td>
                    </tr>
                    <tr>
                      <td><strong>Multi-Step Forms</strong></td>
                      <td>Improve conversion rates</td>
                      <td>Guided onboarding flow, lead capture with progress indicators</td>
                    </tr>
                    <tr>
                      <td><strong>Interactive Data</strong></td>
                      <td>Build trust & authority</td>
                      <td>Industry benchmarks dashboard, performance visualizations</td>
                    </tr>
                    <tr>
                      <td><strong>Portfolio Browsers</strong></td>
                      <td>Showcase work & case studies</td>
                      <td>Filterable project gallery, client testimonials with search</td>
                    </tr>
                    <tr>
                      <td><strong>Course Catalogs</strong></td>
                      <td>Education & lead nurture</td>
                      <td>Browse classes with filtering, registration flows, learning paths</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{marginTop: 0}}>Get Creative: Games & Experiences</h3>
                <p>
                  Don't limit yourself to traditional marketing tools. Build memorable brand experiences:
                </p>
                <ul style={{marginBottom: 0}}>
                  <li>Interactive games that engage visitors</li>
                  <li>Personality quizzes that segment audiences</li>
                  <li>Animated storytelling experiences</li>
                  <li>Virtual product demos and configurators</li>
                </ul>
              </div>
            </section>

            <section id="deployment" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>10</span>Deployment & Hosting</h2>
              
              <h3>How to Deploy</h3>
              <ol style={{lineHeight: '1.8'}}>
                <li>Click the <strong>"Deploy"</strong> button</li>
                <li>Click <strong>"Deploy and publish"</strong></li>
                <li>Wait a few minutes for deployment to complete</li>
              </ol>

              <h3>App URLs</h3>
              <p>Your app will be live on your Webflow staging domain and/or custom domain (e.g., <code style={{padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px'}}>yourdomain.com/app-path</code>).</p>

              <h3>Managing App Paths</h3>
              <p>Change your app's URL slug via App Gen → Apps panel → Settings icon.</p>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <p style={{margin: 0}}>
                  <strong>Note:</strong> Your site auto-publishes when: (1) the site has never been published, (2) the site hasn't been published since the app was created, or (3) you change the app path.
                </p>
              </div>
            </section>

            <div style={{
              marginTop: '4rem',
              padding: '2rem',
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h2 style={{marginTop: 0, color: 'white'}}>Ready to Build?</h2>
              <p style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>
                Start creating production-grade web apps with Webflow App Gen today
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <a 
                  href="https://webflow.com/feature/code-gen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.875rem 2rem',
                    backgroundColor: 'white',
                    color: 'var(--accent)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Sign Up for App Gen
                </a>
                <a 
                  href="https://help.webflow.com/hc/en-us/articles/46332369065875-Build-full-stack-web-apps-with-Webflow-AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.875rem 2rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  View Full Documentation
                </a>
              </div>
            </div>
          </div>

          <TableOfContents items={tocItems} />
        </div>
      </section>
    </>
  )
}

