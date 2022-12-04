import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, handleClick }) => {
    return (
        <div>
            <ul>
                {options.map((option, idx) => (
                    <button className={css.btn}
                    key={idx} 
                    type="button" 
                    onClick={() => handleClick(option)}>
                        {option}
                    </button>
                ))}
            </ul>
        </div>);
};

export default FeedbackOptions;