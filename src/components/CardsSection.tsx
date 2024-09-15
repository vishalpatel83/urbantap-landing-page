import Card1 from "./card/card1.componet";
import Card2 from "./card/card2.component";
import Card3 from "./card/card3.component";
import GreenDot from "./GreenDot";
import Heading from "./Heading";

const CardsSection: React.FC = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-evenly h-[1152px] w-full bg-white">
        <Heading title="Packed with everything you need" />
        <img
          src={"/assets/cards.png"}
          height={1251}
          width={685}
          style={{ height: "685px", width: "1251px" }}
          alt="cards"
        />
      </div> */}
      <div className="bg-white  section-width">
        <div className="container mx-auto px-4 bg-white ">
          <div className="h1-card hidden lg:block md:block">
            <h1 className="text-4xl lg:text-5xl font-bold fs-70 text-black text-center">
              Packed with everything{" "}
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold fs-70 text-black text-center">
              you need{""}&nbsp;<span className="green-dot">.</span>
            </h1>
          </div>
          <div className="h1-card block md:hidden mobile-pack">
            <h1 className="text-2xl sm:text-4xl font-bold lg:text-5xl fs-40 text-black md:text-center text-start">
              Packed with{" "}
            </h1>
            <h1 className="text-2xl sm:text-4xl font-bold lg:text-5xl fs-40 text-black md:text-center text-start">
              everything you need{""}&nbsp;<span className="green-dot">.</span>
            </h1>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 card-div">
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
            {/* First Column - First Card with Two Inner Columns */}
         
                    <Card1
              title="Connect & Explore"
              img="card4"
              img2="explore"
              desc="Networking platform for every stackholder in real estate"
            />
            {/* </div> */}
            <div className="col-span-1 flex flex-col gap-4">
              <Card2
                title="Broker Database"
                desc="Consolidation brokers data of UAE "
                img="talent"
              />

              <Card2
                title="Talent Hub"
                desc="Job posting & Talent Acquisition"
                img="broker"
              />
            </div>
            {/* Third Column - One Card */}
            <Card1
              title={"Tap to Connect"}
              desc="Easily Shareble NFC cards with data & reviews"
              img="card1"
              img2="tap"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 card-div">
            <Card3
              title="Expanded Reach"
              desc="Brand Awareness for developers their projects"
              img="wall"
              img2="expand"
            />
            <Card3
              title="Curated Real Estate Listings"
              img="bhk"
              desc="A Moderated feed of real estate asks & sells available across UAE"
              img2="cur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsSection;
