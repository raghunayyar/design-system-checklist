import React from 'react';
import s from './ProgressBar.module.css';

const ProgressBar = ({ current, total, className }) => {
  const width = ((100/total) * current);
  const text = width === 100 ? 'Completed' : current + ' out of ' + total;

  return (
    <div className={className}>
      <p className={[s.text, width === 100 && s.completed].join(' ')}>{text}</p>
      <div className={s.container}>
        <span className={s.bar} style={{ width: width + '%' }} />
      </div>
    </div>
  );
};

export default ProgressBar;
