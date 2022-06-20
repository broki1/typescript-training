export class Customer {

    constructor(private _firstName: string, private _lastName: string) {
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(theFirst: string) {
        this._firstName = theFirst;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(theLast: string) {
        this._lastName = theLast;
    }
}