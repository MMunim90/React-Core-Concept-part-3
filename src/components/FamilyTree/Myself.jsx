import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special name='Tinni' asset={asset}></Special>
        </div>
    );
};

export default Myself;