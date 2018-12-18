import React from 'react';
import SidebarHeader from '../SidebarHeader';
import SidebarBody from '../SidebarBody';

const Sidebar = props => (
  <React.Fragment>
    <SidebarHeader handleSave={props.handleSave} autoSave={props.autoSave} handleAutoSave={props.handleAutoSave} />
    <SidebarBody
      handleChangeHeader={props.handleChangeHeader}
      handleChangeSection={props.handleChangeSection}
      handleAddSection={props.handleAddSection}
      handleChangeFooter={props.handleChangeFooter}
      handleFooterSocialChange={props.handleFooterSocialChange}
    />
  </React.Fragment>
);

export default Sidebar;
