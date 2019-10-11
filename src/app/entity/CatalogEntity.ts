type CourseInp = {
    id: number
    name: string
}
type CatalogInp = {
    count: number
    courses: CourseInp[]
}

export class CourseEntity {
    constructor(private inp: CourseInp) {
    }

    get id() {
        return this.inp.id;
    }

    get name() {
        return this.inp.name;
    }
}

export class CatalogEntity {
    constructor(private inp: CatalogInp) {
    }

    static get itIs() {
        return this;
    }
}