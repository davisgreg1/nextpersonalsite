import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfigObj from "@/particlesConfigObj";

function MyParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  const particlesConfig: ISourceOptions = useMemo(() => particlesConfigObj, []);

  if (init) {
    return (
      <div>
        <Particles
          id="tsparticles"
          options={particlesConfig}
          // particlesLoaded={particlesLoaded}
        />
      </div>
    );
  }
}

export default MyParticles;
