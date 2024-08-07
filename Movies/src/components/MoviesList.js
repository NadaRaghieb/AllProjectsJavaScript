import React from 'react'
import {Row} from 'react-bootstrap'
import CardMovie from './CardMovie'
import PagesNumbers from './PagesNumbers'
const MoviesList = ({movies, getPage, pageCount}) => {
  return (
    <Row className='mt-3'>
      {
        movies.length >=1 ?(movies.map((mov)=>{
          return(<CardMovie key={mov.id} mov={mov}/>)
        })) : <h2>لايوجد افلام</h2>
      }
      <PagesNumbers getPage={getPage} pageCount={pageCount}/>
    </Row>
  )
}

export default MoviesList
