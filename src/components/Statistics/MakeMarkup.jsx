import css from './Statistics.module.css';

export default function MakeMarkupForStatisticsItems({
  id,
  label,
  percentage,
}) {
  return (
    <li className={css.item} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
