import React from 'react'
import PropTypes from 'prop-types'
import {Row,Col} from 'reactstrap'
import SearchPanal from './search-panal'
import FilterContoller from './Filter-contoller'
import ViewControl from './View-control'
import BulkContoller from './Bulk-control'


const Contollar=({term,view,changeView, handleSearch,toggleForm,handleFilter,clearSelected,clearCompleted,reset})=>(
    <div>
        <SearchPanal 
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}

        />
        <Row className='my-4'>
            <Col md={{ size:4}}>
                <FilterContoller handleFilter={handleFilter}/>
            </Col>
            <Col md={{ size:4}}>
                <ViewControl view={view} changeView={changeView}/>
            </Col>
            <Col md={{ size:4}} className='d-flex'>
                <div className='ml-auto'>
                    <BulkContoller
                    clearSelected={clearSelected}
                    clearCompleted={clearCompleted}
                    reset={reset}
                    />
                </div>

            </Col>

        </Row>
    </div>
)

Contollar.propTypes={
    term:PropTypes.string.isRequired,
    view:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired,
    handleFilter:PropTypes.func.isRequired,
    changeView:PropTypes.func.isRequired,
    clearSelected:PropTypes.func.isRequired,
    clearCompleted:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired
}

export default Contollar