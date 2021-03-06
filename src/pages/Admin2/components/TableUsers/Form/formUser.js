import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '~/store/modules/user/actions';
import { Form, Button } from 'react-bootstrap';
import api from '~/services/api';
import { BtnAdd } from './styles';

class FormUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      password: '',
      profile: '',
      email: '',
      cpf: '',
      status: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCpf = this.handleChangeCpf.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeProfile = this.handleChangeProfile.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  handleChangeName = e => {
    this.setState({ nome: e.target.value });
  };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleChangeCpf = e => {
    this.setState({ cpf: e.target.value });
  };

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleChangeProfile = e => {
    this.setState({ profile: e.target.value });
  };

  handleChangeStatus = e => {
    this.setState({ status: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addUser } = this.props;
    const { nome, password, profile, email, cpf, status } = this.state;

    api
      .post('users', {
        nome,
        password,
        profile,
        email,
        cpf,
        status,
      })
      .then(res => {
        if (res.status === 201) {
          setTimeout(function() {
            addUser(res.data);
          }, 500);

          this.props.close();
        }
      });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              autoComplete="off"
              placeholder="Nome do usuário"
              onChange={this.handleChangeName}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              autoComplete="off"
              placeholder="name@example.com"
              onChange={this.handleChangeEmail}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="password"
              type="password"
              autoComplete="off"
              placeholder="******"
              onChange={this.handleChangePassword}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="000.000.000-00"
              onChange={this.handleChangeCpf}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Perfil</Form.Label>
            <Form.Control as="select" onChange={this.handleChangeProfile}>
              <option>Selecionar o perfil</option>
              <option>user</option>
              <option>admin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" onChange={this.handleChangeStatus}>
              <option>Definir o Status</option>
              <option>active</option>
              <option>inactive</option>
            </Form.Control>
          </Form.Group>
          <BtnAdd>
            <Form.Group className="btn-add">
              <Button type="submit" onClick={this.handleSubmit}>
                Salvar
              </Button>
            </Form.Group>
          </BtnAdd>
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(FormAddUser);
export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
