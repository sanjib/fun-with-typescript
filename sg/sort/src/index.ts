console.log('testing 123...')

interface TestLocation {
  lat: number
  lng: number
}

const logSomething = (loc: TestLocation): void => {
  console.log(`Lat: ${loc.lat}, Lng: ${loc.lng}`)
}

logSomething({ lat: 22, lng: 33 })
