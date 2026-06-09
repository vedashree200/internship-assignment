import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="about-top">

        <div className="about-text">
          <h2>
            Tomorrow should <br />
            be better than <span>today</span>
          </h2>

          <p>
            We are a team of strategists,
            designers communicators and researchers.
            Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <button>Read More →</button>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
            alt="meeting"
          />
        </div>

      </div>

      <div className="about-bottom">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="team"
          />
        </div>

        <div className="about-text">
          <h2>
            <span>See</span> how we can <br />
            help you progress
          </h2>

          <p>
            We add a layer of fearless insights and action
            that allows change makers to accelerate
            their progress.
          </p>

          <button>Read More →</button>
        </div>

      </div>

    </section>
  );
}

export default About;