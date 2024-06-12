// It is recommended by React community folks to give "use" in small case before every custom hook name and to use "camelCase" format.
// Name the file as well as the hook the same. It's the convention.
import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  // check if online or not and it will return online status.
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;

