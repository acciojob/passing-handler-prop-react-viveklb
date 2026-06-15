import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  return (
    <button
      className={config.classname}
      onClick={() =>
        selectNextBackground({
          background: config.background
        })
      }
    >
      {config.label}
    </button>
  );
};

export default ColourSelector;