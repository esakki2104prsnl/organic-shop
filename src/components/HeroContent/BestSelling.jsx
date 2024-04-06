import LeafContainer from "./LeafContainer";

const BestSelling = () => {
  return (
    <div >
      <div className="mx-20 py-20">
        <h1 className="text-center font-extrabold text-4xl mb-4">
          Best Selling Products
        </h1>
        <img
          src="../../../src/assets/logo-leaf-new.png"
          alt="leaf-design"
          className="mb-3 mx-auto"
        />
        <div className="mx-16">
          <ul className="flex gap-10 py-5">
            <li className="flex flex-col gap-1 w-fit text-center cursor-pointer hover:scale-110 duration-500">
              <img
                src="../../../src/assets/product/coffee-asorted-400x400.jpg"
                alt=""
                className="w-80 rounded-md"
              />
              <span className="text-sm text-stone-800">Groceries</span>
              <a href="http://" className="text-lg font-semibold">
                Assorted Coffee
              </a>
              <span className="text-lg font-semibold">₹699.94</span>
            </li>
            <li className="flex flex-col gap-1 w-fit text-center hover:scale-110 duration-500">
              <img
                src="../../../src/assets/product/sanitizer-400x400.jpg"
                alt=""
                className="w-80 rounded-md"
              />
              <span className="text-sm text-stone-800">Hand Sanitizer</span>
              <a href="http://" className="text-lg font-semibold">
                Assorted Coffee
              </a>
              <span className="text-lg font-semibold">₹199.00</span>
            </li>
            <li className="flex flex-col gap-1 w-fit text-center hover:scale-110 duration-500">
              <img
                src="../../../src/assets/product/red-chillies-400x400.jpg"
                alt=""
                className="w-80 rounded-md"
              />
              <span className="text-sm text-stone-800">Groceries</span>
              <a href="http://" className="text-lg font-semibold">
                Handpicked Red Chillies
              </a>
              <span className="text-lg font-semibold">₹249.00</span>
            </li>
            <li className="flex flex-col gap-1 w-fit text-center relative hover:scale-110 duration-500">
              <div className="bg-green rounded-full w-12 h-12 p-2 text-base text-white shadow-md shadow-gray-600 absolute -right-4 -top-4">
                {" "}
                Sale!
              </div>
              <img
                src="../../../src/assets/product/edible-oil-400x400.jpg"
                alt=""
                className="w-80 rounded-md"
              />
              <span className="text-sm text-stone-800">Groceries</span>
              <a href="http://" className="text-lg font-semibold">
                Natural Extracted Edible Oil
              </a>
              <div className="flex items-center mx-auto gap-2">
                <span className="text-lg font-semibold line-through text-gray-400">
                  ₹450.00
                </span>
                <span className="text-lg font-semibold">₹350.00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <LeafContainer />
    </div>
  );
};

export default BestSelling;
