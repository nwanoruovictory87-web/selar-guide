import isSelarReal from "/videos/SelarIsReal.mp4";
import isSelarReal1 from "/videos/proof2.mp4";
function IsSelarAffiliateLegit() {
  return (
    <div className="w-full flex flex-col justify-center pl-5 pr-5 mt-5">
      <span className="text-[1.1rem]  font-semibold text-gray-200 sm:text-[1.3rem] ">
        <span className="inline-block pb-2 border-b-2 border-[#7761c9]">
          <h5 className="">See Real Payouts From Selar Affiliates</h5>
        </span>
      </span>
      <span className="flex flex-col gap-2 mt-2 text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
        <h5>
          Wacth short clips of affiliates showing their Selar dashboard,
          withdrawal alerts, and talking about how they got their first sale.
          All unedited
        </h5>
      </span>
      <div className="flex flex-col gap-2">
        <span className="w-full max-w-175 border-2 p-1 border-gray-400 rounded-md h-fit mt-3">
          <video className="w-full h-full " src={isSelarReal} controls></video>
        </span>
        <span className="w-full max-w-175 border-2 p-1 border-gray-400 rounded-md h-fit mt-3">
          <video className="w-full h-full " src={isSelarReal1} controls></video>
        </span>
      </div>
      <div className="flex w-full  justify-center mt-4 pl-5 pr-5">
        <span className="pl-4 pr-4 pt-2 pb-2 bg-[#fcaa11] text-[1rem] sm:text-[1.1rem] font-bold rounded-full text-[rgb(255,255,255)] buttonShadow">
          <h5>Get ACCESS NOW</h5>
        </span>
      </div>
    </div>
  );
}
export default IsSelarAffiliateLegit;
