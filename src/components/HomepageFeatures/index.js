import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Nance gives your community a place to create, share, search, discuss, vote,
        and seamlessly execute proposals.
      </>
    ),
  },
  {
    title: 'Keep Everything in Sync',
    description: (
      <>
        Keep everyone informed on the latest proposals and votes. Nance
        makes it easy to keep your community in sync.
      </>
    ),
  },
  {
    title: 'Powerful Automations',
    description: (
      <>
        Nance automatically moves proposals through your governance process.
        No more copy-pasting proposal content!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
