const db = require('./models')

const dinoCRUD = async () => {
    try{
    // C
        // const newDino = await db.dino.create({
        //     name: 'Birdy',
        //     type: 'Pterodactyl'
        // })
        // console.log(newDino)
    // R
        // const allDinos = await db.dino.findAll()
        // console.log(allDinos)
        // const someDinos = await db.dino.findAll({
        //     where: {
        //         name: 'T-Rex'
        //     }
        // })
        // console.log(someDinos)
        // const [dino, created] = await db.dino.findOrCreate({
        //     where: {
        //         name: "Tyler"
        //     },
        //     defaults: {
        //         type: 'ABB'
        //     }
        // })
        // console.log(dino)
        // console.log(`The dino was created: ${created}`)
    // U
        // const numRowsChanged = await db.dino.update({ type:'ASIAN BABY BOY'}, {
        //     where: {
        //         name: 'Tyler'
        //     }
        // })
        // console.log(numRowsChanged)
    // D
        // const numRowsDeleted = await db.dino.destroy({
        //     where: {
        //         name: 'T-Rex'
        //     }
        // })
        // console.log(numRowsDeleted)
    } catch(err) {
        console.warn(err)
    }
}

const creatureCRUD = async () => {
    try {
        // C
            // const newCreature = await db.creature.create({
            //     type:"Beaver",
            //     img_url:'https://i.imgur.com/wYQQlBp.jpeg'
            // })
            // console.log(newCreature)
        // R
            // const allCreatures = await db.creature.findAll()
            // console.log(allCreatures)
        // U
            // const numRowsChanged = await db.creature.update({ type:'Oscar'}, {
            //     where: {
            //         type: 'Sid'
            //     }
            // })
            // console.log(numRowsChanged)
        // D
            // const numRowsDeleted = await db.creature.destroy({
            //     where: {
            //         type: 'Oscar'
            //     }
            // })
            // console.log(numRowsDeleted)
    } catch(err) {
        console.warn(err)
    }
}

// dinoCRUD()
creatureCRUD()