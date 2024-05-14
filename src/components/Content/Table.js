import React from 'react';
import TableRow from '../Elements/TableRow';

const Table = ({ data }) => {
    return (
        <div className='c-table'>
          {data.map((rowData, index) => (
              <TableRow key={index} title={rowData.title} value={rowData.value} button={rowData.button}/>
          ))}
        </div>
    );
};

export default Table;
