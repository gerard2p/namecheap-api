declare let API: NamecheapAPI;
export declare function profile(id: any, profile?: {}): {};
export interface NamecheapAPI {
    users: {
        getPricing(...args: any[]): any;
        getBalances(...args: any[]): any;
        changePassword(...args: any[]): any;
        update(...args: any[]): any;
        createaddfundsrequest(...args: any[]): any;
        getAddFundsStatus(...args: any[]): any;
        create(...args: any[]): any;
        login(...args: any[]): any;
        resetPassword(...args: any[]): any;
    };
    domains: {
        getList(...args: any[]): any;
        getContacts(...args: any[]): any;
        create(...args: any[]): any;
        getTldList(...args: any[]): any;
        setContacts(...args: any[]): any;
        check(...args: any[]): any;
        reactivate(...args: any[]): any;
        renew(...args: any[]): any;
        getRegistrarLock(...args: any[]): any;
        setRegistrarLock(...args: any[]): any;
        getInfo(...args: any[]): any;
        dns: {
            setHosts(...args: any[]): any;
            getHosts(...args: any[]): any;
            setCustom(...args: any[]): any;
        };
    };
    usersAddress: {
        getList(...args: any[]): any;
        getInfo(...args: any[]): any;
    };
}
export default API;
