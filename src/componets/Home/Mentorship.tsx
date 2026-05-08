import proof1 from "/images/John-E.jpeg";
import proof2 from "/images/Sarah-A.jpg";
import proof3 from "/images/Blessing-k.jpeg";
function Mentorship() {
  return (
    <div className="w-full pl-5 pr-5 mt-5">
      <span>
        <span className="inline-block pb-2 border-b-2 border-[#7761c9] font-semibold text-gray-200 text-[1.1rem] sm:text-[1.3rem]">
          <h5>Students, Real Results From Selar Affiliate </h5>
        </span>
        <span className="block mt-2 text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
          <h5>
            These are students, 9-5 workers, and stay-at-home moms/dads who
            tried Selar affiliate for the first time.
          </h5>
          <h5>
            None of them had experience. Now they're making on the side without
            quitting their main job{" "}
          </h5>
        </span>
        <div className="mt-4 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:bg-gray-900">
          <span className="flex flex-col border-2 rounded-md border-gray-400">
            <span className="flex flex-col gap-2 pl-2 pr-2 mt-2 mb-2">
              <h5 className="text-gray-200 font-bold text-[1.1rem] sm:text-[1.2rem]">
                John E.
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                  <strong className="text-red-400">Before:</strong> I was
                  stressed about college fees and upkeep. My parents were
                  trying, but i hated asking them for everything. I needed a
                  side hustle that wouldn't clash with lectures{" "}
                </h5>
                <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                  <strong className="text-blue-400">After:</strong> Started
                  Selar affiliate using the 3-step system in the guide. I only
                  posted on WhatsApp status and Twitter between classes.
                </h5>
                <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                  <strong className="text-green-400">Now:</strong> Making
                  &#8358;35k-80k/month consistently. I paid my second semester
                  fees myself last month, It feels good not to depend on anyone
                </h5>
              </h5>
            </span>
            <span>
              <img className="w-full h-full" src={proof1}></img>
            </span>
          </span>
          <span className="flex flex-col border-2 rounded-md border-gray-400">
            <span className="flex flex-col gap-2 pl-2 pr-2 mt-2 mb-2">
              <h5 className="text-gray-200 font-bold text-[1.1rem] sm:text-[1.2rem]">
                Sarah A.
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <strong className="text-red-400">Before:</strong> Workiing 8-5
                and barely had time for anything else. My salary covered bills
                but nothing extra. i wanted a side hustle that wouldn't
                interfere with my job.
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <strong className="text-blue-400">After:</strong> Started Selar
                affiliate in my spare time using the copy-paste templates.
                Posted during lunch breaks and after work on WhatsApp status.
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <strong className="text-green-400">Now:</strong> Making
                &#8358;300k-500k/month consistently in 6 weeks Best part is it
                doesn't affect my 9-5. The guide showed me exactly what to post
                and when.
              </h5>
            </span>
            <span>
              <img className="w-full h-full" src={proof2}></img>
            </span>
          </span>
          <span className="flex flex-col border-2 rounded-md border-gray-400">
            <span className="flex flex-col gap-2 pl-2 pr-2 mt-2 mb-2">
              <h5 className="text-gray-200 font-bold text-[1.1rem] sm:text-[1.2rem]">
                Blessing K.
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <strong className="text-red-400">Before:</strong> Been at home
                with my 2 kids for 2 years. Wanted to contribute finacially but
                couldn't leave the house . Tried a few things online but they
                were scams
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <strong className="text-blue-400">After:</strong> Joined Selar
                affiliate through this guide. I only work 1-2 hours daily when
                the kids nap.
              </h5>
              <h5 className="text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
                <strong className="text-green-400">Now:</strong> Making
                &#8358;25k-60k/month from my phone. I've been able to pay for my
                daughter's school fees without asking my husband for extra
                money. No products, no shipping, just posting.
              </h5>
            </span>
            <span>
              <img className="w-full h-full" src={proof3}></img>
            </span>
          </span>
        </div>
        <span className="block mt-2 text-gray-400 font-medium text-[1.1rem] sm:text-[1.2rem]">
          <h5>
            These people started with the same &#8358;3k guide your'e about to
            get. The only difference is they took action 30 days ago
          </h5>
        </span>
      </span>
    </div>
  );
}
export default Mentorship;
