import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import twitter from "../../images/iteration-2-images/footer/icons/twitter.png";
import li_0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import li_1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import li_2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import li_3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import li_4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import li_5 from "../../images/iteration-2-images/footer/insta/li-5.png";

const sicacıkYemekler = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];
const instagramPosts = [li_0, li_1, li_2, li_3, li_4, li_5];
export default function Footer() {
  return (
    <div id="footer-container">
      <div id="footer">
        <div id="footer-main">
          <div id="teknolojik-yemekler">
            <h1>Teknolojik Yemekler</h1>
            <div>
              <img src={icon1} alt="Icon 1" />
              <p className="tek-p">341 Londonderry Road, İstanbul Türkiye</p>
            </div>
            <div>
              <img src={icon2} alt="Icon 2" />
              <p className="tek-p">aciktim@teknolojikyemekler.com</p>
            </div>
            <div>
              <img src={icon3} alt="Icon 3" />
              <p className="tek-p">+90 216 123 45 67</p>
            </div>
          </div>
          <div id="siccacik-menuler">
            <h3>Sıccacık Menuler</h3>
            <ul>
              {sicacıkYemekler.map((yemek, index) => (
                <li key={index}>{yemek}</li>
              ))}
            </ul>
          </div>
          <div id="instagram">
            <h3>Instagram</h3>
            <div id="instagram-gallery">
              {instagramPosts.map((post, index) => (
                <img
                  key={index}
                  src={post}
                  alt={`Instagram Post ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div id="footer-bottom">
          <p id="copyright">© 2026 Teknolojik Yemekler</p>
          <a href="https://x.com/teknolojik-yemekler">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}
