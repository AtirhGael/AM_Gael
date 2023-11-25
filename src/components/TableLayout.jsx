import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import TablePagination from './TablePagination';

const TableLayout = ({headData, bodyData, dataObject,pagination}) => {
  return (
    <div className='table-outer-div'>
        <div className='table-inner-div'>
            <Table>
                <TableHead>
                    <TableRow>
                        {headData.map((element, index) => {
                            let style = {};
                            if (index === 0) {
                                style = { borderRadius: '10px 0px 0px 10px' };
                            } else if (index === headData.length - 1) {
                                style = { borderRadius: '0px 10px 10px 0px' };
                            }
                            return <TableCell style={style} key={index}>{element}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(dataObject).length > 0 ?
                        bodyData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row.map((cellData, cellIndex) => (
                                    <TableCell key={cellIndex}>{cellData}</TableCell>
                                ))}
                            </TableRow>
                        )) : null
                    }
                </TableBody>
            </Table>
        </div>
        {pagination?
        <TablePagination/>:null
        }
    </div>
  )
}

export default TableLayout