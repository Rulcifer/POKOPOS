import coffeeIcon from "../assets/icon/solar_tea-cup-bold.svg";
import { useState } from 'react';

export default function Dashboard() {

  const [itemCount, setItemCount] = useState(7);

  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrement = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div class="flex flex-wrap justify-center mt-10">

      <div class="flex flex-wrap col-9">

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

        <div className="p-4 w-1/6">
            <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                <div className="flex items-center mb-3">
                    <img
                        src={coffeeIcon}
                        alt="Coffee Icon"
                        className="w-7 h-7 mr-3"
                    />
                </div>
                    <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                            {itemCount} Items
                        </p>
                    </div>
            </div>
        </div>

     </div>


        <div className="w-full my-4 border-b border-gray-300"></div>

        <div class="flex flex-wrap col-9">

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
            </div>

        </div>

        <div className={`h-screen px-4 pt-8 pb-4 bg-light justify-between flex-col bg-gray-400`}>
        <div className="p-4 w-1/6">
                <div className="flex rounded-lg h-26 w-full dark:bg-gray-800 bg-teal-400 p-4 flex-col" style={{ backgroundColor: '#D0DEDB' }}>
                    <div className="flex items-center mb-3">
                        <img
                            src={coffeeIcon}
                            alt="Coffee Icon"
                            className="w-7 h-7 mr-3"
                        />
                    </div>
                        <h2 className="text-white dark:text-white text-lg font-medium" style={{ color: '#313131' }}>Coffe</h2>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300" style={{ color: '#636363' }}>
                                {itemCount} Items
                            </p>
                            <div className="flex items-center mt-3">
                                <button
                                onClick={handleDecrement}
                                className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                >
                                -
                                </button>
                                <span className="mx-2 text-white dark:text-gray-300">{itemCount}</span>
                                    <button
                                    onClick={handleIncrement}
                                    className="p-2 bg-white dark:bg-gray-700 text-teal-400 rounded-full focus:outline-none"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                </div>
        </div>
    </div>

    

      </div>
  );
}

/* <div class="block max-w-[11rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="p-6">
        <img
          src={coffeeIcon}
          alt="Coffee Icon"
          className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
        />
        <h6 class="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
          Card subtitle
        </h6>
        <p class="mb-4 text-base  leading-normal text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          type="button"
          href="#"
          class="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Card Link
        </a>
        <a
          type="button"
          href="#"
          class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Another Link
        </a>
      </div>
    </div> */