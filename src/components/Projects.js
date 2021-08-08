import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import IndividualProject from './IndividualProject';

export const Projects = ({ activeValue = false }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li
                key={projects.ProjectId}
                data-doc-id={project.DocId}
                data-test-id='project-action'
                className={active === project.ProjectId
                            ? 'active sidebar__project'
                            : 'sidebar__project'
                }
                onClick={() => {
                    setActive(project.ProjectId);
                    setSelectedProject(project.ProjectId);
                }}
            >
                <IndividualProject project={project} />
            </li>
        ))
    )
}