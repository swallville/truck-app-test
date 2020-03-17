import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row
} from "reactstrap";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DriverList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initSlice: 0,
      finalSlice: 5,
    };
  }
  render() {
    const drivers = this.props.drivers.length > 0 ? this.props.drivers : [];

    const mod = this.props.drivers.length > 0 ? this.props.drivers.length % 5 : 0;
    
    const numberOfPages = this.props.drivers.length === 0
      ? 1
      : mod > 0 ? parseInt((this.props.drivers.length / 5) + 1, 10)
      : parseInt((this.props.drivers.length / 5), 10);

    return (
      <Container fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List Of Enrolled Drivers</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Driver Name</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Driver License Number</th>
                    <th scope="col">Driver License Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {drivers.slice(this.state.initSlice, this.state.finalSlice).map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{item.name}</th>

                        <td>{item.cpf}</td>

                        <td>{item.phone}</td>

                        <td>{item.birthdate}</td>

                        <td>{item.cnh}</td>

                        <td>{item.cnhtipo}</td>

                        <td className="text-center">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              role="button"
                              size="sm"
                              color=""
                              onClick={e => e.preventDefault()}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                onClick={() => {
                                  this.props.handleSetDriverUpdateValue(item);

                                  this.props.setDriverUpdateValueIndex(this.state.initSlice + index);
                                }}
                              >
                                Update
                              </DropdownItem>

                              <DropdownItem
                                onClick={() => {
                                  this.props.removeElementAtIndex(this.state.initSlice + index);

                                  this.props.handleSetDriverUpdateValue(null);

                                  this.setState({
                                    initSlice: 0,
                                    finalSlice: 5,
                                  });
                                }}
                              >
                                Remove
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>

              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className={this.state.initSlice === 0 ? 'disabled' : ''}>
                      <PaginationLink
                        onClick={() => {
                          let initSlice = this.state.initSlice > 0 ? this.state.initSlice - 5 : 0;
                          let finalSlice = this.state.finalSlice > 0 ? this.state.finalSlice - 5 : 5;

                          this.setState({
                            initSlice,
                            finalSlice,
                          });
                        }}
                        tabIndex={this.state.initSlice === 0 ? '-1': this.state.initSlice - 5}
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>

                    {
                      Array(numberOfPages).fill().map((_, i) => {
                        return (
                          <PaginationItem
                            key={i}
                            className={this.state.initSlice === i * 5 ? 'active' : ''}
                          >
                            <PaginationLink
                              onClick={() => {
                                let initSlice = (i * 5);
                                let finalSlice = ((i + 1) * 5);

                                this.setState({
                                  initSlice,
                                  finalSlice,
                                });
                              }}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      })
                    }

                    <PaginationItem className={this.state.finalSlice >= drivers.length ? 'disabled' : ''}>
                      <PaginationLink
                        onClick={() => {
                          let initSlice = this.state.initSlice + 5;
                          let finalSlice = this.state.finalSlice + 5;

                          this.setState({
                            initSlice,
                            finalSlice,
                          });
                        }}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    );
  }
}

export default DriverList;
