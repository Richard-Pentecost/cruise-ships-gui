(function exportPort() {
  class Port {
    constructor(name) {
      this.name = name;
      this.ships = [];
    }

    addShip(ship) {
      this.ships.push(ship);
    }

    removeShip(ship) {
      if (!this.ships.includes(ship)) {
        throw new Error('ship is not docked');
      }
      const shipIndex = this.ships.indexOf(ship);
      this.ships.splice(shipIndex, 1);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
