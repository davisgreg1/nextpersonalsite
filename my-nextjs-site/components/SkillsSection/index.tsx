import ParallaxText from "@/components/ParallaxText";
import CloudTag from "@/components/CloudTag";

function SkillsSection() {
  return (
    <section
      id="section-skills"
      className={`flex relative z-10 h-screen flex-row justify-center snap-start section`}
    >
      {/* <ParallaxText text="Skills" /> */}
      <CloudTag ssrID={"homeSSRCloud"}/>
    </section>
  );
}

export default SkillsSection;
