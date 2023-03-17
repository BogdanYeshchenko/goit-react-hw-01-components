import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function MakeTransactionsList({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.tbodyBox}>{type}</td>
      <td className={css.tbodyBox}>{amount}</td>
      <td className={css.tbodyBox}>{currency}</td>
    </tr>
  );
}

MakeTransactionsList.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
