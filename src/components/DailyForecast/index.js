import React, { useContext } from 'react';
import { Col, Row } from '../Grid';
import UnitContext from '../../utils/UnitContext';
import ThemeContext from '../../utils/ThemeContext';
import * as Conversion from '../../utils/Conversion';

const dailyForecastStyle = {
  overflowY: 'scroll'
};

const DailyForecastDiv = props => {

  const unitContext = useContext(UnitContext);
  const themeContext = useContext(ThemeContext);
  const imgStyle = {
    height: `60px`,
    width: `60px`
  }

  return (
    <div>
      <Row className={`bg-${themeContext.backgroundColor}`}>
        <Col size="12">
          <h4 className={`text-${themeContext.textColor}`}>Daily forecast</h4>
          <div className="rounded-lg mh-100">
            {props.daily.map(day => {
              return (
                <Row className={`align-items-center bg-${themeContext.backgroundColor}`} key={day.dt}>
                  {/* <div className="d-flex align-items-center"> */}
                  <Col size="4">
                    <div className={`text-${themeContext.textColor}`}>{Conversion.unixToLocalTime(day.dt, props.timezone, `dddd`)}</div>
                  </Col>
                  <Col size="3">
                    <img className="mx-1 rounded-circle bg-light img-thumbnail"
                      style={imgStyle} src={require(`../../assets/${day.weather[0].icon}@2x.png`)} alt="weather icon" />
                  </Col>
                  <Col size="5">
                    <div className="d-flex justify-content-around">
                      <div className={`mr-2 h5 text-${themeContext.textColor}`}>{Conversion.returnRoundedTemperature(day.temp.max)}{unitContext.units}</div>
                      <div className={`h5 text-${themeContext.textColor}`}>{Conversion.returnRoundedTemperature(day.temp.min)}{unitContext.units}</div>
                    </div>
                  </Col>
                  {/* </div> */}
                </Row>
              )
            })}
          </div>
        </Col>
      </Row>

      <Row className={`bg-${themeContext.backgroundColor}`}>
        <Col size="12">
          <hr className={`bg-light`} />
        </Col>
      </Row>
    </div>
  )
};

export { DailyForecastDiv };