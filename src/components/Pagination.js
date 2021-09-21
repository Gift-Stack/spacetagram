const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <a
          href="#!"
          key={number}
          onClick={() => paginate(number)}
          style={{
            textDecoration: 'none',
            listStyle: 'none',
            padding: '5px 15px',
            border: '1px solid #999',
            marginRight: 10,
            background: currentPage === number ? '#ccc' : 'initial'
          }}
        >
          <li>{number}</li>
        </a>
      ))}
    </ul>
  )
}

export default Pagination
