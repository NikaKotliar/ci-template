
function getHealthIndicator(data) {
    if (data.health >= 50) {
        return "healthy"
    }
    if (data.health < 50 & data.health > 15) {
        return "wounded"
    }
    if (data.health <= 15) {
        return "critical"
    }
}

const received = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 }
  ]

function getHealthSorted(unsortedCharacters) {
    unsortedCharacters.sort(function (a, b) {
        return (b.health - a.health)
    })
}

// getHealthSorted(received)

// console.log(received)

export {getHealthIndicator, getHealthSorted}
