import { useNavigate } from "react-router-dom";
import './pageWrapper.css'


function PageWrapper({ title, subtitle, navigatePath, moveTo }) {
    const navigate = useNavigate();

    return (
        <div className="wrapper-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrapper-heading">
                            <h4 className="p-0 m-0">{title}</h4>
                            <h6 className="p-0 m-0">
                                <span onClick={() => navigate(navigatePath)}>{moveTo}</span> / {subtitle}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageWrapper