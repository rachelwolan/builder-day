"use client"

export default function PrototypeGallery() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Showcasing what&apos;s possible.</div>
        <h1>Prototype Gallery</h1>
        <p className="hero-subtitle">
          A collection of prototypes created by the Webflow Product org during Builder Day.
          See what teams built using Figma Make, Cursor, and Webflow.
        </p>
        <div style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          background: 'var(--accent-light)',
          border: '1px solid var(--accent)',
          borderRadius: '8px',
          display: 'inline-block',
          fontSize: '0.9375rem',
          fontWeight: 500,
          color: 'var(--accent)'
        }}>
          🚧 Coming Soon – More prototypes being added
        </div>
      </section>

      <section className="section" style={{maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem'}}>
        <div className="guide-content">
          <div style={{width: '100%'}}>

            <section id="figma-make" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>01</span>Figma Make</h2>
              <p style={{marginBottom: '2rem'}}>
                Prototypes created with Figma Make – AI-powered design to prototype tool.
              </p>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.2s'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{flex: 1, minWidth: '300px'}}>
                    <h3 style={{marginTop: 0, marginBottom: '1rem', color: 'var(--text-primary)'}}>
                      Featured Prototype
                    </h3>
                    <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>
                      Explore this interactive prototype built with Figma Make during Builder Day.
                    </p>
                    <a
                      href="https://resin-fade-24677841.figma.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'var(--accent)',
                        color: 'white',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-hover)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--accent)'
                      }}
                    >
                      View Prototype →
                    </a>
                  </div>
                  <div style={{
                    width: '200px',
                    height: '200px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem'
                  }}>
                    🎨
                  </div>
                </div>
              </div>
            </section>

            <section id="cursor" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>02</span>Cursor</h2>
              <p style={{marginBottom: '2rem'}}>
                Prototypes built with Cursor – AI-powered code editor for rapid development.
              </p>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.2s'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{flex: 1, minWidth: '300px'}}>
                    <h3 style={{marginTop: 0, marginBottom: '1rem', color: 'var(--text-primary)'}}>
                      Masha&apos;s Planet
                    </h3>
                    <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>
                      An interactive experience built with Cursor, showcasing AI-assisted development capabilities.
                    </p>
                    <a
                      href="https://mashas-planet.webflow.io/loading"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'var(--accent)',
                        color: 'white',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-hover)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--accent)'
                      }}
                    >
                      View Prototype →
                    </a>
                  </div>
                  <div style={{
                    width: '200px',
                    height: '200px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem'
                  }}>
                    💻
                  </div>
                </div>
              </div>
            </section>

            <section id="webflow" className="guide-section">
              <h2><span style={{color: 'var(--accent)', fontWeight: 600, marginRight: '0.5rem'}}>03</span>Webflow</h2>
              <p style={{marginBottom: '2rem'}}>
                Prototypes created with Webflow – visual development platform for the modern web.
              </p>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.2s'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{flex: 1, minWidth: '300px'}}>
                    <h3 style={{marginTop: 0, marginBottom: '1rem', color: 'var(--text-primary)'}}>
                      Internet Hall of Fame
                    </h3>
                    <p style={{color: 'var(--text-secondary)', marginBottom: '1.5rem'}}>
                      A creative prototype exploring web history, built with Webflow&apos;s visual development tools.
                    </p>
                    <a
                      href="https://webflow-app-gallery.webflow.io/internet-hall-of-fame"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'var(--accent)',
                        color: 'white',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-hover)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--accent)'
                      }}
                    >
                      View Prototype →
                    </a>
                  </div>
                  <div style={{
                    width: '200px',
                    height: '200px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem'
                  }}>
                    🌐
                  </div>
                </div>
              </div>
            </section>

            <div style={{
              marginTop: '4rem',
              padding: '2rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{marginTop: 0, marginBottom: '1rem', color: 'var(--text-primary)'}}>
                More Coming Soon
              </h3>
              <p style={{color: 'var(--text-secondary)', margin: 0}}>
                We&apos;re adding more prototypes from Builder Day. Check back soon to see what the team creates!
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
