const {db, Card, User} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})

    //create cards
    await Promise.all([
      Card.create({left: 'nerd', right: 'jock'}),
      Card.create({left: 'young', right: 'old'}),
      Card.create({left: 'wet', right: 'dry'}),
      Card.create({left: 'little known fact', right: 'well knownfact'}),
      Card.create({left: 'poor person', right: 'rich person'}),
      Card.create({left: 'cold weather', right: 'hot weather'}),
      Card.create({left: 'mild food', right: 'spicy food'}),
      Card.create({left: 'normal greeting', right: 'awkward greeting'}),
      Card.create({left: 'best enjoyed hot', right: 'best enjoyed cold'}),
      Card.create({left: 'useless', right: 'useful'}),
      Card.create({left: 'tastes bad', right: 'tastes good'}),
      Card.create({left: 'uncool', right: 'cool'}),
      Card.create({left: 'south', right: 'north'}),
      Card.create({left: 'silly', right: 'serious'}),
      Card.create({left: 'tired', right: 'energetic'}),
      Card.create({left: 'bad smell', right: 'good smell'}),
    ])
  } catch (err) {
    console.log(err)
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}
