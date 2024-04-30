import React from 'react';

const Steps = ({ steps }) => {
  return (
    <div className="c-steps">
      <div className="c-steps__container">
        {steps.map((step, index) => {
          const words = step.title.split(" ");
          const firstWord = words.shift();
          const remainingWords = words.join(" ");

          return (
            <div key={index} className="c-steps__row u-flex">
              <div className="c-steps__circle u-flex">
                <div className="c-steps__number">{index + 1}</div>
              </div>

              <div className="c-steps__title">
                {step.onClick ? (
                  <span onClick={step.onClick}>
                    <span className="c-steps__clickable">{firstWord}</span>{" "}
                    {remainingWords}
                  </span>
                ) : (
                  <span>{step.title}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
