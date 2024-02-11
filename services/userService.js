const { UserModel } = require('../routes/blogs/blogModel');
const dbService = require('./mongoDbService');

module.exports = {
    createUser: async (data) => {
        return dbService.createDocument(UserModel, data);
    },
    checkUserExists: async (data) => {
        return dbService.checkDocumentExist(UserModel, data);
    },
    deleteUserWithEmailId: async (data) => {
        return dbService.deleteDocumentsWithKeyValue(UserModel, data);
    },
    getUser: async (data) => {
        return dbService.getDocumentByKeyAndValue(UserModel, data);
    }
}


