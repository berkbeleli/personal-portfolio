import { SkillsData } from "../../data/SkillsData";

const Skills = () => {
return (
	<div className="toolbox">
	{SkillsData.map((skill, index) => (
		   <div className="toolbox__tool" key= {skill.id}>
		   <div className="toolbox__tool-logo">
				<skill.img className="icon" />
		   </div>
		   <div className="toolbox__tool-name">{skill.name}</div>
		 </div>
		))}
	</div>
)
}

export default Skills;