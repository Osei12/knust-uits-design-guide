import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
// import Usage from "../../components/Usage";
// import EnabledImg from "../../assets/images/Toggler.png";

// import EnabledTextImg from "../../assets/images/togglers/enabled-text.png";
// import DisabledTextImg from "../../assets/images/togglers/disabled-text.png";
// import DisabledImg from "../../assets/images/togglers/disabled.png";
import ComponentImage from "../../components/ComponentImage";
// import ComponentClipBoard from "../../components/ComponentClipBoard";

import VarOne from "../../assets/images/carousel/slider1.png"
import VarTwo from "../../assets/images/carousel/slider2.png"
import VarThree from "../../assets/images/carousel/slider3.png"

export default function Carousel() {
  return (
    <ComponentSubPage
      heading="Carousel"
      description="  Showcases of multiple images in a rotating manner"
      subnote=" "
      backgroundColor="#72B673"
      color="#fbfbfb"
      toPrev="/components/navbar"
      prevName="Navigation"
    >
      {/* ENABLED */}
      <ComponentSub
        heading="Variation One"
        footnote=""
      >
        <ComponentImage image={VarOne} width="100%" heading="Enabled">
          {/* <ComponentClipBoard /> */}
        </ComponentImage>
      </ComponentSub>
      {/* END OF ENABLED */}

      {/* ENABLED WITH TEXT */}
      <ComponentSub
        heading="Variation Two"
        footnote=""
      > 
        <ComponentImage
          image={VarTwo}
          width="100%"
          heading="Enabled with text"
        >
          {/* <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFB06"
          /> */}
        </ComponentImage>
      </ComponentSub>
      {/* END OF ENABLED WITH TEXT */}

      {/* DISABLED */}
      <ComponentSub
        heading="Variation Three"
        footnote=""
      >
        <ComponentImage image={VarThree} width="100%" heading="Disabled">
          {/* <ComponentClipBoard /> */}
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
    </ComponentSubPage>

  );
}
