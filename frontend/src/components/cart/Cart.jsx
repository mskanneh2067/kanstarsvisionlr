import "./cart.css";

const Cart = () => {
  return (
    <>
      <div className="z-108 absolute top-7 md:top-7 right-1 max-w-52 min-w-52  shadow-lg border rounded-sm hidden group-hover:block  bg-white">
        <div className="absolute -top-7 bg-[#6d6e70] rotate-45"></div>
        <div className="bg-[#6d6e70] w-full p-3 text-white font-bold rounded-t-md">
          Your Cart
        </div>
        <div className="flex w-full justify-between items-center p-3 ">
          <div className="font-normal">Subtotal</div>
          <div className="font-normal">$0.00</div>
        </div>
        <hr className="bg-gray-400 mb-3 w-44 mx-auto h-[2px]" />
        <div className=" p-3 text-white font-bold flex items-center justify-center w-44 h-9 rounded-md mx-auto mb-3 cursor-pointer bg-[rgb(228,48,0)]">
          View Cart
        </div>
      </div>
      ;
    </>
  );
};

export default Cart;
