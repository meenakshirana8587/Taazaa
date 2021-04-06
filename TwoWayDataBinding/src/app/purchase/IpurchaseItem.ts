import { IProduct } from "../product/iproduct";


export interface IPurchaseItems
{
    Id: number;
    Name: string;
    VendorName: string;
    PurchaseDate: string;
    Items: IProduct[]
    
}