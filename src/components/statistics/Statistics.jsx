import Css from "./Statistics.module.css";

function getRandomHexColor()
{
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) =>
{
    return (
        <section className={Css.statistics}>
            {title && <h2 className={Css.title}>{title}</h2>}
            <ul className={Css.stat_list}>
                {stats.map((statistic) =>
                {
                    return (
                        <li className={Css.item} key={statistic.id} style={{backgroundColor: getRandomHexColor()}}>
                            <span className={Css['label']}>{statistic.label}</span>
                            <span className={Css['percentage']}>{statistic.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};