import React from 'react'
import LoadersModal from '../common/loaders/LoadersModal'

const ProductsWrapper = ({loading, title, children}) => {
  return (
    <section className="section">
        <div className="container d-flex f-direction-column gap-lg">
            {loading && <LoadersModal/>}
            <h1 className="section__title section__title--lg">{title}</h1>
            <div className="g-elements g-elements--products gap-xs">
                {children}

            </div>

        </div>
    </section>
  )
}

export default ProductsWrapper