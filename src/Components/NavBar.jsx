import Logo from "../assets/Logos/DxM-Logo.png";

function NavBar() {
  return (
    <section>
      <div className="flex items-center pl-20 pr-20 pt-5 gap-60">
        <nav className="gap-10 flex items-center justify-center uppercase text-xs font-semibold">
          <a
            href="#home"
            className="hover:text-[#d8b56a] active:text-[#d8b56a]"
          >
            Home
          </a>
          <a
            href="#shop"
            className="hover:text-[#d8b56a] active:text-[#d8b56a]"
          >
            Shop
          </a>
          <a
            href="#bundles"
            className="hover:text-[#d8b56a] active:text-[#d8b56a]"
          >
            Bundles
          </a>
          <a
            href="#contact"
            className="hover:text-[#d8b56a] active:text-[#d8b56a]"
          >
            Contact
          </a>
        </nav>
        <div className="logo">
          <img className="w-30 h-25" src={Logo} alt="Logo" />
        </div>
      </div>
    </section>
  );
}

export default NavBar;
