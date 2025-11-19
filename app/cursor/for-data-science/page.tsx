export default function CursorForDataScience() {
  return (
    <>
      <section className="hero">
        <div className="hero-tagline">Cursor for Data Science</div>
        <h1>AI-Accelerated Analysis</h1>
        <p className="hero-subtitle">
          Learn how Data Scientists and Researchers can use Cursor to accelerate
          analysis workflows, automate data pipelines, and build powerful insights tools.
        </p>
      </section>

      <section className="section">
        <div className="guide-content">
          <div className="guide-body">
            <section id="overview" className="guide-section">
              <h2>Overview</h2>
              <p>
                Cursor transforms data science workflows by helping you write analysis
                scripts faster, debug complex data transformations, and build automated
                reporting tools with natural language instructions.
              </p>
            </section>

            <section id="getting-started" className="guide-section">
              <h2>Getting Started</h2>
              <h3>Installation & Setup</h3>
              <ul>
                <li>Download Cursor from <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a></li>
                <li>Install Python and data science libraries (pandas, numpy, matplotlib)</li>
                <li>Set up Jupyter notebook integration</li>
                <li>Configure Python environment and virtual environments</li>
              </ul>

              <h3>Key Features for Data Scientists</h3>
              <ul>
                <li><strong>Code Generation</strong> - Generate data analysis scripts from descriptions</li>
                <li><strong>Debugging Help</strong> - Fix data pipeline errors and edge cases</li>
                <li><strong>Documentation</strong> - Auto-generate docstrings and analysis documentation</li>
                <li><strong>SQL Assistance</strong> - Write complex queries with AI help</li>
              </ul>
            </section>

            <section id="use-cases" className="guide-section">
              <h2>Data Science Use Cases</h2>

              <div className="goal-card">
                <h3>Exploratory Data Analysis</h3>
                <p>
                  Quickly generate analysis scripts to explore datasets, identify patterns,
                  and create visualizations.
                </p>
              </div>

              <div className="goal-card">
                <h3>Data Pipeline Automation</h3>
                <p>
                  Build automated data pipelines for ETL processes, data cleaning,
                  and transformation workflows.
                </p>
              </div>

              <div className="goal-card">
                <h3>Statistical Analysis</h3>
                <p>
                  Implement statistical tests, run experiments, and analyze results
                  with AI-generated code.
                </p>
              </div>

              <div className="goal-card">
                <h3>Machine Learning Prototyping</h3>
                <p>
                  Rapidly prototype ML models, test different algorithms, and
                  iterate on feature engineering.
                </p>
              </div>
            </section>

            <section id="workflows" className="guide-section">
              <h2>Data Science Workflows</h2>

              <h3>Analyzing a New Dataset</h3>
              <ol>
                <li>Load dataset and describe what you want to analyze</li>
                <li>Use Chat to generate initial exploration code</li>
                <li>Ask for specific statistical tests or visualizations</li>
                <li>Iterate on findings and generate summary reports</li>
                <li>Export analysis and insights</li>
              </ol>

              <h3>Building a Data Pipeline</h3>
              <ol>
                <li>Describe your data source and target format</li>
                <li>Generate ETL code with Cursor Composer</li>
                <li>Add error handling and logging</li>
                <li>Test with sample data</li>
                <li>Schedule and automate execution</li>
              </ol>

              <h3>Creating Dashboards</h3>
              <ol>
                <li>Define key metrics and visualizations needed</li>
                <li>Generate data aggregation queries</li>
                <li>Build interactive visualizations with Plotly or similar</li>
                <li>Create automated refresh logic</li>
                <li>Deploy dashboard for stakeholder access</li>
              </ol>
            </section>

            <section id="tips" className="guide-section">
              <h2>Tips & Best Practices</h2>

              <ul>
                <li><strong>Start with Examples</strong> - Provide sample data to get better code suggestions</li>
                <li><strong>Describe Expected Output</strong> - Be specific about what your analysis should produce</li>
                <li><strong>Handle Edge Cases</strong> - Ask Cursor to add error handling for null values, outliers, etc.</li>
                <li><strong>Document Assumptions</strong> - Use AI to generate clear documentation of analysis assumptions</li>
                <li><strong>Optimize Iteratively</strong> - Start with working code, then optimize for performance</li>
                <li><strong>Validate Results</strong> - Always verify AI-generated analysis logic against known cases</li>
                <li><strong>Version Your Analysis</strong> - Use git to track changes to analysis scripts</li>
              </ul>
            </section>

            <section id="common-tasks" className="guide-section">
              <h2>Common Data Tasks</h2>

              <h3>Data Cleaning</h3>
              <p>
                Ask Cursor to handle missing values, remove duplicates, and standardize formats.
                Example: "Clean this dataset by removing rows with null values in critical columns"
              </p>

              <h3>Statistical Analysis</h3>
              <p>
                Generate code for hypothesis tests, correlations, and regression analysis.
                Example: "Run a t-test to compare conversion rates between groups A and B"
              </p>

              <h3>Data Visualization</h3>
              <p>
                Create charts and graphs with minimal code.
                Example: "Create a line chart showing user growth over the last 12 months"
              </p>

              <h3>SQL Query Generation</h3>
              <p>
                Write complex SQL queries from natural language descriptions.
                Example: "Write a query to find the top 10 products by revenue in each category"
              </p>
            </section>

            <section id="python-examples" className="guide-section">
              <h2>Python Library Support</h2>

              <h3>Popular Libraries</h3>
              <ul>
                <li><strong>pandas</strong> - Data manipulation and analysis</li>
                <li><strong>numpy</strong> - Numerical computing</li>
                <li><strong>matplotlib/seaborn</strong> - Data visualization</li>
                <li><strong>scikit-learn</strong> - Machine learning</li>
                <li><strong>scipy</strong> - Scientific computing</li>
                <li><strong>plotly</strong> - Interactive visualizations</li>
              </ul>

              <p>
                Cursor understands these libraries deeply and can help you use them
                effectively with context-aware suggestions and error corrections.
              </p>
            </section>

            <section id="resources" className="guide-section">
              <h2>Resources</h2>

              <ul>
                <li><a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer">Official Cursor Documentation</a></li>
                <li><a href="/cursor">Back to Cursor Overview</a></li>
                <li><a href="/cursor/for-product-managers">Cursor for Product Managers</a></li>
                <li><a href="/cursor/for-designers">Cursor for Designers</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
