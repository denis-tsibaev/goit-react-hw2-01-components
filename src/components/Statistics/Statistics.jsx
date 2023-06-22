import React from "react";
import style from "./statistics.module.css";
import randomColor from "./RandomColor";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li
            key={id}
            className={style.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
