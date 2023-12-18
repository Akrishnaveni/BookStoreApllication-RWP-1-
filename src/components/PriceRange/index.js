import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";

import "./index.css";

const PriceRange = (props) => {
  const {sliderExtremes, sliderPositions, onChangeSliderPosition} = props;
  const tipHandleRender = (node, handleProps) => {
    return (
      <Tooltip
        overlayInnerStyle={{ minHeight: "auto" }}
        overlay={"$" + handleProps.value}
        offsetX={-50}
        offsetY={-10}
        placement="top"
        visible={true}
        showArrow={false}
      >
        {node}
      </Tooltip>
    );
  };


  return (
    <div className="price-range-container">
        <h1 className="price-range-heading">Filter by Price</h1>
        <div className="slider-container">
            <Slider
            value={sliderPositions}
            min={sliderExtremes[0]}
            max={sliderExtremes[1]}
            range
            pushable={true}
            allowCross={false}
            handleRender={tipHandleRender}
            onChange={([startIndex, endIndex]) => onChangeSliderPosition([startIndex, endIndex])}
            />
        </div>
    </div>
  );
};

export default PriceRange