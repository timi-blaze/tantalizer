import React from 'react';
import './App.css';

import DescriptionCard from './Components/DescriptionCard';


import Rice from "./assets/rice.jpeg";
import chips from "./assets/chicken-chips.jpeg"
import chineserice from "./assets/chinese-rice.jpeg"
import fishsauce from './assets/fishsauce.jpeg'
import spag from './assets/spag.jpeg'
import meat from './assets/meatsauce.jpeg'
import stewRice from "./assets/stewRice.jpeg"
import plateMeat from './assets/plateMeat.jpeg'
import resturantIcon from './assets/resturant.png'
import locationIcon from './assets/location.png'
import mealIcon from './assets/meal.png'
import menuIcon from './assets/menu.png'


interface FoodItem {
 
  name: string;
  image: string;
  price: string;
  tag: string;
}


const App: React.FC = () => {
  const topPicks: FoodItem[] = [
    { name: "Famous Fish Sauce", image: fishsauce, price: "₦1,200", tag: "Best Seller" },
    { name: "Native Jollof Rice", image: Rice, price: "₦3,500", tag: "Hot" },
    { name: "chicken and chips", image: chips, price: "₦3,800", tag: "Classic" },
    { name: "Chinese Rice", image: chineserice, price: "₦4,500", tag: "Traditional" },
    { name: "Native Stew Rice", image: stewRice, price: "₦3,500", tag: "Hot" },
    { name: "Meat Sauce", image: meat, price: "₦3,800", tag: "Classic" },
    { name: "Chicken Pepper Sauce", image: plateMeat, price: "₦4,500", tag: "Traditional" },
     {name: "Spagetti", image: spag, price: "₦4,500", tag: "Traditional" },
  ];

  const howItWorks = [
    {
      image: resturantIcon,
      text1: "select Resturant/",
      text2: "Tantis Pot"
    },
    {
      image: locationIcon,
      text1: 'select Preferred',
      text2: 'Location'
    },
    {
      image:menuIcon,
      text1:'choose your',
      text2:'Meal'
    },
    {
      image:mealIcon,
      text1: 'choose your',
      text2: 'meal' 
    }
  ]

  return (
    <div className="app-container">
      {/* --- HERO SECTION --- */}
      <main className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text-block">
            {/*<h2 className="hero-badge">Serving Quality Since 1997</h2> */}
            <h1 className="hero-title">Every Bite, <br /><span className="accent-red">A Promise Kept.</span></h1>
            <p className="hero-description">
              From our legendary meat pies to spicy Jollof and continental dishes...
            </p>
            <div className="hero-cta-group">
              <button className="btn-primary">Order Online</button>
              <button className="btn-outline">View Our Menu</button>
            </div>
          </div>
        </div>
      </main>

      {/* --- TOP PICKS SECTION --- */}
      <section className="top-picks-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Tantalizing Favorites</span>
            <h2 className="section-title">Our Top Picks</h2>
            <div className="title-underline"></div>
          </div>

          <div className="picks-grid">
  {topPicks.map((item) => (
    <div  className="food-card">
      <div className="card-image-wrapper">
        <span className="card-tag">{item.tag}</span>

        <img src={item.image} alt={item.name} className="card-img" />

      </div>

      <div className="card-info">
        <h3>{item.name}</h3>
        <p className="price-text">{item.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  ))}



  
</div>
        </div>
      </section>

    <section className='how-it-works'>
       <h2 className='how-title'>How it works</h2>
       <div className='how-grid'>

         {howItWorks.map((item, index) => (
           
           <DescriptionCard 
            key={index}
            image={item.image}
            text1={item.text1}
            text2={item.text2}
           />
         ))} 
       </div>
    </section>

     <section className='tantalize'>
       <div className='tantalize-text'>
         <h2>Tantalize your <br />
            taste buds!
          </h2>
          <p>Order now, taste the perfection!</p>
          <div className='btn'>
            <button>Resturant</button>
            <button>Tantis Pot</button>
          </div>
       </div>
        
       
     </section>

    </div>
  );
};

export default App;