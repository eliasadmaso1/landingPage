import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <header>
        <div className="header-img-container">
          <img src="https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/z/3/z381818427-11649253925.jpg" />
          <div className="img-desc">חולצות</div>
        </div>

        <div className="header-img-container">
          <img src="https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/x/8/x841320005-11610034522.jpg" />
          <div className="img-desc">נעליים</div>
        </div>
        <div className="header-img-container">
          <img src="https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/z/3/z355685915-11654781369.jpg" />
          <div className="img-desc">ג׳ינסים</div>
        </div>
      </header>
      <section>
          <h2>סניפים</h2>
          <div className="location">
              <img src="https://www.colbonews.co.il/wp-content/uploads/2019/11/8a1181fa5aa8bcb9c768706b77199a1c-e1573045514185.jpg"/>
              <div className="location-desc">הרצל 31, בת ים</div>
          </div>

          <div className="location">
              <img src="https://www.dpro.co.il/wp-content/uploads/2020/08/NYOU-%D7%A8%D7%9E%D7%9C%D7%94-6.jpg"/>
              <div className="location-desc">הנרקיס 5, בת ים</div>
          </div>

          <div className="location">
              <img src="https://www.dpro.co.il/wp-content/uploads/2020/08/NYOU-%D7%A8%D7%9E%D7%9C%D7%94-3.jpg"/>
              <div className="location-desc">רבין 17, בת ים</div>
          </div>
      </section>
    </div>
  );
}

export default Home;
