import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../Component/OurTeams/data.js'
import './ourTeam.css'
import { PageWrapper } from '../../Component'

function OurTeamPage() {

    const navigate = useNavigate()

    return (
        <div>
            <PageWrapper
                title={"All Team Members"}
                moveTo={"Home"}
                navigatePath={'/'}
                subtitle={"Our Team"}
            />

            <div className="our-team-card-container section-padding">
                <div className="container">
                    <div className="row g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {data.map((instructor, index) => (
                            <div className="col" key={index}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img
                                                src={
                                                    instructor?.src.startsWith("http")
                                                        ? instructor?.src // Use the absolute URL as-is
                                                        : require(`../../Assets/${instructor?.src}`) // Use require for local images
                                                }
                                                alt={instructor.name}
                                            />
                                            {/* <img
                                                src={require(`../../Assets/${instructor?.image}`) || 'default-placeholder.jpg'} // Fallback for missing images
                                                alt={instructor.name}
                                            /> */}
                                        </div>
                                        <div className="instructor-content">
                                            <a href={instructor.profileLink}>
                                                <h4 className="p-0 m-0">{instructor.name}</h4>
                                            </a>
                                            <p className="p-0 m-0">{instructor.degree}</p>
                                            <span className="ratting">
                                                {[...Array(instructor.rating)].map((_, i) => (
                                                    <i key={i} className="icofont-ui-rating"></i>
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="instructor-footer">
                                        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                            <li>
                                                <i className="icofont-book-alt"></i>
                                                <p className="p-0 m-0">{instructor.courses} courses</p>
                                            </li>
                                            <li>
                                                <i className="icofont-users-alt-3"></i>
                                                <p className="p-0 m-0">{instructor.students} students</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurTeamPage