
export interface UtilityInf {
    rooms: boolean | null,
    accessToSharedPlace: boolean | null,
    greateForRemoteWork: boolean | null,
    security: boolean | null,
    garbageShutter: boolean | null,
    backupElectricity: boolean | null,
}


export interface PropertyDetailInf {
    propertyName: string,
    phone: string,
    address: string,
    homeType: string,
    realEstateId?: string,
    yearBuilt: string,
    squareFootage: string,
    facilities: {
        numOfLivingrooms: number,
        numOfBathrooms: number,
        numOfBedrooms: number,
        numOfKitchens: number,
        numOfLibs: number,
        numOfMaidsRooms: number,
        numOfSpas: number,
        numOfStores: number,
        numOfGyms: number,
    },
    parkingFeature: null,
    lotFeature: null,
    appliances: boolean | null,
    property: boolean | null,
    utility: UtilityInf,
    community: {
        nearPark: boolean,
        shoppingDistrict: boolean,
    },
    images: [any, any, any, any, any],
    previewImages: [any, any, any, any, any],
    typeOfPerson: "agent" | "owner" | "none" | null,
    timeToSell: "now" | "1month" | "2-3month" | "4+month" | null,
    propertyManagment: string | null,
    sellingPrice: number | null,
    rentalPrice: number | null,
    urls: any,
    currency: "ETH" | "USA",
    cycle: "1 month" | "3 months" | "6 months" | "1 year"

}


export const initialForm: PropertyDetailInf = {
    propertyName: "",
    phone: "",
    address: "",
    homeType: "",
    yearBuilt: "",
    squareFootage: "",
    facilities: {
        numOfLivingrooms: 0,
        numOfBathrooms: 0,
        numOfBedrooms: 0,
        numOfKitchens: 0,
        numOfLibs: 0,
        numOfMaidsRooms: 0,
        numOfSpas: 0,
        numOfStores: 0,
        numOfGyms: 0,
    },
    appliances: null,
    property: null,
    utility: {
        rooms: false,
        accessToSharedPlace: false,
        greateForRemoteWork: false,
        security: false,
        garbageShutter: false,
        backupElectricity: false,
    },
    community: {
        nearPark: false,
        shoppingDistrict: false,
    },
    images: [null, null, null, null, null],
    previewImages: [null, null, null, null, null],
    typeOfPerson: null,
    timeToSell: null,
    propertyManagment: "",
    sellingPrice: null,
    rentalPrice: null,
    urls: null,
    parkingFeature: null,
    lotFeature: null,
    currency: "ETH",
    cycle: "1 month"
}