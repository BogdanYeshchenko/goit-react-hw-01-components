import MakeTransactionsList from './MakeTransactionsList';
import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function Transactions({ items }) {
  return (
    <div className={css.transactionsBox}>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.tableBox}>Type</th>
            <th className={css.tableBox}>Amount</th>
            <th className={css.tableBox}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(el => (
            <MakeTransactionsList
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
