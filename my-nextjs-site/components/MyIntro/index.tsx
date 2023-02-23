import MorphingWords from "@/components/MorphingWords";
import MorphingLetters from "@/components/MorphingLetters";
import MyParticles from "@/components/MyParticles";
import ChatBot from "@/components/ChatBot";

function MyIntro() {
  return (
    <>
      <MyParticles />
      <section
        id="section-intro"
        className={`z-[2] flex relative h-screen flex-col justify-end ml-4 mb-4 section`}
      >
        <div className="heading-subtexts-container flex h-1/2 w-full justify-center items-start flex-col text-sm md:text-2xl">
          <h1 className="flex select-none">
            <MorphingLetters str={`Hi,`} />
            <MorphingLetters str={`I'm Greg`} />
          </h1>
          <MorphingWords />
        </div>
        <div className="flex w-full h-1/2 justify-end items-end">
          <div className="h-full w-full flex">
            <ChatBot />
          </div>
        </div>
      </section>
    </>
  );
}

export default MyIntro;
