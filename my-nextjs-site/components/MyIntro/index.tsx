import MorphingWords from "@/components/MorphingWords";

function MyIntro() {
  return (
    <section
      id="section-intro"
      className={`flex relative z-10 h-screen flex-col justify-center ml-4 mb-4`}
    >
      <div className="heading-subtexts-container">
        <h1 className="heading-h1-container">
          <p className="heading-text">Hi,</p>
          <p className="heading-text">{`I'm Greg,`}</p>
        </h1>
        <MorphingWords />
      </div>
    </section>
  );
}

export default MyIntro;
