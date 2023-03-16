import MakeTransactionsList from './MakeTransactionsList';
import css from './Transactions.module.css';

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
