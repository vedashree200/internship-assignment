import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
    <div className="left-wave"></div>   
      <h1>
        The thinkers and <br />
        doers were
        <span className="pink"> changing </span>
        <br />
        the
        <span className="green"> status </span>
        Quo with
      </h1>
      <div className="purple-shape"></div>
      <div className="hero-line"></div>
      <div className="wave-shape"></div>

      <p>
        We are a team of strategists, designers, communicators,
        researchers. Together, we believe that progress only
        happens when you refuse to play things safe.
      </p>

      <div className="purple-shape"></div>
      <div className="hero-avatars">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="" />
        <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="" />
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
      </div>
    </section>
  );
}

export default Hero;