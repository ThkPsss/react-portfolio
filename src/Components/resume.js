import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src='https://www.shareicon.net/data/512x512/2016/01/24/708382_people_512x512.png'
                                alt='avatar'
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Christan Spence</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Junior Web Developer specializing in backend development I am knowledgeable in C#, JavaScript and other back-end related software. I have experience in front end work like CSS and Adobe XD. I am eager to learn more and grow my experience in the field. </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>855 Ballard Street Apt. D</p>
                        <h5>Phone</h5>
                        <p>(631) 839-3291</p>
                        <h5>Email</h5>
                        <p>ChristanSpence66@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>


                        <Education 
                            startYear={2017}
                            endYear={2019}
                            schoolName="Full Sail University"
                            schoolDescription='Description'
                        />

                        <Education 
                            startYear={2019}
                            endYear={2020}
                            schoolName="University of Central Florida"
                            schoolDescription='Description'
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>


                        <Experience
                            startYear='Feb 2019'
                            endYear='Aug 2019'
                            jobName='PDQ Restaurants'
                            jobDescription="At PDQ and I learned almost every position but my main position was Grill Cook. Here I learned how to keep a clean and organized working environment to enhance productivity, served as a friendly, hardworking and punctual employee and worked well independently while problem solving. I've also assised with training new employess while monitoring the producivity of current employees."
                        />
                        <Experience
                            startYear='Oct 2019'
                            endYear='Nov 2019'
                            jobName='Wingstop Restaurants'
                            jobDescription="While at Wingstop I did more of the same as PDQ. I kept a clean and organized working enviroment to make work productivity at its best whenever we had down time."
                        />
                        <Experience
                            startYear='Nov 2019'
                            endYear='Jan 2020'
                            jobName='UPS'
                            jobDescription="I worked at UPS as a Driver's Helper. Here I helped the drivers during the peak season, deliver packages to homes and businesses in a punctual and timely manner."
                        />
                        <Experience
                            startYear='Feb 2020'
                            endYear='Present'
                            jobName='Opinion Access'
                            jobDescription="OAC is a call center that deals with outgoing calls to conduct surveys. I work as a Interviewer conducting these calls. Here I've leaned a lot more about customer service."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills 
                            skill="C#"
                            progress={50}
                        />
                        <Skills 
                            skill="Node.js"
                            progress={50}
                        />
                        <Skills 
                            skill="jQuery"
                            progress={60}
                        />
                        <Skills 
                            skill="CSS"
                            progress={45}
                        />
                        <Skills 
                            skill="HTML5"
                            progress={55}
                        />
                        <Skills 
                            skill="MySQL"
                            progress={65}
                        />
                        <Skills 
                            skill="MongoDB"
                            progress={50}
                        />
                        <Skills 
                            skill="React"
                            progress={50}
                        />
                        
            
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;