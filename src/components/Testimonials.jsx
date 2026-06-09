import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>
        What our customer <br />
        says about us
      </h2>

      <div className="testimonial-card">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="customer"
          className="testimonial-img"
        />
        <p>
          "Elementum helped us rethink our strategy and
          move much faster than we expected."
        </p>

        <h4>Jane Cooper</h4>
        <span>Marketing Director</span>
      </div>

    </section>
  );
}

export default Testimonials;