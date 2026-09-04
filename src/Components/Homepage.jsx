import Background from "../assets/Products/Landing-hero.png";
import Divider from "../assets/Logos/Divider.png";
import Navbar from "./Navbar";
import Details from "./Details";

function Homepage() {
  return (
    <section
      id="hero-bg"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "40% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div className="pl-25 p-[30px]">
        <p className="text-[12px] uppercase tracking-[2px] pb-[15px]">
          Premium Hair Products
        </p>
        <h1 className="text-[70px] leading-15 tracking-[5px]">
          Control
          <br />
          is an art
        </h1>
        <img className="w-40 py-2" src={Divider} />
        <p className="text-[14px] font-thin">
          Uncompromising performance. Intentional design.
          <br />
          Hair products for those who set their own standards.
        </p>

        <div className="pt-6">
          <button className="border-1 border-[#d8b56a] text-[12px] text-[#d8b56a] px-8 py-3 uppercase tracking-[1px]">
            <a href="#shop">Shop The Collection</a>
          </button>
        </div>
      </div>

      <Details />
    </section>
  );
}

export default Homepage;
