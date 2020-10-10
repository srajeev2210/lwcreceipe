import { LightningElement,api } from 'lwc';

export default class ChartBar extends LightningElement {
    @api percentage = 10;

    get style() {
        return `width: ${this.percentage}%`;
    }
}