import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return <h2 className={css.title}>{title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
