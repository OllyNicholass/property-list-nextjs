// Fake data generator

const { faker } = require('@faker-js/faker');
const moment = require('moment');

const propertyImages = [
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
]

const getRandomImageFromArray = () => {
  return propertyImages[Math.floor(Math.random() * propertyImages.length)] // Return a random property image from the array
}

module.exports = () => {
  const data = {
    properties: []
  }

  const currentDate = moment().format('YYYY-MM-DD');
  const twoWeeksAgo = moment().subtract(2, 'weeks').format('YYYY-MM-DD');
  const aWeekAgo = moment().subtract(1, 'week').format('YYYY-MM-DD');

  for (let i = 0; i < 9; i++) {
    const streetAddress = faker.address.streetAddress();

    const createdDate = faker.date.between(twoWeeksAgo, currentDate);

    const daysSinceCreatedDate = moment(currentDate).diff(createdDate, 'days')

    data.properties.push({
      id: i,
      name: streetAddress,
      imageUrl: getRandomImageFromArray(),
      bedrooms: Math.floor(Math.random() * 6) + 1, // Return number between 1-6
      bathrooms: Math.floor(Math.random() * 4) + 1, // Return number between 1-4
      receptions: Math.floor(Math.random() * 2) + 1, // Return number between 1-2
      address: {
        street: streetAddress,
        postalCode: faker.address.zipCode(),
        city: faker.address.city(),
        countryCode: faker.address.countryCode(),
        country: faker.address.countryCode(),
        text: streetAddress
      },
      description: faker.lorem.paragraph(),
      askingPrice: (Math.floor(Math.random() * 50) + 1) * 10000, // Return number between 1-50, then multiply by 10,000
      isActive: Math.random() < 0.6, // 60% property is active
      createdDate: createdDate,
      justAdded: daysSinceCreatedDate <= 7
    })
  }

  return data
}