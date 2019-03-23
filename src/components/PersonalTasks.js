import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Component Imports
import Modal from './Modal';

const PersonalTaskSection = styled.div`
    margin-top: 20px;
`;

const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 5px 0;
`;

const Title = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const AddTask = styled.button`
    width: 150px;
    height: 45px;

    border: none;
    border-radius: 5px;
    background-color: #00cc6f;

    box-shadow: 0px 0px 10px rgba(0, 204, 111, 0.7);
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 16px;
    color: white;
    cursor: pointer;

    justify-self: end;
    align-self: center;
`;

const TaskDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);

    background-color: white;
    border-radius: 8px;
    max-width: 800px;
    height: 280px;
`;

const TextRight = styled.div`
    padding-top: 10px;
    padding-left: 40px;
`;

const TextLeft = styled.div`
    padding-top: 50px;
`;

const Header = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 20px;
    color: #222B3E;
`;

const HeaderLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
`;

const TaskList = styled.ul`
    list-style: none;

    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 16px;
    color: #222B3E;

    padding-top: 15px;
    padding-left: 20px;
`;

const TaskListItem = styled.li`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;

    &:hover button {
        display: inline-block;
    }
`;

const TaskListItemLeft = styled.div`

`;

const TaskListItemRight = styled.div`
    
`;

const Delete = styled.button`
    background: none;
    color: #B4A6AB;
    border: none;
    height: 5px;

    display: none;
`;

const Check = styled.input`
    margin-right: 10px;
    margin-botton: 5px;

    ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;


    &:checked {
        background: #00cc6f;
    }
`;

const Streak = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 30px;
    color: #222B3E;

    display: block;
    margin: 50px 0 50px 35px;
    width: 70px;
`;

const ModalText = styled.div`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 20px;
    color: #222B3E; 

    justify-self: center;

    margin: 0 auto;
`;

const ModalTitle = styled.p`
    text-align: center;
`;

const ModalInput = styled.input`
    font-family: 'Open Sans', Arial;
    font-weight: 400;
    font-size: 16px;
    color: #222B3E; 

    border: 0.5px solid #F4F5FA;
    border-radius: 8px;
    padding: 10px 20px;
    
    display: block;
    margin: 0 auto;

    width: 80%;

    &::placeholder {
        color: #C0C3D2;
        font-size: 16px;
    }
`;

class PersonalTasks extends Component {
    state = {
        show: false,
        task1: 'Finish UI gig',
        task2: 'Validate product',
        task3: 'Start implementing auth',
        task4: 'Study for tomorrows examn',
        task5: 'Read 5 pages of book',
        streak: '7'
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        const { task1, task2, task3, task4, task5, task6, streak } = this.state;

        return (
            <div>
                <PersonalTaskSection>
                    <Container>

                        <HeaderLayout>
                            <Title>Your tasks</Title>

                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <ModalText>
                                    <ModalTitle>Add new task</ModalTitle>
                                    <ModalInput type="text" placeholder="Task..." />
                                </ModalText>
                            </Modal>

                            <AddTask type='button' onClick={this.showModal}>Add new</AddTask>
                        </HeaderLayout>


                        <TaskDisplay>
                            <TextRight>
                                <Header> What I'm working on today </Header>

                                <TaskList>
                                    <TaskListItem>
                                        <TaskListItemLeft>
                                            <Check type="checkbox" /> {task1} <Delete>x</Delete>
                                        </TaskListItemLeft>
                                    </TaskListItem>

                                    <TaskListItem>
                                        <TaskListItemLeft>
                                            <Check type="checkbox" /> {task2} <Delete>x</Delete>
                                        </TaskListItemLeft>
                                    </TaskListItem>

                                    <TaskListItem>
                                        <TaskListItemLeft>
                                            <Check type="checkbox" /> {task3} <Delete>x</Delete>
                                        </TaskListItemLeft>
                                    </TaskListItem>

                                    <TaskListItem>
                                        <TaskListItemLeft>
                                            <Check type="checkbox" /> {task4} <Delete>x</Delete>
                                        </TaskListItemLeft>
                                    </TaskListItem>

                                    <TaskListItem>
                                        <TaskListItemLeft>
                                            <Check type="checkbox" /> {task5} <Delete>x</Delete>
                                        </TaskListItemLeft>
                                    </TaskListItem>
                                </TaskList>
                            </TextRight>

                            <TextLeft>
                                <Streak>🔥 {streak}</Streak>
                            </TextLeft>
                        </TaskDisplay>
                    </Container>
                </PersonalTaskSection>
            </div>
        )
    }
}

export default PersonalTasks;