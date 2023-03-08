import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const ProgressBar = ({ width, text }) => {
  const percentage = 66;

  return (
    <div className="flex flex-col">
      <CircularProgressbarWithChildren
        // strokeWidth={"14"}
        value={percentage}
        styles={{
          // Customize the root svg element
          root: {
            width: `${width}rem`,
          },
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            // strokeWidth: ".9rem",
            stroke: `#aae6f0`,
          //  strokeWidth: "12",
            //  strokeDasharray: "12, 8",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "#F5F5F5",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "black",
            // Text size
            fontSize: "16px",
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "yellow",
          },
        }}
      >
        <p className={`text-mainBlue font-bold ${width < 9 ? "text-base" : "text-3xl"}`}>{percentage}</p>
        <p className={` ${width < 9 ? "text-xs" : "text-sm"}`}>of 3 hours</p>
      </CircularProgressbarWithChildren>
      <p className={`mt-1 ${width < 9 ? "text-sm text-gray-3 " : "text-lg font-bold "}`}>{text}</p>
    </div>
  );
};

export default ProgressBar;
