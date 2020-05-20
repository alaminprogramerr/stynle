import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";
import queryString  from 'querystring'
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import { Link } from "react-router-dom";
import axios from 'axios'

class LoginPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",  
    name:'',
    email:"",
    error:{}
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
    let usertype=queryString.parse(window.location.search)
    this.setState({user:usertype.user})
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  changeHandler=event=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=(event)=>{
    event.preventDefault()
    const  {name,email,password,confirmPassword,address,phoneNumber,about,user} =this.state
    const info ={name,email,password,confirmPassword,address,phoneNumber,about,user}
    axios.post('/login',info)
    .then(res=>{
      console.log(res.data)
      window.localStorage.setItem('st_app',res.data.token)
      window.location.href='/dashboard'
    })
    .catch(err=>{
      console.log(err.response.data)
      if(err.response){
        this.setState({error:err.response.data})
      }
    })
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-2" lg="8" md="8">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Login</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <div className="row">
                            <div className="col-md-6">
                              <InputGroup
                              className={classnames({
                                "input-group-focus": this.state.emailFocus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-email-85" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                onChange={this.changeHandler}
                                placeholder="Email"
                                name="email"
                                type="email"
                                onFocus={e =>
                                  this.setState({ emailFocus: true })
                                }
                                onBlur={e =>
                                  this.setState({ emailFocus: false })
                                }
                              />
                            </InputGroup>
                            </div>
                            
                            <div className="col-md-6">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state.passwordFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-lock-circle" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  onChange={this.changeHandler}
                                  name="password"
                                  placeholder=" Password"
                                  type="password"
                                  onFocus={e => this.setState({ passwordFocus: true })}
                                  onBlur={e => this.setState({ passwordFocus: false })}
                                />
                              </InputGroup>
                            </div>
                          </div>
                          </Form>
                      </CardBody>
                      <CardFooter>
                        <Button onClick={this.submitHandler} className="btn-round" color="primary" size="lg">
                              Login
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col style={{zIndex:'999'}} >
                    {
                      Object.keys(this.state.error).length>0?
                      <Alert className="alert-with-icon" color="danger">
                        <span
                          className="tim-icons icon-bell-55"
                          data-notify="icon"
                        />
                        <div data-notify="message">
                          <p><b>Error Occurd</b></p>
                          <p> {this.state.error.name} </p>
                          <p> {this.state.error.email} </p>
                          <p> {this.state.error.password} </p>
                          <p> {this.state.error.confirmPassword} </p>
                          <p> {this.state.error.phoneNumber} </p>
                          <p> {this.state.error.address} </p>
                          <p> {this.state.error.about} </p>
                          <p> {this.state.error.massage} </p>
                        </div>
                      </Alert>:''

                    }
                
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default LoginPage;