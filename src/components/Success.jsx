import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const orderData = location.state?.orderData;

  return (
    <div className="success-container">
      <h1>TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>
      {orderData ? (
        <div className="order-details">
          <h2>Position Absolute Acı Pizza</h2>
          <p>Boyut: {orderData.size}</p>
          <p>Hamur: {orderData.thickness}</p>
          <p>Ek Malzemeler: {orderData.additionalIngredients.join(", ")}</p>
          <div>
            <h2>Sipariş Toplamı</h2>
            <p>Seçimler: {orderData.finalChoices} TL</p>
            <p>Toplam: {orderData.finalTotal} TL</p>
          </div>
        </div>
      ) : (
        <p>Sipariş detayları bulunamadı.</p>
      )}
    </div>
  );
}
