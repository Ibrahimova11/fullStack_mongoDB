const mongoose = require("mongoose");
const express = require("express");
const Joi = require ("joi");
const cors = require('cors');
const app = express()
const PORT = 8080;
app.use(cors())

const ArtistSchema = new mongoose.Schema({
    name: String,
    degree: Number,
    change: String,
    sold: Number,
    volume: String,
    littleName: String,
    nft:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nfts"
    }]
});

const NftsSchema = new mongoose.Schema({
    name: String,
    price: String,
    bid: String,
    littleName: String
})

const addArtistSchema =Joi.object({
   name:Joi.string().required(),
   degree:Joi.number().required(),
   change:Joi.string().required(),
   sold:Joi.number().required(),
   volume: Joi.string().required(),
   littleName: Joi.string().required(),
})

const addNftsSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    bid: Joi.string().required(),
    littleName: Joi.string().required(),
  });



const ArtistModel = mongoose.model("Artist", ArtistSchema);
const NftsModel = mongoose.model("Nfts", NftsSchema);


mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://Susen:77ccuZiYoAc54UIO@cluster.91dhbal.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

app.use(express.json());



app.get("/api/artists", (req, res) => {
    ArtistModel.find(null, "name degree change sold volume nft littleName")
      .populate("nft")
      .exec((error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });

  app.delete("/api/artists/:id", (req, res) => {
    if (req.params.id)
      ArtistModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });




  app.post(
    "/api/artists",
    async (req, res) => {
      const newArtist = new ArtistModel({ ...req.body });
  
      await newArtist.save();
      res
        .status(201)
        .send({ message: "Artists successful added!", artist: newArtist });
    }
  );

  app.post("/api/artist/Nfts/:nftsId", (req, res) => {
    console.log(req.params);
    ArtistModel.findByIdAndUpdate(
       req.body.id,
      {
        $push: {
          nft: req.params.nftsId,
        },
      },
      (error, data) => {
        if (error) return res.status(500).send({ error });
        res.send(data);
      }
    );
  });



  app.delete("/api/nfts/:id", (req, res) => {
    if (req.params.id)
      NftsModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });


  app.post(
    "/api/nfts",
    (req, res, next) => {
      const { error } = addNftsSchema.validate(req.body);
  
      if (error == null) next();
      else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        res.status(422).json({ error: message });
      }
    },
    async (req, res) => {
      const newNfts = new NftsModel({ ...req.body });
  
      await newNfts.save();
      res
        .status(201)
        .send({ message: "Nfts successful  added!", nfts: newNfts });
    }
  );


  app.get("/api/nfts", (req, res) => {
    NftsModel.find(null, (error, nfts) => {
      if (error) return res.status(500).send({ error });
      res.send(nfts);
    });
  });



  

  app.listen(PORT, () => {
    console.log("Server running on " + PORT);
  });
  





//77ccuZiYoAc54UIO