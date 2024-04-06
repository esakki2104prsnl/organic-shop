import AddToCart from "../button/AddToCart";

const Products = () => {
  return (
    <>
      {/* Tomato */}
      <div className="bg-white rounded-md w-96 p-3">
        <h1 className="font-bold text-2xl">Fresh Tomato</h1>
        <p className="text-gray-500 pl-2">
          The tomato fruit is globular or ovoid. Botanically, the fruit exhibits
          all of the common characteristics of berries
        </p>
        <div className="pt-3 ml-2">
          <AddToCart />
        </div>
        <img
          src="../../../src/assets/cart/tomato-png.png"
          alt="tomato"
          className="ml-32 w-48"
        />
      </div>
      {/*Water Melom */}
      <div className="bg-white rounded-md w-96 p-3">
        <h1 className="font-bold text-2xl">Watery Water Melon</h1>
        <p className="text-gray-500 pl-2">
          Watermelon is grown in favorable climates from tropical to temperate
          regions worldwide for its large edible fruit, which is a berry.
        </p>
        <div className="pt-3 ml-2">
          <AddToCart />
        </div>
        <img
          src="../../../src/assets/cart/watermelon-png.jpg"
          alt="tomato"
          className="ml-32 w-48"
        />
      </div>
      {/* Wheat Grain */}
      <div className="bg-white rounded-md w-96 p-3">
        <h1 className="font-bold text-2xl">Wheat Grains</h1>
        <p className="text-gray-500 pl-2">
          Wheat is a bunch grass with upright tillers. The leaves are rolled in
          the whorl.Leaf blades are smooth near the base and rough near tip on
          the upper side.
        </p>
        <div className="pt-3 ml-2">
          <AddToCart />
        </div>
        <img
          src="../../../src/assets/cart/wheat-grain-png.png"
          alt="tomato"
          className="ml-32 w-48"
        />
      </div>
    </>
  );
};

export default Products;
