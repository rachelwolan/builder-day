export default function CursorForProductManagers() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Cursor for Product Managers</div>
        <h1>AI-Powered Product Development</h1>
        <p className="hero-subtitle">
          Learn how Product Managers can use Cursor to rapidly prototype ideas,
          validate concepts, and collaborate more effectively with engineering teams.
        </p>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="overview" className="guide-section">
              <h2>Overview</h2>
              <p>
                As a Product Manager, Cursor empowers you to move from idea to prototype
                faster than ever before. Build functional prototypes, explore technical
                feasibility, and communicate requirements through working code.
              </p>
            </section>

            <section id="getting-started" className="guide-section">
              <h2>Getting Started</h2>
              <h3>Installation & Setup</h3>
              <ul>
                <li>Download Cursor from <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a></li>
                <li>Import your VS Code settings if migrating from another editor</li>
                <li>Configure AI features and API keys</li>
                <li>Install recommended extensions for web development</li>
              </ul>

              <h3>Key Features for PMs</h3>
              <ul>
                <li><strong>Chat</strong> - Ask questions about codebases and get instant explanations</li>
                <li><strong>Composer</strong> - Generate entire features from natural language descriptions</li>
                <li><strong>Inline Edit</strong> - Make quick changes to code with AI assistance</li>
                <li><strong>Terminal Integration</strong> - Run commands and debug with AI help</li>
              </ul>
            </section>

            <section id="use-cases" className="guide-section">
              <h2>PM Use Cases</h2>

              <div className="goal-card">
                <h3>Rapid Prototyping</h3>
                <p>
                  Build clickable prototypes to validate user flows and feature concepts
                  before investing engineering resources.
                </p>
              </div>

              <div className="goal-card">
                <h3>Technical Exploration</h3>
                <p>
                  Understand technical constraints and possibilities by building
                  proof-of-concepts yourself.
                </p>
              </div>

              <div className="goal-card">
                <h3>Requirement Clarification</h3>
                <p>
                  Create working examples to clarify ambiguous requirements and
                  facilitate better engineering conversations.
                </p>
              </div>

              <div className="goal-card">
                <h3>Data Analysis</h3>
                <p>
                  Write scripts to analyze product data, generate reports, and
                  uncover insights without waiting for data team support.
                </p>
              </div>
            </section>

            <section id="workflows" className="guide-section">
              <h2>PM Workflows</h2>

              <h3>Building a Product Prototype</h3>
              <ol>
                <li>Start with a user story or feature description</li>
                <li>Use Cursor Composer to generate the initial structure</li>
                <li>Iterate with Chat to refine functionality</li>
                <li>Test the prototype with stakeholders</li>
                <li>Share learnings with engineering for production implementation</li>
              </ol>

              <h3>Exploring a Codebase</h3>
              <ol>
                <li>Open your team's repository in Cursor</li>
                <li>Use Chat to ask "How does [feature] work?"</li>
                <li>Navigate to specific files and ask for explanations</li>
                <li>Identify areas for improvement or technical debt</li>
                <li>Create better-informed product decisions</li>
              </ol>
            </section>

            <section id="tips" className="guide-section">
              <h2>Tips & Best Practices</h2>

              <ul>
                <li><strong>Start Small</strong> - Begin with simple scripts or single-page prototypes</li>
                <li><strong>Use Templates</strong> - Leverage starter templates for common prototype types</li>
                <li><strong>Iterate Quickly</strong> - Don't aim for production quality; focus on learning</li>
                <li><strong>Document Learnings</strong> - Capture insights gained from building prototypes</li>
                <li><strong>Collaborate</strong> - Share your prototypes with designers and engineers early</li>
                <li><strong>Learn as You Go</strong> - Use Cursor's explanations to build your technical knowledge</li>
              </ul>
            </section>

            <section id="resources" className="guide-section">
              <h2>Resources</h2>

              <ul>
                <li><a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer">Official Cursor Documentation</a></li>
                <li><a href="/cursor">Back to Cursor Overview</a></li>
                <li><a href="/cursor/for-designers">Cursor for Designers</a></li>
                <li><a href="/cursor/for-data-science">Cursor for Data Science</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
