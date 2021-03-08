import React from "react";
import "../components/layout.css";
export const fromProductSlugToUrl = (slug) => `/products/${slug}`;

export const countdownRenderer = ({
   days,
   hours,
   minutes,
   seconds,
   completed,
}) => {
   if (completed) {
      return <span>Lottery Draw time is over</span>;
   }

   return (
      <>
         {/* <span>
            <span></span> <span></span> <span></span>{" "}
            <span></span>: <span></span> <span></span>:{" "}
            <span></span> <span></span>
            remaining
         </span> */}
         <div id="clock">
            <div>
               <span>{days}</span> <span>Days</span>
            </div>
            <div>
               <span>{hours}</span> <span>Hours</span>
            </div>
            <div>
               <span>{minutes}</span> <span>Minutes</span>
            </div>
            <div>
               <span>{seconds}</span> <span>Seconds</span>
            </div>
         </div>
      </>
   );
};
