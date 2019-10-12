type CourseInp = {
    id: number
    name: string
}
type CatalogInp = {
    count: number
    courses: CourseInp[]
}

export class CourseEntity {
    readonly id : number;
    readonly name : string;
    constructor(inp: CourseInp)
    {
        this.id = inp.id;
        this.name = inp.name;
    }
}

export class CatalogEntity {
    courses : CourseEntity[];
    constructor(inp: CatalogInp)
    {
        this.courses = inp.courses.map( it => new CourseEntity(it) );
    }
}