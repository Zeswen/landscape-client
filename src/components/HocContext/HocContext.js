
import React from 'react';

import { StructureContext, FontsContext } from '../Context';

const HocContext = ({children}) => (
    <FontsContext.Consumer>
        { fonts => (
            <StructureContext.Consumer>
                    { innerStructure => children(innerStructure,fonts)}  
            </StructureContext.Consumer>
        )}  
    </FontsContext.Consumer>
)

export default HocContext;