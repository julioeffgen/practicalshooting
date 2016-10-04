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
      Clubs.remove({});
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
    });

    afterEach(() => {
      StubCollections.restore();
    });

    it('can delete owned club', () => {
      const deleteClub = Meteor.server.method_handlers['clubs.remove'];
      const invocation = { userId };
      deleteClub.apply(invocation, [taskId]);
      assert.equal(Clubs.find().count(), 0);
    });
  });
});
