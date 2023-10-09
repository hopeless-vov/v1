export default function LavaLamp() {
  return (
      <div className="fixed top-0 left-0 right-0 bottom-0 min-w-full z-[-1]">
        <div className={`absolute w-full h-full [filter:url('../images/filter.svg#filter')]`}>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob top"></div>
          <div className="blob bottom"></div>
        </div>
    </div>
  );
}
