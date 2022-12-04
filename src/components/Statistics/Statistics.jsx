import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  
  return (
    <ul>
        <li className={css.item}>GOOD : {good}</li>
        <li className={css.item}>NEUTRAL : {neutral}</li>
        <li className={css.item}>BAD : {bad}</li>
        <li className={css.item}>TOTAL : {total}</li>
        {good > 0 && <li className={css.item}>POSITIVE FEEDBACK : {positivePercentage}%</li> }
    </ul>
  );
};

export default Statistics