export interface IProductPrincing {
    duration: number;
    durationtype: string;
    price: number;
    additionalcost: number;
    currency: string;
    pricingtype: string;
    promotionprice: number;
    regularadditionalcost: number;
    regularadditionalcosttype: string;
    regularprice: number;
    regularpricetype: string;
    youradditionalcost: number;
    youradditonalcosttype: string;
    yourprice: number;
    yourpricetype: string;
    total?: number;
    regulartotal?: number;
    yourtotal?: number;
}
export default function (CommandResponse: any): {
    product: {
        name: string;
        price: IProductPrincing[];
    };
};
