export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IAddressInfo
  phone: string
  website: string
  company: IUserCompanyInfo
}

export interface IAddressInfo {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IAddressGeoInfo
}

export interface IAddressGeoInfo {
  lat: string
  lng: string
}

export interface IUserCompanyInfo {
  name: string
  catchPhrase: string
  bs: string
}
