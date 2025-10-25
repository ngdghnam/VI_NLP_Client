import IntroduceCard from "../Cards/IntroduceCard";
import Circle from "../Circle";
import Ticket from "../Ticket/Ticket";
import { Button } from "../ui/button";
import vectaryTexture from "@/assets/vectaryTexture.png";
// import insight2 from "@/assets/insight2.png";
// import discoConnectSpotlight from "@/assets/discoConcertSpotlight.png";
// import stage from "@/assets/stage.png";
// import stage2 from "@/assets/stage2.png";
// import Contact from "../Contact/Contact";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end p-4 relative">
        <div
          style={{
            width: "761px",
            height: "322px",
          }}
          className="absolute top-[100px] left-[70px]"
        >
          <h1 className="text-5xl font-extrabold hero-header-text">
            VIRTUAL IDOL EXPERIENCE COMBINED WITH DATA-DRIVEN INSIGHTS
          </h1>
          <p className="text-base my-6 mr-[49%]">
            By Leveraging AI And Trend Analytics, We Deliver In-Depth
            Understanding Of What Drives Engagement In The Virtual Idol World.
          </p>
          <Button
            className="uppercase try-now-btn font-extrabold text-xl"
            variant="destructive"
          >
            Try now
          </Button>
        </div>
        <div>
          <Circle width="653.72px" height="653.72px" className="bg-circle-1">
            <img
              src={vectaryTexture}
              alt=""
              style={{
                transform: "scale(1.4)",
              }}
              className="absolute m-auto z-30 top-[40px] right-[120px]"
            />
            <IntroduceCard
              className="z-100 top-[260px] right-[480px] absolute"
              header="ENGAGING"
              description="Interactive, Adaptive & Always Performing"
            ></IntroduceCard>

            <IntroduceCard
              className="z-100 top-[120px] right-[40px] absolute border-solid border-2"
              header="IMMERSIVE"
              description="Blurring Reality With Virtual Performance"
            ></IntroduceCard>

            <IntroduceCard
              className="z-100 top-[400px] right-[40px] absolute border-solid border-2"
              header="RELEVANT"
              description="Driven By Trends – Powered By Fan Data"
            ></IntroduceCard>
          </Circle>
        </div>
      </div>

      <div className="mt-20">
        <Ticket
          // imageURL={insight2}
          // backgroundImageURL={discoConnectSpotlight}
          header="CELEBRITY VIRTUAL IDOL (CVA)"
          description="These are a virtual idol modeled after a real-life celebrity, replicating their face, style, or voice to extend their presence in the digital space and enhance engagement with fans."
          classNameForImg="absolute top-0 bottom-[160px] right-0 left-0 m-auto"
          // afterBgImageURL={stage2}
        ></Ticket>
      </div>

      <div className="mt-20">
        <Ticket
          // imageURL={insight2}
          // backgroundImageURL={discoConnectSpotlight}
          header="fully virtual idol (FVI)"
          description="These Are a completely fictional virtual idol, created using AI and computer graphics, existing independently as a digital entity with its own identity. They can be designed to build a career and interact with audiences like real artists."
          classNameForImg="absolute top-0 bottom-[160px] right-0 left-0 m-auto"
          // afterBgImageURL={stage2}
        ></Ticket>
      </div>
    </div>
  );
};

export default Hero;
