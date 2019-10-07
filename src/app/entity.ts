type RawCatalog = {
    count: number,
    courses: any[],
};

export class CatalogEntity {
    count: number;
    courses: any[];
    constructor({count,courses} : RawCatalog)
    {
        this.count = count;
        this.courses = courses;
    }
}