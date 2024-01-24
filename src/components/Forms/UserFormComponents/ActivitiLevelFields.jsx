import React from 'react';
import { Field } from 'formik';
import {
  LevelActivitiThumb,
  OrangeRadio,
  ActivitiLabel,
} from '../UserForm.styled';

const ActivitiLevelFields = ({ levelActivity }) => {
  return (
    <LevelActivitiThumb role="group" aria-labelledby="levelActivity">
      <ActivitiLabel>
        <Field
          as={OrangeRadio}
          type="radio"
          name="levelActivity"
          value="1"
          checked={levelActivity ? levelActivity.toString() === '1' : 0}
        />
        Sedentary lifestyle (little or no physical activity)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field
          as={OrangeRadio}
          type="radio"
          name="levelActivity"
          value="2"
          checked={levelActivity ? levelActivity.toString() === '2' : 0}
        />
        Light activity (light exercises/sports 1-3 days per week)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field
          as={OrangeRadio}
          type="radio"
          name="levelActivity"
          value="3"
          checked={levelActivity ? levelActivity.toString() === '3' : 0}
        />
        Moderately active (moderate exercises/sports 3-5 days per week)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field
          as={OrangeRadio}
          type="radio"
          name="levelActivity"
          value="4"
          checked={levelActivity ? levelActivity.toString() === '4' : 0}
        />
        Very active (i ntense exercises/sports 6-7 days per week)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field
          as={OrangeRadio}
          type="radio"
          name="levelActivity"
          value="5"
          checked={levelActivity ? levelActivity.toString() === '5' : 0}
        />
        Extremely active (very strenuous exercises/sports and physical work)
      </ActivitiLabel>
    </LevelActivitiThumb>
  );
};

export default ActivitiLevelFields;
