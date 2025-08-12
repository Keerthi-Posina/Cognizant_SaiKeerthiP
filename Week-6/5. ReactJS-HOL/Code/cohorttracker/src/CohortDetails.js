// CohortDetails.js

import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  // The console.log can be removed now that debugging is done
  return (
    <div className={styles.box}>
      <h3 style={{ color: cohort.currentStatus === 'Ongoing' ? 'green' : 'blue' }}>
        {cohort.cohortCode}
      </h3>
      
      {/* This section now uses the correct property names */}
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;