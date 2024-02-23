
export interface UtilityInf  {
    rooms : boolean ,
    accessToSharedPlace : boolean ,
    greateForRemoteWork : boolean ,
    security : boolean ,
    garbageShutter : boolean ,
    backupElectricity : boolean ,
}


export interface PropertyDetailInf {
    propertyName : string,
    phone : string,
    address : string,
    homeType : string,
    yearBuilt : string,
    squareFootage : string,
    facilities : {
        numOfLivingrooms : number,
        numOfBathrooms : number,
        numOfBedrooms : number,
        numOfKitchens : number,
    },
    appliances : boolean | null,
    property : boolean | null,
    utility : UtilityInf,
    community : {
        nearPark : boolean,
        shoppingDistrict : boolean,
    },
    images : [any,any,any,any,any],
    previewImages : [any,any,any,any,any],
    typeOfPerson : "agent" | "owner" | "none" | null,
    timeToSell : "now" | "1month" | "2-3month" | "4+month" |null,
    propertyManagment : string | null,
    sellingPrice : number | null,
    urls : any

}


export const initialForm : PropertyDetailInf = {
    propertyName : "",
    phone : "",
    address : "",
    homeType : "",
    yearBuilt : "",
    squareFootage : "",
    facilities : {
        numOfLivingrooms : 0,
        numOfBathrooms : 0,
        numOfBedrooms : 0,
        numOfKitchens : 0,
    },
    appliances : null,
    property : null,
    utility : {
        rooms :  false,
        accessToSharedPlace :  false,
        greateForRemoteWork :  false,
        security :  false,
        garbageShutter :  false,
        backupElectricity :  false,
    },
    community : {
        nearPark : false,
        shoppingDistrict : false,
    },
    images : [null,null,null,null,null],
    previewImages : [null,null,null,null,null],
    typeOfPerson : null,
    timeToSell : null,
    propertyManagment : "",
    sellingPrice : null,
    urls : null


}