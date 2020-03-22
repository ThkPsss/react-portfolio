import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://wallpaperaccess.com/full/45639.jpg) center / cover'}} > Poképedia</CardTitle>
                        <CardText>
                            Poképedia is an app that allows you to build and test Pokémon compositions, to see how they fair when fighting the main battles you face in the Pokémon games!
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/stevevillardi/project1-pokepedia'>GitHub</Button>
                            <Button colored href='http://pokepedia.us'>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} > JavaScript Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} > JavaScript Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://unity3d.com/files/images/ogimg.jpg?1) center / cover'}} > Unity Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://unity3d.com/files/images/ogimg.jpg?1) center / cover'}} > Unity Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://unity3d.com/files/images/ogimg.jpg?1) center / cover'}} > Unity Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div> 
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/mysql-workbench-icon.png) center / cover'}} > MySQL Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/mysql-workbench-icon.png) center / cover'}} > MySQL Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/mysql-workbench-icon.png) center / cover'}} > MySQL Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>            )
        }
        else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png) center / cover'}} > MongoDB Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png) center / cover'}} > MongoDB Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png) center / cover'}} > MongoDB Project</CardTitle>
                        <CardText>
                            Filler Text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>Unity</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Project;