import React, {useMemo} from 'react';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import MOCK_VAX_DATA from './MOCK_VAX_DATA.json'
import { COLUMNS } from './Columns';
import './notifications.css'
import { Filters } from './Filters';

export const Notifications = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_VAX_DATA, [])

  const {
    getTableProps, 
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
} = useTable({columns, data},useFilters ,useGlobalFilter)

  const { globalFilter } = state

  return ( 
    <div className=' notifications'>
        <div className='topText'>
          <h1>Vaccination Appointment</h1>
          <p>Your vaccination appointments are shown here</p>
        </div>

        <Filters filter={globalFilter} setFilter={setGlobalFilter} />

        <table {...getTableProps()} className='table' >
            <thead className='thead'>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className='trHead' >
                        {headerGroup.headers.map((column) => (
                            <th className='th' {...column.getHeaderProps()}>
                                <div className='thText'>{column.render('Header')}</div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()} className='tbody' >
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} className='trBody' >
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()} className='td' >
                                    <div className='tdText'>{cell.render('Cell')}</div></td>
                            })}
                        </tr>
                    )})}
            </tbody>
        </table>
        </div>
  )
}