import React from "react";
import "./shoe.css";
import Select from "../../features/select/Select";

function Shoe() {
  return (
    <>
      <div className="product-container">
        <div className="product-layout">
          <div className="shoe-images">
            <img
              className="img1"
              src="https://media.terminalx.com/pub/media/catalog/product/cache/b374ff9ecf3b29b1a67d228d0c98e9a1/x/9/x902820005-11656407164.jpg"
              width="500"
            />
            <img
              className="img2"
              src="https://media.terminalx.com/pub/media/catalog/product/cache/b374ff9ecf3b29b1a67d228d0c98e9a1/x/9/x902820005-21656407164.jpg"
              width="500"
            />
            <img
              className="img3"
              src="https://media.terminalx.com/pub/media/catalog/product/cache/b374ff9ecf3b29b1a67d228d0c98e9a1/x/9/x902820005-31656407164.jpg"
              width="500"
            />
            <img
              className="img4"
              src="https://media.terminalx.com/pub/media/catalog/product/cache/b374ff9ecf3b29b1a67d228d0c98e9a1/x/9/x902820005-41656407164.jpg"
              width="500"
            />
          </div>
          <div className="shoe-details">
            <h3>נעלי גברים</h3>

            <h1>סניקרס עור Nike Air Force 1 '07</h1>
            <h4>499.90 ₪</h4>
            <h4 style={{ color: "green" }}>במלאי</h4>
            <h4 style={{borderBottom:"solid 1px",width:"35px"}}>מידות</h4>
            <div className="sizes">
              <div className="size">40</div>
              <div className="size">41</div>
              <div className="size">42</div>
              <div className="size">43</div>
              <div className="size">44</div>
            </div>

            <p>
              נעלי Nike מדגם Air Force 1 '07 דמוי עור עם שרוכי קשירה. לנעליים
              סולייה רחבה ולוגו המותג מופיע על הלשונית, צידי הנעל ומאחור.
            </p>

            <button className="backButton">בחזרה לבית</button>
          </div>
        </div>
      </div>
      \
    </>
  );
}

export default Shoe;
