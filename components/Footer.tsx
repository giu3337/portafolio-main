import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import SmoothAnimations from "./ui/SmoothAnimations";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <SmoothAnimations delay={0.2} y={40} duration={1.0}>
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
        </SmoothAnimations>

        <SmoothAnimations delay={0.4} y={30} duration={1.0}>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
        </SmoothAnimations>

        <SmoothAnimations delay={0.6} y={35} duration={1.0}>
          <a href="mailto:giu3337@icloud.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </SmoothAnimations>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <SmoothAnimations delay={0.8} y={25} x={-30} duration={1.0}>
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Giuseppe Garcia-Cancela
          </p>
        </SmoothAnimations>

        <SmoothAnimations delay={1.0} y={25} x={30} duration={1.0}>
          <div className="flex items-center md:gap-3 gap-6 mb-8 mt-5 md:mb-0">
            {socialMedia.map((info, index) => (
              <SmoothAnimations
                key={info.id}
                delay={1.2 + index * 0.1}
                y={20}
                scale={true}
                duration={0.8}
              >
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-colors">
                  <img src={info.img} alt="icons" width={20} height={20} />
                </div>
              </SmoothAnimations>
            ))}
          </div>
        </SmoothAnimations>
      </div>
    </footer>
  );
};

export default Footer;
