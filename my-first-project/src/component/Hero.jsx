const Hero=()=>{
  return(
    <main className="hero container">
      <div className="hero-content">
        <h1>
          YOUR FEET <br />
          DESERVE 
          THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="cnt">Category</button>
        </div>
        <div className="shopping">
           <p>Also Available On</p>
           <div className="site">
          <img src="/img/download-2.png" alt="amazon" height="35px" width="50px"/>
          <img src="/img/download-3.png" alt="flipkart" height="35px" width="50px"/>
        </div>
      </div>
      
      </div>
      <div className="hero-img">
        <img src="/img/shoe.jpeg" alt="hero" />
      </div>

    </main>
  )

};
export default Hero
