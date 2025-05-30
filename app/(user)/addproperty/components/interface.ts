export interface UtilityInf {
  security: boolean;
  garbageShutter: boolean;
  backupElectricity: boolean;
  basement: boolean;
  service_rooms: boolean;
  electricity: boolean;
  water: boolean;
  backYard: boolean;
  ground_water: boolean;
  swimming: boolean;
  airConditioning: boolean;
  other: string;
}

export interface Amenity {
  amenity : string,
  area : string,
  listing_id : string,
}



export interface PropertyDetailInf {
  propertyName: string;
  projectName: string;
  phone: string;
  locationDetail: string;
  address: string;
  homeType: string;
  realEstateId?: string;
  yearBuilt: string;
  squareFootage: string;
  shop : string[],
  circulation : string,
  bedroom0 : string[],
  bedroom1 : string[],
  bedroom2 : string[],
  bedroom3 : string[],
  bedroom4 : string[],
  facilities: {
    numOfLivingrooms: number;
    numOfBathrooms: number;
    numOfBedrooms: number;
    numOfKitchens: number;
    numOfLibs: number;
    numOfMaidsRooms: number;
    numOfSpas: number;
    numOfStores: number;
    numOfGyms: number;
    numOfPrayerRoom: number;
  };
  parkingFeature: boolean;
  lotFeature: boolean;
  appliances: string;
  property: boolean;
  utility: UtilityInf;
  completionStatus: string;
  matterportLink: string;
  paymentProgram: string;
  community: {
    primarySchool: boolean;
    secondarySchool: boolean;
    collegeAndUni: boolean;
    hospital: boolean;
    supermarket: boolean;
    other: string;
  };
  construction: {
    ordinaryMaterial: boolean;
    uniqueMaterial: boolean;
  };
  constructionCustom: string;
  estRentalPrice: string;
  govPaymentAshura: string;
  leasingPayment: string;
  conveyancingPayment: string;
  commission: string;
  images: [any, any, any, any, any, any, any, any, any];
  previewImages: [any, any, any, any, any, any, any, any, any];
  typeOfPerson: "agent" | "owner" | "none";
  timeToSell: "now" | "1month" | "2-3month" | "4+month";
  propertyManagment: string;
  sellingPrice: number | null;
  rentalPrice: number | null;
  urls: any;
  currency: "ETB" | "USA";
  cycle: "1 month" | "3 months" | "6 months" | "1 year";
  description: string;
}

export const initialForm: PropertyDetailInf = {
  propertyName: "",
  projectName: "",
  phone: "",
  address: "",
  locationDetail: "",
  homeType: "",
  yearBuilt: "",
  squareFootage: "",
  shop : [""],
  circulation : "",
  bedroom0 : [""],
  bedroom1 : [""],
  bedroom4 : [""],
  bedroom3 : [""],
  bedroom2 : [""],
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
    numOfPrayerRoom: 0,
  },
  appliances: "",
  property: false,
  utility: {
    security: false,
    garbageShutter: false,
    backupElectricity: false,
    basement: false,
    service_rooms: false,
    electricity: false,
    water: false,
    backYard: false,
    ground_water: false,
    swimming: false,
    other: "",
    airConditioning: false,
  },
  completionStatus: "",
  matterportLink: "",
  paymentProgram: "",
  community: {
    primarySchool: false,
    secondarySchool: false,
    collegeAndUni: false,
    hospital: false,
    supermarket: false,
    other: "",
  },
  construction: {
    ordinaryMaterial: false,
    uniqueMaterial: false,
  },
  constructionCustom: "",
  estRentalPrice: "",
  govPaymentAshura: "",
  leasingPayment: "",
  conveyancingPayment: "",
  commission: "",
  images: [null, null, null, null, null, null, null, null, null],
  previewImages: [null, null, null, null, null, null, null, null, null],
  typeOfPerson: "none",
  timeToSell: "now",
  propertyManagment: "",
  sellingPrice: null,
  rentalPrice: null,
  urls: null,
  parkingFeature: false,
  lotFeature: false,
  currency: "ETB",
  cycle: "1 month",
  description: "",
};
