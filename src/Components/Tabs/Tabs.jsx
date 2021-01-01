import React from 'react';
import { TimeStamps, Styles } from '../../Consts';
import './_tabs.scss';

export const Tabs = React.memo(({ setCurrTimeStamp }) => {
  return (
    <div className={Styles.TABS}>
      <button
        onClick={() =>
          setCurrTimeStamp({ period: 1, precision: TimeStamps.MINUETS })
        }
      >
        1 Minute
      </button>
      <button
        onClick={() =>
          setCurrTimeStamp({ period: 5, precision: TimeStamps.MINUETS })
        }
      >
        5 Minute
      </button>
      <button
        onClick={() =>
          setCurrTimeStamp({ period: 1, precision: TimeStamps.HOURS })
        }
      >
        1 Hour
      </button>
      <button
        onClick={() =>
          setCurrTimeStamp({ period: 168, precision: TimeStamps.HOURS })
        }
      >
        1 Week
      </button>
    </div>
  );
});
