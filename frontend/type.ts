export type Product = {
    available: string;
    brand: string;
    categoryId: number;
    createdAt: string;
    discount: string | null;
    id:number;
    name:string;
    price:number;
    promoted:boolean;
    type: string;
    type_info: string;
    updatedAt: string;
    view: number,
    description: string
  }
  
  export type Category = {
    id:number;
    name: string;
  }