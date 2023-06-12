import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import SldierCards from "../../assets/images/cards/slider cards.png"
import SimpleCard from "../../assets/images/cards/Simple cards.png"
import TopStoryCard from "../../assets/images/cards/Top story card.png"
import OtherNewsCard from "../../assets/images/cards/other news card.png"
import SmallCards from "../../assets/images/cards/small cards.png"

// import CardImg2 from "../../assets/images/cards/card-2.png";
import DashboardImg from "../../assets/images/dashboard-view.png";
import ComponentClipBoard from "../../components/ComponentClipBoard";
import ComponentImage from "../../components/ComponentImage";

export default function Cards() {
  return (
    <ComponentSubPage
      heading="Cards"
      description="Group related information and actions together."
      backgroundImage={DashboardImg}
      backgroundColor="#72B673"
      color="#fbfbfb"
      backgroundPosition="bottom right 10rem"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/buttons"
      toNext="/components/forms"
      prevName="Buttons"
      nextName="Forms"
    >
      {/* CARD */}
      <ComponentSub
        footnote=" "
        heading="Simple Cards"
      >
        <ComponentImage image={SimpleCard} width="15rem" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage>
        <ComponentImage image={SimpleCard} width="15rem" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        footnote=""
        heading="Slider Cards"
      >
        <ComponentImage image={SldierCards} width="100%" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage>
        {/* <ComponentImage image={SldierCards} width="20rem" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage> */}
      </ComponentSub>

      <ComponentSub
        footnote=" "
        heading="Card with image"
      >
        <ComponentImage image={TopStoryCard} width="100%" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage>
        <ComponentImage image={OtherNewsCard} width="100%" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage>
      </ComponentSub>      
      <ComponentSub
        footnote=""
        heading="Small Cards"
      >
        <ComponentImage image={SmallCards} width="100%" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage>
        {/* <ComponentImage image={OtherNewsCard} width="100%" heading="Card">
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
        </ComponentImage> */}
      </ComponentSub>
      {/* END OF CARD */}

      <Usage>
        <li>
          Displaying information about products, such as their name, image,
          price, and description.
        </li>
        <li>Displaying headlines, images, and a brief summary of articles</li>
        <li>
          Displaying information about a user, such as their name, profile
          picture, and bio.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
