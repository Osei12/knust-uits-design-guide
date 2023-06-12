import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
// import Usage from "../../components/Usage";
// import EnabledImg from "../../assets/images/Toggler.png";
import FirstNav from "../../assets/images/navbar/first nav.png";
import SecondNav from "../../assets/images/navbar/Second nav.png";
import ThirdNav from "../../assets/images/navbar/Third nav.png";
// import EnabledTextImg from "../../assets/images/togglers/enabled-text.png";
// import DisabledTextImg from "../../assets/images/togglers/disabled-text.png";
// import DisabledImg from "../../assets/images/togglers/disabled.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";
// import ComponentSub from "../../components/ComponentSub";
// import ComponentSubPage from "../../components/ComponentSubPage";
// import Usage from "../../components/Usage";
import BreadCrumbImg from "../../assets/images/navigation/breadcrumb.png";
import RegularTextLinkImg from "../../assets/images/navigation/regular-text.png";
// import ComponentImage from "../../components/ComponentImage";
// import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Navbar() {
  return (
    <ComponentSubPage
      heading="Navbar"
      description="  "
      subnote=" "
      backgroundColor="#72B673"
      color="#fbfbfb"
      toPrev="/components/modals"
      prevName="Modal"
      toNext="/components/carousel"
      nextName="Carousel"
    >
      {/* ENABLED */}
      <ComponentSub
        heading="Variation One"
        footnote=""
      >
        <ComponentImage image={FirstNav} width="100%" heading="Enabled">
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF ENABLED */}

      {/* ENABLED WITH TEXT */}
      <ComponentSub
        heading="Variation Two"
        footnote=""
      >
        <ComponentImage
          image={SecondNav}
          width="100%"
          heading="Enabled with text"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFB06"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF ENABLED WITH TEXT */}

      {/* DISABLED */}
      <ComponentSub
        heading="Variation Three"
        footnote=""
      >
        <ComponentImage image={ThirdNav} width="100%" heading="Disabled">
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DISBALED */}

      {/*<Usage>
        <li>Enable/Disable Dark Mode feature.</li>
        <li>Toggle between grid and list view for displaying content.</li>
        <li>Turn on/off push notifications.</li>
        <li>Enabling/Disabling Autoplay for videos or audio files.</li>
        <li>Show/Hide Password field in a login or sign up form.</li>
      </Usage>
      */}
       {/* BREADCRUMP */}
       <ComponentSub
        footnote="Show the user their current location within the website's hierarchy."
        heading="Breadcrump"
      >
        <ComponentImage
          heading="Breadcrump"
          image={BreadCrumbImg}
          width="35rem"
        >
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF BREADCRUMP */}

      {/* REGULAR TEXT */}
      <ComponentSub
        footnote="Used to highlight the active or selected page."
        heading="Regular text"
      >
        <ComponentImage heading="Regular text" image={RegularTextLinkImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF REGULAR TEXT */}

      {/* REGULAR TEXT WITH BORDER */}
      <ComponentSub
        footnote="Used to highlight the active or selected page."
        heading="Regular text with border"
      >
        <ComponentImage
          heading="Regular text with border"
          image={RegularTextLinkImg}
        >
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF REGULAR TEXT WITH BORDER */}
    </ComponentSubPage>

  );
}
