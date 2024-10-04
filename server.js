// siin käivitan serverit

import express from "express";
import dotenv from "dotenv"  //salastatud väärtuste pärast

dotenv.config()  //get saame browserist kätte, POST ei saa

const PORT = process.env.PORT || 3006 //lambi port ja PORT läheb app.listen ka aga käsk et võta .env PORT ja kui seal ei ole siis siit.

const animals = ["Koer", "Lammas", "Jõehobu", "Elevant"]

const app = express() //teen mooduli ja käivitan expressi seal sees

app.get("/", (request, response) => {
    response.status(200).json({
        message: "Reede on. Mine koju!"
    })
})  //see on root kaust, esimene koht kuhu klient maandub (kaldkriips seda näitab)

app.get("/animals", (request, response) => {
  response.status(200).json(animals);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`); //
})  // kuulab rakenduse siseseid muudatusi