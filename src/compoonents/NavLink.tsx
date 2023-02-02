interface NavLinkProps {
  idx: number;
  text: string;
  scrollTo: string;
}

function NavLink({ idx, text, scrollTo }: NavLinkProps) {
  // function to handle scrolling to the section when the button is clicked
  const handleScrollTo = () => {
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

export default NavLink;
