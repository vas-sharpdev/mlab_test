export class User {
    constructor(values: Object = {}, oid: string = '') {
        Object.assign(this, values);
        if (oid !== '') {
            this._id = { $oid: oid };
        }
    }

    public _id: { $oid: string };
    public firstname: string;
    public lastname: string;
    public email: string;
    public date: Date;
}
