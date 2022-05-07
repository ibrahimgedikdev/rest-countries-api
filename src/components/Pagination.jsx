import React from 'react'

function Pagination({paginate, totalCountries, countryPerPage}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCountries / countryPerPage); i++){
      pageNumbers.push(i)
  }

  return (
    <nav>
        <ul className="pagination">
            {
                pageNumbers.map((number, index) => (
                    <li key={index} className="pagination-list">
                        <button onClick={() => paginate(number)} className='pagination-link'>{number}</button>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination