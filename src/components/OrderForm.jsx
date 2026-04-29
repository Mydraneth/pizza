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

export default function OrderForm() {
  return (
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
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <Form>
        <div id="size-thickness">
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Input name="boyut" type="radio" value="küçük" />
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="boyut" type="radio" value="orta" />
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="boyut" type="radio" value="büyük" />
              <Label check>Büyük</Label>
            </FormGroup>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Hamur Seç</legend>
            <Input id="hamur" name="hamur" type="select">
              <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalın">Kalın</option>
            </Input>
          </FormGroup>
        </div>
        <div id="additional-ingredients">
          <legend>Ekstra Malzemeler</legend>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div id="ingredient-checkboxes">
            {additionalIngredients.map((ingredient) => {
              return (
                <FormGroup check tag="fieldset" key={ingredient.value}>
                  <Input type="checkbox" value={ingredient.value} />
                  <Label check>{ingredient.name}</Label>
                </FormGroup>
              );
            })}
          </div>
        </div>
        <div id="order-note">
          <legend>Sipariş Notu</legend>
          <Input
            id="orderNote"
            name="orderNote"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>
        <hr />

        {/* 2 tane qty butonu olacak biri mobilde hidden diğeri desktopta */}
        <div id="order-container">
          <div id="order-quantity">
            <button id="minus-qty">-</button>
            <p id="quantity">1</p>
            <button id="add-qty">+</button>
          </div>
          <div id="order-now">
            <div id="order-total">
              <legend>Sipariş Toplamı</legend>
              <div id="subtotals">
                <div id="choices-subtotals">
                  <p>Seçimler</p>
                  <p>25.50₺</p>
                </div>
                <div id="total">
                  <p>Toplam</p>
                  <p>110.50₺</p>
                </div>
              </div>
            </div>
            <button id="order-button">SİPARİŞ VER</button>
          </div>
        </div>
      </Form>
    </div>
  );
}
