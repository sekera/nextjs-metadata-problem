import React from 'react';
import PageInfo from '../../definitions/PageInfo';


interface CompositionProps {
  pageInfo: PageInfo;
  main: React.ReactNode;
  sidebar?: React.ReactNode;

  renderSidebarInAsideElement?: boolean;
  autoHeight?: boolean;

} 


export default CompositionProps