import React from 'react';
import SearchRow from '../elements/SearchRow';

const ResultTable = ({ data }) => {
    return (
        <div className='c-result-table'>
          {data.map((rowData, index) => (
              <SearchRow key={index} name={rowData.name} address={rowData.address} location={rowData.location} button={rowData.button}/>
          ))}
        </div>
    );
};

export default ResultTable;
