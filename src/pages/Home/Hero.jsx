// Note: Hero component for Home page

export default function Hero() {
  return (
    <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <h1>Add a Play To Your Financial Aid!</h1>
          <form action="" method="post">
            <input type="email" placeholder="Student Email" name="email" />
            <input type="submit" value="Enter to win this week’s pot!" />
          </form>
          <a href="#" className="btn-get-started scrollto">Donate to the pot!</a>
        </div>
      </section>
  )
}


  