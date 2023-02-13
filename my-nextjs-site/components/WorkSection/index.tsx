import ParallaxText from "@/components/ParallaxText";
import FlipBook from "@/components/FlipBook";
import FlipBookMobile from "../FlipBookMobile";

function WorkSection() {
  return (
    <section
      id="section-work"
      className={`flex relative z-10 h-screen flex-row justify-center snap-start section`}
    >
      {/* <ParallaxText text="Work" /> */}
      <div className="flex justify-center items-center xs:max-lg:invisible">
        <FlipBook />
      </div>
      <div className="flex justify-center items-center lg:invisible">
        <div className="absolute left-[13%] xs:max-lg:left-[-25%] md:max-lg:left-[3%]">
          <FlipBookMobile />
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
