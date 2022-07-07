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
      <main>
        <img src="https://i.pinimg.com/736x/fa/a8/1c/faa81c8fd49f50ff42a944de835ba063--dsquared-logo-s.jpg" width="200" height="200"/>
        <img src="https://play-lh.googleusercontent.com/fis-9rTH8zeCfMrHl-AQxY2wHP6ilz8pcOx_BiuMTKECK2Wz11u6Oui6poEAiVz3IlhB" width="200" height="200"/>
        <img src="http://cdn.shopify.com/s/files/1/0249/5892/6941/products/Nike-Swoosh-Logo-Iron-On-White_1200x1200.jpg" width="280" height="200"/>
        <img src="https://1000logos.net/wp-content/uploads/2019/05/Off-White-L%D0%BEgo.jpg" width="220" height="170"/>




      </main>
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
