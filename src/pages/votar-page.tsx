import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const VotarPage: React.FC<{}> = () => {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label>Cidade</Form.Label>
            <Form.Control as="select">
              <option value="1">Caieiras</option>
              <option value="2">Francisco Morato</option>
              <option value="3">Franco da Rocha</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Vereador</Form.Label>
            <Form.Control as="select">
              <option value="1">Fulano</option>
              <option value="2">Beltrano</option>
              <option value="3">Ciclano</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Prefeito</Form.Label>
            <Form.Control as="select">
              <option value="1">Candidato Honesto</option>
              <option value="2">Candidato Louco</option>
              <option value="3">Outro Candidato</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default VotarPage;