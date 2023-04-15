import PropTypes from "prop-types";
import Css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) =>
{
    return (
        <table className={Css.transaction_history}>
            <thead className={Css.thead}>
                <tr>
                    <th className={Css['title']}>type</th>
                    <th className={Css['title']}>amount</th>
                    <th className={Css['title']}>currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) =>
                {
                    return (
                        <tr className={Css.tr} key={id}>
                            <td className={Css['type']}>{type}</td>
                            <td className={Css['amount']}>{amount}</td>
                            <td className={Css['currency']}>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
TransactionHistory.propTypes =
{
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ).isRequired
};