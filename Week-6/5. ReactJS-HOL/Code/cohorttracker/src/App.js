import logo from './logo.svg';
import './App.css';
import { CohortsList } from './Cohort'
import CohortInfo from './CohortDetails';

function CohortApp() {
  return (
    <div>
      <h1>Cohort Information</h1>
      {CohortsList.map(item => <CohortInfo key={item.cohortCode} cohort={item}/>)}
    </div>
  );
}

export default CohortApp;