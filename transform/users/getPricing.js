"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const support_1 = require("../../support");
function default_1(CommandResponse) {
    let Product = CommandResponse.UserGetPricingResult.ProductType.ProductCategory.Product;
    // console.log((CommandResponse.UserGetPricingResult.ProductType.ProductCategory.Product));
    return {
        product: {
            name: Product.Name,
            price: Object.keys(Product.Price).map(k => {
                let p = support_1.objectKeysToLowerCase(Product.Price[k]);
                let res = {
                    duration: parseFloat(p.duration),
                    durationtype: p.durationtype.toLowerCase(),
                    price: parseFloat(p.price),
                    additionalcost: parseFloat(p.additionalcost),
                    currency: p.currency,
                    pricingtype: p.pricingtype,
                    promotionprice: parseFloat(p.promotionprice),
                    regularadditionalcost: parseFloat(p.regularadditionalcost),
                    regularadditionalcosttype: p.regularadditionalcosttype,
                    regularprice: parseFloat(p.regularprice),
                    regularpricetype: p.regularpricetype,
                    youradditionalcost: parseFloat(p.youradditonalcost),
                    youradditonalcosttype: p.youradditonalcosttype,
                    yourprice: parseFloat(p.yourprice),
                    yourpricetype: p.yourpricetype
                };
                res.total = (res.price + res.additionalcost) * res.duration;
                res.regulartotal = (res.regularprice + res.regularadditionalcost) * res.duration;
                res.yourtotal = (res.yourprice + res.youradditionalcost) * res.duration;
                return res;
            })
        }
    };
}
exports.default = default_1;
