import { useState } from "react";
import { Link } from "react-router-dom";
import kore from "../../images/iteration-2-images/icons/1.svg";
import pizza from "../../images/iteration-2-images/icons/2.svg";
import burger from "../../images/iteration-2-images/icons/3.svg";
import kizartmalar from "../../images/iteration-2-images/icons/4.svg";
import fastFood from "../../images/iteration-2-images/icons/5.svg";
import gazliIcek from "../../images/iteration-2-images/icons/6.svg";
import MenuItemList from "./MenuItemList";

const mutfaklar = [
  { name: "YENİ! Kore", image: kore },
  { name: "Pizza", image: pizza },
  { name: "Burger", image: burger },
  { name: "Kızartmalar", image: kizartmalar },
  { name: "Fast Food", image: fastFood },
  { name: "Gazlı İçecek", image: gazliIcek },
];
const flavors = [
  { name: "Ramen", image: kore },
  { name: "Pizza", image: pizza },
  { name: "Burger", image: burger },
  { name: "French Fries", image: kizartmalar },
  { name: "Fast Food", image: fastFood },
  { name: "Soft Drinks", image: gazliIcek },
];
export default function Home() {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  return (
    <div className="home">
      <div className="home-content">
        <p id="firsat">fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
        <Link id="order-link" to="/order">
          ACIKTIM
        </Link>
      </div>
      <div id="mutfaklar">
        {mutfaklar.map((mutfak, index) => (
          <div className="mutfak" key={index}>
            <img src={mutfak.image} alt={mutfak.name} />
            <h3>{mutfak.name}</h3>
          </div>
        ))}
      </div>
      <div id="home-kitchens">
        <div id="cta">
          <div className="cta-card" id="lezzetus">
            <h1>Özel Lezzetus</h1>
            <p>Position: Absolute Acı Pizza</p>
            <button className="cta-btn">SİPARİŞ VER</button>
          </div>
          <div className="cta-card" id="hackathlon">
            <h2>Hackathlon Burger Menü</h2>
            <button className="cta-btn">SİPARİŞ VER</button>
          </div>
          <div className="cta-card" id="npm">
            <h2>
              <span>Çoooook</span> hızlı npm gibi kurye
            </h2>
            <button className="cta-btn">SİPARİŞ VER</button>
          </div>
        </div>
        <h3 id="most-packaged">en çok paketlenen menüler</h3>
        <h2 id="filling-flavors">Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div id="flavors">
          {flavors.map((flavor, index) => {
            return (
              <a
                href="#menu-item-list"
                className={
                  "flavor " +
                  (selectedFlavors.includes(flavor.name) ? "selected" : "")
                }
                key={index}
                onClick={() => {
                  if (selectedFlavors.includes(flavor.name)) {
                    setSelectedFlavors(
                      selectedFlavors.filter((f) => f !== flavor.name)
                    );
                  } else {
                    setSelectedFlavors([...selectedFlavors, flavor.name]);
                  }
                }}
              >
                <img src={flavor.image} alt={flavor.name} />
                <h3>{flavor.name}</h3>
              </a>
            );
          })}
        </div>
        <MenuItemList flavors={selectedFlavors} />
      </div>
    </div>
  );
}
