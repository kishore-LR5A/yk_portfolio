import { useReduxDispatch, useReduxSelector } from "redux/hooks";

interface MobileNavLinkProps {
  idx: number;
  text: string;
  scrollTo: string;
  toggleMobileNavbar: () => void;
}

function MobileNavLink({
  idx,
  text,
  scrollTo,
  toggleMobileNavbar,
}: MobileNavLinkProps) {
  const isOpen = useReduxSelector((state) => state.nav.isOpen);
  // function to handle scrolling to the section when the button is clicked
  const handleScrollTo = () => {
    // close the navbar if it is open
    if (isOpen) {
      toggleMobileNavbar();
    }
    // scroll to the section
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="text-light_slate hover:text-green font-sf_mono"
      onClick={handleScrollTo}
    >
      <span className="text-green">{`0${idx}`}. </span>
      {text}
    </button>
  );
}

export default MobileNavLink;
