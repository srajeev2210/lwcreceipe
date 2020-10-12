import { LightningElement, api } from 'lwc';

export default class TodoList extends LightningElement {

    filteredTodos = [];
    _todos = [];

    priorotyFilter = false;

    @api
    get todos(){
        return this._todos;
    }
    set todos(value){
        this._todos = value;
        this.filterTodos();
    }

    filterTodos(){
        if(this.priorotyFilter){
            this.filteredTodos = this._todos.filter(
                todo => todo.priority === true
            );
        }
        else{
            this.filteredTodos = this._todos;
        }
    }

    handleCheckboxChange(event){
        this.priorotyFilter = event.target.checked;
        this.filterTodos();
    }
}