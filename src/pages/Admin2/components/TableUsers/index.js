import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import ModalAddUser from './Modal/modalAddUsers';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Table } from '../../../../styles/tables';
import { FaTrash, FaPen } from 'react-icons/fa';
import api from '../../../../services/api';

export default class TableUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      render: false,
    };
  }

  async componentDidMount() {
    const response = await api.get('users');

    setTimeout(
      function() {
        this.setState({ items: response.data, render: true });
      }.bind(this),
      100
    );
  }

  async delete(id) {
    const response = await api.delete('users/' + id);
    if (response.statusText === 'OK') {
      const items = this.state.items.filter(item => item.id !== id);
      setTimeout(
        function() {
          this.setState({ items: items, render: true });
        }.bind(this),
        750
      );
    }
  }

  handleDelete(id, e) {
    e.preventDefault();

    confirmAlert({
      title: 'Excluir usuário',
      message: 'Você tem certeza que deseja excluir?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => this.delete(id),
        },
        {
          label: 'Não',
          onClick: () => console.log('Não excluir!'),
        },
      ],
    });
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <ModalAddUser />
        <br />
        <Table className="table-responsive">
          <div className="topo-table">
            <h2>{this.props.title}</h2>
            {/* <button className="btn-adicionar">
              <FaPlus />
            </button> */}
          </div>

          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th width={25}>#</th>
                <th>NOME</th>
                <th>E-MAIL</th>
                <th>CPF</th>
                <th>PERFIL</th>
                <th>STATUS</th>
                <th width={200}>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.cpf}</td>
                  <td>{item.profile}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="btn-editar btn-warning">
                      <FaPen />
                    </button>
                    <button
                      className="btn-excluir btn-danger"
                      onClick={this.handleDelete.bind(this, item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
      </>
    );
  }
}
