import React, { Component } from 'react';
import styled from 'styled-components';

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
    background-color: #42EA9D;

    box-shadow: 0px 0px 10px #42EA9D;
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
    height: 250px;
`;

const TextRight = styled.div`
    padding-top: 40px;
    padding-left: 70px;
`;

const TextLeft = styled.div`
    padding-top: 50px;
`;

const Header = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const HeaderLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
`;

const TaskList = styled.ul`
    list-style: none;

    margin-top: -5px;
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 18px;
    color: #222B3E;
`;

const TaskListItem = styled.li`
    margin: 10px 0;
`;

const Streak = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 30px;
    color: #222B3E;

    display: block;
    margin: 50px auto;
    width: 50px;
`;

class PersonalTasks extends Component {
    state = {
        task1: 'Finish Kisana UI',
        task2: 'Validate product',
        task3: 'Start working on YC app',
        streak: '7'
    }

    render() {
        const { task1, task2, task3, streak } = this.state;

        return (
            <div>
                <PersonalTaskSection>
                    <Container>

                        <HeaderLayout>
                            <Title>Your tasks</Title>
                            <AddTask>Add new</AddTask>
                        </HeaderLayout>


                        <TaskDisplay>
                            <TextRight>
                                <Header> What I'm working on today </Header>

                                <TaskList>
                                    <TaskListItem>{task1}</TaskListItem>
                                    <TaskListItem>{task2}</TaskListItem>
                                    <TaskListItem>{task3}</TaskListItem>
                                </TaskList>
                            </TextRight>

                            <TextLeft>
                                <Streak>🔥{streak}</Streak>
                            </TextLeft>
                        </TaskDisplay>
                    </Container>
                </PersonalTaskSection>
            </div>
        )
    }
}

export default PersonalTasks;