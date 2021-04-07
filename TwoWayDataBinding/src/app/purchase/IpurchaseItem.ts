import { IProduct } from "../product/IProduct";


export interface IPurchaseItems
{
    Id: number;
    Name: string;
    VendorName: string;
    PurchaseDate: string;
    Items: IProduct[]
    
}