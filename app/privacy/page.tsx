export const metadata = {
  title: "Privacy Policy",
  description:
    "Read how this website handles data, cookies, analytics, and advertising-related information.",
  alternates: {
    canonical: "https://bet-tools.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1.25rem 1rem 2.5rem",
      }}
    >
      <div
        style={{
          width: "min(100%, 44rem)",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>
          Privacy Policy
        </h1>

        <p>
          This website respects your privacy. We do not collect personal
          information unless you choose to provide it voluntarily.
        </p>

        <h2 style={{ marginTop: "1rem" }}>
          Analytics
        </h2>

        <p>
          We may use analytics tools to understand how visitors use the site.
          These tools collect anonymous usage data such as pages visited,
          browser type, and device information.
        </p>

        <h2 style={{ marginTop: "1rem" }}>
          Cookies
        </h2>

        <p>
          This website may use cookies to improve functionality and user
          experience. Cookies are small text files stored on your device.
        </p>

        <h2 style={{ marginTop: "1rem" }}>
          Advertising
        </h2>

        <p>
          In the future, this site may display advertisements from third-party
          advertising networks. These networks may use cookies to personalize
          advertising content.
        </p>

        <h2 style={{ marginTop: "1rem" }}>
          Contact
        </h2>

        <p>
          If you have questions about this privacy policy, please contact us
          using the contact page.
        </p>
      </div>
    </main>
  );
}