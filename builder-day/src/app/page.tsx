export default function Home() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome to Webflow Cloud
          </h1>
          <p className="margin-bottom-24px">
            This is a simple test using Basic components with enhanced styling.
          </p>
          <div style={{ marginTop: "12px" }}>
            <a
              href="https://developers.webflow.com/webflow-cloud/getting-started"
              className="button-primary"
              style={{
                borderRadius: "4px",
                background: "#146ef5",
                color: "#ffffff",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
                boxShadow:
                  "0px 0.5px 1px rgba(0, 0, 0, 0.25), inset 0px 29px 23px -16px rgba(255, 255, 255, 0.04), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.2)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
