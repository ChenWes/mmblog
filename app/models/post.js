// Post model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, required: true },
  author: { type: String, required: true },
  published: { type: Boolean, default: false },
  meta: { type: Schema.Types.Mixed },
  comments: [{ type: Schema.Types.Mixed }],
  created: { type: Date }
});

mongoose.model('Post', PostSchema);
