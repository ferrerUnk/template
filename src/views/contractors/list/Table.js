// ** React Imports
import { Fragment, useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'

// ** Table Columns
import { columns } from './columns'


// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy } from 'react-feather'


// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  Label
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ handlePerPage, rowsPerPage }) => {

    const history = useHistory()

  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col sm="12" className='d-flex align-items-center py-1 px-0 mb-1'>
          <p className="h4 px-0">Contractors</p>
        </Col>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <label htmlFor='rows-per-page'>Show</label>
            <Input
              className='mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{ width: '5rem' }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
            <label htmlFor='rows-per-page'>Entries</label>
            <div className="ms-2">
              <span>Filters</span>
              <UncontrolledButtonDropdown className="ms-1" direction='down'>
                <DropdownToggle color='outline-secondary' className="ps-4" caret>

                </DropdownToggle>
                <DropdownMenu className='p-1'>
                    <div className='form-check mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='classification-head' id='classification-head' className='me-1 form-primary' />
                      <Label className='form-check-label' for='classification-head'>Classification</Label>
                    </div>
                    <div className='form-check ms-2 mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='classification-silver' id='classification-silver' className='me-1' />
                      <Label className='form-check-label' for='classification-silver'>Silver</Label>
                    </div>
                    <div className='form-check ms-2 mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='classification-gold' id='classification-gold' className='me-1' />
                      <Label className='form-check-label' for='classification-gold'>Gold</Label>
                    </div>
                    <DropdownItem divider />
                    <div className='form-check mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='status' id='status' className='me-1' />
                      <Label className='form-check-label' for='status'>Status</Label>
                    </div>
                    <div className='form-check ms-2 mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='status-active' id='status-active' className='me-1' />
                      <Label className='form-check-label' for='status-active'>Active</Label>
                    </div>
                    <div className='form-check ms-2 mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='status-inactive' id='status-inactive' className='me-1' />
                      <Label className='form-check-label' for='status-inactive'>InActive</Label>
                    </div>
                    <div className='form-check ms-2 mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='status-paid' id='status-paid' className='me-1' />
                      <Label className='form-check-label' for='status-paid'>Paid</Label>
                    </div>
                    <div className='form-check ms-2 mb-1 d-flex align-items-center'>
                      <Input type='checkbox' name='status-prospect' id='status-prospect' className='me-1' />
                      <Label className='form-check-label' for='status-prospect'>Prospect</Label>
                    </div>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <label className='mb-0' htmlFor='search-invoice'>
              Search:
            </label>
            <Input
              id='search-invoice'
              className='ms-50 w-100'
              type='text'
            />
          </div>

          <div className='d-flex align-items-center table-header-actions'>
            <UncontrolledDropdown className='me-1'>
              <DropdownToggle color='secondary' caret outline>
                <Share className='font-small-4 me-50' />
                <span className='align-middle'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer className='font-small-4 me-50' />
                  <span className='align-middle'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <FileText className='font-small-4 me-50' />
                  <span className='align-middle'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid className='font-small-4 me-50' />
                  <span className='align-middle'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File className='font-small-4 me-50' />
                  <span className='align-middle'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy className='font-small-4 me-50' />
                  <span className='align-middle'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

                <span onClick={() => history.push("/team/contractors/add")} style={{ width: 'max-content'}}className='align-middle btn btn-primary'>Add New Contractor</span>
              {/* </DropdownToggle> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const ClientsList = () => {
  // ** Store Vars
//   const dispatch = useDispatch()

   const [data, setData] = useState([])
  // ** States
//   const [sort, setSort] = useState('desc')
//   const [currentPage, setCurrentPage] = useState(1)
//   const [sortColumn, setSortColumn] = useState('id')
  const [rowsPerPage, setRowsPerPage] = useState(10)
//   const [currentRole] = useState({ value: '', label: 'Select Role' })
//   const [currentPlan] = useState({ value: '', label: 'Select Plan' })
//   const [currentStatus] = useState({ value: '', label: 'Select Status', number: 0 })

  // ** Custom Pagination
  const CustomPagination = () => {
    // const count = Number(Math.ceil(store.total / rowsPerPage))
    const count = 1
    const currentPage = 1

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }

  const handleSort = (column, sortDirection) => {
    console.log(column, sortDirection)
  }

  useEffect(() => {
      const clientData = [
          {
            id: '1',
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            department: 'HR',
            role: 'HR Manager',
            endorosementDate:"10/10/2020",
            refrences: '1/3',
            progress: '25%',
            assesed: true,
            profileLocked: false,
            status: '1'
          },
          {
            id: '1',
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            department: 'Sale',
            role: 'Sales Manager',
            endorosementDate:"10/11/2020",
            refrences: '2/3',
            progress: '65%',
            assesed: false,
            profileLocked: true,
            status: '2'
          }
        ]
      setData(clientData)
      setRowsPerPage(10)
  }, [])

  return (
    <Fragment>

      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
          <DataTable
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            paginationServer
            columns={columns}
            onSort={handleSort}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            paginationComponent={CustomPagination}
            data={data}
            subHeaderComponent={
                <CustomHeader
                  rowsPerPage={rowsPerPage}
                //   handlePerPage={handlePerPage}
                />
              }
          />
        </div>
      </Card>

    </Fragment>
  )
}

export default ClientsList
