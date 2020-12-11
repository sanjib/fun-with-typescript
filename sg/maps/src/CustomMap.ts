export interface CustomLocation {
  lat: number
  lng: number
}

export interface Mappable {
  location: CustomLocation
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    })
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    })
    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker)
    })
  }
}
