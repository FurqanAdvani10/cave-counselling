import './category.css'
import data from './data.json';

const Category = () => {

    return (
        <div className="category-main section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <div className="category-heading heading-with-sub">
                            <h6 className="p-0 m-0">Popular Category</h6>
                            <h3 className="p-0 m-0">Popular Category For Learn</h3>
                        </div>
                    </div>
                </div>
                <div className="category-box-main">
                    <div className="row d-flex justify-content-center align-items-center">
                        {data.map((item, index) => (
                            <div className="col-md-6 col-sm-12 col-lg-4 col-xl-4" key={index}>
                                <div className="category-item-box d-flex justify-content-center align-items-center flex-column">
                                    <div className="category-item-icon">
                                        <i className={`fa ${item.icon}`}></i>
                                    </div>
                                    <div className="category-item">
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Category
