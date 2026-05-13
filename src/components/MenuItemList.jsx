import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";
const MenuItems = [
  {
    name: "Terminal Pizza",
    rating: 4.9,
    comments: 200,
    price: 60,
    image: food1,
    type: "Pizza",
  },
  {
    name: "Position Absolute Acı Pizza",
    rating: 4.9,
    comments: 928,
    price: 85,
    image: food2,
    type: "Pizza",
  },
  {
    name: "useEffect Tavuklu Burger",
    rating: 4.9,
    comments: 462,
    price: 75,
    image: food3,
    type: "Burger",
  },
  {
    name: "Hackathlon Burger",
    rating: 4.8,
    comments: 150,
    price: 70,
    image: food3,
    type: "Burger",
  },
];

export default function MenuItemList({ flavors }) {
  const filteredItems =
    flavors.length === 0
      ? []
      : MenuItems.filter((item) => flavors.includes(item.type));
  return (
    <div id="menu-item-list">
      {filteredItems.length === 0 || !filteredItems ? (
        <p>Seçeneklerinize uygun bir lezzetimiz henüz yok.</p>
      ) : (
        filteredItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <div className="menu-item-ratings">
                <p>{item.rating}</p>
                <p>({item.comments})</p>
                <p>{item.price.toFixed(0)}₺</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
