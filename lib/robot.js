class Robot {
	constructor() {
    this.bearing = 'north'
    this.coordinates = [0,0]
  }

  setCoordinates(x, y) {
    const newCoordinates = []
    newCoordinates.push(x,y)
    return this.coordinates = newCoordinates
  }


  setBearing(direction) {
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)) {
      this.bearing = direction
      return this.bearing
    } else {
      throw `Invalid Robot Bearing`
    }
  }

  place(location) {
    const newArray = []
    newArray.push(location.x, location.y)
    this.coordinates = newArray
    this.bearing = location.direction
    return this
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'north'
        break
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break
      case 'south':
        this.bearing = 'east'
        break
      case 'west':
        this.bearing = 'south'
        break
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'east':
        this.coordinates[0]++
        break
      case 'south':
        this.coordinates[1]--
        break
      case 'west':
        this.coordinates[0]--
        break
    }
  }

  translateInstructions(instructions) {
    for(const char of instructions) {
      switch (char) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
          break
      }
    }
  }

}
