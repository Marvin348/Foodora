import mobileHero from "@/assets/mobile-hero.png";
import desktopHero from "@/assets/desktop-hero.png";
import desktopXLHero from "@/assets/desktopXL-hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="text-white">
      <div className="container">
        <Link to="/search">
          <picture>
            <source srcSet={desktopXLHero} media="(min-width: 80rem)" />
            <source srcSet={desktopHero} media="(min-width: 40rem)" />
            <img
              className="h-[80vh] w-full rounded-2xl object-cover sm:h-full xl:h-screen"
              src={mobileHero}
              alt="Hero Banner - zur Suche"
            />
          </picture>
        </Link>
      </div>
    </section>
  );
};
export default Hero;
