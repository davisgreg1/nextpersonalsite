import MorphingWords from "@/components/MorphingWords";
import MorphingLetters from "@/components/MorphingLetters";
import MyParticles from "@/components/MyParticles";

function MyIntro() {
  return (
    <>
      <MyParticles />
      <section
        id="section-intro"
        className={`flex relative z-10 h-screen flex-col justify-center ml-4 mb-4 section`}
      >
        <div className="heading-subtexts-container h-28 text-sm md:text-2xl">
          <h1 className="flex select-none">
            <MorphingLetters str={`Hi,`} />
            <MorphingLetters str={`I'm Greg`} />
          </h1>
          <MorphingWords />
        </div>
      </section>
    </>
  );
}

export default MyIntro;
