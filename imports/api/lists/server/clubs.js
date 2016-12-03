/**
 * Created by julioeffgen on 25/09/16.
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Clubs } from '../../collections.js';

export { Clubs };

Meteor.methods({
  insertClub: function insertClub(club) {
    const clubId = Clubs.insert(club);
    if (!clubId) {
      throw new Meteor.Error('not-allowed');
    }
    return Clubs.findOne(clubId);
  },
  removeClub: function removeClub(clubId) {
    check(clubId, String);

    const club = Clubs.findOne(clubId);
    if (!club) {
      throw new Meteor.Error('not-allowed');
    }

    Clubs.remove(clubId);
  },
  'search.clubs.by.name': function searchClubsByNane(clubName) {
    if (clubName == null || clubName === '') {
      return Clubs.find();
    }
    return Clubs.find({
      name: { $eq: clubName },
    });
  },
  findClubByCode: function findClubByCode(clubCode) {
    let data = {};
    if (clubCode != null && clubCode !== '') {
      data = { code: { $eq: clubCode } };
    }
    return Clubs.findOne(data);
  },
});
