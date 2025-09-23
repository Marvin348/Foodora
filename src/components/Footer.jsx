import logo from "@/assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="mt-12 text-white">
      <div className="container">
        <div className="bg-primary flex flex-col justify-between flex-wrap py-14 px-10 rounded-2xl gap-16 mb-8 md:flex-row">
          <div className="flex flex-col gap-8 basis-[30%]">
            <div>
              <img className="w-24 h-auto" src={logo} alt="" />
              <p className="text-left text-xs mt-2">
                © 2025 Foodora Alle Rechte vorbehalten
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold">Aboniere</h3>
              <p>unseren Newsletter</p>
              <form className="relative w-full mt-2 sm:max-w-[350px]">
                <input type="text" className="w-full p-[0.3rem] rounded-2xl border-0 bg-white text-black focus: outline-0" />
                <button className="absolute inset-y-0 right-0 bg-accent px-3 rounded-2xl flex items-center justify-center border-0 text-white cursor-pointer" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className="">
              <h3 className="mb-2 font-bold">Folge Uns</h3>
              <div className="flex items-center mt-2 gap-2 text-white text-lg">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-2 font-bold">Navigation</h3>
            <ul className="flex flex-col gap-4 list-none text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menü</a>
              </li>
              <li>
                <a href="#">Über Uns</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 font-bold">Kategorien</h3>
            <ul className="flex flex-col gap-4 list-none text-white">
              <li>
                <a href="#">Burger</a>
              </li>
              <li>
                <a href="#">Nudeln</a>
              </li>
              <li>
                <a href="#">Salat</a>
              </li>
              <li>
                <a href="#">Dessert</a>
              </li>
              <li>
                <a href="#">Rolls</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 font-bold">Kontakt</h3>
            <ul className="flex flex-col gap-4 list-none text-white">
              <li>
                <a href="#">
                  <i className="fa-solid fa-envelope"></i> Email
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-envelope"></i> Email
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone"></i> + (123) 1234-567-8901
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-location-dot"></i> 03048 Teststr. 5,
                  Cottbus, Deutschland
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
