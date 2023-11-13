import "./style.css";
import Block1 from "./Home/Block1";
import Slide from "./Home/Slider";
import Block2 from "./Home/Block2";
import CategoryCake from "../../../system/category-cake.json";

function HomePage() {
  return (
    <main className="Content">
      <Block1 />
      <Slide
        images={[
          "slide-1.jpg",
          "slide-2.jpg",
          "slide-3.jpg",
          "slide-4.jpg",
          "slide-5.jpg",
          "slide-6.jpg",
          "slide-7.jpg",
          "slide-8.jpg",
          "slide-9.jpg",
        ]}
      />
      <Block2 category={CategoryCake} />
    </main>
  );
}

export default HomePage;
