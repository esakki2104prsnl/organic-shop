import ShopNowBtn from "../button/ShopNowBtn";

const OfferView = () => {
  return (
    <>
      <div className="bg-black relative">
        <div className="mx-40 py-10 text-white flex items-center justify-between ">
          <h1 className="text-5xl font-extrabold">
            Get 25% Off On Your First Purchase!
          </h1>
          <ShopNowBtn />
        </div>
        <div className="absolute top-[123px] left-[740px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M1 3h22L12 22"></path>
          </svg>
        </div>
      </div>

      <div className="bg-salute-50">
        <div className="mx-32 py-5">
          <p className="text-center text-2xl py-2">
            Try it for FREE. No registration needed.
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferView;
