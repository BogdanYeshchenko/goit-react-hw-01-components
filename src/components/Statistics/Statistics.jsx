import MakeMarkupForStatisticsItems from './MakeMarkup';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <section className="statistics">
      <div className={css.statisticsBox}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statList}>
          {stats.map(el => (
            <MakeMarkupForStatisticsItems
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
