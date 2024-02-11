exports.getAllDocuments = async (model) => {
    return await model.find();
};

exports.createDocument = async (model, document) => {
    return await model.create(document);
};

exports.getDocumentById = async (model, id) => {
    return await model.findById(id);
};

exports.getDocumentByKeyAndValue = async (model, obj) => {
    return await model.findOne(obj);
};

exports.checkDocumentExist = async (model, obj) => {
    return await model.exists(obj);
}

exports.updateDocument = async (model, id, document) => {
    return await model.findByIdAndUpdate(id, document);
};

exports.deleteDocumentByID = async (model, id) => {
    // return await model.findByIdAndUpdate(id);
};

exports.deleteDocumentsWithKeyValue = async (model, obj) => {
    return await model.deleteOne(obj);
};