export default function CursorForDesigners() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Cursor for Designers</div>
        <h1>Design to Code in Minutes</h1>
        <p className="hero-subtitle">
          Learn how Product Designers can use Cursor to bring designs to life,
          prototype interactions, and collaborate seamlessly with developers.
        </p>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="overview" className="guide-section">
              <h2>Overview</h2>
              <p>
                Cursor enables designers to transform static designs into interactive
                prototypes, experiment with motion and interaction, and communicate
                design intent through working code.
              </p>
            </section>

            <section id="getting-started" className="guide-section">
              <h2>Getting Started</h2>
              <h3>Installation & Setup</h3>
              <ul>
                <li>Download Cursor from <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a></li>
                <li>Set up your preferred design tokens and style system</li>
                <li>Install design-focused extensions (Tailwind, styled-components, etc.)</li>
                <li>Configure AI features for design workflows</li>
              </ul>

              <h3>Key Features for Designers</h3>
              <ul>
                <li><strong>Image to Code</strong> - Convert design mockups to functional components</li>
                <li><strong>Style Generation</strong> - Generate CSS from design descriptions</li>
                <li><strong>Component Creation</strong> - Build reusable UI components with AI</li>
                <li><strong>Interaction Prototyping</strong> - Add animations and micro-interactions easily</li>
              </ul>
            </section>

            <section id="use-cases" className="guide-section">
              <h2>Designer Use Cases</h2>

              <div className="goal-card">
                <h3>Interactive Prototypes</h3>
                <p>
                  Create high-fidelity prototypes with real interactions, animations,
                  and data that go beyond static design tools.
                </p>
              </div>

              <div className="goal-card">
                <h3>Design Systems</h3>
                <p>
                  Build and maintain design system components with consistent styling
                  and behavior across your product.
                </p>
              </div>

              <div className="goal-card">
                <h3>Motion Design</h3>
                <p>
                  Experiment with animations, transitions, and micro-interactions
                  to perfect the feel of your product.
                </p>
              </div>

              <div className="goal-card">
                <h3>Responsive Design</h3>
                <p>
                  Test designs across breakpoints and devices with real responsive
                  behavior, not just static artboards.
                </p>
              </div>
            </section>

            <section id="workflows" className="guide-section">
              <h2>Designer Workflows</h2>

              <h3>From Figma to Code</h3>
              <ol>
                <li>Export design specs or screenshots from Figma</li>
                <li>Use Cursor to generate initial component structure</li>
                <li>Refine styling to match design system</li>
                <li>Add interactions and animations</li>
                <li>Share prototype with team for feedback</li>
              </ol>

              <h3>Building a Component Library</h3>
              <ol>
                <li>Define component structure and variants</li>
                <li>Use Chat to generate base component code</li>
                <li>Iterate on styling and props</li>
                <li>Document usage and examples</li>
                <li>Package for team use</li>
              </ol>

              <h3>Prototyping Interactions</h3>
              <ol>
                <li>Start with basic layout and content</li>
                <li>Ask Cursor to add specific interactions (hover, click, drag)</li>
                <li>Refine animations with Chat guidance</li>
                <li>Test across devices and browsers</li>
                <li>Share with stakeholders for validation</li>
              </ol>
            </section>

            <section id="tips" className="guide-section">
              <h2>Tips & Best Practices</h2>

              <ul>
                <li><strong>Learn CSS Fundamentals</strong> - Understanding basics helps you guide AI better</li>
                <li><strong>Use Design Tokens</strong> - Define colors, spacing, and typography upfront</li>
                <li><strong>Start with Structure</strong> - Get layout right before adding polish</li>
                <li><strong>Iterate Visually</strong> - Use browser dev tools alongside Cursor</li>
                <li><strong>Save Patterns</strong> - Create snippets for common design patterns</li>
                <li><strong>Share Early</strong> - Get feedback on prototypes before over-polishing</li>
                <li><strong>Document Decisions</strong> - Capture why certain design choices were made</li>
              </ul>
            </section>

            <section id="common-tasks" className="guide-section">
              <h2>Common Design Tasks</h2>

              <h3>Creating Layouts</h3>
              <p>
                Ask Cursor to create responsive layouts using Flexbox or Grid.
                Example: "Create a 3-column card layout that stacks on mobile"
              </p>

              <h3>Adding Animations</h3>
              <p>
                Describe the animation you want and let Cursor handle the implementation.
                Example: "Add a smooth fade-in animation when cards enter the viewport"
              </p>

              <h3>Building Forms</h3>
              <p>
                Generate accessible, styled forms with validation.
                Example: "Create a contact form with name, email, and message fields"
              </p>

              <h3>Styling Components</h3>
              <p>
                Describe your visual style and apply it consistently.
                Example: "Style this button with our primary color and add a hover effect"
              </p>
            </section>

            <section id="resources" className="guide-section">
              <h2>Resources</h2>

              <ul>
                <li><a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer">Official Cursor Documentation</a></li>
                <li><a href="/cursor">Back to Cursor Overview</a></li>
                <li><a href="/cursor/for-product-managers">Cursor for Product Managers</a></li>
                <li><a href="/cursor/for-data-science">Cursor for Data Science</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
