import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function MakeMarkupForStatisticsItems({ label, percentage }) {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

MakeMarkupForStatisticsItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
