import React, { useEffect } from "react";

export default function Timer({ dispatch, secondRemaining }) {
  const minutes = Math.floor(secondRemaining / 60);
  const seconds = Math.floor(secondRemaining % 60);

  useEffect(
    function () {
      const timer = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return function () {
        clearInterval(timer);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
