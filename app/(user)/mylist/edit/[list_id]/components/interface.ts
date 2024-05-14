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
  extra_features_id: string;
  listing_property_id: string;
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
  sellingPrice: string | null;
  rentalPrice: string | null;
  urls: any;
  currency: "ETB" | "USA";
  cycle: "1 month" | "3 months" | "6 months" | "1 year";
  description: string;
}

export const initialForm: PropertyDetailInf = {
  extra_features_id: "",
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
  listing_property_id: "",
};

export const toLocalInf = (house: houseInf): PropertyDetailInf => {
  return {
    listing_property_id: house.listing_property_id ?? "",
    extra_features_id: house.extra_features_id ?? "",
    propertyName: house.property_name ?? "",
    realEstateId: house.real_estate_id ?? "",
    phone: house.property_number,
    address: house.address_data,
    locationDetail: house.address_data,
    homeType: String(house.house_type?.house_type_id),
    yearBuilt: house.build_date,
    squareFootage: house.listing_property.square_ft,
    facilities: {
      numOfLivingrooms: !isNaN(Number(house.listing_property.living_room_count))
        ? Number(house.listing_property.living_room_count)
        : 0,
      numOfBathrooms: !isNaN(Number(house.listing_property.bathroom_count))
        ? Number(house.listing_property.bathroom_count)
        : 0,
      numOfBedrooms: !isNaN(Number(house.listing_property.bedroom_count))
        ? Number(house.listing_property.bedroom_count)
        : 0,
      numOfKitchens: !isNaN(Number(house.listing_property.kitchen_count))
        ? Number(house.listing_property.kitchen_count)
        : 0,
      numOfLibs: !isNaN(Number(house.listing_property.library))
        ? Number(house.listing_property.library)
        : 0,
      numOfMaidsRooms: !isNaN(Number(house.listing_property.maids_room))
        ? Number(house.listing_property.maids_room)
        : 0,
      numOfSpas: !isNaN(Number(house.listing_property.spa))
        ? Number(house.listing_property.spa)
        : 0,
      numOfStores: !isNaN(Number(house.listing_property.store_rooms))
        ? Number(house.listing_property.store_rooms)
        : 0,
      numOfGyms: !isNaN(Number(house.listing_property.gymnasium))
        ? Number(house.listing_property.gymnasium)
        : 0,
      numOfPrayerRoom: !isNaN(Number(house.listing_property.praying_room))
        ? Number(house.listing_property.praying_room)
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
    completionStatus: String(house.completion_status),
    matterportLink: house.matterport_link,
    paymentProgram: String(house.payment_program),
    community: {
      primarySchool: house.extra_features?.primary_school ?? false,
      secondarySchool: house.extra_features?.secondary_school ?? false,
      collegeAndUni: house.extra_features?.college_and_uni ?? false,
      hospital: house.extra_features?.hospital ?? false,
      supermarket: house.extra_features?.supermarket ?? false,
      other: String(house.extra_features.other_community),
    },
    construction: {
      ordinaryMaterial: house.extra_features?.ordinary_material ?? false,
      uniqueMaterial: house.extra_features?.unique_material ?? false,
    },
    constructionCustom: "",
    estRentalPrice: String(house.est_rental_price),
    govPaymentAshura: String(house.gov_payment_ashura),
    leasingPayment: String(house.leasing_payment),
    conveyancingPayment: String(house.conveyancing_payment),
    commission: String(house.commission_payment),
    images: [null, null, null, null, null, null, null, null, null],
    previewImages: [null, null, null, null, null, null, null, null, null],
    typeOfPerson:
      house.type_of_person == "agent"
        ? "agent"
        : house.type_of_person == "owner"
          ? "owner"
          : "none",
    timeToSell: "now",
    propertyManagment: house.sale_type,
    sellingPrice: house.sale_price,
    rentalPrice: String(house.rental_price?.price) ?? null,
    urls: null,
    parkingFeature: false,
    lotFeature: false,
    currency: house.currency == "ETB" ? "ETB" : "USA",
    cycle:
      house.rental_price?.cycle == "1 month"
        ? "1 month"
        : house.rental_price?.cycle == "3 months"
          ? "3 months"
          : "6 months",
    description: house.description,
  };
};


export const toLocalAmenityInf = () =>{

}