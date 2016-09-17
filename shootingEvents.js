ShootingEventsList = new Mongo.Collection('shootingEvents');
/* Initial load
ShootingEventsList.insert({'date': '23/10/2016', 'category': 'Shotgun & Silhueta', 'name': 'IV Etapa estadual Shot gun e V Silhueta', 'place': 'CCT – Clube Canarense de Tiro'});
ShootingEventsList.insert({'date': '27/11/2016', 'category': 'Shotgun & Silhueta', 'name': 'V Etapa estadual Shot gun e VI Silhueta', 'place': 'SINDIPOL - Clube de Tiro Sindipol'});
ShootingEventsList.insert({'date': '11/12/2016', 'category': 'Shotgun & Silhueta', 'name': 'Final de Shot gun e Silhueta', 'place': 'CTCI - Clube de Tiro de Cachoeiro de Itapemirim'});
*/

if(Meteor.isClient){
    Template.shootingEvents.helpers({
        'shootingEvent': function () {
            return ShootingEventsList.find();
        }
    });
    console.log('Hello client');
}

if(Meteor.isServer){
    console.log('Hello server');
}
