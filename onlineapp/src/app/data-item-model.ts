export class DataItemModel {
    id: string;
    name: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
