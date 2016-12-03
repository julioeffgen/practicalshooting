/**
 * Created by julioeffgen on 25/09/16.
 */

/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import StubCollections from 'meteor/hwillson:stub-collections';

import { Clubs } from './clubs.js';

const searchClubs = Meteor.server.method_handlers['search.clubs.by.name'];

let insertedClub;

StubCollections.stub(Clubs);

describe('Clubs', () => {
  describe('clubs.insert', () => {
    it('can insert club1', () => {
      const club = {
        code: 'CTVV',
        name: 'Clube de Tiro de Vila Velha',
        address: {
          place: 'Rua dos Golfinhos',
          complement: 'Em frente a pousada Recanto do Marujo',
          number: '77',
          district: 'Retiro do Congo',
          city: 'Vila Velha',
          state: 'ES',
          country: 'Brasil',
        },
        contacts: [{ TELEFONE: '2797398283' }, { EMAIL: 'felipe.rodrigues@hotmail.com.br' }, { SITE: 'http://www.ctvv-es.com.br' }],
      };
      insertedClub = Meteor.call('insertClub', club);
      assert.notEqual(insertedClub._id, null);
    });

    it('can insert club2', () => {
      const club = {
        code: 'CCT',
        name: 'Clube Canarense de Tiro',
        address: {
          place: 'Rodovia BR-101 Norte',
          complement: 'Atrás do Posto Carreteiro',
          number: 'KM 12',
          district: '',
          city: 'Pedro Canário',
          state: 'ES',
          country: 'Brasil',
        },
        contacts: [{ TELEFONE: '2799885177' }, { SITE: 'http://www.carreteiro.com.br' }],
      };
      assert.notEqual(Meteor.call('insertClub', club)._id, null);
    });
  });

  describe('clubs.search', () => {
    it('can search all clubs', () => {
      assert.equal(searchClubs.apply({}, ['']).count(), 2);
    });

    it('can search clubs by name', () => {
      assert.equal(searchClubs.apply({}, ['Clube Canarense de Tiro']).count(), 1);
    });

    it('can search clubs by code', () => {
      assert.equal(Meteor.call('findClubByCode', 'CTVV').code, 'CTVV');
    });
  });

  describe('clubs.delete', () => {
    it('can delete club', () => {
      Meteor.call('removeClub', insertedClub._id);
      assert.equal(searchClubs.apply({}, ['']).count(), 1);
    });
  });
});
