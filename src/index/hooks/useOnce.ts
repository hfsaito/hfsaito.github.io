import React from "react"

export const useOnce = (fn: () => void) => {
  const executed = React.useRef(false);
  React.useEffect(() => {
    if (executed.current) {
      return;
    }
    executed.current = true;
    fn();
  }, []);
};
