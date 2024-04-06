import ShopNowBtn from "../button/ShopNowBtn";

const CustomerReview = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-20 py-20 ">
        <h1 className="text-center font-extrabold text-4xl mb-4 ">
          Customers Reviews
        </h1>
        <img
          src="../../../src/assets/logo-leaf-new.png"
          alt="leaf-design"
          className="mb-3 mx-auto"
        />
        <div className="flex justify-evenly gap-16 text-center">
          <div className="bg-white w-80 h-80 shadow-2xl rounded-md px-5 py-10 mt-16 ">
            <div className="text-yellow-400 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                ></path>
              </svg>
            </div>
            <p>
              I recently discovered this organic shop website and I&apos;m
              incredibly impressed with their products and service. As someone
              who prioritizes organic and sustainable living, finding a reliable
              source for quality organic products online was crucial for me, and
              this...
            </p>
            <div className="flex items-center justify-center my-5 space-x-2">
              <img
                src="../../../src/assets/avatar/female.jpg"
                alt="yazhini"
                sizes=""
                className="w-14"
              />
              <h1 className="text-xl font-semibold ">Yazhini</h1>
            </div>
          </div>

          <div className="bg-gradient-to-bl from-slate-950 to-gray-400 hover:to-gray-600 h-96 w-80 bg-cover  rounded-lg relative">
            <img
              src="../../../src/assets/customer-purchase.jpg"
              className="w-full h-full rounded-md absolute mix-blend-overlay"
            />
            <div className="pt-6">
              <h1 className="font-bold text-3xl text-white text-center">
                Deals of the Day
              </h1>
              <h2 className="font-bold text-3xl text-white text-center">
                15% Off on All
              </h2>
              <h2 className="font-bold text-3xl text-white text-center">
                Vegetables & Fruits!
              </h2>
            </div>
            <div className="mx-auto absolute right-20 bottom-20">
              <ShopNowBtn />
            </div>
          </div>

          <div className="bg-white w-80 h-80 shadow-2xl rounded-md px-5 py-10 mt-16">
            <div className="text-yellow-400 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                ></path>
              </svg>
            </div>
            <p>
              While organic foods reduce your exposure to pesticide residues,
              there is no conclusive evidence that they are better for your
              health. Traditional farms are also regulated, and only safe levels
              of pesticide residue are allowed in their products.
            </p>
            <div className="flex items-center justify-center my-5 space-x-2">
              <img
                src="../../../src/assets/avatar/male.jpg"
                alt="yazhini"
                sizes=""
                className="w-14"
              />
              <h1 className="text-xl font-semibold ">Aadheeran</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="mx-20 flex items-center justify-evenly">
        <h1 className="font-bold text-2xl">Featured Brands:</h1>
        <img src="../../../src/assets/brands/logo-1.svg" alt="brand1" />
        <img src="../../../src/assets/brands/logo-2.svg" alt="brand2" />
        <img src="../../../src/assets/brands/logo-3.svg" alt="brand3" />
        <img src="../../../src/assets/brands/logo-4.svg" alt="brand4" />
        <img src="../../../src/assets/brands/logo-5.svg" alt="brand5" />
      </div>
    </div>
  );
};

export default CustomerReview;
