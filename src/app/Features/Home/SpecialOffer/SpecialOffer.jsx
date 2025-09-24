// components/SpecialOfferCard.js
export default function SpecialOfferCard() {
  return (
    <div className="border-2 border-[#fed700] rounded-xl m p-4 w-full lg:w-lg h-full bg-white shadow-lg">
      <div className="">
        <div className="flex items-center justify-between">
          {/* Title */}
          <span className="text-lg font-semibold text-gray-800">
            Special Offer
          </span>

          {/* Circle Badge */}
          <div className="bg-[#fed700] text-black w-20 h-20 flex flex-col items-center justify-center rounded-full shadow text-center">
            <span className="text-xs font-medium">Save</span>
            <span className="text-base font-bold">$120</span>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/game.png"
            alt="Game Console Controller"
            className="mx-auto w-80 my-4"
          />
          
        </div>
        <h2 className="text-blue-700 w-50 mx-auto  font-semibold text-sm">
          Game Console Controller + USB 3.0 Cable
        </h2>
        <div className="flex items-center justify-center text-xl mt-5  text-red-600">
          <span className="line-through text-gray-500 text-lg mr-2">
            $99.00
          </span>
          <span className="text-4xl">$79.00</span>
        </div>

        <div className="my-2">
          <p className="text-sm">
            Available: <strong>6</strong> | Already Sold: <strong>28</strong>
          </p>
          <div className="w-full bg-gray-200 h-6 rounded-full mt-1">
            <div className="bg-[#fed700] h-6 rounded-full w-[26%]"></div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center">Hurry Up! Offer ends in:</p>
        <div className="flex justify-between text-center mt-2">
          {["HOURS", "MINS", "SECS"].map((label) => (
            <div key={label} className="bg-gray-100 p-1 rounded-md w-full mx-1">
              <div className="text-lg font-bold">00</div>
              <div className="text-xs text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
