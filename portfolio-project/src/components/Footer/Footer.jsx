import { Link, useLocation } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  // useLocation ile Route path'leri yakalanabilir
  const { pathname: path } = useLocation();
  console.log(path); // /
  // console.log(useLocation()); // {pathname: '/contact', search: '', hash: '', state: null, key: 'hr7w68nc'}

  // ? rel="noopener noreferer"
  // bir güvenlik önlemi olarak bu özellikler ekleniyor. Bir web sayfasında target="_blank" özelliğine sahip bağlantılara tıkladığınızda ya da bir bağlantı window.open() ile açıldığında, bağlantı, bulunduğunuz sekmede/sayfada değil, otomatik olarak yeni bir sayfada açılır. Açılan bu yeni sayfa, kendisini açan sayfanın bazı bilgilerine erişebilir ve kısmi olarak kontrol edebilir. Bu da potansiyel olarak bir güvenlik açığı oluşturuyor.

  // noopener özelliği tarayıcıya yeni açılan sayfanın kendisini açan sayfaya ait değişkeni sıfırlamasını bildiriyor. Bu sayede açılan yeni sayfa, önceki sayfa hakkında bilgi sahibi olamıyor.

  // Benzer şekilde noreferrer özelliği de, yeni açılan sayfanın referer değerinin sıfırlanmasını sağlayarak, yeni sayfanın bir önceki sayfanın adres bilgisine ulaşmasını engelliyor.
  return (
    <footer
      className={
        path === "/"
          ? "horizontal"
          : path === "/contact"
          ? "center"
          : "vertical"
      }
    >
      <div className="socials">
        <Link to={path}>
          <i className="fa-brands fa-twitter fa-2x"></i>
        </Link>
        <Link to={path}>
          <i className="fa-brands fa-facebook fa-2x"></i>
        </Link>
        <Link to={path}>
          <i className="fa-brands fa-instagram fa-2x"></i>
        </Link>
        <Link to={path}>
          <i className="fa-brands fa-github fa-2x"></i>
        </Link>
      </div>
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
