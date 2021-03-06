const groupService = require('../services/group');
const mailService = require('../services/mail')

// Find all Groups
exports.findAll = async function (request, response, next) {
    // TODO: Validation of parameters ...
    try {
        var groups = await groupService.findAll();
        return response.status(200).json({
          status: 200,
          data: groups,
          message: "Succesfully groups Retrieved"
        });
    } catch (error) {
        return response.status(400).json({
          status: 400,
          message: error.message
        });
    }
};


// Insert group
exports.addGroup = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var group = await groupService.addGroup(request.body);
      return response.status(200).json({
        status: 200,
        data: group,
        message: "Succesfully group Inserted"
      });
  } catch (error) {
      return response.status(403).json({
        status: 403,
        message: error.message
      });
  }
};

// Find group by id
exports.findById = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var group = await groupService.findById(request.params.id);
      return response.status(200).json({
        status: 200,
        data: group,
        message: "Succesfully group Retrieved"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
};

// Find group by id
exports.findAllByOwner = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var groups = await groupService.findAllByOwner(request.params.owner);
      return response.status(200).json({
        status: 200,
        data: groups,
        message: "Succesfully groups Retrieved"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
};

// Modify group using his Id
exports.update = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var group = await groupService.update(request.params.id, request.body);
      return response.status(200).json({
        status: 200,
        data: group,
        message: "Succesfully group Modified"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
}

// Modify group using his Id
exports.addToGroup = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var group = await groupService.addToGroup(request.body.email,request.body.idGroup);
      return response.status(200).json({
        status: 200,
        data: group,
        message: "Succesfully group Modified"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
}


// Modify group using his Id
exports.removeFromGroup = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var group = await groupService.removeFromGroup(request.params.idGroup, request.params.idStudent);
      return response.status(200).json({
        status: 200,
        data: group,
        message: "Succesfully group Modified"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
}

// Modify group using his Id
exports.delete = async function (request, response, next) {
  // TODO: Validation of parameters ...
  try {
      var group = await groupService.delete(request.params.id);
      return response.status(200).json({
        status: 200,
        data: group,
        message: "Succesfully group deleted"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
};

// Find group by id
exports.sendInvitation = async function (request, response, next) {
  
  try {
      mailService.sendInvitation(request.body.user,request.body.email,request.body.idGroup);
      return response.status(200).json({
        status: 200,
        message: "Invitation sended"
      });
  } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error.message
      });
  }
};