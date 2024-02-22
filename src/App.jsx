import { useState } from 'react';
import { Data } from './components/generalInfo';
import { Section } from './components/section';
import { Form } from './components/form';
import { Preview } from './components/preview';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    tel: '',
    education: [],
    experience: [],
  });

  function onNameChange(e) {
    setGeneralInfo({ ...generalInfo, name: e.target.value });
  }
  function onMailChange(e) {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  }
  function onPhoneChange(e) {
    setGeneralInfo({ ...generalInfo, tel: e.target.value });
  }

  return (
    <>
      <Form>
        <Section
          sectionName="Personal Info"
          sectionClass="personal-info"
          type="form"
        >
          <Data
            data={generalInfo.name}
            onChange={onNameChange}
            field="name"
            inputType="text"
            isInput={true}
          />
          <Data
            data={generalInfo.email}
            onChange={onMailChange}
            field="email"
            inputType="email"
            isInput={true}
          />
          <Data
            data={generalInfo.tel}
            onChange={onPhoneChange}
            field="tel"
            inputType="tel"
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
          <Data data={generalInfo.name} field="name" onChange={onNameChange} />
          <Data
            data={generalInfo.email}
            field="email"
            onChange={onMailChange}
          />
          <Data data={generalInfo.tel} field="tel" onChange={onPhoneChange} />
        </Section>
      </Preview>
    </>
  );
}
export default App;
