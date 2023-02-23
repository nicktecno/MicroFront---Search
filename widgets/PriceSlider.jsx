import React, { useState, useEffect } from "react";
import { connectRange, Panel } from "react-instantsearch-dom";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { formatNumber } from "./utils";
import { useLang } from "../Context/LangContext";

function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps,
}) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: `${percent}%`,
          width: 40,
          height: 25,
          transform: "translate(-50%, -100%)",
          cursor: disabled ? "not-allowed" : "grab",
          zIndex: 1,
        }}
        aria-hidden={true}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        className="slider-handle"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          cursor: disabled ? "not-allowed" : "grab",
        }}
        {...getHandleProps(id)}
      />
    </>
  );
}

const PriceSlider = ({ min, max, refine, currentRefinement, canRefine }) => {
  const [ticksValues, setTicksValues] = useState([
    currentRefinement.min,
    currentRefinement.max,
  ]);
  const { routeTranslations } = useLang();

  useEffect(() => {
    setTicksValues([currentRefinement.min, currentRefinement.max]);
    if (currentRefinement.min === currentRefinement.max) {
      setTicksValues(0);
    }
  }, [currentRefinement]);

  const onChange = (values) => {
    refine({ min: values[0], max: values[1] });
  };

  if (
    !canRefine ||
    ticksValues[0] === undefined ||
    ticksValues[1] === undefined
  ) {
    return null;
  }

  return (
    <>
      {currentRefinement.min < max || currentRefinement.min > min ? (
        <Panel
          header={
            routeTranslations !== false && routeTranslations?.labels?.label07
          }
        >
          <div className="ajustWidth">
            <Slider
              mode={2}
              step={1}
              domain={[min, max]}
              values={[currentRefinement.min, currentRefinement.max]}
              disabled={!canRefine}
              onChange={onChange}
              onUpdate={setTicksValues}
              rootStyle={{ position: "relative", marginTop: "1.5rem" }}
              className="ais-RangeSlider"
            >
              <Rail>
                {({ getRailProps }) => (
                  <div className="slider-rail" {...getRailProps()} />
                )}
              </Rail>

              <Tracks left={false} right={false}>
                {({ tracks, getTrackProps }) => (
                  <div>
                    {tracks.map(({ id, source, target }) => (
                      <div
                        key={id}
                        className="slider-track"
                        style={{
                          left: `${source.percent}%`,
                          width: `${target.percent - source.percent}%`,
                        }}
                        {...getTrackProps()}
                      />
                    ))}
                  </div>
                )}
              </Tracks>

              <Handles>
                {({ handles, getHandleProps }) => (
                  <div>
                    {handles.map((handle) => (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        domain={[min, max]}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>

              <Ticks values={ticksValues}>
                {({ ticks }) => (
                  <div>
                    {ticks.map(({ id, count, value, percent }) => (
                      <div
                        key={id}
                        className="slider-tick"
                        style={{
                          marginLeft: `${-(100 / count) / 2}%`,
                          width: `${100 / count}%`,
                          left: `${percent}%`,
                        }}
                      >
                        <span style={{ color: "black", marginRight: 4 }}>
                          R$
                        </span>
                        {formatNumber(value)}
                      </div>
                    ))}
                  </div>
                )}
              </Ticks>
            </Slider>
          </div>
        </Panel>
      ) : (
        <p>Nenhum resultado para filtro</p>
      )}
    </>
  );
};

export default connectRange(PriceSlider);
