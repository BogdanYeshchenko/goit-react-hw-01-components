import MakeMarkupForStatisticsItems from './MakeMarkup';
import css from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <section className="statistics">
      <div className={css.statisticsBox}>
        <h2 className="title">Upload stats</h2>

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
