//
import React, { Component } from "react"

//import Button from 'react-bootstrap/lib/Button'
import { 
    Button, Col, Form, FormGroup, ControlLabel, FormControl,
    Panel, Grid, Row 
    } from 'react-bootstrap'

class LoginView extends Component {
    
    render(){
        return(
            <Grid>
							<Row className="show-grid">
								<Col sm={12}>
									<Panel header={<h3>Login</h3>}>
										<Form horizontal>
											<FormGroup controlId="formHorizontalEmail">
											<Col componentClass={ControlLabel} sm={2}>
													Email
											</Col>
											<Col sm={10}>
													<FormControl type="email" placeholder="Email" />
											</Col>
											</FormGroup>

											<FormGroup controlId="formHorizontalPassword">
											<Col componentClass={ControlLabel} sm={2}>
													Password
											</Col>
											<Col sm={10}>
													<FormControl type="password" placeholder="Password" />
											</Col>
											</FormGroup>

											<FormGroup>
											<Col smOffset={2} sm={10}>
													<Button type="submit">
													Sign in
													</Button>
											</Col>
											</FormGroup>
										</Form>
									</Panel>
								</Col>
							</Row>
            </Grid>
        )
    }
}

export default LoginView