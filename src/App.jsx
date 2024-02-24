/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  GeneralInfoFields,
  EducationInfoFields,
  JobsInfoFields,
} from './components/infoFields';
import { Section } from './components/section';
import { Form } from './components/form';
import { Preview } from './components/preview';
import './styles/App.css';

function App() {
  // General Info
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    tel: '',
  });
  function onGeneralInfoChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.id]: e.target.value });
  }

  // Education
  const [educationInfo, setEducationInfo] = useState({
    institution: '',
    title: '',
    year: '',
  });
  function onEducationChange(e) {
    setEducationInfo({ ...educationInfo, [e.target.id]: e.target.value });
  }

  // Jobs
  const [jobsInfo, setJobsInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    until: '',
  });
  function onJobChange(e) {
    setJobsInfo({ ...jobsInfo, [e.target.id]: e.target.value });
  }

  return (
    <>
      <Form>
        <Section
          sectionName="Personal Info"
          sectionClass="personal-info"
          type="form"
        >
          <GeneralInfoFields
            generalInfo={generalInfo}
            onChange={onGeneralInfoChange}
            isInput={true}
          />
        </Section>

        <Section
          sectionName="Education Experience"
          sectionClass="education experience"
          type="form"
        >
          <EducationInfoFields
            educationInfo={educationInfo}
            onChange={onEducationChange}
            isInput={true}
          />
        </Section>

        <Section
          sectionName="Practical Experience"
          sectionClass="practical experience"
          type="form"
        >
          <JobsInfoFields
            jobsInfo={jobsInfo}
            onChange={onJobChange}
            isInput={true}
          />
        </Section>
      </Form>
      <Preview>
        <Section
          sectionName="Personal Info"
          sectionClass="personal-info"
          type="preview"
        >
          <GeneralInfoFields generalInfo={generalInfo} isInput={false} />
        </Section>

        <Section
          sectionName="Education Experience"
          sectionClass="education experience"
          type="preview"
        >
          <EducationInfoFields educationInfo={educationInfo} isInput={false} />
        </Section>

        <Section
          sectionName="Practical Experience"
          sectionClass="practical experience"
          type="preview"
        >
          <JobsInfoFields jobsInfo={jobsInfo} isInput={false} />
        </Section>
      </Preview>
    </>
  );
}
export default App;
