import React, { useEffect, useState } from "react";
import { useRef } from "react";
import drop from "../img/expand_more.png";

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

const SliderService = ({ initialChecked, passChecked }) => {
  let checkedboxes = {
    creative: { checked: false, value: "Creative Strategy" },
    brand: { checked: false, value: "Branding Campaign" },
    social: { checked: false, value: "Social Media Campaign" },
    video: { checked: false, value: "Video Campaign" },
    ground: { checked: false, value: "On-ground Engagements" },
    post: { checked: false, value: "Post Production" },
    production: { checked: false, value: "Production" },
  };

  const [isChecked, setChecked] = useState(initialChecked);

  const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleClick = (e, each) => {
    const val = checkedboxes[each].value;
    e.target.checked
      ? initialChecked.push(val)
      : removeItemOnce(initialChecked, val);
    setChecked(initialChecked);
    // console.log(isChecked);
  };

  useEffect(() => {
    passChecked(isChecked);
  }, [isChecked, passChecked]);


  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);


  const slide =
    isChecked.length === 0
      ? isComponentVisible
        ? "borderslide"
        : "noneslide"
      : isComponentVisible
      ? "borderslideTop"
      : "noneslide";

  return (
    <>
      <div
        className="inputslider"
        ref={ref}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {isChecked.length === 0 ? null : <p>select your service *</p>}
        <h1>
          {isChecked.length === 0 ? (
            <>select your service * </>
          ) : (
            <>
              {isChecked.join(", ").toString().slice(0, 30)}
              {isChecked.join(", ").toString().length > 30 ? <>...</> : null}
            </>
          )}
          <span>
            <img src={drop} alt="drop-icon" />
          </span>
        </h1>
        <div className={slide}>
          {Object.keys(checkedboxes).map((each, index) => {
            return (
              <div
                className="inputslide"
                htmlFor={each}
                key={index}
              >
                <input
                  id={each}
                  type="checkbox"
                  data-name={each}
                  onChange={(e) => {
                    handleClick(e, each);
                  }}
                  style={{ marginRight: "10px" }}
                />
                <label
                  htmlFor={each}
                  className="serviceslide-btn"
                >
                  {checkedboxes[each].value}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SliderService;
