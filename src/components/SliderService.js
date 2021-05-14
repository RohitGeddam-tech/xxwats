import React, { useEffect, useState } from "react";

const SliderService = ({ initialChecked, passChecked }) => {
  let checkedboxes = {
    creative: { checked: false, value: "Creative Strategy" },
    brand: { checked: false, value: "Branding Campaign" },
    social: { checked: false, value: "Social Media Campaign" },
    video: { checked: false, value: "Video Campaign" },
    ground: { checked: false, value: "On-ground Engagements" },
    post: { checked: false, value: "Post Production" },
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
    e.target.checked ? initialChecked.push(val) : removeItemOnce(initialChecked, val);
    setChecked(initialChecked);
  };

  useEffect(() => {
    passChecked(isChecked);
  }, [isChecked, passChecked]);

  return (
    <>
      <div className="inputslider">
        <div className="inputslide">
          {Object.keys(checkedboxes).map((each, index) => {
            return (
              <div className="insideslide" key={index}>
                <label
                  htmlFor={each}
                  className="serviceslide-btn"
                  onClick={(e) => {
                    e.target.classList.toggle("after");
                  }}
                >
                  {checkedboxes[each].value}
                </label>

                <input
                  id={each}
                  type="checkbox"
                  data-name={each}
                  onChange={(e) => {
                    handleClick(e, each);
                  }}
                  style={{ display: "none" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SliderService;
