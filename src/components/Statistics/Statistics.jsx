import MakeMarkupForStatisticsItems from './MakeMarkup';
import Title from './Title';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <div className={css.statisticsBox}>
        {/* {title ? <Title title={title} /> : null} */}
        {title && <Title title={title} />}

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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
