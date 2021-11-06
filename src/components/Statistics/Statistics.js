import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p className={s.option}>Good: {good}</p>
      <p className={s.option}>Natural: {neutral}</p>
      <p className={s.option}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.percent}>Positive feedback: {positivePercentage}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
