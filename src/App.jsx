/* eslint-disable react/prop-types */
import { useState } from 'react';
import { InputOrDisplay, GeneralInfoFields } from './components/infoFields';
import { Section } from './components/section';
import { Form } from './components/form';
import { Preview } from './components/preview';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    tel: '',
  });
  const [educationInfo, setEducationInfo] = useState({
    institution: '',
  });
  const [jobsInfo, setJobsInfo] = useState({
    company: '',
  });

  function onGeneralInfoChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.id]: e.target.value });
  }
  function onEducationChange(e) {
    setEducationInfo({ ...educationInfo, [e.target.id]: e.target.value });
  }
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
          sectionName="Educational Experience"
          sectionClass="educational experience"
          type="form"
        >
          <InputOrDisplay
            data={educationInfo.institution}
            onChange={onEducationChange}
            field="institution"
            inputType="text"
            isInput={true}
          />
        </Section>
        <Section
          sectionName="Practical Experience"
          sectionClass="practical experience"
          type="form"
        >
          <InputOrDisplay
            data={jobsInfo.company}
            onChange={onJobChange}
            field="company"
            inputType="text"
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
          sectionName="Educational Experience"
          sectionClass="educational experience"
          type="preview"
        >
          <InputOrDisplay
            data={educationInfo.institution}
            field="institution"
          />
        </Section>
        <Section
          sectionName="Practical Experience"
          sectionClass="practical experience"
          type="preview"
        >
          <InputOrDisplay data={jobsInfo.company} field="company" />
        </Section>
      </Preview>
    </>
  );
}
export default App;
