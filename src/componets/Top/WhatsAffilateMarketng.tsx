import React, { useState, useRef } from "react";
import IsSelarAffiliateLegit from "../Home/IsSelarAffiliateLegit";
import videoGuide from "/videos/whatsAffiliateMarketing.mp4";
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
function WhatsAffilateMarketng() {
  const [firstVideo, setFirstVideo] = useState<boolean>(false);
  const [secondVideo, setSecondVideo] = useState<boolean>(false);
  const [thirdVideo, setThirdVideo] = useState<boolean>(false);
  const [lastVideo, setLastVideo] = useState<boolean>(false);
  const [isFirstVideoPlaying, setIsFirstVideoPlaying] =
    useState<boolean>(false);
  const secondVideoRef = useRef<HTMLVideoElement | null>(null);
  const lastVideoRef = useRef<HTMLVideoElement | null>(null);
  const firstVideoRef = useRef<HTMLVideoElement | null>(null);
  const thirdVideoRef = useRef<HTMLVideoElement | null>(null);
  const playLastVideo = async () => {
    try {
      if (!lastVideoRef.current) return;
      if (!isFirstVideoPlaying) {
        await lastVideoRef.current.play();
        setLastVideo(true);
        setIsFirstVideoPlaying(true);
      } else {
        if (firstVideo) pauseFirstVideo();
        if (secondVideo) pauseSecondVideo();
        if (thirdVideo) pauseThirdVideo();
        await lastVideoRef.current.play();
        setLastVideo(true);
      }
    } catch (error) {
      alert("Error playing last video:" + error);
    }
  };
  const pauseLastVideo = () => {
    if (!lastVideoRef.current) return;
    lastVideoRef.current.pause();
    setLastVideo(false);
  };
  const playThirdVideo = async () => {
    try {
      if (!thirdVideoRef.current) return;
      if (!isFirstVideoPlaying) {
        await thirdVideoRef.current.play();
        setThirdVideo(true);
        setIsFirstVideoPlaying(true);
      } else {
        if (firstVideo) pauseFirstVideo();
        if (secondVideo) pauseSecondVideo();
        if (lastVideo) pauseLastVideo();
        await thirdVideoRef.current.play();
        setThirdVideo(true);
      }
    } catch (error) {
      alert("Error playing third video:" + error);
    }
  };
  const pauseThirdVideo = () => {
    if (!thirdVideoRef.current) return;
    thirdVideoRef.current.pause();
    setThirdVideo(false);
  };
  const playSecondVideo = async () => {
    try {
      if (!secondVideoRef.current) return;
      if (!isFirstVideoPlaying) {
        await secondVideoRef.current.play();
        setSecondVideo(true);
        setIsFirstVideoPlaying(true);
      } else {
        if (firstVideo) pauseFirstVideo();
        if (thirdVideo) pauseThirdVideo();
        if (lastVideo) pauseLastVideo();
        await secondVideoRef.current.play();
        setSecondVideo(true);
      }
    } catch (error) {
      alert("Error playing second video:" + error);
    }
  };
  const pauseSecondVideo = () => {
    if (!secondVideoRef.current) return;
    secondVideoRef.current.pause();
    setSecondVideo(false);
  };
  const playFirstVideo = async () => {
    alert("Playing first video");
    try {
      if (!firstVideoRef.current) return;
      if (!isFirstVideoPlaying) {
        await firstVideoRef.current.play();
        setFirstVideo(true);
        setIsFirstVideoPlaying(true);
      } else {
        if (lastVideo) pauseLastVideo();
        if (thirdVideo) pauseThirdVideo();
        if (secondVideo) pauseSecondVideo();
        await firstVideoRef.current.play();
        setFirstVideo(true);
      }
    } catch (error) {
      alert("Error playing first video:" + error);
    }
  };
  const pauseFirstVideo = () => {
    if (!firstVideoRef.current) return;
    firstVideoRef.current.pause();
    setFirstVideo(false);
  };
  const body: VideosControls = {
    firstVideo: firstVideo,
    secondVideo: secondVideo,
    thirdVideo: thirdVideo,
    lastVideo: lastVideo,
    firstVideoFuncPlay: playFirstVideo,
    firstVideoFuncPause: pauseFirstVideo,
    secondVideoFuncPlay: playSecondVideo,
    secondVideoFuncPause: pauseSecondVideo,
    thirdVideoFuncPlay: playThirdVideo,
    thirdVideoFuncPause: pauseThirdVideo,
    lastVideoFuncPlay: playLastVideo,
    lastVideoFuncPause: pauseLastVideo,
    firstVideoRef: firstVideoRef,
    secondVideoRef: secondVideoRef,
    thirdVideoRef: thirdVideoRef,
    lastVideoRef: lastVideoRef,
  };
  return (
    <>
      <div className="flex flex-col gap-3 w-full justify-center mt-5 pl-5 pr-5">
        <span className="text-[1.1rem] text-center font-semibold text-[#6e6e06] sm:text-[1.3rem] ">
          <span className="flex justify-center">
            <span className="flex w-fit pb-2 border-b-2 border-[#7761c9]">
              <h5 className="">What Is Affiliate Marketing All About</h5>
              <i className="fa fa-question-circle text-[1.5rem] sm:text-[1.9rem]"></i>
            </span>
          </span>
        </span>
        <span className="w-full relative flex justify-center ">
          <span className="absolute w-full h-full">
            <span className=" flex justify-center items-center h-full">
              <button
                className="w-full h-full cursor-pointer"
                onClick={() => alert("Video is loading, please wait...")}
              >
                {firstVideo ? (
                  <i className="fa fa-pause text-[#ccc9c991] text-[4rem]"></i>
                ) : (
                  <i className="fa fa-play text-[#ccc9c991] text-[4rem]"></i>
                )}
              </button>
            </span>
          </span>
          <span className="inline-block w-full sm:max-w-175">
            <video
              className="w-full h-full"
              src={videoGuide}
              ref={firstVideoRef}
              muted
            ></video>
          </span>
        </span>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-7 lg:justify-around lg:">
          <div className="flex flex-col  mt-5 ">
            <span>
              <span className="flex w-fit pb-2 border-b-2 border-[#7761c9] font-semibold text-[#6e6e06] text-[1.1rem] sm:text-[1.3rem]">
                <h5>How To Earn on Selar </h5>
                <i className="fa fa-piggy-bank mt-0.5 text-[1.5rem] sm:text-[1.9rem]"></i>
              </span>
              <div className=" mt-3 text-gray-800 text-[1.1rem] font-medium">
                <ul className=" list-disc pl-5 flex flex-col gap-3">
                  <li>
                    Promote any Selar product for FREE and earn{" "}
                    <strong className="text-red-400">50-80</strong>% commisson
                    per sale
                  </li>
                  <li>
                    Upload your own product and get thousands of affilate to
                    sell it for you
                  </li>
                  <li>
                    Creat your own course and keep{" "}
                    <strong className="text-red-400">60</strong>% commission on
                    every sale
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div className="flex flex-col mt-5 ">
            <span>
              <span className="flex w-fit pb-2 border-b-2 border-[#7761c9] font-semibold text-[#6e6e06] text-[1.1rem] sm:text-[1.3rem]">
                <h5>What You Get With &#8358;10,500</h5>
                <i className="fa fa-question-circle text-[1.5rem] sm:text-[1.9rem]"></i>
              </span>
              <div className=" mt-3 text-gray-800 text-[1.1rem] font-medium">
                <span className=" flex flex-col gap-3">
                  <h5>
                    <strong className="text-red-400">1</strong> **Full Selar
                    Affiliate Access** Start promoting{" "}
                    <strong className="text-red-400">1000</strong>+ digital
                    products immediately
                  </h5>
                  <h5>
                    <strong className="text-red-400">2</strong> ** Beginner To
                    Pro Guide** Step-by-step PDF + Guide Videos.
                  </h5>
                  <h5>
                    <strong className="text-red-400">3</strong> **
                    <strong className="text-red-400">50-80</strong>%
                    Commission** &#8358;30k course = &#8358;24k for you. One
                    sale pays you back 2x.
                  </h5>
                  <h5>
                    <strong className="text-red-400">4</strong> **Instant
                    Payouts** Money goes straight to your Nigeria bank account.
                  </h5>
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <IsSelarAffiliateLegit body={body} />
    </>
  );
}
export default WhatsAffilateMarketng;
