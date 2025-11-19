"use client"

import TableOfContents from '@/components/TableOfContents'
import React from 'react'

export default function AIProductOrgMaturityModel() {
  const tocItems = [
    { href: '#overview', label: 'Overview' },
    { href: '#dimensions', label: 'Core Dimensions' },
    { href: '#maturity-levels', label: 'Maturity Levels' },
    { href: '#dimension-1', label: 'Prototyping & Design Velocity' },
    { href: '#dimension-2', label: 'Data & Insights Automation' },
    { href: '#dimension-3', label: 'Tool Fluency & Infrastructure' },
    { href: '#dimension-4', label: 'Cross-Functional Builder Culture' },
    { href: '#dimension-5', label: 'Learning & Experimentation' },
    { href: '#dimension-6', label: 'Career Ladder' },
    { href: '#dimension-7', label: 'Interviewing' },
    { href: '#assessment', label: 'Assessment Tool' },
    { href: '#roadmap', label: 'Roadmap' },
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Building the builders.</div>
        <h1>AI-native Org Evolution</h1>
        <p className="hero-subtitle">
          Assess and advance your organization's capability to build, experiment, and learn using AI.
        </p>
      </section>

      {/* Maturity Model Matrix Infographic - Full width */}
      <div style={{
        width: '100%',
        margin: '0 0 4rem',
        padding: '0 2rem',
        overflowX: 'auto'
      }}>
        <div style={{
          borderRadius: '12px',
          border: '1px solid var(--border)',
          background: 'var(--bg-primary)'
        }}>
                <div style={{
                  minWidth: '1000px',
                  display: 'grid',
                  gridTemplateColumns: '200px repeat(5, 1fr)',
                  gap: 0
                }}>
                  {/* Header Row */}
                  <div style={{
                    gridColumn: '1 / -1',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #4353ff 0%, #2d3bb3 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: '12px 12px 0 0'
                  }}>
                    <div style={{fontSize: '1.25rem', fontWeight: 600}}>AI-Native Evolution</div>
                    <div style={{fontSize: '0.875rem', opacity: 0.9}}>A framework for AI-native product organizations</div>
                  </div>

                  {/* Dimension Header (empty top-left) */}
                  <div style={{
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    borderRight: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                  }}>
                    Dimension
                  </div>

                  {/* Level Headers */}
                  {[
                    { level: '1', name: 'Initial', subtitle: 'Ad-hoc experimentation' },
                    { level: '2', name: 'Developing', subtitle: 'Early standardization' },
                    { level: '3', name: 'Defined', subtitle: 'Integrated workflows' },
                    { level: '4', name: 'Advanced', subtitle: 'Optimized usage' },
                    { level: '5', name: 'Leading', subtitle: 'Innovation & leadership' }
                  ].map((level, idx) => (
                    <div key={level.level} style={{
                      padding: '1rem',
                      background: `linear-gradient(135deg, ${['#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1'][idx]} 0%, ${['#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5'][idx]} 100%)`,
                      color: idx < 2 ? '#1e3a8a' : 'white',
                      borderRight: idx < 4 ? '1px solid var(--border)' : 'none',
                      borderBottom: '1px solid var(--border)',
                      textAlign: 'center'
                    }}>
                      <div style={{fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.25rem', opacity: 0.8}}>
                        LEVEL {level.level}
                      </div>
                      <div style={{fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem'}}>
                        {level.name}
                      </div>
                      <div style={{fontSize: '0.75rem', opacity: 0.9}}>
                        {level.subtitle}
                      </div>
                    </div>
                  ))}

                  {/* Dimension Rows */}
                  {[
                    {
                      name: 'Prototyping & Design Velocity',
                      icon: '⚡',
                      cells: [
                        'Rare prototypes, weeks to create',
                        'Some AI prototyping, hours possible',
                        'Standard practice, integrated workflows',
                        'High velocity, measurable impact',
                        'Core to development, PM/PD submit PRs'
                      ]
                    },
                    {
                      name: 'Data & Insights Automation',
                      icon: '📊',
                      cells: [
                        'Manual analysis, weeks to insights',
                        'Early AI tools, some automation',
                        'AI integrated, 3-7 day cycles',
                        'High automation, 1-3 day cycles',
                        'AI-native, reusable frameworks'
                      ]
                    },
                    {
                      name: 'Tool Fluency & Infrastructure',
                      icon: '🛠️',
                      cells: [
                        'Ad-hoc usage, no standardization',
                        'Some teams experimenting',
                        'Standardized toolset, regular training',
                        'High proficiency, custom integrations',
                        'Innovation, tool development'
                      ]
                    },
                    {
                      name: 'Cross-Functional Builder Culture',
                      icon: '🤝',
                      cells: [
                        'Teams in silos, limited collaboration',
                        'Some cross-functional projects',
                        'Standard workflows, shared practices',
                        'Deep collaboration, optimized',
                        'Seamless collaboration, innovation'
                      ]
                    },
                    {
                      name: 'Learning & Experimentation',
                      icon: '🧪',
                      cells: [
                        'Limited experimentation, siloed',
                        'Some experimentation, early sharing',
                        'Regular events, systematic learning',
                        'Continuous experimentation, optimized',
                        'Learning-driven innovation'
                      ]
                    },
                    {
                      name: 'Career Ladder',
                      icon: '📈',
                      cells: [
                        'No AI skills in career frameworks',
                        'AI mentioned but not defined',
                        'Clear AI competencies per level',
                        'AI fluency tied to advancement',
                        'AI leadership expected at senior levels'
                      ]
                    },
                    {
                      name: 'Interviewing',
                      icon: '💼',
                      cells: [
                        'No AI-related interview questions',
                        'Basic AI awareness assessed',
                        'AI tool proficiency evaluated',
                        'AI problem-solving emphasized',
                        'AI innovation and leadership assessed'
                      ]
                    }
                  ].map((dimension, dimIdx) => (
                    <React.Fragment key={dimension.name}>
                      {/* Dimension Label */}
                      <div style={{
                        padding: '1rem',
                        background: 'var(--bg-secondary)',
                        borderRight: '1px solid var(--border)',
                        borderBottom: dimIdx < 6 ? '1px solid var(--border)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 600,
                        fontSize: '0.875rem'
                      }}>
                        <span style={{fontSize: '1.25rem'}}>{dimension.icon}</span>
                        <span>{dimension.name}</span>
                      </div>

                      {/* Level Cells */}
                      {dimension.cells.map((cell, cellIdx) => (
                        <div key={cellIdx} style={{
                          padding: '1rem',
                          background: cellIdx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                          borderRight: cellIdx < 4 ? '1px solid var(--border)' : 'none',
                          borderBottom: dimIdx < 6 ? '1px solid var(--border)' : 'none',
                          fontSize: '0.8125rem',
                          lineHeight: '1.5',
                          color: 'var(--text-primary)'
                        }}>
                          {cell}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
        </div>
      </div>

      {/* Table of Contents */}
      <section style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <TableOfContents items={tocItems} />
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>
            <section id="overview" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Overview</h2>
              <p>
                The AI Product Org Maturity Model helps product organizations assess and advance their 
                capability to build, experiment, and learn using AI-powered tools. It measures how 
                effectively teams leverage AI to accelerate product development, from initial concept 
                to validated insights.
              </p>
              <p>
                This maturity model is specifically designed for Product Management, Product Design, 
                Data Science, and User Research teams. Each dimension includes role-specific indicators 
                to help you understand where your organization stands and how to advance.
              </p>
            </section>

            <section id="dimensions" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Core Dimensions</h2>
              <p>
                The AI Product Org Maturity Model assesses five key dimensions that determine an 
                organization&apos;s ability to build AI-native products:
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem'}}>
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, marginBottom: '0.5rem'}}>1. Prototyping & Design Velocity</h3>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    How quickly Product and Design teams can go from idea to interactive prototype
                  </p>
                </div>
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, marginBottom: '0.5rem'}}>2. Data & Insights Automation</h3>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    How effectively Data Science and Research teams use AI to accelerate analysis and discovery
                  </p>
                </div>
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, marginBottom: '0.5rem'}}>3. Tool Fluency & Infrastructure</h3>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    The depth and breadth of AI tool adoption across all product teams
                  </p>
                </div>
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, marginBottom: '0.5rem'}}>4. Cross-Functional Builder Culture</h3>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    How well PM, Design, Data, and Research collaborate using AI tools
                  </p>
                </div>
                <div style={{padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px'}}>
                  <h3 style={{marginTop: 0, marginBottom: '0.5rem'}}>5. Learning & Experimentation</h3>
                  <p style={{margin: 0, color: 'var(--text-secondary)'}}>
                    The organization&apos;s ability to learn from experiments and continuously improve
                  </p>
                </div>
              </div>
            </section>

            <section id="maturity-levels" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Maturity Levels</h2>
              <p>
                All dimensions are assessed across five levels. Your organization may be at different 
                levels across different dimensions—this is normal and helps prioritize improvement efforts.
              </p>
              <div className="table-container" style={{marginTop: '2rem'}}>
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1</strong></td>
                      <td>Initial</td>
                      <td>Ad-hoc, individual experimentation</td>
                    </tr>
                    <tr>
                      <td><strong>2</strong></td>
                      <td>Developing</td>
                      <td>Some teams experimenting, early standardization</td>
                    </tr>
                    <tr>
                      <td><strong>3</strong></td>
                      <td>Defined</td>
                      <td>Standardized practices, integrated workflows</td>
                    </tr>
                    <tr>
                      <td><strong>4</strong></td>
                      <td>Advanced</td>
                      <td>Optimized usage, continuous improvement</td>
                    </tr>
                    <tr>
                      <td><strong>5</strong></td>
                      <td>Leading</td>
                      <td>Innovation and thought leadership</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="dimension-1" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>04</span>Dimension 1: Prototyping & Design Velocity</h2>
              <p>
                <strong>Definition:</strong> The speed and quality with which Product and Design teams 
                can transform ideas into interactive prototypes using AI-powered tools.
              </p>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 1: Initial</h3>
                <p><strong>State:</strong> Prototypes are rare, time-intensive, and primarily created by specialists.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Product Management:</strong></p>
                  <ul>
                    <li>Prototypes are requested from Design/Engineering, not created by PMs</li>
                    <li>No AI tools used for rapid concept exploration</li>
                    <li>Product concepts communicated via documents and static mockups</li>
                  </ul>
                  <p><strong>Product Design:</strong></p>
                  <ul>
                    <li>Prototypes take days or weeks to create</li>
                    <li>Limited use of AI design tools (Figma Make, etc.)</li>
                    <li>High-fidelity prototypes require significant design time</li>
                    <li>Prototypes are polished before sharing</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>&lt;10% of product concepts have prototypes</li>
                  <li>Average prototype creation time: 1-2 weeks</li>
                  <li>Prototypes created only by Design team</li>
                  <li>No AI-assisted prototyping tools in use</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 2: Developing</h3>
                <p><strong>State:</strong> Some teams experimenting with AI prototyping tools, early wins visible.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Product Management:</strong></p>
                  <ul>
                    <li>PMs creating low-fidelity prototypes for concept validation</li>
                    <li>Using AI tools (Cursor, Figma Make) for quick explorations</li>
                    <li>Prototypes used in early discovery conversations</li>
                  </ul>
                  <p><strong>Product Design:</strong></p>
                  <ul>
                    <li>Designers experimenting with Figma Make and AI code assistants</li>
                    <li>Some prototypes created in hours instead of days</li>
                    <li>Mix of low and high-fidelity prototypes based on need</li>
                    <li>AI tools used for initial explorations, then refined manually</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>25-40% of product concepts have prototypes</li>
                  <li>Average prototype creation time: 2-5 days</li>
                  <li>PMs creating 10-20% of prototypes</li>
                  <li>Basic training on AI prototyping tools available</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 3: Defined</h3>
                <p><strong>State:</strong> Prototyping is standard practice, AI tools integrated into workflows.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Product Management:</strong></p>
                  <ul>
                    <li>PMs regularly create low-to-medium fidelity prototypes</li>
                    <li>Prototypes included in standard project kickoff templates</li>
                    <li>AI tools used for opportunity exploration and solution ideation</li>
                    <li>Prototypes shared early in discovery phase</li>
                  </ul>
                  <p><strong>Product Design:</strong></p>
                  <ul>
                    <li>Designers proficient with AI prototyping tools (Figma Make, Cursor)</li>
                    <li>Prototype fidelity matched to phase (discovery = low, design = medium, build = high)</li>
                    <li>AI tools used throughout design process, not just exploration</li>
                    <li>Prototypes updated frequently with daily/weekly iterations</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>60-75% of product concepts have prototypes</li>
                  <li>Average prototype creation time: 4-8 hours for low-fidelity, 1-2 days for medium</li>
                  <li>PMs creating 30-40% of prototypes</li>
                  <li>Quarterly training on prototyping tools and best practices</li>
                  <li>Prototypes integrated into standard project workflows</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 4: Advanced</h3>
                <p><strong>State:</strong> High-velocity prototyping, optimized workflows, measurable impact.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Product Management:</strong></p>
                  <ul>
                    <li>PMs create prototypes for most concepts before formal design work</li>
                    <li>Prototypes used for stakeholder alignment and user validation</li>
                    <li>AI tools used to explore multiple solution directions quickly</li>
                    <li>Prototype-to-decision time measured and optimized</li>
                  </ul>
                  <p><strong>Product Design:</strong></p>
                  <ul>
                    <li>Designers create prototypes in hours, not days</li>
                    <li>AI tools used for rapid iteration and variant exploration</li>
                    <li>Custom workflows and automations for common prototype patterns</li>
                    <li>Prototypes serve as primary communication artifact</li>
                    <li>Design system components integrated into AI-generated prototypes</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>85%+ of product concepts have prototypes</li>
                  <li>Average prototype creation time: 1-4 hours for low-fidelity, 4-8 hours for medium</li>
                  <li>PMs creating 50%+ of initial prototypes</li>
                  <li>Prototype usage tracked and measured</li>
                  <li>Custom templates and workflows for common patterns</li>
                  <li>Prototype-to-value metrics established</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 5: Leading</h3>
                <p><strong>State:</strong> Prototyping is core to product development, continuous innovation.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Product Management:</strong></p>
                  <ul>
                    <li>PMs are prototyping experts, teaching others</li>
                    <li>Prototypes used for all major decisions</li>
                    <li>AI tools used to explore edge cases and complex scenarios</li>
                    <li>Contributing to tool development and best practices</li>
                    <li>PMs submitting pull requests and contributing code directly</li>
                    <li>PMs generating Python notebooks for data analysis and prototyping</li>
                  </ul>
                  <p><strong>Product Design:</strong></p>
                  <ul>
                    <li>Designers pioneering new prototyping techniques</li>
                    <li>AI tools used to create production-quality prototypes</li>
                    <li>Sharing prototyping best practices externally</li>
                    <li>Prototypes often become production code or inform architecture</li>
                    <li>Product Designers submitting pull requests and contributing code</li>
                    <li>Designers generating Python notebooks for analysis and automation</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>95%+ of concepts prototyped before formal design</li>
                  <li>Average prototype creation time: &lt;1 hour for low-fidelity</li>
                  <li>PMs creating 60%+ of initial prototypes</li>
                  <li>PMs and Product Designers submitting pull requests regularly</li>
                  <li>PMs and Product Designers generating Python notebooks for analysis</li>
                  <li>Thought leadership on prototyping (blog posts, talks, tool contributions)</li>
                  <li>Prototypes directly inform or become production features</li>
                </ul>
              </div>
            </section>

            <section id="dimension-2" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>05</span>Dimension 2: Data & Insights Automation</h2>
              <p>
                <strong>Definition:</strong> How effectively Data Science and User Research teams use 
                AI to accelerate analysis, automate synthesis, and generate actionable insights.
              </p>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 1: Initial</h3>
                <p><strong>State:</strong> Manual analysis, limited AI assistance, insights take weeks.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Data Science:</strong></p>
                  <ul>
                    <li>All analysis done manually with traditional tools</li>
                    <li>No AI-assisted data exploration or pattern recognition</li>
                    <li>Reports and dashboards created manually</li>
                    <li>Limited automation in data pipelines</li>
                  </ul>
                  <p><strong>User Research:</strong></p>
                  <ul>
                    <li>Research synthesis done manually</li>
                    <li>Interview transcripts analyzed by hand</li>
                    <li>No AI tools for pattern recognition in qualitative data</li>
                    <li>Insights compiled in documents and presentations</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>Average time from data collection to insights: 2-4 weeks</li>
                  <li>&lt;10% of analysis uses AI tools</li>
                  <li>No automated data synthesis</li>
                  <li>Research reports created manually</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 2: Developing</h3>
                <p><strong>State:</strong> Early experimentation with AI analysis tools, some automation.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Data Science:</strong></p>
                  <ul>
                    <li>Data scientists experimenting with AI code assistants (Cursor) for analysis</li>
                    <li>Some automated data exploration using AI</li>
                    <li>AI used to generate initial hypotheses from data</li>
                    <li>Basic automation in data cleaning and transformation</li>
                  </ul>
                  <p><strong>User Research:</strong></p>
                  <ul>
                    <li>Researchers using AI to transcribe and summarize interviews</li>
                    <li>AI tools used for initial theme identification</li>
                    <li>Some automated synthesis of research findings</li>
                    <li>AI-assisted report generation</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>Average time from data to insights: 1-2 weeks</li>
                  <li>25-40% of analysis uses AI tools</li>
                  <li>Basic AI transcription and summarization in use</li>
                  <li>Initial automation of repetitive analysis tasks</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 3: Defined</h3>
                <p><strong>State:</strong> AI tools integrated into standard analysis workflows.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Data Science:</strong></p>
                  <ul>
                    <li>AI code assistants used for most data analysis work</li>
                    <li>Automated pattern recognition in datasets</li>
                    <li>AI used to generate analysis scripts and visualizations</li>
                    <li>Standard workflows include AI-assisted exploration</li>
                    <li>AI helps identify anomalies and trends</li>
                  </ul>
                  <p><strong>User Research:</strong></p>
                  <ul>
                    <li>AI transcription and summarization standard for all interviews</li>
                    <li>AI tools used for theme extraction and pattern recognition</li>
                    <li>Automated synthesis of research findings across studies</li>
                    <li>AI-assisted report generation with human review</li>
                    <li>Research insights database maintained with AI assistance</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>Average time from data to insights: 3-7 days</li>
                  <li>60-75% of analysis uses AI tools</li>
                  <li>All interviews transcribed and summarized with AI</li>
                  <li>Standard research workflows include AI tools</li>
                  <li>Quarterly training on AI analysis tools</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 4: Advanced</h3>
                <p><strong>State:</strong> High automation, optimized workflows, measurable impact on speed.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Data Science:</strong></p>
                  <ul>
                    <li>AI tools used for advanced analysis and modeling</li>
                    <li>Custom AI workflows for common analysis patterns</li>
                    <li>Automated insight generation and report creation</li>
                    <li>AI used to identify opportunities and anomalies proactively</li>
                    <li>Analysis velocity measured and optimized</li>
                  </ul>
                  <p><strong>User Research:</strong></p>
                  <ul>
                    <li>AI used for real-time research synthesis</li>
                    <li>AI tools identify patterns across multiple research studies</li>
                    <li>Automated research insight extraction and sharing</li>
                    <li>AI-assisted user journey mapping and persona development</li>
                    <li>Research insights automatically integrated into product decisions</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>Average time from data to insights: 1-3 days</li>
                  <li>85%+ of analysis uses AI tools</li>
                  <li>Custom AI workflows for research synthesis</li>
                  <li>Research insights automatically surfaced to product teams</li>
                  <li>Analysis velocity metrics tracked and improved</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 5: Leading</h3>
                <p><strong>State:</strong> AI-native analysis, continuous innovation, thought leadership.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Data Science:</strong></p>
                  <ul>
                    <li>Data scientists pioneering new AI analysis techniques</li>
                    <li>Custom AI models and tools developed internally</li>
                    <li>AI used for predictive insights and proactive recommendations</li>
                    <li>Contributing to AI analysis tool development</li>
                    <li>Sharing best practices externally</li>
                    <li>Building reusable analysis frameworks and libraries used across the org</li>
                    <li>Creating internal tools and platforms that democratize data analysis</li>
                    <li>Contributing to open source AI analysis tools</li>
                  </ul>
                  <p><strong>User Research:</strong></p>
                  <ul>
                    <li>Researchers using AI for advanced qualitative analysis</li>
                    <li>AI-powered research synthesis across multiple data sources</li>
                    <li>Automated insight generation and recommendation systems</li>
                    <li>Thought leadership on AI-assisted research</li>
                    <li>Research insights drive product strategy proactively</li>
                    <li>Building reusable research frameworks and automation pipelines</li>
                    <li>Creating internal tools that enable self-service research analysis</li>
                    <li>Contributing to open source research tools and methodologies</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>Average time from data to insights: &lt;1 day for standard analysis</li>
                  <li>95%+ of analysis uses AI tools</li>
                  <li>Custom AI tools developed for research needs</li>
                  <li>Reusable frameworks and libraries created by Data Science/Research teams</li>
                  <li>Internal tools built that enable other teams to do analysis</li>
                  <li>Thought leadership (blog posts, talks, tool contributions)</li>
                  <li>Research insights automatically inform product roadmap</li>
                  <li>Open source contributions to AI analysis or research tools</li>
                </ul>
              </div>
            </section>

            <section id="dimension-3" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>06</span>Dimension 3: Tool Fluency & Infrastructure</h2>
              <p>
                <strong>Definition:</strong> The depth and breadth of AI tool adoption, proficiency, and 
                infrastructure support across Product, Design, Data, and Research teams.
              </p>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 1: Initial</h3>
                <p><strong>State:</strong> Ad-hoc tool usage, no standardization, limited access.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>&lt;10% of product org uses AI tools regularly</li>
                  <li>No approved tool list</li>
                  <li>No tool budget or procurement process</li>
                  <li>No training programs</li>
                  <li>Tools accessed individually (personal accounts)</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 2: Developing</h3>
                <p><strong>State:</strong> Some teams experimenting, early standardization beginning.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>25-40% adoption in key teams</li>
                  <li>Initial tool evaluation framework</li>
                  <li>Basic training sessions offered (quarterly or ad-hoc)</li>
                  <li>Some tools procured organizationally</li>
                  <li>Tool champions emerging in each discipline</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 3: Defined</h3>
                <p><strong>State:</strong> Standardized toolset, integrated workflows, regular training.</p>
                <p style={{marginTop: '1rem'}}><strong>Product-Specific Tools:</strong></p>
                <ul>
                  <li>AI code editors (Cursor) for prototyping</li>
                  <li>AI design tools (Figma Make) for rapid design</li>
                  <li>AI analysis platforms for data insights</li>
                </ul>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>60-75% adoption across product org</li>
                  <li>Standardized tool stack per discipline</li>
                  <li>Quarterly training cadence</li>
                  <li>Tools in standard project kickoff templates</li>
                  <li>Tool usage metrics tracked</li>
                  <li>New team members onboarded to tools</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 4: Advanced</h3>
                <p><strong>State:</strong> High proficiency, custom integrations, optimized usage.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>85%+ adoption with high proficiency</li>
                  <li>Custom workflows and automations</li>
                  <li>Tool ROI measured and reported</li>
                  <li>Internal tool communities and knowledge sharing</li>
                  <li>Advanced training and certification programs</li>
                  <li>Tools integrated with core product infrastructure</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 5: Leading</h3>
                <p><strong>State:</strong> Innovation, thought leadership, tool development.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>95%+ adoption with expert-level proficiency</li>
                  <li>Tool partnerships and co-development</li>
                  <li>Industry speaking/thought leadership</li>
                  <li>Internal tool development projects</li>
                  <li>Open source contributions or tool improvements</li>
                  <li>Tool usage drives competitive advantage</li>
                </ul>
              </div>
            </section>

            <section id="dimension-4" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>07</span>Dimension 4: Cross-Functional Builder Culture</h2>
              <p>
                <strong>Definition:</strong> How effectively Product Management, Design, Data Science, 
                and User Research collaborate using AI tools to build, experiment, and learn together.
              </p>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 1: Initial</h3>
                <p><strong>State:</strong> Teams work in silos, limited collaboration, no shared AI practices.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>Teams use different tools and processes</li>
                  <li>Collaboration happens through formal handoffs</li>
                  <li>No shared AI tool knowledge or practices</li>
                  <li>Limited cross-functional prototyping or analysis</li>
                  <li>Silos between PM, Design, Data, Research</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 2: Developing</h3>
                <p><strong>State:</strong> Some cross-functional collaboration, early shared practices.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>25-40% of projects involve cross-functional AI tool usage</li>
                  <li>Some shared tool training sessions</li>
                  <li>Informal communities forming around AI tools</li>
                  <li>PM-Design or Data-Research collaboration increasing</li>
                  <li>Early examples of cross-functional prototypes</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 3: Defined</h3>
                <p><strong>State:</strong> Standard cross-functional workflows, shared practices, regular collaboration.</p>
                <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px'}}>
                  <p style={{marginTop: 0}}><strong>Product-Design Collaboration:</strong></p>
                  <ul>
                    <li>PMs and Designers co-creating prototypes</li>
                    <li>Shared understanding of prototyping tools and practices</li>
                    <li>Joint exploration of product concepts</li>
                  </ul>
                  <p><strong>Data-Research Collaboration:</strong></p>
                  <ul>
                    <li>Data Scientists and Researchers using AI tools together</li>
                    <li>Shared analysis workflows and insights</li>
                    <li>Collaborative research synthesis</li>
                  </ul>
                  <p><strong>Cross-Discipline Collaboration:</strong></p>
                  <ul>
                    <li>PM-Data collaboration on insights and analysis</li>
                    <li>Design-Research collaboration on user understanding</li>
                    <li>All disciplines contributing to product decisions using AI tools</li>
                  </ul>
                </div>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>60-75% of projects involve cross-functional AI collaboration</li>
                  <li>Standard cross-functional workflows established</li>
                  <li>Quarterly cross-functional training sessions</li>
                  <li>Shared tool documentation and best practices</li>
                  <li>Cross-functional AI tool communities active</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 4: Advanced</h3>
                <p><strong>State:</strong> Deep collaboration, optimized workflows, measurable impact.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>85%+ of projects involve cross-functional AI collaboration</li>
                  <li>Custom workflows for cross-functional patterns</li>
                  <li>Collaboration metrics tracked and improved</li>
                  <li>Cross-functional AI tool expertise across all teams</li>
                  <li>Collaboration drives measurable product outcomes</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 5: Leading</h3>
                <p><strong>State:</strong> Seamless collaboration, innovation, thought leadership.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>95%+ of projects involve cross-functional AI collaboration</li>
                  <li>Thought leadership on cross-functional AI collaboration</li>
                  <li>Custom tools developed for cross-functional needs</li>
                  <li>Collaboration practices shared externally</li>
                  <li>Cross-functional AI usage drives innovation</li>
                </ul>
              </div>
            </section>

            <section id="dimension-5" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>08</span>Dimension 5: Learning & Experimentation</h2>
              <p>
                <strong>Definition:</strong> The organization&apos;s ability to learn from experiments, 
                share knowledge, and continuously improve AI-native practices.
              </p>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 1: Initial</h3>
                <p><strong>State:</strong> Limited experimentation, knowledge siloed, no systematic learning.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>&lt;10% of teams regularly experiment with AI tools</li>
                  <li>No systematic capture of learnings</li>
                  <li>Limited knowledge sharing about AI tools</li>
                  <li>No experimentation framework or process</li>
                  <li>Learnings not applied to future work</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 2: Developing</h3>
                <p><strong>State:</strong> Some experimentation, early knowledge sharing, basic learning processes.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>25-40% of teams regularly experiment</li>
                  <li>Informal knowledge sharing (Slack, ad-hoc sessions)</li>
                  <li>Basic experimentation frameworks (Builder Day, hackathons)</li>
                  <li>Some documentation of learnings</li>
                  <li>Early communities and champions emerging</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 3: Defined</h3>
                <p><strong>State:</strong> Regular experimentation, systematic learning, knowledge sharing processes.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>60-75% of teams regularly experiment</li>
                  <li>Quarterly experimentation events (e.g., Builder Day)</li>
                  <li>Systematic knowledge sharing (documentation, forums, sessions)</li>
                  <li>Best practices documented and accessible</li>
                  <li>Regular learning reviews and retrospectives</li>
                  <li>Active communities around AI tools</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 4: Advanced</h3>
                <p><strong>State:</strong> Continuous experimentation, optimized learning, measurable improvement.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>85%+ of teams continuously experiment</li>
                  <li>Experimentation integrated into standard workflows</li>
                  <li>Learning metrics tracked and improved</li>
                  <li>Knowledge sharing optimized and automated where possible</li>
                  <li>Learnings drive measurable improvements in practices</li>
                  <li>Innovation cycles accelerated</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Level 5: Leading</h3>
                <p><strong>State:</strong> Learning-driven innovation, thought leadership, external sharing.</p>
                <p style={{marginTop: '1rem'}}><strong>Indicators:</strong></p>
                <ul>
                  <li>95%+ of teams continuously experiment and innovate</li>
                  <li>Thought leadership on AI-native learning practices</li>
                  <li>External sharing of learnings and best practices</li>
                  <li>Learning culture recognized externally</li>
                  <li>Experimentation drives measurable competitive advantage</li>
                  <li>Innovation cycles fastest in industry</li>
                </ul>
              </div>
            </section>

            <section id="assessment" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>09</span>Assessment Tool</h2>
              <p>
                Use this assessment to identify your organization&apos;s current maturity level across 
                each dimension. Your organization may be at different levels across dimensions—this 
                is normal and helps prioritize improvement efforts.
              </p>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '8px'
              }}>
                <h3 style={{marginTop: 0}}>How to Use This Assessment</h3>
                <ol>
                  <li><strong>Assess Each Dimension Independently</strong> - Your organization may be at different levels across dimensions</li>
                  <li><strong>Involve Multiple Perspectives</strong> - Get input from PM, Design, Data, and Research teams</li>
                  <li><strong>Be Honest</strong> - The goal is to identify where you are, not where you want to be</li>
                  <li><strong>Focus on Evidence</strong> - Use the indicators to guide your assessment, not just opinions</li>
                </ol>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Scoring Your Assessment</h3>
                <ol>
                  <li><strong>For each dimension</strong>, identify the highest level where you answer &quot;Yes&quot; to all questions</li>
                  <li><strong>Your maturity level</strong> for that dimension is the highest level you fully meet</li>
                  <li><strong>If you meet some criteria</strong> for a higher level but not all, note it as &quot;approaching&quot; that level</li>
                  <li><strong>Create a maturity profile</strong> showing your level across all five dimensions</li>
                </ol>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Interpreting Your Results</h3>
                <p><strong>Uneven Maturity is Normal:</strong> Most organizations will be at different levels across dimensions. This is expected and helps prioritize where to focus improvement efforts.</p>
                
                <div style={{marginTop: '1.5rem'}}>
                  <p><strong>Focus Areas:</strong></p>
                  <ul>
                    <li><strong>If Level 1-2 across most dimensions:</strong> Focus on foundational tool adoption and training</li>
                    <li><strong>If Level 2-3 across most dimensions:</strong> Focus on standardization and workflow integration</li>
                    <li><strong>If Level 3-4 across most dimensions:</strong> Focus on optimization and advanced use cases</li>
                    <li><strong>If Level 4-5 across most dimensions:</strong> Focus on innovation and thought leadership</li>
                  </ul>
                </div>

                <div style={{marginTop: '1.5rem'}}>
                  <p><strong>Quick Wins:</strong></p>
                  <ul>
                    <li>Identify dimensions where you&apos;re close to the next level (e.g., Level 2 approaching Level 3)</li>
                    <li>These are good candidates for focused improvement efforts</li>
                    <li>Small investments can yield significant progress</li>
                  </ul>
                </div>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>Self-Assessment Questions</h3>
                <p>
                  For each dimension, review the indicators in the dimension sections above and assess 
                  which level best describes your organization. Use the detailed level descriptions to 
                  guide your assessment.
                </p>
                <p style={{marginTop: '1rem'}}>
                  <strong>Note:</strong> A full checklist of assessment questions for each dimension and 
                  level is available in the detailed maturity model documentation. Use the dimension 
                  sections above as your primary assessment guide.
                </p>
              </div>
            </section>

            <section id="roadmap" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>10</span>Roadmap: Advancing Your Maturity</h2>
              <p>
                Use this roadmap to identify specific actions you can take to advance from your current 
                level to the next level in each dimension.
              </p>

              <div style={{marginTop: '3rem'}}>
                <h3>From Level 1 to Level 2</h3>
                <p><strong>Key Focus:</strong> Start experimenting, build early wins</p>
                <ul>
                  <li><strong>Prototyping & Design Velocity:</strong> Introduce AI prototyping tools (Figma Make, Cursor) to one product team. Run pilot training session for PMs and Designers. Set goal: Create 3-5 prototypes using AI tools in next quarter.</li>
                  <li><strong>Data & Insights Automation:</strong> Pilot AI transcription tools for user research interviews. Experiment with AI code assistants (Cursor) for data analysis. Set goal: Use AI tools for 25% of analysis work in next quarter.</li>
                  <li><strong>Tool Fluency & Infrastructure:</strong> Identify tool champions in each discipline. Establish basic tool evaluation process. Procure organizational licenses for 2-3 key tools.</li>
                  <li><strong>Cross-Functional Builder Culture:</strong> Run one cross-functional workshop on AI tools. Create shared Slack channel for AI tool discussions. Set goal: One cross-functional project using AI tools.</li>
                  <li><strong>Learning & Experimentation:</strong> Plan first Builder Day or hackathon event. Create basic documentation template for learnings. Set goal: Capture learnings from 3-5 experiments.</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>From Level 2 to Level 3</h3>
                <p><strong>Key Focus:</strong> Standardize practices, integrate workflows</p>
                <ul>
                  <li><strong>Prototyping & Design Velocity:</strong> Establish standard prototyping tool stack. Integrate prototypes into project kickoff templates. Set quarterly training cadence. Set goal: 60% of concepts have prototypes, PMs create 30%.</li>
                  <li><strong>Data & Insights Automation:</strong> Standardize AI tools for all interviews and analysis. Create standard workflows for AI-assisted analysis. Set goal: 60% of analysis uses AI tools, 3-7 day insight cycle.</li>
                  <li><strong>Tool Fluency & Infrastructure:</strong> Finalize approved tool stack per discipline. Establish quarterly training program. Create tool documentation and best practices. Set goal: 60% adoption across product org.</li>
                  <li><strong>Cross-Functional Builder Culture:</strong> Establish standard cross-functional workflows. Create shared tool documentation. Set quarterly cross-functional training. Set goal: 60% of projects involve cross-functional AI collaboration.</li>
                  <li><strong>Learning & Experimentation:</strong> Establish quarterly Builder Day events. Create systematic knowledge sharing process. Document best practices. Set goal: 60% of teams regularly experiment.</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>From Level 3 to Level 4</h3>
                <p><strong>Key Focus:</strong> Optimize usage, measure impact</p>
                <ul>
                  <li><strong>Prototyping & Design Velocity:</strong> Create custom templates and workflows. Measure prototype-to-decision time. Optimize based on metrics. Set goal: 85% of concepts prototyped, 1-4 hour creation time.</li>
                  <li><strong>Data & Insights Automation:</strong> Create custom AI workflows for common patterns. Automate insight surfacing to product teams. Measure analysis velocity. Set goal: 85% of analysis uses AI, 1-3 day insight cycle.</li>
                  <li><strong>Tool Fluency & Infrastructure:</strong> Measure and optimize tool ROI. Create custom integrations and workflows. Build internal tool communities. Set goal: 85% adoption with high proficiency.</li>
                  <li><strong>Cross-Functional Builder Culture:</strong> Optimize collaboration workflows. Measure collaboration impact on outcomes. Create custom tools for cross-functional work. Set goal: 85% of projects involve cross-functional collaboration.</li>
                  <li><strong>Learning & Experimentation:</strong> Integrate experimentation into standard workflows. Measure learning metrics. Optimize knowledge sharing. Set goal: 85% of teams continuously experiment.</li>
                </ul>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h3>From Level 4 to Level 5</h3>
                <p><strong>Key Focus:</strong> Innovate, lead, share externally</p>
                <ul>
                  <li><strong>Prototyping & Design Velocity:</strong> Enable PMs and Product Designers to submit pull requests. Train PMs and Product Designers to generate Python notebooks. Create frameworks and templates for code contributions from non-engineering roles. Set goal: PMs and Product Designers contributing code regularly.</li>
                  <li><strong>Data & Insights Automation:</strong> Build reusable analysis frameworks and libraries. Create internal tools that democratize data analysis. Enable self-service research analysis tools. Contribute to open source AI analysis or research tools. Set goal: Internal tools used by other teams, open source contributions.</li>
                  <li><strong>All Dimensions:</strong> Pioneer new use cases and techniques. Contribute to tool development. Share best practices externally (blog posts, talks). Build thought leadership. Set goal: Industry recognition, competitive advantage.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

