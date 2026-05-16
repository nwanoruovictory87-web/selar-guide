import myImage from "/images/victory.jpg";
function AboutMe() {
  return (
    <div className="pl-5 pr-5 mt-10 flex flex-col">
      <span>
        <span className="flex w-fit pb-2 border-b-2 border-[#7761c9] font-semibold text-[#6e6e06] text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.3rem]">
          <h5>About Me </h5>
          <i className="fa fa-user-circle mt-0.5 ml-1 text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem]"></i>
        </span>
      </span>
      <div className="flex flex-col  ">
        <span className="mt-4 w-40 h-40  rounded-full ">
          <img className="w-full h-full rounded-full" src={myImage}></img>
        </span>
        <div className="flex flex-col gap-4 mt-4 sm:mt-10">
          <span className="text-gray-800 font-semibold text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.3rem]">
            <h5>
              Hey there, i'm Victory - a software developer and Selar affiliate
            </h5>
          </span>
          <span className="text-gray-800 text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] font-medium">
            <h5>
              I started on Selar back in 2023 and I'll be honnest, i didn't
              believe it at first.{" "}
            </h5>
            <h5>
              But after making 4 sales in 2 weeks, I was overhyped. Now i'm
              consistently making &#8358;400k-&#8358;700k/month - all from my
              phone and access to the internet.
            </h5>
          </span>
          <div className="mt-3">
            <span className="text-[0.9rem] min-[400px]:text-[1.1rem] text-gray-800 font-semibold sm:text-[1.2rem]">
              <h5>In this guide, i'm giving you everything i learned.</h5>
            </span>
            <ul className=" list-disc pl-5 mt-2 text-gray-800 font-medium text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem]">
              <li>My real experience working with Selar since 2023</li>
              <li>How to pick top-selling products that actually convert</li>
              <li>
                How to promote without spamming on WhatsApp, Facebook & Twitter
              </li>
              <li>How to get paid straight to your Nigerian bank account</li>
            </ul>
            <span className="block mt-4 text-[0.9rem] min-[400px]:text-[1.1rem] text-gray-800 font-semibold sm:text-[1.2rem]">
              <h5>All of this for a one-time payment of &#8358;10,500.</h5>
            </span>
            <span className="block mt-2  text-gray-800 font-medium text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem]">
              <h5>
                Give it a try- you'll be amazed at what Selar can do for you.
              </h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
