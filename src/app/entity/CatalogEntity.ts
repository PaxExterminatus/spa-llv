type CatalogRawData = {
    count: number,
    courses: any[],
};

export class CatalogEntity {
    readonly count: number;
    readonly courses: any[];
    constructor(data : CatalogRawData)
    {
        this.count = data.count;
        this.courses = data.courses;
    }
}