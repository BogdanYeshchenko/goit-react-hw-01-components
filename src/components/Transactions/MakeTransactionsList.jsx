import css from './Transactions.module.css';

export default function MakeTransactionsList({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.tbodyBox}>{type}</td>
      <td className={css.tbodyBox}>{amount}</td>
      <td className={css.tbodyBox}>{currency}</td>
    </tr>
  );
}
