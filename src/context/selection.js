import React, { createContext,useState } from "react";

const SelectionContext = createContext({ selectState: null });

export const SelectionContextProvider = ({ children }) => {
  const [selectedState, setSelectedState] = useState({
    selectedCabinet: 1,
    selectedCounter: 1,
    selectedFloor: 1,
    selectedBackdrop: 1,
    kitchenId: 1111,
  });

  return (
    <SelectionContext.Provider
      value={{
        selectedState,
        setSelectedState
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionContext;
