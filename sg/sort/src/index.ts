import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// Sort number[]
const c1 = new NumbersCollection([10, 3, -5, 0])
c1.sort()
console.log('c1:', c1.data)

// Sort string
const c2 = new CharactersCollection('Xaayb')
c2.sort()
console.log('c2:', c2.data)

// Sort linked list
const c3 = new LinkedList()
c3.add(50)
c3.add(-10)
c3.add(-3)
c3.add(4)
c3.sort()
c3.print('c3:')
