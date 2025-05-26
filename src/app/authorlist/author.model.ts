export interface Iauthor  {
    id: number;
    name:string;
}

export interface IauthorDetail {
    authorName:string;
    authorBio:string;
    books:[
     {
        id:number;
        title:string;
        price:number;
        authorName:string;
        authorBio:string
    }
    ]
}