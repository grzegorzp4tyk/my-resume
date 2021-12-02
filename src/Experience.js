import React from 'react';
import Job from './Job';
import './Experience.scss';

export default function Experience(props) {
    return (
        <div>
            <h2 className="section-title">Experience</h2>
            {props.jobs.map((job, jobIndex) => {
                console.log(`${job.position}: ${jobIndex}`);
                return <Job key={jobIndex} {...job} />;
            })}
        </div>
    );
}
