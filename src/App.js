import React, { useState } from "react";
import "./index.css";
import Checkbox from "./components/checkbox";

function App() {
  const [colours, setColours] = useState([
    {
      name: "All",
      isChecked: false,
    },
    {
      name: "Green",
      isChecked: false,
    },
    {
      name: "Yellow",
      isChecked: false,
    },
    {
      name: "Blue",
      isChecked: false,
    },
    {
      name: "Red",
      isChecked: false,
    },
  ]);

  /*
   * Checks if checkbox is ticked or not and toggles its value
   */
  const handleIsChecked = (colour) => {
    let newArr = [...colours];
    let allSelected = false;

    if (colour.name === "All") {
      handleAllOption(colour);
    } else {
      newArr[0].isChecked = false; // Always uncheck the "all" checkbox before
      const index = newArr.findIndex((item) => item.name === colour.name);
      setColours(newArr, (newArr[index].isChecked = !newArr[index].isChecked));
    }

    //Checks if all items are selected to tick the checkbox "all" in case it is true
    for (let i = 1; i < newArr.length; i++) {
      if (colours[i].isChecked === false) {
        allSelected = false;
        break;
      }
      allSelected = true;
    }

    if (allSelected) {
      handleAllOption(newArr[0]);
    }
  };

  /*
   * Handles the 'all' option if its checkbox is ticked 
   */

  const handleAllOption = (all) => {
    let newArr = [...colours];
    let allChecked = [];

    if (all.isChecked === false) {
      allChecked = newArr.map((item) => {
        return { ...item, isChecked: true };
      });
      setColours(allChecked);
    } else {
      allChecked = newArr.map((item) => {
        return { ...item, isChecked: false };
      });
      setColours(allChecked);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h3 className="add-padding">What is your favorite colour?</h3>
        {colours.map((colour) => {
          return (
            <Checkbox
              key={colour.name}
              option={colour.name}
              isChecked={colour.isChecked}
              setIsChecked={() => handleIsChecked(colour)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
