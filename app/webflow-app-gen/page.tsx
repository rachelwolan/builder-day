"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#site-builder', label: '02 Site Builder' },
  { href: '#app-gen', label: '03 App Gen' },
  { href: '#choosing-tool', label: '04 Choosing the Right Tool' },
  { href: '#site-builder-guide', label: '05 Site Builder Guide' },
  { href: '#app-gen-guide', label: '06 App Gen Guide' },
  { href: '#use-cases', label: '07 Use Cases' },
]

export default function Webflow() {

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Build at the speed of thought</div>
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

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">

            {/* Overview */}
            <section id="overview" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
              <p>
                Webflow offers two powerful AI tools to accelerate your marketing and product efforts: <strong>Site Builder</strong> for landing pages and marketing sites, and <strong>App Gen</strong> for interactive web applications.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem'
              }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '2px solid #4F46E5',
                  borderRadius: '12px'
                }}>
                  <h3 style={{marginTop: 0, color: '#4F46E5'}}>🎨 Site Builder</h3>
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
              </div>
            </section>

            {/* Site Builder */}
            <section id="site-builder" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Site Builder</h2>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>What is Site Builder?</h3>
                <p>
                  Webflow's AI Site Builder generates complete, production-ready websites from a simple text prompt. It's perfect when you need a fully customizable design system, SEO optimization, and the ability to spin up landing pages in minutes.
                </p>
              </div>

              <h3>Best For:</h3>
              <ul>
                <li><strong>Landing pages</strong> — Product launches, event registrations, lead capture</li>
                <li><strong>Campaign microsites</strong> — Seasonal campaigns, special promotions, brand activations</li>
                <li><strong>Marketing sites</strong> — Company websites, product marketing pages, content hubs</li>
                <li><strong>SEO-driven content</strong> — Blog sites, resource centers, documentation</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Key Benefits:</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <strong style={{color: 'var(--accent)'}}>✨ Fully Customizable Design System</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Complete control over styles, components, and layout. Adjust every detail to match your brand.
                  </p>
                </div>

                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <strong style={{color: 'var(--accent)'}}>🔍 SEO & AEO Optimization</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Built-in SEO best practices and Answer Engine Optimization (AEO) for better discoverability across search and AI tools.
                  </p>
                </div>

                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <strong style={{color: 'var(--accent)'}}>⚡ Speed to Market</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Generate complete sites in minutes. Test concepts quickly without engineering dependencies.
                  </p>
                </div>

                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)'
                }}>
                  <strong style={{color: 'var(--accent)'}}>🎨 Visual Editor</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Edit visually in Webflow Designer or use AI prompts to refine. No code required.
                  </p>
                </div>
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
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>App Gen</h2>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>What is App Gen?</h3>
                <p>
                  Webflow App Gen generates full-stack web applications with interactive features, CMS integration, and custom logic. Build calculators, dashboards, tools, and dynamic experiences without engineering dependencies.
                </p>
              </div>

              <h3>Best For:</h3>
              <ul>
                <li><strong>Interactive tools</strong> — ROI calculators, pricing configurators, product finders</li>
                <li><strong>Dynamic experiences</strong> — Event schedules, portfolio browsers, course catalogs</li>
                <li><strong>Data dashboards</strong> — Analytics views, progress trackers, reporting tools</li>
                <li><strong>Multi-step flows</strong> — Onboarding wizards, lead capture forms, guided experiences</li>
              </ul>

              <h3 style={{marginTop: '2rem'}}>Current Capabilities:</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
                <div style={{padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <strong style={{color: 'var(--accent)'}}>Generation</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
                    Prompt-based app generation using Claude Sonnet 4.5
                  </p>
                </div>

                <div style={{padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <strong style={{color: 'var(--accent)'}}>CMS Integration</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
                    Connect to Webflow CMS collections for dynamic data
                  </p>
                </div>

                <div style={{padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <strong style={{color: 'var(--accent)'}}>Code Access</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
                    Full code editor with Navigator, Dev Server, Terminal
                  </p>
                </div>

                <div style={{padding: '1.25rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)'}}>
                  <strong style={{color: 'var(--accent)'}}>Deployment</strong>
                  <p style={{margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
                    Deploy to Webflow Cloud with custom domains
                  </p>
                </div>
              </div>

              <h3 style={{marginTop: '2rem'}}>On the Roadmap:</h3>
              <ul>
                <li>Native database support for data storage</li>
                <li>Built-in authentication capabilities</li>
                <li>Expanded app limits (currently 5 on Starter)</li>
                <li>Component Gen for broader access</li>
                <li>Enhanced AI context understanding</li>
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

            {/* Choosing the Right Tool */}
            <section id="choosing-tool" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>Choosing the Right Tool</h2>

              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th style={{width: '25%'}}>Feature</th>
                      <th style={{width: '37.5%'}}>Site Builder</th>
                      <th style={{width: '37.5%'}}>App Gen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Primary Use</strong></td>
                      <td>Marketing sites, landing pages, content</td>
                      <td>Interactive apps, tools, dynamic features</td>
                    </tr>
                    <tr>
                      <td><strong>Customization</strong></td>
                      <td>Full design system control via Designer</td>
                      <td>Code-level customization + Variables panel</td>
                    </tr>
                    <tr>
                      <td><strong>SEO/AEO</strong></td>
                      <td>✅ Built-in optimization</td>
                      <td>✅ Headless optimization</td>
                    </tr>
                    <tr>
                      <td><strong>Interactivity</strong></td>
                      <td>Basic (forms, animations, CMS)</td>
                      <td>✅ Advanced (logic, state, APIs)</td>
                    </tr>
                    <tr>
                      <td><strong>CMS Integration</strong></td>
                      <td>✅ Native CMS binding</td>
                      <td>✅ Connect to collections</td>
                    </tr>
                    <tr>
                      <td><strong>Code Access</strong></td>
                      <td>Export or embed custom code</td>
                      <td>✅ Full code editor</td>
                    </tr>
                    <tr>
                      <td><strong>Best When You Need</strong></td>
                      <td>Discoverability, brand presence, content marketing</td>
                      <td>Complex logic, user input, data visualization</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px'
              }}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Quick Decision Guide</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div>
                    <h4 style={{color: '#4F46E5', marginBottom: '0.75rem'}}>Choose Site Builder if you need:</h4>
                    <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
                      <li>Landing page for product launch</li>
                      <li>SEO-optimized content hub</li>
                      <li>Campaign microsite</li>
                      <li>Visual editing workflow</li>
                      <li>Multi-page site structure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{color: '#EC4899', marginBottom: '0.75rem'}}>Choose App Gen if you need:</h4>
                    <ul style={{margin: 0, paddingLeft: '1.25rem'}}>
                      <li>ROI calculator or pricing tool</li>
                      <li>Interactive dashboard</li>
                      <li>Event schedule with filtering</li>
                      <li>Multi-step form with logic</li>
                      <li>Custom data visualization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Site Builder Guide */}
            <section id="site-builder-guide" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Site Builder Guide</h2>

              <h3>How to Build a Site</h3>
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
            </section>

            {/* App Gen Guide */}
            <section id="app-gen-guide" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>App Gen Guide</h2>

              <h3>Building Your First App</h3>

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
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Use Cases</h2>

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
