/* eslint-disable react/prop-types */
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
// import ButtonSmallImg from "../../assets/images/buttons/small.png";
// import ButtonLargeImg from "../../assets/images/buttons/large.png";
// import ButtonIconImg from "../../assets/images/buttons/button-icon.png";
import ComponentClipBoard from "../../components/ComponentClipBoard";
import ComponentImage from "../../components/ComponentImage";
import MainButton from "../../assets/images/buttons/Main-button.png"
import RoundedButton from "../../assets/images/buttons/Rounded-Button.png"
import OutlineButton from "../../assets/images/buttons/Outline-Button.png"
import IconButton1 from "../../assets/images/buttons/Icon-Button-main.png"
import IconButton2 from "../../assets/images/buttons/Icon-Button-main-1.png"
import IconButton3 from "../../assets/images/buttons/Icon-Button-main-2.png"


export default function Buttons() {
  return (
    <ComponentSubPage
      heading="Buttons"
      description="Trigger an action or navigate to another page."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#72B673"
      color="#fbfbfb"
      toPrev="/components/alerts"
      toNext="/components/cards"
      prevName="Alerts"
      nextName="Cards"
    >
      {/* MAIN BUTTON */}
      <ComponentSub
        heading="Default button"
        footnote=""
      >
        <ComponentImage
          image={MainButton}
          width="100%"
          heading="Main button"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            value="#177445"
            bgColorVal="#177445"
          />
          <ComponentClipBoard
            name="Color"
            bgColorVal="#FFFFFF"
            propertyName="color"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Padding"
            propertyName="padding"
            value="0.5rem 1.5rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="1.125rem"
          />
          <ComponentClipBoard
            name="Font weight"
            propertyName="font-weight"
            value="500"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF MAIN BUTTON */}

      {/* ROUNDED BUTTON */}
      <ComponentSub
        footnote=""
        heading="Rounded Button"
      >
        <ComponentImage
          image={RoundedButton}
          width="100%"
          heading="Button with icon"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            value="#177445"
            bgColorVal="#177445"
          />
          <ComponentClipBoard
            name="Color"
            bgColorVal="#FFFFFF"
            propertyName="color"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.75rem"
          />
          <ComponentClipBoard
            name="Padding"
            propertyName="padding"
            value="0.5rem 1.5rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="1.125rem"
          />
          <ComponentClipBoard
            name="Font weight"
            propertyName="font-weight"
            value="500"
          />
          <ComponentClipBoard name="Gap" propertyName="gap" value="0.25rem" />
        </ComponentImage>
      </ComponentSub>
      {/* ROUNDED BUTTON */}

      {/* OUTLINE BUTTON */}
      <ComponentSub
        footnote="
        "
        heading="Outline button"
      >
        <ComponentImage
          image={OutlineButton}
          width="100%"
          heading="Outline button"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            value="#FFFF"
            bgColorVal="#FFF"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#177445"
            bgColorVal="#177445"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #177445;"
          />
          <ComponentClipBoard
            name="Padding"
            propertyName="padding"
            value="0.5rem 1.5rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.875rem"
          />
          <ComponentClipBoard
            name="Font weight"
            propertyName="font-weight"
            value="400"
          />
        </ComponentImage>
      </ComponentSub>
      {/* OUTLINE BUTTON */}

           {/* ICON BUTTON */}
           <ComponentSub
        footnote="
        "
        heading="Icon buttons"
      >
        <ComponentImage
          image={IconButton1}
          width="100%"
          heading="Outline button"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            value="#177445"
            bgColorVal="#177445"
          />
             <ComponentClipBoard
            name="Display"
            propertyName="display"
            value="flex"
            
          />
                <ComponentClipBoard
            name="Justify-content"
            propertyName="justify-content"
            value="center"
            
          />
                <ComponentClipBoard
            name="Align-Items"
            propertyName="align-items"
            value="center"
            
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFF"
            bgColorVal="#FFF"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #177445;"
          />
          <ComponentClipBoard
            name="Padding"
            propertyName="padding"
            value="0.5rem 1.5rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.875rem"
          />
          <ComponentClipBoard
            name="Font weight"
            propertyName="font-weight"
            value="400"
          />
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        footnote="
        "
        heading=""
      >
        <ComponentImage
          image={IconButton2}
          width="100%"
          heading="Outline button"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            value="#FFF"
            bgColorVal="#FFF"
          />
             <ComponentClipBoard
            name="Display"
            propertyName="display"
            value="flex"
            
          />
                <ComponentClipBoard
            name="Justify-content"
            propertyName="justify-content"
            value="center"
            
          />
                <ComponentClipBoard
            name="Align-Items"
            propertyName="align-items"
            value="center"
            
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#177445"
            bgColorVal="#177445"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #177445;"
          />
          <ComponentClipBoard
            name="Padding"
            propertyName="padding"
            value="0.5rem 1.5rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.875rem"
          />
          <ComponentClipBoard
            name="Font weight"
            propertyName="font-weight"
            value="400"
          />
        </ComponentImage>
      </ComponentSub>
                
      <ComponentSub
        footnote="
        "
        heading=""
      >
        <ComponentImage
          image={IconButton3}
          width="100%"
          heading="Outline button"
        >
          <ComponentClipBoard
            name="Background"
            propertyName="background"
            value="none"
            bgColorVal="None"
          />
             <ComponentClipBoard
            name="Display"
            propertyName="display"
            value="flex"
            
          />
                <ComponentClipBoard
            name="Justify-content"
            propertyName="justify-content"
            value="center"
            
          />
                <ComponentClipBoard
            name="Align-Items"
            propertyName="align-items"
            value="center"
            
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#177445"
            bgColorVal="#177445"
          />
        
          <ComponentClipBoard
            name="Padding"
            propertyName="padding"
            value="0.5rem 1.5rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.875rem"
          />
          <ComponentClipBoard
            name="Font weight"
            propertyName="font-weight"
            value="400"
          />
        </ComponentImage>
      </ComponentSub>
      {/* ICON BUTTON */}

      <Usage>
        <li>
          Form submission, navigating to another page, triggering an action.
        </li>
        <li>Social media sharing, toggling menu items.</li>
        <li>
          Call-to-action buttons, mobile navigation, product purchase buttons.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
