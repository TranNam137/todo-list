import React, { Component } from 'react';
import { fromJS } from 'immutable';

import './style.scss';
import Column from './components/Column/';
import AddNewModal from './components/AddNewModal/';
import Task from './components/Task/';

class App extends Component {

    state = {
        displayModal: false,
        columns: fromJS([
            { id: 'td', title: 'TO DO', tasks: [{id: 1, content: 'Demo task', time: '15/01/2021, 10:30:40 PM'}] },
            { id: 'ip', title: 'IN PROGRESS', tasks: [] },
            { id: 'de', title: 'DONE', tasks: [] }
        ])
    }

    handleToggleModal = () => {
        this.setState(prevState => ({
            displayModal: !prevState.displayModal,
        }));
    }

    handleToggleModal = () => {
        this.setState(prevState => ({
            displayModal : !prevState.displayModal
        }))
    }

    render() {
        const { columns, displayModal } = this.state;

        return (
            <div className="App">
                <h1 className="App__title">TO DO LIST</h1>
                <div className="App__content">
                    {
                        columns.map(column => (
                            <Column key={column.get('id')} column={column} handleAddNewTask={this.handleToggleModal}>
                                <div style={{ minHeight: '300px' }}>
                                    {
                                        column.get('tasks').map(task => (
                                            <Task key={task.get('id')} task={task} />
                                        ))
                                    }
                                </div>
                            </Column>
                        ))
                    }
                </div>
                {displayModal && <AddNewModal handleToggleModal={this.handleToggleModal} />}
            </div>
        );
    }
}

export default App;
