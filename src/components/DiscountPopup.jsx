import { useEffect, useState } from "react";
import deliveryMan from "@/assets/deliveryman.png";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 30000);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="overlay flex justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div className="bg-white z-100 w-[20rem] h-[30rem] rounded-2xl p-4">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <div>
              <h2 className="text-4xl font-extrabold">
                Jetzt <span className="text-red-600">10%</span>
              </h2>
              <p className="text-2xl font-bold">Auf deine erste Bestellung</p>
            </div>
            <div className="">
              <img src={deliveryMan} alt="" className="w-[11rem] h-auto" />
            </div>
            <p className="border rounded-2xl p-2 font-bold">
              Verwende <span className="text-red-600 font-extrabold text-2xl">TRY10</span> am
              Checkout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DiscountPopup;
