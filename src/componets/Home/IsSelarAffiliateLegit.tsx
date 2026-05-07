import isSelarReal from "/videos/SelarIsReal.mp4";
function IsSelarAffiliateLegit() {
  return (
    <div className="w-full flex flex-col justify-center pl-5 pr-5 mt-5">
      <span className="text-[1.1rem]  font-semibold text-gray-200 sm:text-[1.3rem] ">
        <span className="inline-block pb-2 border-b-2 border-[#7761c9]">
          <h5 className="">Is Selar Affilate Legit?</h5>
        </span>
      </span>
      <span className="w-full h-fit mt-3">
        <video className="w-full h-full" src={isSelarReal} controls></video>
      </span>
    </div>
  );
}
export default IsSelarAffiliateLegit;
