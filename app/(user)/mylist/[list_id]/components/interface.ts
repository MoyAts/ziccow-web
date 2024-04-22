import { houseInf } from "@/utils/interfaces";

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

export interface PropertyDetailInf {
  propertyName: string;
  phone: string;
  locationDetail: string;
  address: string;
  homeType: string;
  realEstateId?: string;
  yearBuilt: string;
  squareFootage: string;
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
  phone: "",
  address: "",
  locationDetail: "",
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

const toRemoteInf = (house: houseInf): PropertyDetailInf => {
  return {
    propertyName: house.property_name,
    phone: house.property_number,
    address: house.address_data,
    locationDetail: house.address_data,
    homeType: "",
    yearBuilt: house.build_date,
    squareFootage: house.listing_property.square_ft,
    facilities: {
      numOfLivingrooms: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfBathrooms: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfBedrooms: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfKitchens: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfLibs: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfMaidsRooms: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfSpas: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfStores: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfGyms: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfPrayerRoom: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
    },
    appliances: String(house.extra_features.applicances),
    property: false,
    utility: {
      security: Boolean(house.extra_features.security_system),
      garbageShutter: Boolean(house.extra_features.garbage_shutter),
      backupElectricity: Boolean(house.extra_features.back_yard),
      basement: Boolean(house.extra_features.basement),
      service_rooms: Boolean(house.extra_features.service_rooms),
      electricity: Boolean(house.extra_features.electricity),
      water: Boolean(house.extra_features.water),
      backYard: Boolean(house.extra_features.back_yard),
      ground_water: Boolean(house.extra_features.ground_water),
      swimming: Boolean(house.extra_features.swimming),
      other: String(house.extra_features.other_utility),
      airConditioning: Boolean(house.extra_features.air_conditioning_system),
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
};
