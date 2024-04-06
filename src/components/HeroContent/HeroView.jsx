import ShopNowBtn from "../button/ShopNowBtn";

const HeroView = () => {
  return (
    <div className="grid grid-cols-2 bg-gray-100 md:p-10 lg:p-24">
      <img
        src="../../../src/assets/organic-products-hero.png"
        alt="organic-product"
        className="w-fit object-fit"
      />
      <div className="flex flex-col pl-10 justify-evenly bg-[url('../../../src/assets/logo-leaf-new.png')] bg-no-repeat bg-right-bottom">
        <img
          src="../../../src/assets/logo-leaf-new.png"
          alt="leaf-design"
          className="w-fit mb-3"
        />
        <h5 className="font-semibold text-xl">Best Quality Products</h5>
        <h1 className="font-bold text-5xl ">
          The Organic Lifestyle Movements!!!
        </h1>
        <span>
          Organic foods promote more humane treatment of animals, as well as
          providing meat that is free from hormones and antibiotics.
        </span>
        <ShopNowBtn />
      </div>
    </div>
  );
};
export default HeroView;
