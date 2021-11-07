import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onClick }) {
  return options.map(option => (
    <button
      type="button"
      className={s.button}
      key={option}
      onClick={() => onClick(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
