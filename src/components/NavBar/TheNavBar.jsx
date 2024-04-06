const TheNavBar = () => {
  return (
    // <div className="py-3 sticky z-10 top-0 left-0 right-0 bg-white">
    <div className="py-3">
      <div className="grid grid-cols-2 gap-5 px-8">
        <div className="flex items-center justify-start">
          <a href="#">
            <img
              src="../../../src/assets/Shopify-logo.png"
              className="mix-blend-screen w-52 h-24 object-cover"
              alt="organic-shopifylogo"
            />
          </a>
          <div className="px-2 space-x-5 text-lg">
            <a href="#" className="nav-bar ">
              Everything
            </a>
            <a href="#" className="nav-bar ">
              Groceries
            </a>
            <a href="#" className="nav-bar ">
              Juice
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="px-2 space-x-5 text-lg">
            <a href="#" className="nav-bar ">
              About
            </a>
            <a href="#" className="nav-bar ">
              Contact
            </a>
            <a href="#" className="text-green-hover">
              ₹0.0
            </a>
            <a href="#" className="text-green-hover inline-block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.3 21q-.95 0-1.625-.687T5 18.675V9.4L3.175 5H2q-.425 0-.712-.288T1 4q0-.425.288-.712T2 3h1.85q.3 0 .55.175t.375.45L6.175 7H20.95q.575 0 .875.475t.025.975L19 14.025q1.275.2 2.138 1.175T22 17.5q0 1.45-1.012 2.475T18.525 21q-1.475 0-2.487-1.025T15.025 17.5q0-.5.125-.925t.35-.825l-3.275-.3l-3 4.5q-.325.5-.837.775T7.3 21m9.55-7.125L19.325 9H7l1.25 3q.2.5.638.838t1.012.387zm-9.525 5.1q.05 0 .225-.125l2.425-3.6q-1.225-.125-1.925-.587T7 13.7v5q0 .125.1.2t.225.075M18.5 19q.65 0 1.075-.437T20 17.5q0-.65-.425-1.075T18.5 16q-.625 0-1.062.425T17 17.5q0 .625.438 1.063T18.5 19m-1.65-5.125l-6.95-.65z"
                ></path>
              </svg>
            </a>
            <a href="#" className="nav-bar inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNavBar;
