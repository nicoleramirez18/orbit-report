export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning() {
        let changeColor = true;
        if (this.type.toLowerCase() === 'space debris') {
            return changeColor;
        } else {
            return changeColor = false;
        }
    }

    shouldShowStripe(arr) {
        return arr.indexOf(this) % 2 === 0 && this.type.toLowerCase() !== 'space debris';
    }
}