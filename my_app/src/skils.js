/*
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
export default function Skills() {}
return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
*/
// Skills.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode, faLaptopCode } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faCogs } 
	from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const Skills = () => { 
	return ( 
		<section id="skills"
			className="container"
			style={{ paddingLeft: '0px' }}> 
			<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCogs} 
					className="mr-2" /> 
				Skills 
			</h2> 
			<ul className="skills-list"> 
				<li> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					HTML 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					CSS 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					JavaScript 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					React 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Bootstrap 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					DSA 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Node.js 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Python 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Java 
				</li> 
				{/* Add more skills as needed */} 
			</ul> 
		</section> 
	); 
}; 

export default Skills;
