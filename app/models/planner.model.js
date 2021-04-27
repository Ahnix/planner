const disciplineSchema = require('./discipline.model');
const booksSchema = require('./books.model');

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      focus: {
        type: Number,
        required: true
      },
      thumb: {
        type: String
    },
      color: {
        type: String
    },
      days: {
        type: [booksSchema]
      },
      datein: {
        type: Date,
        required: true
      },
      dateout:  {
        type: Date,
        required: true
      },
      hours: {
        type: Number,
        required: true
      },
      hoursVideos: {
        type: Number,
        required: true
      },
      hoursExercices: {
        type: Number,
        required: true
      },
      hoursArchives: {
        type: Number,
        required: true
      },
      slug: String,
      status: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Planner = mongoose.model("planner", schema);
  return Planner;
};
