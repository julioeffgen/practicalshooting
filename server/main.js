import { Meteor } from 'meteor/meteor';
import { Events, Clubs } from '../imports/api/collections.js';

const ShootingEventsList = Events;
const ShootingClubsList = Clubs;

Meteor.startup(() => {
  if (!ShootingEventsList.findOne()) {
    //  Bootstrap Events
    ShootingEventsList.insert({
      date: new Date(2016, 9, 23).getTime(),
      category: 'Shotgun & Silhueta',
      name: 'IV Etapa estadual Shot gun e V Silhueta',
      place: 'CCT – Clube Canarense de Tiro',
    });
    ShootingEventsList.insert({
      date: new Date(2016, 10, 27).getTime(),
      category: 'Shotgun & Silhueta',
      name: 'V Etapa estadual Shot gun e VI Silhueta',
      place: 'SINDIPOL - Clube de Tiro Sindipol',
    });
    ShootingEventsList.insert({
      date: new Date(2016, 11, 11).getTime(),
      category: 'Shotgun & Silhueta',
      name: 'Final de Shot gun e Silhueta',
      place: 'CTCI - Clube de Tiro de Cachoeiro de Itapemirim',
    });
  }

  if (!ShootingClubsList.findOne()) {
    //  Bootstrap Clubs
    ShootingClubsList.insert({
      code: 'APOFES',
      name: 'Associação dos Policiais Federais do Estado do Espírito-Santo',
      address: {
        place: 'Rua Vale do Rio Doce',
        complement: '',
        number: '48',
        district: 'São Torquato',
        city: 'Vitória',
        zip: '29.114-670',
        state: 'ES',
        country: 'Brasil',
      },
      contacts: [{ TELEFONE: '2733260768' }, { EMAIL: 'apofes@apofes.org.br' }],
    });
    ShootingClubsList.insert({
      code: 'CTC',
      name: 'Clube de Tiro de Colatina',
      address: {
        place: 'Rua Humberto de Campos',
        complement: '',
        number: '68',
        district: 'Operário',
        city: 'Colatina',
        zip: '29.701-280',
        state: 'ES',
        country: 'Brasil',
      },
      contacts: [{ EMAIL: 'tirocolatina@gmail.com' }],
    });
    ShootingClubsList.insert({
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
    ShootingClubsList.insert({
      code: 'CTVV',
      name: 'Clube de Tiro de Vila Velha',
      address: {
        place: 'Rua dos Golfinhos',
        complement: 'Sítio',
        number: '77',
        district: 'Retiro do Congo',
        city: 'Vila Velha',
        state: 'ES',
        country: 'Brasil',
      },
      contacts: [{ TELEFONE: '2797398283' }, { EMAIL: 'felipe.rodrigues@hotmail.com.br' }],
    });
    ShootingClubsList.insert({
      code: 'SINDIPOL',
      name: 'Clube de Tiro Sindipol',
      address: {
        place: 'Rod. BR 101 Norte',
        complement: '',
        number: '',
        district: 'Carapina',
        city: 'Serra',
        state: 'ES',
        country: 'Brasil',
      },
      contacts: [{ TELEFONE: '27999682124' }, { SITE: 'http://www.clubedetirosindipol.com.br' }],
    });
    ShootingClubsList.insert({
      code: 'CTCI',
      name: 'Clube de Tiro de Cachoeiro de Itapemirim',
      address: {
        place: 'Rua Fernando Demori',
        complement: '',
        number: '',
        district: 'Vila Rica',
        city: 'Cachoeiro de Itapemirim',
        zip: '29.301-305',
        state: 'ES',
        country: 'Brasil',
      },
      contacts: [{ TELEFONE: '28998851479' }],
    });
  }
});
