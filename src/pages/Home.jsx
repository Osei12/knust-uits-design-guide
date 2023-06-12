import Button from "../components/Button";
// import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
// import PatternImg from "../assets/images/pattern/parttern.png"
import PatternImg from "../assets/images/pageHeaderCardImage/14.jpg"

export default function Home() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="#0F925C"
        backgroundImage={PatternImg}
        marginBottom="5rem"
        heroTitle="UITS Design Guide for Websites"
        heroSubtitle="A comprehensive guide to help you design captivating and effective websites"
        subtitleColor="white"
        backgroundSize="cover"

      >
        <Button
          buttonText="Get started"
          backgroundColor="#BAB708"
          color="#fff"
        />
      </PageHeaderCard>
      {/* <section className="m-2 min-h-screen">
        <div className="">
          <div className="pl-10">
            <h1 className="text-5xl font-medium">Design Guide Updates</h1>
            <div className="grid grid-cols-3 gap-2 mt-8">
              <ImageCard
                heading="Animation"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
              />
              <ImageCard
                heading="Typgraphy"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
              />
              <ImageCard
                heading="Color"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Resources --> */}
      {/* <section className="m-2 min-h-screen">
        <div className="">
          <div className="pl-10">
            <h1 className="text-5xl font-medium">Resources</h1>
            <div className="grid grid-cols-3 mt-8">
              <ImageCard
                heading="Lorem ipsum, dolem"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
