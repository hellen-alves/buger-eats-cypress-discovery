 var faker = require('faker')
// const { faker } = require('@faker-js/faker');
var cpf = require('gerador-validador-cpf')

export default {
  deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    // const firstName = faker.name.firstName()
    // const lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: 61999999999,
        address: {
          postalcode: '72620-100',
          street: 'Quadra 300',
          number: '150',
          details: 'Conjunto 55',
          district: 'Recanto das Emas',
          city_state: 'Brasília/DF'
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
    }

    return data
  }
}