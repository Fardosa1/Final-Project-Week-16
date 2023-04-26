import React from 'react';

function Resource({ resource }) {
  return (
    <div className="resource">
      <h2>{resource.title}</h2>
      <p>{resource.content}</p>
    </div>
  );
}

export default Resource;

// This portion of the code component that renders a resource 
//with its title and content. It receives an object called "resource" as a prop, 
//which contains the information to be displayed. The title and content are displayed using HTML 
//elements "h2" and "p", respectively, with CSS class "resource" applied to the surrounding div. Finally, the component is exported as the default export.



