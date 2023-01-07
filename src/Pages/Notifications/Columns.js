import { format } from 'date-fns';
export const COLUMNS = [
    {
        Header: 'Vaccination Type',
        accessor: 'vaccination_type'
    },
    {
        Header: 'Hospital Name',
        accessor: 'hospital_name'
    },
    {
        Header: 'Vaccination Status',
        accessor: 'vaccination_status'
    },
    {
        Header: 'Appointment Date',
        accessor: 'appointment_date',
        Cell: ({value}) => { return format(new Date(value), 'dd-MM-yyyy')},
    },
    {
        Header: 'Appointment Time',
        accessor: 'appointment_time'
    }
]