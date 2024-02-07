import { PropTypes } from "prop-types"


export function Title_Page( { title } ) {
  return (
    <h1 className="py-2 border-bottom border-danger mb-4 w-50">
      { title }
    </h1>
  )
}



Title_Page.propTypes = {
  title: PropTypes.string,
}

