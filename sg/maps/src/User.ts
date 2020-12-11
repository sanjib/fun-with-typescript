import faker from 'faker'
import { CustomLocation, Mappable } from './CustomMap'

export class User implements Mappable {
  firstName: string
  lastName: string
  location: CustomLocation

  constructor() {
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User: ${this.firstName} ${this.lastName}`
  }
}
