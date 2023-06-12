import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import ColorsImg from "../assets/images/color/brand-green.png";
import HeroiconsSideImg from "../assets/images/icon/heroicons-solid.png";
import FathomImg from "../assets/images/typography/cover.png";
// import PageHeadImage from "../assets/images/pageHeaderCardImage/11.jpg"

export default function Styles() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="#2C802E"
        marginBottom="5rem"
        heroTitle="Styles"
        heroSubtitle="Customizable design elements to enhance the look and feel of web applications."
        subtitleColor="#FFFF"
        // backgroundImage={PageHeadImage}
      ></PageHeaderCard>
      <section className="mb-32">
        <div className="grid grid-cols-2 gap-3">
          <ImageCard
            heading="Animation"
            bodyText=" Tips for adding engaging and effective animation to your application."
            to="/styles/animation"
            bgHeight="20rem"
            backgroundImage=""
          />
          <ImageCard  
            heading="Color"
            bodyText="Guidelines for choosing and using a cohesive color palette."
            to="/styles/color"
            bgHeight="20rem"
            backgroundSize="cover"
            backgroundImage={ColorsImg}
          />
          <ImageCard
            heading="Iconography"
            bodyText=" Guidance on using icons effectively to enhance interfaces and improve usability."
            to="/styles/iconography"
            bgHeight="20rem"
            backgroundImage={HeroiconsSideImg}
          />
          <ImageCard
            heading="Typography"
            bodyText="Best practices for selecting and pairing fonts to create a visually appealing interfaces."
            to="/styles/typography"
            bgHeight="20rem"
            backgroundImage={FathomImg}
          />
        </div>
      </section>
    </>
  );
}
