import React from 'react'
import PropTypes from 'prop-types'
import {Input,Button} from 'reactstrap'

const SearchPanal =({term,handleSearch,toggleForm})=>(
    <div className='d-flex mb-3'>
        <Input
        placeholder='Enter search team'
        className='mr-3'
        value={term}
        onChange={e=>handleSearch(e.target.value)}
        />
        <Button color='success' onClick={toggleForm}>
            New
        </Button>

    </div>
)

SearchPanal.propTypes={
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired
}

export default SearchPanal