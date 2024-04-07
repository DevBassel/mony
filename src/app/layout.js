import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/src/Style/Normalize.css";
import "@/src/Style/Main.scss";
import "@/src/Style/Global.scss";
import "@/src/Style/Home.css";
import "@/src/Style/products.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function RootLayout({ children }) {
  return children;
}
