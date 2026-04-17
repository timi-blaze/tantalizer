import { useRef } from "react"
import "./Order.css"
import food from "../../assets/rice.jpeg"
import jollof from "../../assets/chinese-rice.jpeg"
import stewRice from "../../assets/stewRice.jpeg"
import spag from "../../assets/spag.jpeg"
import meatsauce from "../../assets/meatsauce.jpeg"
import plateMeat from "../../assets/plateMeat.jpeg"
import fishsauce from "../../assets/fishsauce.jpeg"
import chips from '../../assets/chicken-chips.jpeg'
import pie from '../../assets/pie.jpeg'
import dryBurger from '../../assets/dryBurger.jpeg'
import burger from '../../assets/burger.jpeg'
import saladBurger from '../../assets/saladBurger.jpeg'
import burgerChips from '../../assets/burgerChips.jpeg'
import spicyYam from '../../assets/spicyYam.jpeg'
import dodoChunk from '../../assets/dodoChunk.jpeg'
import blancoDrink from '../../assets/blancoDrink.jpeg'
import andreDrink from '../../assets/andreDrink.png'
import bulletDrink from '../../assets/bulletDrink.png'
import malt from '../../assets/malt.png'
import fanta from '../../assets/fanta.png'
import gingerBeer from '../../assets/gingerBeer.png'
import fentimas from '../../assets/fentimans.png'
import bullet from '../../assets/bullet.png'



const Order = () => {

  const allRef = useRef<HTMLDivElement>(null)
  const riceRef = useRef<HTMLDivElement>(null)
  const snacksRef = useRef<HTMLDivElement>(null)
  const drinksRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="order-page" ref={allRef}>

      {/* CATEGORY BUTTONS */}

      <div className="order-nav">

        <button onClick={() => scrollToSection(allRef)}>All</button>

        <button onClick={() => scrollToSection(riceRef)}>Rice</button>

        <button onClick={() => scrollToSection(snacksRef)}>Snacks</button>

        <button onClick={() => scrollToSection(drinksRef)}>Drinks</button>

      </div>

      {/* RICE SECTION */}

      <div className="food-section" ref={riceRef}>

        <h2>Meals</h2>

        <div className="food-grid">

          <div className="food-card">
            <img src={jollof} alt="" />
            <h3>Jollof Rice</h3>
            <p>₦3500</p>
            <button>Add to Order</button>
          </div>

          <div className="food-card">
            <img src={stewRice} alt="" />
            <h3>Stewed Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>

         <div className="food-card">
            <img src={spag} alt="" />
            <h3>Fried Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>   

          
         <div className="food-card">
            <img src={meatsauce} alt="" />
            <h3>Fried Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>  

          
         <div className="food-card">
            <img src={plateMeat} alt="" />
            <h3>Fried Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>  
          
            <div className="food-card">
            <img src={fishsauce} alt="" />
            <h3>Fried Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>  

            <div className="food-card">
            <img src={chips} alt="" />
            <h3>Fried Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>  

            <div className="food-card">
            <img src={food} alt="" />
            <h3>Fried Rice</h3>
            <p>₦3800</p>
            <button>Add to Order</button>
          </div>  

        </div>

      </div>

      {/* SNACKS */}

      <div className="food-section" ref={snacksRef}>

        <h2>Snacks</h2>

        <div className="food-grid">

          <div className="food-card">
            <img src={pie} alt="" />
            <h3>Chicken Pie</h3>
            <p>₦4200</p>
            <button>Add to Order</button>
          </div>

          <div className="food-card">
            <img src={chips} alt="" />
            <h3>Chicken and Chips</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

           <div className="food-card">
            <img src={dryBurger} alt="" />
            <h3>Pizza</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

           <div className="food-card">
            <img src={burger} alt="" />
            <h3>Burger</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

           <div className="food-card">
            <img src={saladBurger} alt="" />
            <h3>Salad Plus Burger</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

           <div className="food-card">
            <img src={burgerChips} alt="" />
            <h3>Burger Plus Chips</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

           <div className="food-card">
            <img src={spicyYam} alt="" />
            <h3>Spicy Yam</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

           <div className="food-card">
            <img src={dodoChunk} alt="" />
            <h3>Dodo Chunk</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

        </div>


      </div>

      {/* DRINKS */}

      <div className="food-section" ref={drinksRef}>

        <h2>Drinks</h2>

        <div className="food-grid">

          <div className="food-card">
            <img src={malt} alt="" />
            <h3>Malt</h3>
            <p>₦600</p>
            <button>Add to Order</button>
          </div>

          <div className="food-card">
            <img src={fentimas} alt="" />
            <h3>Fentimas</h3>
            <p>₦900</p>
            <button>Add to Order</button>
          </div>

            <div className="food-card">
            <img src={gingerBeer} alt="" />
            <h3>Ginger Beer</h3>
            <p>₦1200</p>
            <button>Add to Order</button>
          </div>

            <div className="food-card">
            <img src={fanta} alt="" />
            <h3>Orange Juice</h3>
            <p>₦700</p>
            <button>Add to Order</button>
          </div>

            <div className="food-card">
            <img src={bullet} alt="" />
            <h3>Bullet</h3>
            <p>₦900</p>
            <button>Add to Order</button>
          </div>

            <div className="food-card">
            <img src={bulletDrink} alt="" />
            <h3>Bullet</h3>
            <p>₦900</p>
            <button>Add to Order</button>
          </div>

            <div className="food-card">
            <img src={andreDrink} alt="" />
            <h3>Andre</h3>
            <p>₦900</p>
            <button>Add to Order</button>
          </div>

            <div className="food-card">
            <img src={blancoDrink} alt="" />
            <h3>Tequila</h3>
            <p>₦900</p>
            <button>Add to Order</button>
          </div>

          

        </div>

      </div>

    </div>
  )
}

export default Order