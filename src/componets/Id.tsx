import testImg from "/1.webp";
import coverImg from "/2.jpg";
import coverImg1 from "/1.jpg";
import coverImg4 from "/4.jpg";
function Id() {
  return (
    <div className="flex justify-center">
      <div className="relative w-fit h-fit">
        <img src={testImg}></img>
        <span className="absolute z-10 top-0 mt-[138px] ml-[335px]">
          <img src={coverImg}></img>
        </span>
        <span className="absolute z-10 top-0 mt-[140px] ml-[328px]">
          <h5 className="ml-3 font-mono font-[400px] text-[1.7rem] -mt-3 text-[#3f3d3d96]">
            [a]MICHAEL
          </h5>
        </span>
        <span className="absolute z-10 top-0 mt-[200px] ml-[335px]">
          <img src={coverImg1}></img>
        </span>
        <span className="absolute z-10 top-0 mt-[200px] ml-[328px]">
          <h5 className="ml-3 font-mono font-[600px]  text-[1.7rem] -mt-2 text-[#3f3d3d9f]">
            [b]DAWES
          </h5>
        </span>
        <span className="absolute h-20 z-10 top-0 mt-[310px] ml-[335px]">
          <img src={coverImg4}></img>
        </span>
        <span className="absolute h-20 z-10 top-0 mt-[315px] ml-[335px]">
          <img src={coverImg4}></img>
        </span>
        <span className="absolute h-20 z-10 top-0 mt-[310px] ml-[430px]">
          <img src={coverImg4}></img>
        </span>
        <span className="absolute h-20 z-10 top-0 mt-[315px] ml-[430px]">
          <img src={coverImg4}></img>
        </span>
        <span className="absolute z-10 top-0 mt-[308px] ml-[328px]">
          <h5 className="ml-3 font-mono font-[600px]  text-[2rem] -mt-2 text-[#3f3d3d96]">
            FRANKFURT MAIN
          </h5>
        </span>
      </div>
    </div>
  );
}
export default Id;
