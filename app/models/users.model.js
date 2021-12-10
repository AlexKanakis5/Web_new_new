//tsekare mhpws metonomaseis to web se user, tha doyme


// create a new user: create(object)
// find a user by id: findByPk(id)
// get all user: findAll()
// update a user by id: update(data, where: { id: id })
// remove a user: destroy(where: { id: id })
// remove all users: destroy(where: {})
// find all users by name: findAll({ where: { name: ... } })





module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Users;
};