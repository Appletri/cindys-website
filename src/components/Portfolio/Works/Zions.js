import './works.css';

function Zions(props) {
  return(
    <div className='main'>
    <div className='overview'>
      <div className='head'>
        <div className='text'>
          <h1>Zions Bancorporation Internal Website</h1>
          <div className='header-under'>
            <h4>Roles</h4>
            <div className='roles'>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
        <div className='head-image'></div>
      </div>
    </div>
    <div className='timeline'>
    
    </div>

    <div className='work-body'>
      <section>
        <p className='quote'> 
          “Customer Data Integration (CDI) is the process of defining, consolidating, and managing customer information across an organization’s business units and systems to achieve a ‘single version of truth’ for customer data” - <a href='https://www.techtarget.com/searchdatamanagement/definition/customer-data-integration'>Source</a> ​(May 2022)
        </p>

        <p>
          Zions Bancorporation is a collection of eight different local bank brands across the Western United States. CDI Hub was created in the effort to unify customer data across the eight different brands to provide a single source for customer data. Thus, creating a seamless experience for our customers – for example, if data was supplied to one brand it will be updated across all eight brands through CDI.  
        </p>

      </section>

        <h3>Problem</h3>
        <p>
          CDI is needed to be a single source of truth data. Data from other systems within the Bancorporation needs to integrate with CDI and then subscribe to our system in order to get updates. As CDI continues to grow more and more data are collected therefore more systems will want to contribute and subscribe to our data source. 
        </p>

        <p>
          CDI has been focused on being the powerhouse for the company. As more and more things are built to support CDI, over time there is a scatter of documentation; creating an impediment to the flow of integrating the system.  
        </p>
      <section>
        <h3>Analysis</h3>

        <p>
          User interview was performed with analyst, engineers, product owners, and stakeholders to better understand the topics and educational information users are looking for when interacting with CDI. 
        </p>

        <h3>User Research Outcome</h3>
        <div>
          <ul>
            <li>
              <strong>Capabilities:</strong> Overview of all services CDI provides. 
            </li>
            <li>
              <strong>Timeline:</strong> Being transparent with CDI’s source system integration plans. 
            </li>
            <li>
              <strong>Architectural / Integration Process:</strong> Educational resource for other source systems to better understand how CDI works and step-by-step instructions on how individual source systems can publish and subscribe to our data sources. 
            </li>
            <li>
              <strong>Data Types/ API Documentations:</strong> documentations and data are scattered throughout Azure DevOps, Confluences, and Data Governance. Therefore, providing a home base for all these materials will eliminate users from using outdated documents and information discrepancies. 
            </li>
            <li>
              <strong>Contacts:</strong> Providing a hierarchy of contacts within our department, many users outside of CDI express a lack of knowledge on who to contact for specific topics.
            </li>
            <li>
              <strong>Contacts:</strong> Providing a hierarchy of contacts within our department, many users outside of CDI express a lack of knowledge on who to contact for specific topics.
            </li>            
            <li>
              <strong>Announcement Updates:</strong> CDI is a fast-growing department, changes are being done to the data and integration on a daily basis, therefore having the ability to subscribe to updates will allow source systems to sync with CDI changes. 
            </li>
          </ul>
        </div>

        <p>
          Due to the amount of content needed and bandwidth, the project is divided into three phases: engineer-focused topics, stakeholder and business value focus topics, and miscellaneous topics. 
        </p>
      </section>  
    </div>
  </div>
  )
}

export default Zions