import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";

const additionalIngredients = [
  {
    name: "Pepperoni",
    value: "pepperoni",
  },
  {
    name: "Tavuk Izgara",
    value: "tavuk-ızgara",
  },
  {
    name: "Mısır",
    value: "mısır",
  },
  {
    name: "Sarımsak",
    value: "sarımsak",
  },
  {
    name: "Ananas",
    value: "ananas",
  },
  {
    name: "Sosis",
    value: "sosis",
  },
  {
    name: "Soğan",
    value: "soğan",
  },
  {
    name: "Sucuk",
    value: "sucuk",
  },
  {
    name: "Biber",
    value: "biber",
  },
  {
    name: "Kabak",
    value: "kabak",
  },
  {
    name: "Kanada Jambonu",
    value: "kanada-jambonu",
  },
  {
    name: "Domates",
    value: "domates",
  },
  {
    name: "Jalepeno",
    value: "jalepeno",
  },
];
const initialErrors = {
  size: false,
  thickness: false,
  additionalIngredients: false,
  customerName: false,
};
const initialForm = {
  size: "",
  thickness: "",
  additionalIngredients: [],
  customerName: "",
  orderNote: "",
  qty: 1,
  choicesSubtotal: 0,
  total: 85.5,
};

export default function OrderForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "additionalIngredients") {
      setFormData((prev) => {
        const has = prev.additionalIngredients.includes(value);
        const list = has
          ? prev.additionalIngredients.filter((v) => v !== value)
          : [...prev.additionalIngredients, value];

        const newSubtotal = list.length * 5;
        const newTotal = 85.5 + newSubtotal;

        return {
          ...prev,
          additionalIngredients: list,
          choicesSubtotal: newSubtotal,
          total: newTotal,
        };
      });
      return;
    }

    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const perPizzaChoices = Number(formData.choicesSubtotal || 0);
    const perPizzaTotal = Number(formData.total || 85.5);
    const qty = Number(formData.qty || 1);

    const finalChoices = Number((perPizzaChoices * qty).toFixed(2));
    const finalTotal = Number((perPizzaTotal * qty).toFixed(2));

    const payload = {
      ...formData,
      finalChoices,
      finalTotal,
    };

    const response = await axios.post("https://reqres.in/api/pizza", payload, {
      headers: {
        "x-api-key": import.meta.env.VITE_REQRES_KEY,
      },
    });
    console.log(response.data);
    navigate("/success");
  };
  function handleAddQty() {
    setFormData((prev) => ({ ...prev, qty: prev.qty + 1 }));
  }
  const handleMinusQty = () => {
    setFormData((prev) => ({
      ...prev,
      qty: prev.qty > 1 ? prev.qty - 1 : 1,
    }));
  };
  useEffect(() => {
    const sizeError = !formData.size;
    const thicknessError =
      !formData.thickness ||
      formData.thickness === "Hamur Kalınlığı" ||
      formData.thickness === "";
    const additionalIngredientsError =
      !formData.additionalIngredients ||
      formData.additionalIngredients.length < 4 ||
      formData.additionalIngredients.length > 10;
    const customerNameError =
      !formData.customerName || formData.customerName.length < 3;
    setErrors({
      size: sizeError,
      thickness: thicknessError,
      additionalIngredients: additionalIngredientsError,
      customerName: customerNameError,
    });
    setIsValid(
      !sizeError &&
        !thicknessError &&
        !additionalIngredientsError &&
        !customerNameError
    );
  }, [formData]);

  return (
    <>
      <div id="order-crumbs">
        <div id="crumbs-container">
          <a href="/">Anasayfa - </a>
          <p> Sipariş Oluştur</p>
        </div>
      </div>
      <div id="form-container">
        <h2>Position Absolute Acı Pizza</h2>
        <div id="price-review-container">
          <h1>85.50₺</h1>
          <div id="review-stars">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p id="description">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <Form onSubmit={handleSubmit}>
          <div id="size-thickness">
            <FormGroup tag="fieldset">
              <legend>
                Boyut Seç{" "}
                {errors.size && <legend className="required">*</legend>}
              </legend>
              <FormGroup check>
                <Input
                  id="size-kucuk"
                  name="size"
                  type="radio"
                  value="küçük"
                  onChange={handleChange}
                />
                <Label check htmlFor="size-kucuk">
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  id="size-orta"
                  name="size"
                  type="radio"
                  value="orta"
                  onChange={handleChange}
                />
                <Label check htmlFor="size-orta">
                  Orta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  id="size-buyuk"
                  name="size"
                  type="radio"
                  value="büyük"
                  onChange={handleChange}
                />
                <Label check htmlFor="size-buyuk">
                  Büyük
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>
                Hamur Seç{" "}
                {errors.thickness && <legend className="required">*</legend>}
              </legend>

              <Input
                id="hamur"
                name="thickness"
                type="select"
                value={formData.thickness}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </Input>
            </FormGroup>
          </div>
          <div id="additional-ingredients">
            <legend>
              Ekstra Malzemeler{" "}
              {errors.additionalIngredients && (
                <legend className="required">*</legend>
              )}
            </legend>
            <p>En az 4,En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div id="ingredient-checkboxes">
              {additionalIngredients.map((ingredient) => {
                return (
                  <FormGroup check tag="fieldset" key={ingredient.value}>
                    <Input
                      id={"ingredient-" + ingredient.value}
                      type="checkbox"
                      name="additionalIngredients"
                      value={ingredient.value}
                      checked={formData.additionalIngredients.includes(
                        ingredient.value
                      )}
                      onChange={handleChange}
                    />
                    <Label check htmlFor={"ingredient-" + ingredient.value}>
                      {ingredient.name}
                    </Label>
                  </FormGroup>
                );
              })}
            </div>
          </div>
          <div id="customer-name">
            <legend>
              Ad Soyad{" "}
              {errors.customerName && <legend className="required">*</legend>}
            </legend>
            <Input
              id="customerName"
              name="customerName"
              type="text"
              onChange={handleChange}
              value={formData.customerName}
              placeholder="Adınızı ve soyadınızı giriniz"
            />
          </div>
          <div id="order-note">
            <legend>Sipariş Notu</legend>
            <Input
              id="orderNote"
              name="orderNote"
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.orderNote}
              onChange={handleChange}
            />
          </div>
          <hr />

          {/* 2 tane qty butonu olacak biri mobilde hidden diğeri desktopta */}
          <div id="order-container-desktop">
            <div id="order-quantity">
              <button type="button" id="minus-qty" onClick={handleMinusQty}>
                -
              </button>
              <p id="quantity">{formData.qty}</p>
              <button type="button" id="add-qty" onClick={handleAddQty}>
                +
              </button>
            </div>
            <div id="order-now">
              <div id="order-total">
                <legend>Sipariş Toplamı</legend>
                <div id="subtotals">
                  <div id="choices-subtotals">
                    <p>Seçimler</p>
                    <p>
                      {formData.qty * formData.choicesSubtotal.toFixed(2)} ₺
                    </p>
                  </div>
                  <div id="total">
                    <p>Toplam</p>
                    <p>{formData.qty * formData.total.toFixed(2)} ₺</p>
                  </div>
                </div>
              </div>
              <button id="order-button" type="submit" disabled={!isValid}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div id="order-container-mobile">
            <div id="order-total">
              <legend>Sipariş Toplamı</legend>
              <div id="subtotals">
                <div id="choices-subtotals">
                  <p>Seçimler</p>
                  <p>{formData.qty * formData.choicesSubtotal.toFixed(2)} ₺</p>
                </div>
                <div id="total">
                  <p>Toplam</p>
                  <p>{formData.qty * formData.total.toFixed(2)} ₺</p>
                </div>
              </div>
            </div>
            <div id="qty-order-btns">
              <div id="order-quantity">
                <button type="button" id="minus-qty" onClick={handleMinusQty}>
                  -
                </button>
                <p id="quantity">{formData.qty}</p>
                <button type="button" id="add-qty" onClick={handleAddQty}>
                  +
                </button>
              </div>
              <button id="order-button" type="submit" disabled={!isValid}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
