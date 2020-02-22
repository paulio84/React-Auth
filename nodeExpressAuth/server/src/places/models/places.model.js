const { mongoose } = require('../../common/mongodb.service');

const { Schema } = mongoose;

const placesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  start_date: Date,
  end_date: Date,
  latitude: Number,
  longitude: Number
});

const Places = mongoose.model('Places', placesSchema);

exports.GetAllPlaces = () => new Promise((resolve, reject) => {
  Places.find()
    .exec((err, places) => {
      if (err) {
        reject(err);
      } else {
        resolve(places);
      }
    });
});
