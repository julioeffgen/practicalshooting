/**
 * Created by julioeffgen on 25/09/16.
 */

/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import StubCollections from 'meteor/hwillson:stub-collections';

import { Clubs } from './clubs.js';

describe('Clubs', () => {
  describe('methods', () => {
    const userId = Random.id();
    let taskId;

    beforeEach(() => {
      StubCollections.stub(Clubs);
      taskId = Clubs.insert({
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
      });
      Clubs.insert({
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
      });
    });

    afterEach(() => {
      StubCollections.restore();
    });

    it('can search all clubs', () => {
      const searchClubs = Meteor.server.method_handlers['clubs.search'];
      const invocation = { userId };
      assert.equal(searchClubs.apply(invocation, ['']).count(), 2);
    });

    it('can search clubs by name', () => {
      const searchClubs = Meteor.server.method_handlers['clubs.search'];
      const invocation = { userId };
      assert.equal(searchClubs.apply(invocation, ['Clube Canarense de Tiro']).count(), 1);
    });

    it('can delete club', () => {
      const deleteClub = Meteor.server.method_handlers['clubs.remove'];
      const invocation = { userId };
      deleteClub.apply(invocation, [taskId]);
      const searchClubs = Meteor.server.method_handlers['clubs.search'];
      assert.equal(searchClubs.apply(invocation).count(), 1);
    });
  });
});
