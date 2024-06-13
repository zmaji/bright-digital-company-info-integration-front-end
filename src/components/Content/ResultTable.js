import React from 'react';
import SearchRow from '../Elements/SearchRow';

const ResultTable = ({ data }) => {
    return (
        <div className='c-result-table'>
          {data.map((rowData, index) => (
              <SearchRow key={index} name={rowData.name} address={rowData.address} location={rowData.location} button={rowData.button} dossier={rowData.dossier} establishment={rowData.establishment}/>
          ))}
        </div>
    );
};

export default ResultTable;
