import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const VotarPage: React.FC<{}> = () => {
  const [voted, setVoted] = React.useState(false)
  const vote = () => {
    setVoted(true)
  }
  const form = (
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
          <Button onClick={vote}>Votar</Button>
        </Form>
      </Col>
    </Row>
  )
  const redirect = (<Redirect to="/cidade" />)
  return voted ? redirect : form
}

export default VotarPage;