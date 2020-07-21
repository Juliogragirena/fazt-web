import React from 'react';
import { IconCode } from '@atoms/Icon/';

const Skill = ({ skills }) => {
  return (
    <div className="skills">
      <IconCode name={skills.skill1} icon={skills.skill1} width="55px" height="35px" />
      <IconCode name={skills.skill2} icon={skills.skill2} width="55px" height="35px" />
      <IconCode name={skills.skill3} icon={skills.skill3} width="55px" height="35px" />
    </div>
  );
};
export default Skill;
