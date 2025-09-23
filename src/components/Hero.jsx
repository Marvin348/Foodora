const Hero = () => {
  return (
    <section className="text-white">
      <div className="container">
        <div className="bg-hero h-full rounded-2xl py-8 px-6 sm:py-14 sm:px-10 lg:h-screen">
          <div className="flex flex-col justify-center  items-start gap-8 h-full max-w-[300px] md:max-w-[480px] lg:max-w-[700px]">
            <h1 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-snug sm:font-extrabold">
              Dein Lieblingsessen nur einen Klick entfernt
            </h1>
            <p className="hidden leading-7 sm:block md:text-xl">
              Frisch zubereitete Gerichte, direkt zu dir nach Hause geliefert.
              Genieße jeden Bissen – ohne Wartezeit, ohne Stress.
            </p>
            <button className="bg-accent rounded-full py-2 px-4 text-white font-semibold cursor-pointer sm:py-3 sm:px-5 md:text-xl">
              Zum Menü <i className="fa-solid fa-arrow-right"></i>
            </button>
            <div className="flex flex-col gap-2 flex-grow justify-end md:text-lg">
              <div className="flex items-center gap-2">
                <button className="bg-white text-black rounded-full h-8 w-8 flex items-center justify-center md:p-4">
                  <i className="fa-solid fa-truck"></i>
                </button>
                <p>Lieferung an deine Haustür</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-white text-black rounded-full h-8 w-8 flex items-center justify-center md:p-4">
                  <i className="fa-solid fa-box-open"></i>
                </button>
                <p>100% Genuss Garantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
