import videoGuide from "/videos/whatsAffiliateMarketing.mp4";
function WhatsAffilateMarketng() {
  return (
    <div className="flex flex-col gap-3 w-full justify-center mt-5 pl-5 pr-5">
      <span className="text-[1.1rem] text-center font-semibold text-gray-200 sm:text-[1.3rem] ">
        <span className="inline-block pb-2 border-b-2 border-[#7761c9]">
          <h5 className="">What Is Affiliate Marketing All About?</h5>
        </span>
      </span>
      <span className="w-full flex justify-center ">
        <span className="inline-block w-full sm:max-w-[700px]">
          <video className="w-full h-full" src={videoGuide} controls></video>
        </span>
      </span>
      <div className="flex flex-col mt-5 ">
        <span>
          <span className="inline-block pb-2 border-b-2 border-[#7761c9] font-semibold text-gray-200 text-[1.1rem] sm:text-[1.3rem]">
            <h5>How To Earn on Selar </h5>
          </span>
          <div className=" mt-3 text-gray-400 text-[1.1rem] font-medium">
            <ul className=" list-disc pl-5 flex flex-col gap-3">
              <li>
                Promote any Selar product for FREE and earn{" "}
                <strong className="text-red-400">50-80</strong>% commisson per
                sale
              </li>
              <li>
                Upload your own product and get thousands of affilate to sell it
                for you
              </li>
              <li>
                Creat your own course and keep{" "}
                <strong className="text-red-400">80</strong>% commission on
                every sale
              </li>
            </ul>
          </div>
        </span>
      </div>
      <div className="flex flex-col mt-5 ">
        <span>
          <span className="inline-block pb-2 border-b-2 border-[#7761c9] font-semibold text-gray-200 text-[1.1rem] sm:text-[1.3rem]">
            <h5>**What You Get With &#8358;3k**</h5>
          </span>
          <div className=" mt-3 text-gray-400 text-[1.1rem] font-medium">
            <span className=" flex flex-col gap-3">
              <h5>
                <strong className="text-red-400">1</strong> **Full Selar
                Affiliate Access** - Start promoting{" "}
                <strong className="text-red-400">1000</strong>+ digital products
                immediately
              </h5>
              <h5>
                <strong className="text-red-400">2</strong> ** Beginner To Pro
                Guide** -Step-by-step PDF + Guide Videos.
              </h5>
              <h5>
                <strong className="text-red-400">3</strong> **
                <strong className="text-red-400">50-80</strong>% Commission**
                -&#8358;30k course = &#8358;24k for you. One sale pays you back
                8x.
              </h5>
              <h5>
                <strong className="text-red-400">4</strong> **Instant Payouts**
                -Money goes straight to your Nigeria bank account.
              </h5>
            </span>
          </div>
        </span>
      </div>
      <div className="flex w-full  justify-center mt-4 pl-5 pr-5">
        <span className="pl-4 pr-4 pt-2 pb-2 bg-[#fcaa11] text-[1rem] sm:text-[1.1rem] font-bold rounded-full text-[rgb(255,255,255)] buttonShadow">
          <h5>Get ACCESS NOW(&#8358;3k)</h5>
        </span>
      </div>
    </div>
  );
}
export default WhatsAffilateMarketng;
