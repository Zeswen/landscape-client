import React from 'react';
import SidebarHeader from '../SidebarHeader';
import SidebarBody from '../SidebarBody';

const Sidebar = props => (
  <React.Fragment>
    <SidebarHeader handleSave={props.handleSave} />
    <SidebarBody
      structure={props.structure}
      handleChangeHeader={props.handleChangeHeader}
      handleChangeSection={props.handleChangeSection}
      handleAddSection={props.handleAddSection}
      handleChangeFooter={props.handleChangeFooter}
      handleFooterSocialChange={props.handleFooterSocialChange}
      fonts={props.fonts}
      colors={props.colors}
    />
  </React.Fragment>
);

export default Sidebar;
