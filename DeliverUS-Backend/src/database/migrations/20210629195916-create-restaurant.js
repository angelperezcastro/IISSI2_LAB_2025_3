module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },

      name:{
        allowNull: false,
        type: Sequelize.STRING
      },

      description:{
        type: Sequelize.TEXT
      },

      address:{
        type: Sequelize.STRING
      },

      postalCode:{
        type:Sequelize.STRING
      },

      url:{
        type:Sequelize.STRING
      },

      shippingCosts:{
        type:Sequelize.DOUBLE
      },

      averageServiceMinutes:{
        type:Sequelize.DOUBLE
      },

      email:{
        type:Sequelize.STRING
      },

      phone:{
        type:Sequelize.STRING
      },

      logo:{
        type:Sequelize.STRING
      },

      heroImage:{
        type:Sequelize.STRING
      },

      createdAt:{
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      status:{
        type:Sequelize.ENUM('online', 'offline', 'closed', 'temporarily closed')
      },

      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: 'Users'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },


    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
