import { PopupButton } from "react-calendly";
function Button({ btnTxt: text = "Schedule your call now" }) {
  return (
    <>
      <PopupButton
        url="https://calendly.com/ansariaffan818/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text={text}
        className="px-4 sm:px-10 py-3 sm:py-4 text-lg sm:text-2xl bg-gradient-to-r from-yellow-700 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-300 hover:shadow-xl transition-all duration-300 animate-bounce"
      />
    </>
  );
}

export default Button;
