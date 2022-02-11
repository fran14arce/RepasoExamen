import React from 'react';
import { Card } from 'react-bootstrap';

class Libro extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.autor = props.autor;
    this.fecha = props.fecha;
    this.paginas = props.paginas;
    this.urlimagen = props.urlimagen;
    this.idioma = props.idioma;
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.urlimagen} />
        <Card.Body>
          <Card.Title>{this.titulo}</Card.Title>
          <Card.Text>Autor: {this.autor}</Card.Text>
          <Card.Text>Fecha de publicación: {this.fecha}</Card.Text>
          <Card.Text>Páginas: {this.paginas}</Card.Text>
          <Card.Text>Idioma: {this.idioma}</Card.Text>
        </Card.Body>
        <br/>
      </Card>
    );
  }
}

export default Libro;
