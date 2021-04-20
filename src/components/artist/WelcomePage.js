import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import Nick from '../../images/Nick.png'

const WelcomePage = () => {
    return (
        <>
         <Container>
             <Row className="mt-5">
                 <Col sm={3} className="welcome-leftSide" >
                     <img src={Nick} alt="avatar" style={{width:"150px", borderRadius:"50%", paddingTop:"1rem"}}/>
                     <div className="followers-wrapper">
                         <span className="followers-title">You have : </span>
                        <div className="followers">
                            <span>20:</span>
                            <p> Followers</p>
                        </div>
                        <div className="followers">
                            <span>10: </span>
                            <p> Supporter</p>
                          </div>
                     </div>
                     
                 </Col>
                 <Col sm={6} className="welcome-middleSide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus dignissimos incidunt esse at sunt veniam nesciunt numquam cum, reiciendis amet minima, qui quae sequi soluta nulla inventore nemo enim corporis aut ut neque animi. Repellat unde aspernatur dolore eligendi nihil laboriosam, eaque amet totam distinctio nesciunt dolorum quaerat libero maxime! A maiores, consectetur expedita iste sed at! Vero quaerat officia obcaecati aut soluta qui, exercitationem velit fugit delectus magnam ipsam quo eveniet repellendus commodi sunt sint aspernatur accusamus corrupti in? Deleniti nobis repellat blanditiis, saepe nostrum maxime cupiditate soluta voluptate! Nam, quia enim laudantium illo sint eveniet pariatur facilis.</Col>
                 <Col sm={3} className="welcome-rightSide">
                     <h5>Recent Posts</h5><hr/>
                     <div className="timeline">
                         <span className="timeline-btn">2021</span>
                         <span className="timeline-btn">2020</span>
                         <span className="timeline-btn">2019</span>
                     </div>
                 </Col>
             </Row>
        </Container>   
        </>
    )
}

export default WelcomePage
