import CloudTag from "@/components/CloudTag";

function SkillsSection() {
  return (
    <section
      id="section-skills"
      className={`flex relative z-[1] h-screen flex-row justify-center snap-start section`}
    >
      <CloudTag ssrID={"homeSSRCloud"}/>
    </section>
  );
}

export default SkillsSection;
