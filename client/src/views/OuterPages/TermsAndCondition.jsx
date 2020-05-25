import React from 'react'
import { Card, CardBody,CardHeader, Form, FormGroup ,Label,Input, Button} from 'reactstrap'
import { useState } from 'react'
import queryString from 'querystring'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function TermsAndCondition() {
    const [type, settype] = useState('')
    const [showBTN, setshowBTN] = useState(false)
    
    function toggle(){
        setshowBTN(!showBTN)
        console.log(showBTN)
    }


    useEffect(()=>{
        let string=queryString.parse(window.location.search)
        settype(string.user)
    },[])
    
    
    
    return (
        <div className="col-md-6 offset-md-3 " style={{marginTop:'200px'}}>
            <Card>
                <CardHeader className="d-flex">
                    <h2>Terms And Condition</h2>
                    <Link className="ml-auto"  to='/'>
                        <Button size="sm" color="success" >Back</Button>
                    </Link>
                </CardHeader>
                <CardBody>
                    <p style={{fontSize:'15px',textAlign:'justify'}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <div>
                        <Form>
                            <FormGroup check className="text-left">
                                <Label check >
                                <Input  type="checkbox" onChange={toggle} />
                                <span className="form-check-sign text-danger" style={{fontSize:'14px' ,marginTop:'80px'}} color='danger'/>I have read and agree  in  this terms and condition{" "}
                                </Label>
                                {   showBTN?
                                   <Link to={`/register?id=id&user=${type}`} >
                                       <Button size="sm" color="success" className="pull-right" >Next</Button>
                                   </Link> 
                                    :<span className="pull-right text-warning">Read and mark the checkbox ..</span> 
                                }
                            </FormGroup>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default TermsAndCondition
