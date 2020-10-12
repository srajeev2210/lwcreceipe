import { LightningElement } from 'lwc';

export default class ApiSetterGetter extends LightningElement {

    lastTodoId = 2;
    description;
    priority = false;

    todos = [
        { id: 1, description: 'Explore recipes', priority: true },
        { id: 2, description: 'Install Ebikes sample app', priority: false }
    ];

    onDescChangeHandler(event){
        this.description = event.target.value;
    }

    onCheckboxHandler(event){
        this.priority = event.target.checked;
    }

    onClickHandler(event){
        this.lastTodoId = this.lastTodoId + 1;
        this.todos = [
                    ...this.todos,
                    {
                        id : this.lastTodoId,
                        description : this.description,
                        priority : this.priority
                    }
        ];
    }
}