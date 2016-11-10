/**
 * Created by julioeffgen on 25/09/16.
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Clubs } from '../../collections.js';

export { Clubs };

Meteor.methods({
  'clubs.remove': function removeClub(clubId) {
    check(clubId, String);

    const club = Clubs.findOne(clubId);
    if (!club) {
      throw new Meteor.Error('not-allowed');
    }

    Clubs.remove(clubId);
  },
  'clubs.search': function findClubs(clubName) {
    if (clubName == null || clubName === '') {
      return Clubs.find();
    }
    return Clubs.find({
      name: { $eq: clubName },
    });
  },
});
