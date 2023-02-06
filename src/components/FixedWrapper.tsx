interface FixedWrapperProps {
  children: React.ReactNode;
  position: "left" | "right";
}
function FixedWrapper({ children, position }: FixedWrapperProps) {
  return (
    // fixed bottom-0 hidden left-[50px] md:flex flex-col justify-center items-center space-y-7
    <div
      className={`fixed bottom-0 hidden ${
        position === "left" ? "left-[50px]" : "right-0 translate-x-10"
      } md:flex flex-col justify-center items-center space-y-7`}
    >
      {/* rendering children */}
      {children}
      {/* vertical divider */}
      <div className="h-[100px] w-[1px] bg-light_slate" />
    </div>
  );
}

export default FixedWrapper;
