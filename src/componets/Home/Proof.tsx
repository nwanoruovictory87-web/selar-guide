import proof1 from "/images/google1.png";
import proof2 from "/images/google2.png";
function Proof() {
  return (
    <div className="pl-5 pr-5 mt-10 flex flex-col">
      <span>
        <span className="flex w-fit pb-2 border-b-2 border-[#7761c9] font-semibold text-[#6e6e06] text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.3rem]">
          <h5>Selar Affilate Is Real & Trusted by Google </h5>
          <i className="fa fa-shield mt-0.5 ml-1 text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem]"></i>
        </span>
        <span className="flex flex-col    mt-2 text-gray-800 font-medium text-[0.9rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem]">
          <h5>Selar: One of the top affiliate networks in Africa.</h5>
          <h5>
            800,000+ users and counting. Helping students, 9-5 workers, stay at
            home moms/days earn consistent income through digital marketing
          </h5>
        </span>
        <div className="flex flex-col mt-2 gap-2">
          <span>
            <img className="w-full  h-full rounded-md" src={proof1}></img>
          </span>
          <span>
            <img className="w-full  h-full rounded-md" src={proof2}></img>
          </span>
        </div>
      </span>
    </div>
  );
}
export default Proof;
