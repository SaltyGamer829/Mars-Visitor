import React from 'react';

function NavigationButtons({ stage, nextStage, previousStage }) {
  return (
    <div className="navigation-buttons">
      {stage > 1 && <button type="button" onClick={previousStage}>Back</button>}
      {stage < 3 && <button type="button" onClick={nextStage}>Next</button>}
      {stage === 3 && <button type="submit">Submit</button>}
    </div>
  );
}

export default NavigationButtons;