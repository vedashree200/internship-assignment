import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        The thinkers and <br />
        doers were
        <span className="pink"> changing </span>
        <br />
        the
        <span className="green"> status </span>
        Quo with
      </h1>
      <div className="hero-line"></div>
      <div className="wave-shape"></div>

      <p>
        We are a team of strategists, designers, communicators,
        researchers. Together, we believe that progress only
        happens when you refuse to play things safe.
      </p>

      <div className="purple-shape"></div>
    </section>
  );
}

export default Hero;