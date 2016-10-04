/**
 * Created by julioeffgen on 25/09/16.
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Clubs } from '../../collections.js';

export { Clubs };

Meteor.publish('clubs', function tasksPublication() {
  return Clubs.find({
    $or: [
      { private: { $ne: true } },
      { owner: this.userId },
    ],
  });
});

Meteor.methods({
  'clubs.remove': function removeClub(clubId) {
    check(clubId, String);

    const club = Clubs.findOne(clubId);
    if (club.private && club.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Clubs.remove(clubId);
  },
});
