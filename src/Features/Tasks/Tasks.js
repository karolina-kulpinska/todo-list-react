import React from 'react';
import Form from '../Tasks/Form';
import TasksList from '../Tasks/TasksList';
import Buttons from '../Tasks/Buttons';
import Section from '../../Common/Section';
import Header from '../../Common/Header';
import Container from '../../Common/Container';

function Tasks() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;