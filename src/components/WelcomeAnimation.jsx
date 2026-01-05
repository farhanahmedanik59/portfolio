import React from "react";
import Lottie from "lottie-react";

const WelcomeAnimation = () => {
  // Lottie animation data (you can get free ones from lottiefiles.com)
  const animationData = {
    // This is a sample animation JSON - replace with your own
    // Get free animations from: https://lottiefiles.com/featured
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 800,
    h: 600,
    nm: "Welcome Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 1",
        td: 0,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [400, 300, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [200, 200], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: {
                  a: 1,
                  k: [
                    { t: 0, s: [0], h: 0 },
                    { t: 60, s: [360], h: 0 },
                  ],
                  ix: 4,
                },
              },
              {
                ty: "st",
                c: { a: 0, k: [0.066, 0.325, 1, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 10, ix: 5 },
              },
              { ty: "tr", o: { a: 0, k: 100 }, p: { a: 0, k: [0, 0] } },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <Lottie animationData={animationData} loop={false} autoplay={true} style={{ width: "100%", height: "100%" }} />
        <h1 className="text-4xl font-bold text-center mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
