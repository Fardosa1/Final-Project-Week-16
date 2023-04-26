import React from 'react';
import resources from './Resources';

function ResourceList() {
  return (
    <div>
      <h1>Mental Health Resources</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className="resource">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <div className="actions">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceList;


//This portion of the code component that renders a resource with its title and content. 
//It receives an object called "resource" as a prop, which contains the information to be displayed. 
//The title and content are displayed using HTML elements "h2" and "p", respectively, with CSS class "resource" applied to the surrounding div.


//Finally, the component is exported as the default export.



