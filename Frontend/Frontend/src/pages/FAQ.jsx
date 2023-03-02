import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function FAQ() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Como faço para doar itens?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Para doar itens, basta preencher o formulário de doação em nossa página de doações.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Qual o prazo de entrega das doações?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            O prazo de entrega das doações varia de acordo com a região de destino e a disponibilidade de transporte.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default FAQ;
