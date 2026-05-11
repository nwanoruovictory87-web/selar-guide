import isSelarReal from "/videos/SelarIsReal.mp4";
import isSelarReal1 from "/videos/proof2.mp4";
function IsSelarAffiliateLegit() {
  return (
    <>
      <div className="w-full pt-4 pb-4 flex flex-col bg-yellow-500 justify-center pl-5 pr-5 mt-5">
        <span className="text-[1.1rem]   font-semibold text-gray-50 sm:text-[1.3rem] ">
          <span className="inline-block pb-2 border-b-2 border-[#7761c9]">
            <h5 className="">See Payouts From Selar Affiliates</h5>
          </span>
        </span>
        <span className="flex flex-col   gap-2 mt-2 text-gray-50 font-medium text-[1.1rem] sm:text-[1.2rem]">
          <h5>
            Wacth short clips of affiliates showing their Selar dashboard,
            withdrawal alerts, and talking about how they got their first sale.
            All unedited
          </h5>
        </span>
        <div className="flex flex-col  gap-2 sm:flex-row sm:justify-around  lg:max-h-150">
          <span className="w-full        mt-3">
            <video
              className="w-full h-full object-fit"
              src={isSelarReal}
              controls
            ></video>
          </span>
          <span className="w-full      mt-3">
            <video
              className="w-full h-full object-fit"
              src={isSelarReal1}
              controls
            ></video>
          </span>
        </div>
      </div>
      <div className="flex w-full  justify-center mt-6 pl-5 pr-5 bg-white ">
        <span className="pl-4 pr-4 pt-2 pb-2 bg-blue-400 text-[1rem] sm:text-[1.1rem] font-bold rounded-full text-[rgb(255,255,255)] buttonShadow">
          <a href="https://selar.com/p/q8o6?affiliate=vbp8x2" target="_blank">
            Get ACCESS NOW <strong>(&#8358;10,500)</strong>
          </a>
        </span>
      </div>
    </>
  );
}
export default IsSelarAffiliateLegit;
