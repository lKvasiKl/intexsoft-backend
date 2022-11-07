const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Image = require('./Image');
const UserLikePost = require('./UserLikedPost');
const ImagePost = require('./ImagePost');

User.belongsToMany(Post, {through: UserLikePost});
Post.belongsToMany(User, {through: UserLikePost});

Post.belongsToMany(Image, {through: ImagePost});
Image.belongsToMany(Post, {through: ImagePost});

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment)
Comment.belongsTo(Post);

User.hasOne(Image);
Image.belongsTo(User);

module.exports = {
    User,
    Post,
    Comment,
    Image,
    UserLikePost,
    ImagePost
}