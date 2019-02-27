export class User {
    private _name: string;
    private _photo: string;
    private _repos: Array<any>;


    get name() : string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get photo() : string {
        return this._photo;
    }

    set photo(photo: string) {
        this._photo = photo;
    }

    get repos() : Array<any> {
        return this._repos;
    }

    set repos(repos: Array<any>) {
        this._repos = repos;
    }
}