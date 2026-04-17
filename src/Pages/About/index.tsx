import "./About.css"
import rice from "../../assets/Background.png"
import user1 from "../../assets/tundeA.png"
import user2 from "../../assets/user.png"
import user3 from "../../assets/user1.png"
import user4 from "../../assets/user2.png" 
import  menu from '../../assets/menu.png'
import resturantLogo from '../../assets/resturant.png'
import mealLogo from '../../assets/meal.png'
import location from '../../assets/location.png'






const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero" style={{ backgroundImage: `url(${rice})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>About Tantalizers</h1>
          <p>Every Bite, A Promise Kept.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Tantalizers has grown into one of Nigeria’s most loved quick-service
            restaurant brands. We are passionate about delivering delicious meals
            that combine rich local flavors with modern dining experiences.
          </p>

          <p>
            From our famous Jollof rice to tasty snacks and refreshing drinks,
            we are committed to quality, consistency, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section light">
        <div className="container grid-2">

          <div className="card">
            <h2>Our Mission</h2>
            <p>
              To serve high-quality meals quickly and consistently while creating
              memorable experiences for every customer.
            </p>
          </div>

          <div className="card">
            <h2>Our Vision</h2>
            <p>
              To be Africa’s leading quick-service restaurant brand known for
              innovation, taste, and excellence.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="about-section">
        <div className="container">
          <h2>Why Choose Us</h2>

          <div className="features">

            <div className="feature">
               <img src={menu} alt="customer" />

               <h3>Rich Taste</h3>
              <p>Authentic Nigerian flavors you love.</p>
            </div>

            <div className="feature">
               <img src={mealLogo} alt="customer" />
               <h3> Fast Service</h3>
              <p>Quick meals for your busy lifestyle.</p>
            </div>

            <div className="feature">
             <img src={resturantLogo} alt="customer" />
               <h3>Affordable</h3>
              <p>Great food at the right price.</p>
            </div>

            <div className="feature">
               <img src={location} alt="customer" />
              <h3>Easy Access</h3>
              <p>Multiple outlets across locations.</p>
            </div>

          </div>
        </div>
      </section>

      {/*  TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <img src={user1} alt="customer" />
            <p>"Best Jollof rice I’ve ever had! "</p>
            <h4>— Tunde A.</h4>
          </div>

          
          <div className="testimonial-card">
            <img src={user4} alt="customer" />
            <p>"Every meal here is affordable and unique"</p>
            <h4>— Mariam T.</h4>
          </div>

          <div className="testimonial-card">
            <img src={user2} alt="customer" />
            <p>"Fast delivery and amazing taste every time."</p>
            <h4>— Chioma K.</h4>
          </div>

          <div className="testimonial-card">
            <img src={user3} alt="customer" />
            <p>"Their meals are always fresh and satisfying."</p>
            <h4>— David O.</h4>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Enjoy Delicious Meals?</h2>
        <p>Order now and experience the taste.</p>
        <button>Order Now</button>
      </section>

    </div>
  )
}

export default About