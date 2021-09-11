import { CircularProgress, Icon, TextField } from "@material-ui/core";
import { debounce } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { queryGeolocation, Route } from "../../api/AppPrices";
import { Check, Clear, Error, ThreeDRotation } from "@material-ui/icons";
import styles from "./_styles.module.scss";

type Props = {
  setRoute: (route: Route) => void;
};

const RoutePicker = ({ setRoute }: Props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { isLoading: fromLoading, geolocation: fromLocation } = useGeolocation(from || "");
  const { isLoading: toLoading, geolocation: toLocation } = useGeolocation(to || "");

  const onBlur = () => {
    setRoute({ from, to });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Where to?</h2>
      <div className={styles["input-container"]}>
        <TextField
          label="From"
          className={styles.input}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          onBlur={onBlur}
        />
        {fromLoading ? <CircularProgress size={16} /> : fromLocation ? <Check /> : from && <Error />}
      </div>
      {fromLocation && (
        <div>
          {fromLocation?.latitude} / {fromLocation?.longitude}
        </div>
      )}
      <div className={styles["input-container"]}>
        <TextField
          label="To"
          className={styles.input}
          value={to}
          onChange={(e) => setTo(e.target.value)}
          onBlur={onBlur}
        />
        {toLoading ? <CircularProgress size={16} /> : toLocation ? <Check /> : to && <Error />}
      </div>
      {fromLocation && (
        <div>
          {toLocation?.latitude} / {toLocation?.longitude}
        </div>
      )}
    </div>
  );
};

const useGeolocation = (locationQuery: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);

  const debouncedFetch = useMemo(() => {
    return debounce((query) => {
      queryGeolocation(query)
        .then(setGeolocation)
        .then(() => setIsLoading(false))
        .catch(() => {
          setIsLoading(false);
          setGeolocation(null);
        });
    }, 900);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    debouncedFetch(locationQuery);
  }, [locationQuery]);
  return {
    isLoading,
    geolocation,
  };
};

export default RoutePicker;
