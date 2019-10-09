import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    RoleError: ""
  });

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addMemberFn(member);
    setMember({ [e.target.value]: "" });
  };
  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col me={6}>
            <FormGroup>
              <Label htmlFor="name"></Label>
              <Input
                placeholder="Member Name"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col me={6}>
            <Label htmlFor="email"></Label>
            <Input
              placeholder="Member Email"
              id="email"
              name="email"
              type="text"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row form>
          <Col me={6}>
            <Label htmlFor="role"></Label>
            <Input
              placeholder="Member Role"
              id="role"
              name="role"
              type="text"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default MemberForm;
