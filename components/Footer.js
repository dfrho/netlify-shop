export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>
            "Having the convenience of Life Fitness as a home gym is
            unprecedented."
          </h2>
          <p>Jillian Turner</p>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </section>
      </footer>
    </>
  );
}
