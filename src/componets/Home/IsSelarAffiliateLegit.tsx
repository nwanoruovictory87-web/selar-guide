import { useRef, useEffect } from "react";
import isSelarReal from "/videos/SelarIsReal.mp4";
import isSelarReal1 from "/videos/proof2.mp4";
import isSelarReal2 from "/videos/proof3.mp4";
type VideosControls = {
  firstVideo: boolean;
  secondVideo: boolean;
  lastVideo: boolean;
  thirdVideo: boolean;
  firstVideoFuncPlay: () => void;
  firstVideoFuncPause: () => void;
  secondVideoFuncPlay: () => void;
  secondVideoFuncPause: () => void;
  thirdVideoFuncPlay: () => void;
  thirdVideoFuncPause: () => void;
  lastVideoFuncPlay: () => void;
  lastVideoFuncPause: () => void;
  firstVideoRef: React.RefObject<HTMLVideoElement | null>;
  secondVideoRef: React.RefObject<HTMLVideoElement | null>;
  thirdVideoRef: React.RefObject<HTMLVideoElement | null>;
  lastVideoRef: React.RefObject<HTMLVideoElement | null>;
};
type PropsBody = {
  body: VideosControls;
};
function IsSelarAffiliateLegit(props: PropsBody) {
  const body = props.body;
  const secondVideo = body.secondVideo;
  const secondVideoRef = body.secondVideoRef;
  const secondVideoFuncPlay = body.secondVideoFuncPlay;
  const secondVideoFuncPause = body.secondVideoFuncPause;
  const thirdVideo = body.thirdVideo;
  const thirdVideoRef = body.thirdVideoRef;
  const thirdVideoFuncPlay = body.thirdVideoFuncPlay;
  const thirdVideoFuncPause = body.thirdVideoFuncPause;
  const lastVideo = body.lastVideo;
  const lastVideoRef = body.lastVideoRef;
  const lastVideoFuncPlay = body.lastVideoFuncPlay;
  const lastVideoFuncPause = body.lastVideoFuncPause;
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!buttonRef.current) return;
    const interval = setInterval(() => {
      buttonRef.current?.classList.add("shake-btn");
      setTimeout(() => {
        buttonRef.current?.classList.remove("shake-btn");
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full pt-4 pb-4 flex flex-col  justify-center pl-5 pr-5 mt-5">
        <span className="text-[1.1rem]   font-semibold text-[#6e6e06] sm:text-[1.3rem] ">
          <span className="flex w-fit pb-2 border-b-2 border-[#7761c9]">
            <h5 className="">Payouts From Selar Affiliates</h5>
            <i className="fa fa-bank text-[1.5rem] sm:text-[1.9rem]"></i>
          </span>
        </span>
        <span className="flex flex-col   gap-2 mt-2 text-gray-800 font-medium text-[1.1rem] sm:text-[1.2rem]">
          <h5>
            Wacth short clips of affiliates showing their Selar dashboard,
            withdrawal alerts, and talking about how they got their first sale.
            All unedited
          </h5>
        </span>
        <div className="flex flex-col  gap-4 sm:flex-row sm:justify-around  lg:max-h-175">
          <span className="w-full  relative      mt-3">
            <span className=" flex relative  h-full">
              <button
                className="inset-0 w-full h-full flex justify-center items-center bg-transparent cursor-pointer z-10 focus:outline-none"
                onClick={
                  secondVideo ? secondVideoFuncPause : secondVideoFuncPlay
                }
              >
                {secondVideo ? (
                  <i className="fa fa-pause text-[#ccc9c991] text-[4rem]"></i>
                ) : (
                  <i className="fa fa-play text-[#ccc9c991] text-[4rem]"></i>
                )}
              </button>
            </span>

            <video
              className="w-full  h-full object-fill  rounded-md"
              src={isSelarReal}
              ref={secondVideoRef}
            ></video>
          </span>
          <span className="w-full    relative    mt-3">
            <span className="absolute w-full h-full">
              <span className=" flex justify-center items-center h-full">
                <button
                  className="w-full h-full cursor-pointer"
                  onClick={lastVideo ? lastVideoFuncPause : lastVideoFuncPlay}
                >
                  {lastVideo ? (
                    <i className="fa fa-pause text-[#ccc9c991] text-[4rem]"></i>
                  ) : (
                    <i className="fa fa-play text-[#ccc9c991] text-[4rem]"></i>
                  )}
                </button>
              </span>
            </span>
            <video
              className="w-full h-full object-fill rounded-md"
              src={isSelarReal2}
              ref={lastVideoRef}
              muted
            ></video>
          </span>
          <span className="w-full    relative    mt-3">
            <span className="absolute w-full h-full">
              <span className=" flex justify-center items-center h-full">
                <button
                  className="w-full h-full cursor-pointer"
                  onClick={
                    thirdVideo ? thirdVideoFuncPause : thirdVideoFuncPlay
                  }
                >
                  {thirdVideo ? (
                    <i className="fa fa-pause text-[#ccc9c991] text-[4rem]"></i>
                  ) : (
                    <i className="fa fa-play text-[#ccc9c991] text-[4rem]"></i>
                  )}
                </button>
              </span>
            </span>
            <video
              className="w-full h-full object-fill rounded-md"
              src={isSelarReal1}
              ref={thirdVideoRef}
              muted
            ></video>
          </span>
        </div>
      </div>

      <div className="flex w-full  justify-center mt-6 pl-5 pr-5 bg-white ">
        <span
          className="pl-4 pr-4 pt-2 pb-2 bg-blue-400 text-[1rem] sm:text-[1.1rem] font-bold rounded-full text-[rgb(255,255,255)] buttonShadow"
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
export default IsSelarAffiliateLegit;
