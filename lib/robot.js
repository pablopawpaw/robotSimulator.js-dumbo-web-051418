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

	directions() {
		return ['north', 'east', 'south', 'west']
	}

  setBearing(direction) {
    if (this.directions().includes(direction)) {
      this.bearing = direction
      return this.bearing
    } else {
      throw `Invalid Robot Bearing`
    }
  }

  place(location) {
		this.setCoordinates(location.x, location.y)
    this.setBearing(location.direction)
    return this
  }

  turnRight() {
		let i = this.directions().indexOf(this.bearing)
		if(i===this.directions().length-1) {
			this.setBearing(this.directions()[0])
		} else {
			this.setBearing(this.directions()[++i])
		}
  }

  turnLeft() {
		let i = this.directions().indexOf(this.bearing)
		if(i===0) {
			const arrayLength = this.directions().length
			this.setBearing(this.directions().slice(-1)[0])
		} else {
			this.setBearing(this.directions()[--i])
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
