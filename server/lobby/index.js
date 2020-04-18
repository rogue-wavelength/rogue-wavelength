// const Lobby = require('./lobby')

// class RoomManager {
//   constructor() {
//     this.storage = new Map()
//   }

//   createLobby() {
//     let code
//     do {
//       code = this.generateCode
//     } while (this.storage.has(code))
//     this.storage.set(code, new Lobby())
//     return this.storage.get(code)
//   }

//   deleteLobby(code) {
//     return this.storage.delete(code)
//   }

//   getLobby(code) {
//     return this.storage.get(code)
//   }

//   generateCode() {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
//     let code = ''
//     for (let i = 0; i < 4; i++) {
//       code += alphabet[Math.floor(Math.random() * alphabet.length)]
//     }
//     return code
//   }
// }

// export default RoomManager
