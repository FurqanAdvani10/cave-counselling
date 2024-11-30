import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../Courses/data';
import { Cloader, PageWrapper } from '../../Component';
import './details.css'

function Details() {
    const { id } = useParams();


    const navigate = useNavigate()

    const program = data.find(item => item.id === parseInt(id));

    if (!program) return <div><Cloader /></div>;

    return (

        <>
            <PageWrapper
                title={program?.name}
                moveTo="Courses"
                subtitle="Details"
                navigatePath="/courses"
            />


            <div className="container section-padding">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <img
                            src={require(`../../Assets/${program?.image}`)}
                            alt={program.name}
                            className="img-fluid rounded shadow-lg border border-primary"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3 program-title">{program.name}</h2>
                        <p className="text-muted">{program.description}</p>
                        <h4 className="mt-4 mb-3 text-secondary">{program?.features?.length ? "Features:" : ''}</h4>
                        <ul className="list-unstyled feature-list">
                            {program.features &&
                                program.features.map((feature, index) => (
                                    <li key={index} className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        <span className="text-dark">{feature}</span>
                                    </li>
                                ))}
                            {program.highlights &&
                                program.highlights.map((highlight, index) => (
                                    <li key={index} className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        <span className="text-dark">{highlight}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                {program.modules && (
                    <div className="row mt-5">
                        <h3 className="mb-4 module-title">Modules</h3>
                        {program.modules.map((module, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card module-card border-0 shadow-sm h-100">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{module.name}</h5>
                                        <p className="card-text">
                                            <strong>Duration:</strong> {module.duration}
                                        </p>
                                        <p className="card-text text-muted">{module.description}</p>
                                        <ul className="list-unstyled mt-3">
                                            {module.topics.map((topic, i) => (
                                                <li key={i} className="mb-2 d-flex align-items-start">
                                                    <i className="bi bi-arrow-right-circle-fill text-info me-2"></i>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Details