"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#choosing-tool', label: '02 Choosing the Right Tool' },
  { href: '#site-builder', label: '03 AI Site Builder' },
  { href: '#app-gen', label: '04 App Gen' },
  { href: '#webflow-cloud', label: '05 Webflow Cloud' },
  { href: '#use-cases', label: '06 Use Cases' },
]

export default function Webflow() {

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Prototyping to production for marketers.</div>
        <h1>Webflow</h1>
        <p className="hero-subtitle">
          Build landing pages, microsites, and full-stack web apps with AI—from concept to production in minutes
        </p>
        <div style={{marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6'}}>
          <strong>For:</strong> Marketing Teams, Product Managers, Designers
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

      {/* Table of Contents */}
      <section style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <TableOfContents items={tocItems} />
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>

            {/* Overview */}
            <section id="overview" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
              <p>
                Webflow offers three powerful ways to go from prototype to production: <strong>Site Builder</strong> for marketing sites, <strong>App Gen</strong> for interactive applications, and <strong>Webflow Cloud</strong> for deploying any Next.js or Astro app you build in tools like Cursor.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem'
              }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '2px solid #4F46E5',
                  borderRadius: '12px'
                }}>
                  <h3 style={{marginTop: 0, color: '#4F46E5'}}>🎨 AI Site Builder</h3>
                  <p style={{fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0}}>
                    Generate complete, customizable marketing sites with AI. Perfect for landing pages, campaign microsites, and SEO-optimized content.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '2px solid #EC4899',
                  borderRadius: '12px'
                }}>
                  <h3 style={{marginTop: 0, color: '#EC4899'}}>⚡ App Gen</h3>
                  <p style={{fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0}}>
                    Build full-stack web apps with interactive features. Ideal for calculators, dashboards, tools, and dynamic experiences.
                  </p>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '2px solid #10B981',
                  borderRadius: '12px'
                }}>
                  <h3 style={{marginTop: 0, color: '#10B981'}}>☁️ Webflow Cloud</h3>
                  <p style={{fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0}}>
                    Deploy any Next.js or Astro app built in Cursor or other IDEs. Serverless hosting on Cloudflare's edge with sub-50ms response times.
                  </p>
                </div>
              </div>
            </section>

            {/* Choosing the Right Tool */}
            <section id="choosing-tool" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Choosing the Right Tool</h2>

              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th style={{width: '20%'}}>Feature</th>
                      <th style={{width: '26.67%'}}>AI Site Builder</th>
                      <th style={{width: '26.67%'}}>App Gen</th>
                      <th style={{width: '26.67%'}}>Webflow Cloud</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Primary Use</strong></td>
                      <td>Marketing sites, landing pages, content</td>
                      <td>Interactive apps, tools, dynamic features</td>
                      <td>Deploy any Next.js/Astro app from Cursor or IDEs</td>
                    </tr>
                    <tr>
                      <td><strong>Building Tool</strong></td>
                      <td>AI prompt + Webflow Designer</td>
                      <td>AI prompt + code editor</td>
                      <td>Your preferred IDE (Cursor, VS Code, etc.)</td>
                    </tr>
                    <tr>
                      <td><strong>Customization</strong></td>
                      <td>Full design system control via Designer</td>
                      <td>Code-level customization + Variables panel</td>
                      <td>Complete code control</td>
                    </tr>
                    <tr>
                      <td><strong>SEO/AEO</strong></td>
                      <td>Built-in optimization</td>
                      <td>Headless optimization</td>
                      <td>Full control over SEO</td>
                    </tr>
                    <tr>
                      <td><strong>Interactivity</strong></td>
                      <td>Basic (forms, animations, CMS)</td>
                      <td>Advanced (logic, state, APIs)</td>
                      <td>Unlimited (any React/Astro code)</td>
                    </tr>
                    <tr>
                      <td><strong>Storage</strong></td>
                      <td>Webflow CMS</td>
                      <td>Webflow CMS + Webflow Cloud storage</td>
                      <td>SQLite, KV Store, Object Storage</td>
                    </tr>
                    <tr>
                      <td><strong>Deployment</strong></td>
                      <td>Webflow hosting</td>
                      <td>Webflow Cloud</td>
                      <td>Webflow Cloud (Cloudflare edge)</td>
                    </tr>
                    <tr>
                      <td><strong>Best When You Need</strong></td>
                      <td>Discoverability, brand presence, content marketing</td>
                      <td>Quick interactive prototypes without local dev</td>
                      <td>Full dev control, custom frameworks, complex apps</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>

            {/* Site Builder */}
            <section id="site-builder" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>AI Site Builder</h2>
              <p>
                Webflow's AI Site Builder generates complete, production-ready websites from a simple text prompt. It's perfect when you need a fully customizable design system, SEO optimization, and the ability to spin up landing pages in minutes.
              </p>

              <h3 style={{marginTop: '2rem'}}>Best For:</h3>
              <ul>
                <li><strong>Landing pages</strong> — Product launches, event registrations, lead capture</li>
                <li><strong>Campaign microsites</strong> — Seasonal campaigns, special promotions, brand activations</li>
                <li><strong>Marketing sites</strong> — Company websites, product marketing pages, content hubs</li>
                <li><strong>SEO-driven content</strong> — Blog sites, resource centers, documentation</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Key Benefits:</h3>
              <ul>
                <li><strong>Fully Customizable Design System</strong> — Complete control over styles, components, and layout. Adjust every detail to match your brand.</li>
                <li><strong>SEO & AEO Optimization</strong> — Built-in SEO best practices and Answer Engine Optimization (AEO) for better discoverability across search and AI tools.</li>
                <li><strong>Speed to Market</strong> — Generate complete sites in minutes. Test concepts quickly without engineering dependencies.</li>
                <li><strong>Visual Editor</strong> — Edit visually in Webflow Designer or use AI prompts to refine. No code required.</li>
              </ul>

              <h3 style={{marginTop: '3rem'}}>How to Build a Site</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{
                    background: '#4F46E5',
                    color: 'white',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>1</div>
                  <div>
                    <h4 style={{margin: '0 0 0.5rem 0'}}>Enter Your Prompt</h4>
                    <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                      Describe what you want to build. Be specific about purpose, audience, and key pages.
                    </p>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{
                    background: '#4F46E5',
                    color: 'white',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>2</div>
                  <div>
                    <h4 style={{margin: '0 0 0.5rem 0'}}>AI Generates Your Site</h4>
                    <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                      Webflow AI creates a complete site with pages, components, and content in minutes.
                    </p>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{
                    background: '#4F46E5',
                    color: 'white',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>3</div>
                  <div>
                    <h4 style={{margin: '0 0 0.5rem 0'}}>Customize in Designer</h4>
                    <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                      Use Webflow's visual editor to refine styles, adjust layout, and add custom interactions.
                    </p>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{
                    background: '#4F46E5',
                    color: 'white',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>4</div>
                  <div>
                    <h4 style={{margin: '0 0 0.5rem 0'}}>Publish & Optimize</h4>
                    <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                      Deploy to Webflow hosting with SEO settings, then iterate based on performance.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: '#fef3c7',
                borderRadius: '12px',
                border: '1px solid #fbbf24'
              }}>
                <h4 style={{marginTop: 0, color: '#92400e'}}>💡 Pro Tip: Iterative Prompting</h4>
                <p style={{marginBottom: 0, color: '#78350f'}}>
                  After the initial generation, use follow-up prompts to refine sections, adjust tone, or add features. The AI learns from each iteration.
                </p>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <p style={{margin: 0}}>
                  <strong>🚀 Get Started:</strong> <a href="https://help.webflow.com/hc/en-us/articles/38840145286035-Build-a-site-with-Webflow-s-AI-site-builder" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Learn more about Site Builder</a>
                </p>
              </div>
            </section>

            {/* App Gen */}
            <section id="app-gen" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>App Gen</h2>
              <p>
                Webflow App Gen generates full-stack web applications with interactive features, CMS integration, and custom logic. Build calculators, dashboards, tools, and dynamic experiences without engineering dependencies.
              </p>

              <h3 style={{marginTop: '2rem'}}>Best For:</h3>
              <ul>
                <li><strong>Interactive tools</strong> — ROI calculators, pricing configurators, product finders</li>
                <li><strong>Dynamic experiences</strong> — Event schedules, portfolio browsers, course catalogs</li>
                <li><strong>Data dashboards</strong> — Analytics views, progress trackers, reporting tools</li>
                <li><strong>Multi-step flows</strong> — Onboarding wizards, lead capture forms, guided experiences</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Current Capabilities:</h3>
              <ul>
                <li><strong>Generation</strong> — Prompt-based app generation using Claude Sonnet 4.5</li>
                <li><strong>CMS Integration</strong> — Connect to Webflow CMS collections for dynamic data</li>
                <li><strong>Code Access</strong> — Full code editor with Navigator, Dev Server, Terminal</li>
                <li><strong>Deployment</strong> — Deploy to Webflow Cloud with custom domains</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>On the Roadmap:</h3>
              <ul>
                <li>Native database support for data storage (<a href="https://developers.webflow.com/webflow-cloud/storing-data/overview" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>only available on Webflow Cloud</a>)</li>
                <li>Built-in authentication capabilities</li>
                <li>Expanded app limits (currently 5 on Starter)</li>
                <li>Component Gen for broader access</li>
                <li>Enhanced AI context understanding</li>
              </ul>

              <h3 style={{marginTop: '3rem'}}>Building Your First App</h3>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem'}}>
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #EC4899'
                }}>
                  <h4 style={{marginTop: 0}}>Step 1: Add Context</h4>
                  <p>Click the <strong>plus button (+)</strong> to add:</p>
                  <ul>
                    <li><strong>CMS collections</strong> for dynamic data</li>
                    <li><strong>Components</strong> from your site for brand consistency</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #EC4899'
                }}>
                  <h4 style={{marginTop: 0}}>Step 2: Write Your Prompt</h4>
                  <div style={{
                    padding: '1.5rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    border: '1px solid #e5e7eb',
                    color: '#1f2937',
                    marginTop: '1rem'
                  }}>
                    <p style={{margin: 0}}>
                      Build an ROI calculator that shows cost savings based on user inputs. Include fields for team size, current cost per user, and our product pricing. Show results with a breakdown chart and call-to-action to schedule a demo. Use our brand colors and navigation component.
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #EC4899'
                }}>
                  <h4 style={{marginTop: 0}}>Step 3: Generate & Preview</h4>
                  <ul>
                    <li>Click the <strong>arrow button</strong> to submit</li>
                    <li>Generation takes a few minutes</li>
                    <li>Preview opens when complete</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #EC4899'
                }}>
                  <h4 style={{marginTop: 0}}>Step 4: Refine & Deploy</h4>
                  <p>Use follow-up prompts to adjust functionality, or edit code directly for precise control. When ready, click <strong>Deploy</strong> to publish.</p>
                </div>
              </div>

              <h3 style={{marginTop: '3rem'}}>Best Practices</h3>
              <ul>
                <li><strong>Start simple</strong> — Build a basic version, then add complexity incrementally</li>
                <li><strong>Be specific</strong> — Clear prompts with concrete examples produce better results</li>
                <li><strong>Test incrementally</strong> — Make one change at a time and preview</li>
                <li><strong>Connect your CMS</strong> — Use real data for more accurate prototypes</li>
                <li><strong>Customize with Variables</strong> — Adjust colors, spacing, typography via the Variables panel</li>
              </ul>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <p style={{margin: 0}}>
                  <strong>🚀 Get Started:</strong> <a href="https://webflow.com/feature/code-gen" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>Sign up for App Gen</a> • <a href="https://help.webflow.com/hc/en-us/articles/46332369065875-Build-full-stack-web-apps-with-Webflow-AI" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>View Documentation</a>
                </p>
              </div>
            </section>

            {/* Webflow Cloud */}
            <section id="webflow-cloud" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Webflow Cloud</h2>
              <p>
                Webflow Cloud is a serverless hosting platform that lets you deploy any Next.js or Astro application—whether you built it in <a href="/cursor" style={{color: 'var(--accent)'}}>Cursor</a>, Claude Code, or another IDE. Deploy prototypes to production on Cloudflare's global edge network with built-in storage and automatic scaling.
              </p>

              <h3 style={{marginTop: '2rem'}}>Why Webflow Cloud for Prototyping?</h3>
              <p>
                When you're prototyping in Cursor or other AI-assisted tools, you need a fast path from code to production. Webflow Cloud removes the infrastructure complexity so you can focus on building and iterating.
              </p>

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '8px'
              }}>
                <h3 style={{marginTop: 0}}>The Complete Workflow</h3>
                <ol style={{marginLeft: '1.5rem', lineHeight: '1.8'}}>
                  <li><strong>Build in Cursor</strong> — Prototype your Next.js or Astro app using AI-assisted development</li>
                  <li><strong>Push to GitHub</strong> — Commit your code and push to your repository</li>
                  <li><strong>Deploy on Webflow Cloud</strong> — Automatic deployments across dev, staging, and production environments</li>
                </ol>
              </div>

              <h3 style={{marginTop: '2rem'}}>What You Get:</h3>
              <ul>
                <li><strong>Edge-Powered Performance</strong> — Global CDN with Cloudflare Workers delivering sub-50ms response times worldwide</li>
                <li><strong>Framework Support</strong> — Native support for Next.js and Astro, with more frameworks coming</li>
                <li><strong>Built-in Storage</strong> — SQLite databases, Key Value Store for caching, and Object Storage for media files—no external services needed</li>
                <li><strong>GitHub Integration</strong> — Automated CI/CD workflows with environment-based deployments</li>
                <li><strong>Zero Infrastructure</strong> — No servers to manage, no scaling concerns—just push your code and go</li>
              </ul>

              <h3 style={{marginTop: '3rem'}}>Getting Started with Webflow Cloud</h3>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem'}}>
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #10B981'
                }}>
                  <h4 style={{marginTop: 0}}>Step 1: Build Locally in Cursor</h4>
                  <ul>
                    <li>Create your Next.js or Astro app using AI-assisted development</li>
                    <li>Add features, test locally, and iterate quickly</li>
                    <li>Use your preferred tools and packages</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #10B981'
                }}>
                  <h4 style={{marginTop: 0}}>Step 2: Push to GitHub</h4>
                  <ul>
                    <li>Initialize a Git repository if you haven't already</li>
                    <li>Commit your code and push to GitHub</li>
                    <li>Webflow Cloud will automatically detect your framework</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #10B981'
                }}>
                  <h4 style={{marginTop: 0}}>Step 3: Connect to Webflow Cloud</h4>
                  <ul>
                    <li>Link your GitHub repository in Webflow</li>
                    <li>Configure build settings (usually auto-detected)</li>
                    <li>Set up environment variables if needed</li>
                  </ul>
                </div>

                <div style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  borderLeft: '4px solid #10B981'
                }}>
                  <h4 style={{marginTop: 0}}>Step 4: Deploy</h4>
                  <ul>
                    <li>Automatic deployments on every push to main branch</li>
                    <li>Preview deployments for pull requests</li>
                    <li>Instant rollback if needed</li>
                  </ul>
                </div>
              </div>

              <h3 style={{marginTop: '3rem'}}>Best Practices</h3>
              <ul>
                <li><strong>Use environment variables</strong> — Keep API keys and secrets secure with environment variables</li>
                <li><strong>Test locally first</strong> — Validate your app works before deploying to production</li>
                <li><strong>Leverage built-in storage</strong> — Use SQLite, KV Store, or Object Storage for data persistence</li>
                <li><strong>Monitor performance</strong> — Take advantage of edge deployment for global performance</li>
                <li><strong>Use preview deployments</strong> — Test changes in isolated environments before merging</li>
              </ul>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                borderRadius: '12px',
                color: 'white'
              }}>
                <p style={{margin: 0, marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 500}}>
                  Ready to deploy your Cursor prototypes?
                </p>
                <a
                  href="https://developers.webflow.com/webflow-cloud/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    textDecoration: 'underline',
                    fontSize: '0.9375rem',
                    display: 'inline-block'
                  }}
                >
                  Explore Webflow Cloud documentation →
                </a>
              </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Use Cases</h2>

              <h3>Site Builder Use Cases</h3>
              <div className="table-container" style={{marginTop: '1.5rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Goal</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Product Launch Pages</strong></td>
                      <td>Drive awareness & conversions</td>
                      <td>Hero section, features, pricing, testimonials, CTAs</td>
                    </tr>
                    <tr>
                      <td><strong>Event Registration</strong></td>
                      <td>Maximize signups</td>
                      <td>Agenda, speakers, venue details, sign-up forms</td>
                    </tr>
                    <tr>
                      <td><strong>Content Hubs</strong></td>
                      <td>SEO & thought leadership</td>
                      <td>Blog, resources, case studies, documentation</td>
                    </tr>
                    <tr>
                      <td><strong>Campaign Microsites</strong></td>
                      <td>Campaign engagement</td>
                      <td>Seasonal promotions, brand activations, partnerships</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{marginTop: '3rem'}}>App Gen Use Cases</h3>
              <div className="table-container" style={{marginTop: '1.5rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Goal</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pricing Calculators</strong></td>
                      <td>Lead generation & qualification</td>
                      <td>ROI calculator, savings estimator, plan selector</td>
                    </tr>
                    <tr>
                      <td><strong>Product Finders</strong></td>
                      <td>Guide users to solutions</td>
                      <td>Quiz-based recommender, comparison tool</td>
                    </tr>
                    <tr>
                      <td><strong>Event Experiences</strong></td>
                      <td>Drive registrations</td>
                      <td>Interactive schedule, speaker directory, favorites</td>
                    </tr>
                    <tr>
                      <td><strong>Location Finders</strong></td>
                      <td>Drive foot traffic</td>
                      <td>Store locator with maps and filtering</td>
                    </tr>
                    <tr>
                      <td><strong>Multi-Step Forms</strong></td>
                      <td>Improve conversions</td>
                      <td>Onboarding wizard, guided lead capture</td>
                    </tr>
                    <tr>
                      <td><strong>Data Dashboards</strong></td>
                      <td>Build trust & authority</td>
                      <td>Industry benchmarks, performance visualizations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{marginTop: '3rem'}}>Webflow Cloud Use Cases</h3>
              <div className="table-container" style={{marginTop: '1.5rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Goal</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Advanced Prototypes</strong></td>
                      <td>Test complex features quickly</td>
                      <td>AI-powered search, real-time collaboration, custom workflows</td>
                    </tr>
                    <tr>
                      <td><strong>Data-Driven Apps</strong></td>
                      <td>Build with persistent storage</td>
                      <td>User dashboards with SQLite, KV-cached APIs, file uploads to Object Storage</td>
                    </tr>
                    <tr>
                      <td><strong>Cursor Experiments</strong></td>
                      <td>Ship code-first prototypes</td>
                      <td>Next.js apps built in Cursor with custom logic and third-party APIs</td>
                    </tr>
                    <tr>
                      <td><strong>Multi-Environment Testing</strong></td>
                      <td>Test across dev/staging/production</td>
                      <td>A/B tests, feature flags, preview deployments for pull requests</td>
                    </tr>
                    <tr>
                      <td><strong>Portfolio Projects</strong></td>
                      <td>Showcase technical work</td>
                      <td>Personal sites, case studies, interactive demos with global edge performance</td>
                    </tr>
                    <tr>
                      <td><strong>Internal Tools</strong></td>
                      <td>Build team productivity apps</td>
                      <td>Admin panels, reporting tools, content management interfaces</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA */}
            <div style={{
              marginTop: '4rem',
              padding: '2rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h2 style={{marginTop: 0, color: 'white'}}>Ready to Build?</h2>
              <p style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>
                Start creating with Webflow's AI-powered tools today
              </p>
              <a
                href="https://webflow.com/feature/ai"
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
                Explore Webflow AI
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
