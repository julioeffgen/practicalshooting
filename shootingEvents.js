console.log('Practical Shooting Rocks');

ShootingEventsList = new Mongo.Collection('shootingEvents');
/* Initial load
ShootingEventsList.insert({'date': new Date(2016, 9, 23).getTime(), 'category': 'Shotgun & Silhueta', 'name': 'IV Etapa estadual Shot gun e V Silhueta', 'place': 'CCT – Clube Canarense de Tiro'});
ShootingEventsList.insert({'date': new Date(2016, 10, 27).getTime(), 'category': 'Shotgun & Silhueta', 'name': 'V Etapa estadual Shot gun e VI Silhueta', 'place': 'SINDIPOL - Clube de Tiro Sindipol'});
ShootingEventsList.insert({'date': new Date(2016, 11, 11).getTime(), 'category': 'Shotgun & Silhueta', 'name': 'Final de Shot gun e Silhueta', 'place': 'CTCI - Clube de Tiro de Cachoeiro de Itapemirim'});

 */

if(Meteor.isClient){
    // this code only runs on the client
    Template.shootingEvents.helpers({
        'shootingEvent': function () {
            return ShootingEventsList.find();
        },
        'milliToDate': function (milli) {
            return new Date(milli).toLocaleDateString();
        }
    });

    console.log('Hello client');
}

if(Meteor.isServer){
    console.log('Hello server');
}

