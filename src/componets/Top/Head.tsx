import { useRef, useEffect } from "react";
function Head() {
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!buttonRef.current) return;
    setInterval(() => {
      buttonRef.current?.classList.add("shake-btn");
      setTimeout(() => {
        buttonRef.current?.classList.remove("shake-btn");
      }, 1000);
    }, 3000);
  }, []);
  return (
    <>
      <div className="flex w-full justify-center mt-5 pl-5 pr-5">
        <span className="pl-3 pr-3 pt-1 pb-1 rounded-md bg-blue-400 text-gray-50 font-semibold ">
          <h5>Selar Affiliate </h5>
        </span>
      </div>
      <div className="flex w-full justify-center mt-5 pl-5 pr-5">
        <h1 className="text-[1.4rem] font-bold  font-sans text-[#6e6e06]">
          What If I Told You Could Be Earning &#8358;100k-&#8358;400k/Month -
          All You Need Is A Phone, Good Internet, And 1hr/Day?{" "}
        </h1>
      </div>
      <div className="flex w-full  justify-center mt-4 pl-5 pr-5 text-gray-800 font-medium">
        <h5 className="max-w-260 text-[1rem] sm:text-[1.1rem]">
          With one time payment of &#8358;10,500 affiliate fee you get acccess
          to Selar + a complete guide that takes you fom total begnner to
          professional affiliate marketer. No product needed. No shipping. No
          store You promote and earn 50-80% commisson.{" "}
        </h5>
      </div>
      <div className="flex w-full  justify-center mt-4 pl-5 pr-5">
        <span
          className="pl-4 pr-4 pt-2 pb-2 bg-blue-400  text-[1rem] sm:text-[1.1rem] font-bold rounded-full text-[rgb(255,255,255)] buttonShadow "
          ref={buttonRef}
        >
          <a href="https://selar.com/p/q8o6?affiliate=vbp8x2" target="_blank">
            Get ACCESS NOW <strong>(&#8358;10,500)</strong>
          </a>
        </span>
      </div>
    </>
  );
}
export default Head;
