const AddToCart = () => {
  return (
    <a
      href="#new-site"
      target="_blank"
      className="text-white bg-green w-fit flex items-center space-x-1 p-2 rounded-md  transform hover:scale-105 hover:text-black duration-200 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11 9V6H8V4h3V1h2v3h3v2h-3v3zM7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M1 4V2h3.275l4.25 9h7l3.9-7H21.7l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4z"
        ></path>
      </svg>
      <div>Add to Cart</div>
    </a>
  );
};

export default AddToCart;
