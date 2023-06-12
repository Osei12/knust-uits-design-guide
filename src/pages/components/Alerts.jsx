import InforAlert from "../../assets/images/alerts/info.png";

import SuccessAlert from "../../assets/images/alerts/success.png";
import ErrorAlert from "../../assets/images/alerts/error.png";

import WarningAlert from "../../assets/images/alerts/warning.png";
// import ComponentClipBoard from "../../components/ComponentClipBoard";
import ComponentImage from "../../components/ComponentImage";
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";

export default function Alerts() {
  return (
    <ComponentSubPage
      heading="Alerts"
      description="Notify users about important information or events."
      // backgroundImage={FormsImg}
      // backgroundSize="30rem"
      backgroundColor="#72B673"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      color="#fbfbfb"
      toPrev="/components"
      toNext="/components/buttons"
      prevName="Components"
      nextName="Buttons "
    >
      {/* INFO */}
         <ComponentSub
        footnote=" Provides important information to the user."
        heading="Info"
      >
        <ComponentImage heading="Badges with inner text" image={InforAlert}>
          {/* <ComponentClipBoard /> */}
        </ComponentImage>
      </ComponentSub>
      {/* END OF INFO */}

      {/* SUCCESS */}
      <ComponentSub
        footnote="Indicates that an action has been completed successfully."
        heading="Success"
      >
        <ComponentImage heading="Badges with inner text" image={SuccessAlert}>
          {/* <ComponentClipBoard /> */}
        </ComponentImage>
      </ComponentSub>
      {/* END OF SUCCESS */}

      {/* DANGER */}
      <ComponentSub
        footnote="Indicates that an error or critical issue has occurred."
        heading="Danger"
      >
        <ComponentImage heading="Badges with inner text" image={ErrorAlert}>
          {/* <ComponentClipBoard /> */}
        </ComponentImage>
      </ComponentSub>
      {/* END OF DANGER */}

      {/* WARNING  */}
      <ComponentSub
        footnote="Warns the user of a potential problem or issue."
        heading="Warning"
      >
        <ComponentImage heading="Badges with inner text" image={WarningAlert}>
          {/* <ComponentClipBoard /> */}
        </ComponentImage>
      </ComponentSub>

      {/*  END OF WARNING */}

      <Usage>
        <li>
          Notify users of successful or failed actions, such as form submissions
          or account updates.
        </li>
        <li>
          Display system-wide alerts, such as maintenance notifications or
          service disruptions.
        </li>
        <li>
          Alert users to security concerns, such as password breaches or
          suspicious login attempts.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
