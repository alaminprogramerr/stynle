
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from "axios"
import './onlinedot.css'
import {Link, Route} from 'react-router-dom'
// reactstrap components
import './massage.css'
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import {
chartExample1,
chartExample2,
chartExample3,
chartExample4
} from '../variables/charts'
import OnlineDot from './OnlineDot'
import Axios from "axios";
class Massage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      onlineSeller:[],
      activeUser:{},
      massage:[
        {from:"alamin",text:'How are you!',time:'12:02 pm'},
        {from:"client",text:'I am fine and  you!',time:'12:12 pm'},
        {from:"alamin",text:'I am too !  Can you pls let me know hwo i can start our project ?',time:'12:22 pm'},
        {from:"alamin",text:' and also i am exited about  project detils',time:'02:12 pm'},
        {from:"client",text:'Oh really ! its awsome and i will provide my all informaiton about this project as soon as possible',time:'12:12 pm'},
        {from:"alamin",text:'Than you so much !, Home we will make our relationship as longer as possible !',time:'12:12 pm'},
        {from:"client",text:'Sure alamin  , i am so happy with you ! no worry and i am also with you  ',time:'12:12 pm'},
        {from:"alamin",text:'Thank your sir !',time:'12:12 pm'},
      ]
    };
    this.setActiveUser=this.setActiveUser.bind(this)
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  redirector(){
    axios.get('/redirect')
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidMount(){
    // this.setState({
    //   activeUser:this.state.onlineSeller[1]
    // })a
    Axios.get('/all-seller')
    .then(res=>{
      this.setState({
        onlineSeller:res.data,
        activeUser:res.data[0]
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  setActiveUser(id){
    this.state.onlineSeller.forEach(single=>{
      if(single._id==id){
        this.setState({
          activeUser:single
        })
      }
    })
  }
  render() {
    return (
      <>
        <div className="content">
          <Row className="chatComponent">
            <Col lg="12" md="12">
              <Card className="card-tasks" style={{height:'610px'}}>
                <CardHeader>
                  <Row>
                    <Col md="4" lg="4">
                      <Col md="4" lg="4">
                        <h5 className="title d-inline">Massage </h5>
                        <p className="card-category d-inline"> today</p>
                      </Col>
                    </Col>
                    <Col md="8" lg="8">
                      <Row>
                        <Col md="8" lg="8">
                          <tbody>
                            <tr>
                              <td>
                                <FormGroup check>
                                  <img   style={{width:'40px',height:'40px',border:'2px solid white',borderRadius:'100%'}} src={require('../img/user.png')}/>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title"> {this.state.activeUser.name} </p>
                              </td>
                            </tr>
                          </tbody>
                        </Col>
                        <Col  md="4" lg="4">
                          <UncontrolledDropdown>
                              <DropdownToggle
                                caret
                                className="btn-icon"
                                color="link"
                                data-toggle="dropdown"
                                type="button"
                              >
                                <i className="tim-icons icon-settings-gear-63" />
                              </DropdownToggle>
                              <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Another action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Something else
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>                      
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row style={{height:'100%'}}>
                    <Col md='4' sm='4' lg='4' className="userListComponent">
                        <div className="table-full-width table-responsive">
                          <Table>
                            <tbody>
                              {
                                this.state.onlineSeller.map(single=>{
                                  return(
                                    <tr className="usreListItem" onClick={this.setActiveUser.bind(this,single._id)}>
                                      <td>
                                        <FormGroup check className="userListItemSub">
                                          <img   style={{width:'55px',height:'55px',border:'2px solid white',borderRadius:'100%'}} src={require('../img/user.png')}/>
                                          <p className="title"> {single.name} </p>
                                        </FormGroup>
                                      </td>
                                    </tr>
                                  )
                                })
                              }
                            </tbody>
                          </Table>
                        </div>
                    </Col>
                    <Col md="8" lg="8">
                      <Card className="card-tasks massageContainer" >
                        <div className=" massageInput">
                          <Input className="" placeholder="Enter Your massage ..."/>
                          <div className="sentIcon" title="Sent">
                            <i className="tim-icons icon-send" />
                          </div>
                        </div>
                        <CardBody>
                          <div className="table-full-width table-responsive">
                            <Table>
                              <tbody>
                                {this.state.massage.map(singleMassage=>{
                                  return(
                                    singleMassage.from==="alamin"?
                                    <div className="massageContainer">
                                      <div className="secondPersonText">
                                        <p> {singleMassage.text} </p>
                                        <p className="timeColor"> 
                                          <span>{singleMassage.from} </span>
                                          :<span>{singleMassage.time}</span> 
                                        </p>
                                      </div>
                                    </div>:
                                    <div className=" massageContainer">
                                      <div className="firstPersonText">
                                        <p> {singleMassage.text} </p>
                                        <p className="timeColor"> 
                                          <span>{singleMassage.from} </span>
                                          :<span>{singleMassage.time}</span> 
                                        </p>
                                      </div>
                                    </div>
                                  )
                                })}
                              </tbody>
                            </Table>
                          </div>
                        </CardBody>
                      </Card>
                    
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Massage;