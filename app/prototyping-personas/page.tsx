"use client"

import TableOfContents from '@/components/TableOfContents'

const tocItems = [
  { href: '#overview', label: '01 Overview' },
  { href: '#product', label: '02 Product Managers' },
  { href: '#design', label: '03 Designers' },
  { href: '#data-science', label: '04 Data Scientists' },
  { href: '#user-research', label: '05 User Researchers' },
  { href: '#analytics-eng', label: '06 Analytics Engineers' },
  { href: '#marketing', label: '07 Marketing' },
  { href: '#getting-started', label: '08 Getting Started' },
]

interface PersonaCardProps {
  role: string
  emoji: string
  color: string
  description: string
  primaryTools: { name: string; use: string }[]
  prototypeTypes: { title: string; description: string; example: string }[]
  skills: string[]
}

function PersonaCard({ role, emoji, color, description, primaryTools, prototypeTypes, skills }: PersonaCardProps) {
  return (
    <div style={{
      marginBottom: '4rem'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: `3px solid ${color}`
      }}>
        <div style={{
          fontSize: '3rem',
          lineHeight: 1
        }}>
          {emoji}
        </div>
        <div>
          <h3 style={{
            margin: 0,
            fontSize: '1.75rem',
            color: color
          }}>
            {role}
          </h3>
          <p style={{
            margin: '0.5rem 0 0 0',
            fontSize: '1rem',
            color: 'var(--text-secondary)'
          }}>
            {description}
          </p>
        </div>
      </div>

      {/* Primary Tools */}
      <div style={{ marginBottom: '3rem' }}>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: color,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Primary Tools
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {primaryTools.map((tool, idx) => (
            <div key={idx}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: color, fontSize: '1.05rem' }}>
                {tool.name}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {tool.use}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prototype Types */}
      <div style={{ marginBottom: '3rem' }}>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: color,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Prototype Types to Practice
        </h4>
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          padding: '1.5rem',
          border: `2px solid ${color}20`
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {prototypeTypes.map((type, idx) => (
              <div key={idx}>
                <div style={{
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: color,
                  fontSize: '1.05rem'
                }}>
                  {type.title}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  lineHeight: '1.5'
                }}>
                  {type.description}
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-tertiary)',
                  fontStyle: 'italic',
                  paddingTop: '0.25rem'
                }}>
                  Example: {type.example}
                </div>
                {idx < prototypeTypes.length - 1 && (
                  <div style={{
                    height: '1px',
                    background: 'var(--border)',
                    marginTop: '1.5rem'
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Developed */}
      <div>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: color,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Skills You'll Develop
        </h4>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          {skills.map((skill, idx) => (
            <span
              key={idx}
              style={{
                background: color,
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PrototypingPersonas() {
  const personas: PersonaCardProps[] = [
    {
      role: 'Product Managers',
      emoji: '🎯',
      color: '#4F46E5',
      description: 'Bridge user needs with technical feasibility through rapid concept validation',
      primaryTools: [
        { name: 'Cursor', use: 'Build interactive prototypes to test user flows and product concepts' },
        { name: 'Figma Make', use: 'Create low-fidelity wireframes and user journey maps' },
        { name: 'Claude / ChatGPT', use: 'Draft PRDs, user stories, and feature specifications' },
        { name: 'Loom', use: 'Record prototype walkthroughs for stakeholder review' }
      ],
      prototypeTypes: [
        {
          title: 'User Flow Prototypes',
          description: 'Interactive clickable prototypes showing end-to-end user journeys',
          example: 'Onboarding flow prototype with conditional logic based on user type'
        },
        {
          title: 'Feature Concept Demos',
          description: 'Quick mock-ups demonstrating new feature ideas with core interactions',
          example: 'Dashboard widget showing AI-powered recommendations with sample data'
        },
        {
          title: 'Data-Driven Dashboards',
          description: 'Prototypes that visualize key metrics and KPIs for decision-making',
          example: 'Analytics dashboard showing user engagement trends with interactive filters'
        },
        {
          title: 'Integration Concepts',
          description: 'Prototypes showing how new features connect with existing systems',
          example: 'API integration demo showing data flow between two platforms'
        }
      ],
      skills: [
        'User story mapping',
        'Flow design',
        'Feature scoping',
        'Stakeholder communication',
        'Technical feasibility assessment'
      ]
    },
    {
      role: 'Designers',
      emoji: '🎨',
      color: '#EC4899',
      description: 'Transform ideas into tangible experiences through visual and interaction design',
      primaryTools: [
        { name: 'Figma Make', use: 'Rapidly prototype UI components and interactions with AI assistance' },
        { name: 'Cursor', use: 'Build high-fidelity prototypes with real interactions and animations' },
        { name: 'Webflow', use: 'Create responsive, production-ready prototypes without code' },
        { name: 'Claude / ChatGPT', use: 'Generate design patterns, copy variations, and component logic' },
        { name: 'Loom', use: 'Share design thinking and walkthrough prototypes with stakeholders' }
      ],
      prototypeTypes: [
        {
          title: 'Interactive UI Components',
          description: 'Detailed prototypes of individual components with all interaction states',
          example: 'Multi-step form with validation, error states, and success animations'
        },
        {
          title: 'Animation & Transition Studies',
          description: 'Prototypes focused on motion design and micro-interactions',
          example: 'Loading states, page transitions, and hover effects for a navigation menu'
        },
        {
          title: 'Responsive Design Prototypes',
          description: 'Multi-device prototypes showing how designs adapt across screen sizes',
          example: 'E-commerce product page optimized for mobile, tablet, and desktop'
        },
        {
          title: 'Design System Components',
          description: 'Reusable component libraries with variants and documentation',
          example: 'Button system with 5 variants, 3 sizes, and all interaction states'
        }
      ],
      skills: [
        'Visual design',
        'Interaction patterns',
        'Component architecture',
        'Responsive design',
        'Accessibility standards'
      ]
    },
    {
      role: 'Data Scientists',
      emoji: '📊',
      color: '#10B981',
      description: 'Validate models and communicate insights through interactive data experiences',
      primaryTools: [
        { name: 'Cursor', use: 'Build data visualization prototypes and ML model interfaces' },
        { name: 'Hex', use: 'Create interactive notebooks with AI-assisted SQL and Python' },
        { name: 'Claude / ChatGPT', use: 'Generate code for data processing, analysis, and visualization' },
        { name: 'Jupyter / Observable', use: 'Prototype data explorations and statistical analyses' },
        { name: 'Loom', use: 'Present insights and explain model behavior to non-technical stakeholders' }
      ],
      prototypeTypes: [
        {
          title: 'ML Model Interfaces',
          description: 'Interactive prototypes that demonstrate how users interact with ML predictions',
          example: 'Recommendation engine UI showing personalized results with confidence scores'
        },
        {
          title: 'Data Visualization Dashboards',
          description: 'Interactive charts and graphs that explore datasets and reveal insights',
          example: 'Customer segmentation dashboard with filtering, drill-down, and clustering views'
        },
        {
          title: 'A/B Test Simulators',
          description: 'Prototypes showing different variations and their predicted outcomes',
          example: 'Pricing experiment simulator with statistical significance calculations'
        },
        {
          title: 'Prediction Playgrounds',
          description: 'Interactive tools where users can adjust inputs and see model outputs',
          example: 'Churn prediction tool where you adjust customer attributes and see risk scores'
        }
      ],
      skills: [
        'Data visualization',
        'Model communication',
        'Statistical storytelling',
        'API design',
        'Performance metrics'
      ]
    },
    {
      role: 'User Researchers',
      emoji: '🔍',
      color: '#F59E0B',
      description: 'Test assumptions and gather feedback through prototype-driven research studies',
      primaryTools: [
        { name: 'Figma Make', use: 'Build research prototypes with varying fidelity levels' },
        { name: 'Cursor', use: 'Create interactive prototypes for usability testing' },
        { name: 'Marvin', use: 'Analyze and synthesize research findings with AI assistance' },
        { name: 'Loom', use: 'Record user testing sessions and create highlight reels' }
      ],
      prototypeTypes: [
        {
          title: 'Usability Test Prototypes',
          description: 'Task-focused prototypes designed to validate specific user behaviors',
          example: 'Checkout flow with intentional friction points to test comprehension'
        },
        {
          title: 'Concept Validation Studies',
          description: 'Low to mid-fidelity prototypes testing new product directions',
          example: 'Three different navigation patterns to test information architecture'
        },
        {
          title: 'Comparative Prototypes',
          description: 'Multiple variations of the same feature for preference testing',
          example: 'A/B prototype showing two different onboarding approaches'
        },
        {
          title: 'Assumption Testing Prototypes',
          description: 'Minimal prototypes designed to validate or invalidate key hypotheses',
          example: 'Landing page testing value proposition messaging with different copy'
        }
      ],
      skills: [
        'Research design',
        'Hypothesis validation',
        'Usability testing',
        'Insight synthesis',
        'Participant facilitation'
      ]
    },
    {
      role: 'Analytics Engineers',
      emoji: '⚙️',
      color: '#8B5CF6',
      description: 'Build data pipelines and tools that make insights accessible and actionable',
      primaryTools: [
        { name: 'Hex', use: 'Create data transformation prototypes and analytics workflows' },
        { name: 'Cursor', use: 'Build internal tools and data visualization interfaces' },
        { name: 'Claude / ChatGPT', use: 'Generate SQL queries, dbt models, and documentation' },
        { name: 'dbt Cloud', use: 'Prototype data transformations and test model logic' },
        { name: 'Loom', use: 'Document data models and explain pipeline architecture to stakeholders' }
      ],
      prototypeTypes: [
        {
          title: 'Data Pipeline Prototypes',
          description: 'Mock data flows showing transformation logic and dependencies',
          example: 'Event tracking pipeline showing raw events → cleaned data → aggregated metrics'
        },
        {
          title: 'Metric Definition Prototypes',
          description: 'Interactive examples showing how metrics are calculated from source data',
          example: 'Revenue metrics dashboard showing calculation logic and data sources'
        },
        {
          title: 'Internal Tool Prototypes',
          description: 'Self-service analytics tools for non-technical team members',
          example: 'Cohort analysis tool where users can define segments and see retention'
        },
        {
          title: 'Data Quality Dashboards',
          description: 'Monitoring prototypes showing data freshness, completeness, and accuracy',
          example: 'Pipeline health dashboard with alerts for missing or anomalous data'
        }
      ],
      skills: [
        'Data modeling',
        'SQL optimization',
        'Pipeline orchestration',
        'Dashboard design',
        'Documentation practices'
      ]
    },
    {
      role: 'Marketing',
      emoji: '📣',
      color: '#EF4444',
      description: 'Create compelling campaign experiences and test messaging strategies',
      primaryTools: [
        { name: 'Webflow', use: 'Build landing pages and campaign microsites' },
        { name: 'Cursor', use: 'Prototype interactive marketing experiences and calculators' },
        { name: 'Claude / ChatGPT', use: 'Generate copy variations, campaign briefs, and content ideas' },
        { name: 'Loom', use: 'Create campaign walkthroughs and get stakeholder feedback on creative concepts' }
      ],
      prototypeTypes: [
        {
          title: 'Landing Page Prototypes',
          description: 'High-converting page designs with clear CTAs and value propositions',
          example: 'Product launch landing page with hero section, features, and sign-up form'
        },
        {
          title: 'Email Campaign Prototypes',
          description: 'Responsive email designs with multiple messaging angles',
          example: 'Drip campaign series with 5 emails testing different benefit messaging'
        },
        {
          title: 'Interactive Experiences',
          description: 'Engaging prototypes that drive user participation',
          example: 'ROI calculator where prospects input their data and see cost savings'
        },
        {
          title: 'Social Media Campaign Assets',
          description: 'Multi-format creative prototypes for social platforms',
          example: 'Carousel ad series with 5 slides showing product use cases'
        }
      ],
      skills: [
        'Conversion optimization',
        'Copy testing',
        'Visual storytelling',
        'Channel strategy',
        'A/B testing methodology'
      ]
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Personalize your toolkit.</div>
        <h1>Builder Personas</h1>
        <p className="hero-subtitle">
          A practical guide to prototyping across different roles — from Product Managers to Marketing.
          Discover which tools fit your function and what types of prototypes you should practice building.
        </p>
      </section>

      {/* Table of Contents */}
      <section style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <TableOfContents items={tocItems} />
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>

            {/* Overview */}
            <section id="overview" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
              <p>
                Prototyping isn't just for designers anymore. In an AI-native organization, everyone can
                build prototypes to test ideas, communicate concepts, and accelerate learning. This guide
                shows how different roles approach prototyping and which tools are best suited for each function.
              </p>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px',
                padding: '2rem',
                margin: '2rem 0'
              }}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Why Role-Specific Prototyping Matters</h3>
                <ul style={{marginBottom: 0}}>
                  <li><strong>Different goals require different artifacts</strong> — A PM validating user flows needs different tools than a data scientist building model interfaces</li>
                  <li><strong>Tools should match your skill level</strong> — Start with what feels natural, then expand your toolkit as you build confidence</li>
                  <li><strong>Context shapes fidelity</strong> — Research prototypes should look different from stakeholder demos</li>
                  <li><strong>Cross-functional collaboration improves</strong> — Understanding how other roles prototype helps teams work better together</li>
                </ul>
              </div>

              <div className="info-box" style={{marginTop: '2rem'}}>
                <h4 style={{marginTop: 0}}>How to Use This Guide</h4>
                <p style={{marginBottom: '0.5rem'}}>
                  Find your role below and explore:
                </p>
                <ul style={{marginBottom: 0}}>
                  <li><strong>Primary Tools</strong> — Recommended software and platforms for your function</li>
                  <li><strong>Prototype Types</strong> — Specific artifacts you should practice creating</li>
                  <li><strong>Skills You'll Develop</strong> — Competencies that prototyping builds over time</li>
                </ul>
              </div>
            </section>

            {/* Product Managers */}
            <section id="product" className="guide-section">
              <PersonaCard {...personas[0]} />
            </section>

            {/* Designers */}
            <section id="design" className="guide-section">
              <PersonaCard {...personas[1]} />
            </section>

            {/* Data Scientists */}
            <section id="data-science" className="guide-section">
              <PersonaCard {...personas[2]} />
            </section>

            {/* User Researchers */}
            <section id="user-research" className="guide-section">
              <PersonaCard {...personas[3]} />
            </section>

            {/* Analytics Engineers */}
            <section id="analytics-eng" className="guide-section">
              <PersonaCard {...personas[4]} />
            </section>

            {/* Marketing */}
            <section id="marketing" className="guide-section">
              <PersonaCard {...personas[5]} />
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>Getting Started</h2>

              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                padding: '2rem',
                marginTop: '2rem'
              }}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Your First Prototype</h3>
                <p>No matter your role, follow these steps to build your first prototype:</p>

                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem'}}>
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <div style={{
                      background: 'var(--accent)',
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
                      <h4 style={{margin: '0 0 0.5rem 0'}}>Pick One Question</h4>
                      <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                        What's the single thing you need to learn? Keep it focused and specific.
                      </p>
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '1rem'}}>
                    <div style={{
                      background: 'var(--accent)',
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
                      <h4 style={{margin: '0 0 0.5rem 0'}}>Choose the Right Tool</h4>
                      <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                        Reference your persona card above. Start with tools that match your comfort level.
                      </p>
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '1rem'}}>
                    <div style={{
                      background: 'var(--accent)',
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
                      <h4 style={{margin: '0 0 0.5rem 0'}}>Build Rough First</h4>
                      <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                        Don't polish. Get the core idea working, then test it. Low fidelity = fast learning.
                      </p>
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '1rem'}}>
                    <div style={{
                      background: 'var(--accent)',
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
                      <h4 style={{margin: '0 0 0.5rem 0'}}>Get Feedback Fast</h4>
                      <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                        Share it with 2-3 people. Ask specific questions. Listen more than you explain.
                      </p>
                    </div>
                  </div>

                  <div style={{display: 'flex', gap: '1rem'}}>
                    <div style={{
                      background: 'var(--accent)',
                      color: 'white',
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>5</div>
                    <div>
                      <h4 style={{margin: '0 0 0.5rem 0'}}>Iterate or Move On</h4>
                      <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                        Did you learn what you needed? Great — decide whether to refine it or start something new.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px'
              }}>
                <h3 style={{marginTop: 0, color: 'var(--accent)'}}>Remember</h3>
                <p style={{fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.6, color: 'var(--text-primary)'}}>
                  Prototyping is a skill that improves with practice. Your first prototype doesn't need to be
                  perfect — it just needs to teach you something.
                </p>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: 0,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  paddingLeft: '1.5rem',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  "The best prototype is the one you actually build."
                </p>
              </div>
            </section>

      </section>
    </>
  )
}
