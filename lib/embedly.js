import { addCallback } from 'meteor/vulcan:core';

function addThumbnailClass (postClass, post) {
  var thumbnailClass = !!post.thumbnailUrl ? "has-thumbnail" : "no-thumbnail";
  return postClass + " " + thumbnailClass;
}
addCallback("postClass", addThumbnailClass);

function checkIfPreviouslyPosted (data) {
  Meteor.call("checkForDuplicates", data.url, function (error, result) {
    if (error) {
      console.log(error)
      // Messages.flash(error.reason + '. <a href="'+FlowRouter.path("postPage", {_id: error.details})+'">'+"go_to_post"+'</a>');
    }
  });
  return data;
}
addCallback("afterEmbedlyPrefill", checkIfPreviouslyPosted);
