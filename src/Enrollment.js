import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

import * as yup from "yup";
import { Formik } from "formik";

const intialState = {
  name: "",
  phone: "",
  birthdate: "",
  cnh: "",
  cnhtipo: "",
  cpf: ""
};
const userSchema = yup.object().shape({
  name: yup
    .string("Name must be a string")
    .required("Name is required")
    .max(100, "Name must be at most 100 characters")
    .min(5, "Name must be at least 5 characters"),
  phone: yup
    .string("Phone must be a string")
    .min(11, "Phone must be at least 11 characters")
    .max(30, "Phone must be at most 30 characters")
    .required("Phone is required"),
  birthdate: yup.date().required("Date of Birth is required"),
  cnh: yup
    .string("Driver License Number must be a string")
    .min(5, "Driver License Number must be at least 5 characters")
    .max(15, "Driver License Number must be at most 15 characters")
    .required("Driver License Number is required"),
  cnhtipo: yup
    .string("Driver License Type must be a string")
    .min(1, "Driver License Type must be at least 1 characters")
    .max(5, "Driver License Type must be at most 5 characters")
    .required("Driver License Type is required"),
  cpf: yup
    .string("CPF must be a string")
    .min(11, "CPF must be at least 11 characters")
    .max(11, "CPF must be at most 11 characters")
    .required("CPF is required")
});

class Enrollment extends React.Component {
  render() {
    return (
      <Formik
        initialValues={this.props.driverUpdateValue ? this.props.driverUpdateValue : intialState}
        enableReinitialize
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);

          this.props.driverUpdateValue
          ? this.props.setUpdatedDrivers({...values}, this.props.driverUpdateValueIndex) :
          this.props.handleSetDrivers({...values});

          setTimeout(() => {
            actions.setSubmitting(false);

            actions.resetForm(intialState);

            this.props.handleSetDriverUpdateValue(null);
          }, 1000);
        }}
        validationSchema={userSchema}
      >
        {props =>
          !props.isSubmitting ? (
            <form onSubmit={props.handleSubmit}>
              <Container fluid>
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <h3 className="mb-0">Enrollment</h3>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <h6 className="heading-small text-muted mb-4">
                          Driver information
                        </h6>
                        <div className="pl-lg-4">
                          <Row className="my-3">
                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-name"
                              >
                                Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-name"
                                placeholder="John Doe"
                                name="name"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.name}
                              />
                              {props.errors.name && props.touched.name ? (
                                <span className="my-2" style={{color: 'red', fontSize: 13}}>{props.errors.name}</span>
                              ) : (
                                ""
                              )}
                            </Col>

                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-phone"
                              >
                                Phone
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-phone"
                                placeholder="(11) 99192-9999"
                                type="tel"
                                name="phone"
                                pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
                                onChange={props.handleChange}
                                value={props.values.phone}
                              />
                              {props.errors.phone && props.touched.phone ? (
                                <span className="my-2" style={{color: 'red', fontSize: 13}}>{props.errors.phone}</span>
                              ) : (
                                ""
                              )}
                            </Col>
                          </Row>

                          <Row className="my-3">
                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-date-birth"
                              >
                                Date of Birth
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-date-birth"
                                placeholder="01/01/2000"
                                name="birthdate"
                                type="date"
                                onChange={props.handleChange}
                                value={props.values.birthdate}
                              />
                              {props.errors.birthdate &&
                              props.touched.birthdate ? (
                                <span className="my-2" style={{color: 'red', fontSize: 13}}>{props.errors.birthdate}</span>
                              ) : (
                                ""
                              )}
                            </Col>
                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-driver-licence"
                              >
                                Driver License Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-driver-licence"
                                placeholder="1234567891-0"
                                type="text"
                                name="cnh"
                                required
                                maxLength="11"
                                onChange={props.handleChange}
                                value={props.values.cnh}
                              />
                              {props.errors.cnh && props.touched.cnh ? (
                                <span className="my-2" style={{color: 'red', fontSize: 13}}>{props.errors.cnh}</span>
                              ) : (
                                ""
                              )}
                            </Col>
                          </Row>

                          <Row className="my-3">
                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-cnh-type"
                              >
                                Driver License Type
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-cnh-type"
                                placeholder="A"
                                name="cnhtipo"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.cnhtipo}
                              />
                              {props.errors.cnhtipo && props.touched.cnhtipo ? (
                                <span className="my-2" style={{color: 'red', fontSize: 13}}>{props.errors.cnhtipo}</span>
                              ) : (
                                ""
                              )}
                            </Col>
                            <Col lg="6">
                              <label
                                className="form-control-label"
                                htmlFor="input-cpf"
                              >
                                CPF
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-cpf"
                                placeholder="039.604.689-46"
                                type="text"
                                name="cpf"
                                required
                                onChange={props.handleChange}
                                value={props.values.cpf}
                              />
                              {props.errors.cpf && props.touched.cpf ? (
                                <span className="my-2" style={{color: 'red', fontSize: 13}}>{props.errors.cpf}</span>
                              ) : (
                                ""
                              )}
                            </Col>
                          </Row>
                        </div>
                      </CardBody>
                      <CardFooter className="py-4">
                        <nav aria-label="...">
                          <Row className="align-items-end">
                            <Col className="text-right" xs="12">
                              <Button
                                color="primary"
                                onClick={props.handleSubmit}
                                size="md"
                                disabled={!props.isValid}
                              >
                                Submit
                              </Button>
                            </Col>
                          </Row>
                        </nav>
                      </CardFooter>
                    </Card>
                  </div>
                </Row>
              </Container>
            </form>
          ) : (
            <div />
          )
        }
      </Formik>
    );
  }
}

export default Enrollment;
