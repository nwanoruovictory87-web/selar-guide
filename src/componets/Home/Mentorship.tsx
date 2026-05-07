import proof1 from "/images/john-udo.jpeg";
import proof2 from "/images/emmanual-chibuzo.jpg";
function Mentorship() {
  return (
    <div className="w-full pl-5 pr-5 mt-5">
      <span>
        <span className="inline-block pb-2 border-b-2 border-[#7761c9] font-semibold text-gray-200 text-[1.1rem] sm:text-[1.3rem]">
          <h5>Mentoship Guidance </h5>
        </span>
        <span className="block mt-2 text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
          <h5>
            Here are proof of students, 9-5 workers, stay at home moms who
            decided to give Selar a try and are now pleased with the results
          </h5>
        </span>
        <div className="mt-4 flex flex-col gap-4">
          <span className="flex flex-col border-[0.5px] rounded-md border-gray-400">
            <span className="flex flex-col gap-2 pl-2 pr-2 mt-2 mb-2">
              <h5 className="text-gray-200 font-bold text-[1.1rem] sm:text-[1.2rem]">
                John Udo
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                A student who was looking for a side hustle to take care of
                collage fees and was happy he became an affilate on Selar his
                now earning &#8358;30k-70k a month as an affiliate promoting
                digital products
              </h5>
            </span>
            <span>
              <img className="w-full h-full" src={proof1}></img>
            </span>
          </span>
          <span className="flex flex-col border-[0.5px] rounded-md border-gray-400">
            <span className="flex flex-col gap-2 pl-2 pr-2 mt-2 mb-2">
              <h5 className="text-gray-200 font-bold text-[1.1rem] sm:text-[1.2rem]">
                Emmanual Chibuzo
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                A student who was looking for a side hustle to take care of
                collage fees and was happy he became an affilate on Selar his
                now earning &#8358;30k-70k a month as an affiliate promoting
                digital products
              </h5>
            </span>
            <span>
              <img className="w-full h-full" src={proof2}></img>
            </span>
          </span>
        </div>
      </span>
    </div>
  );
}
export default Mentorship;
