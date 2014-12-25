'use strict'

// class controll business function for staff object
var BLStaff = function() {
  var save = function(data) {
    localStorage.setItem('Staff', JSON.stringify(data));
    return true;
  };

  this.context = JSON.parse(localStorage.getItem('Staff'));

  this.getAll = function() {
    return this.context;
  };

  this.getById = function(id) {
    return this.context;
  };

  this.addNew = function(newItem) {
    this.context.push(newItem);
    save(this.context);
    return true;
  };

  this.update = function(id, data) {
    return true;
  };

  this.delete = function(id) {
    return true;
  };
};

// class controll business function for comment object
var BLComment = function() {

  var save = function(data) {
    localStorage.setItem('Comment', JSON.stringify(data));
    return true
  };

  this.context = JSON.parse(localStorage.getItem('Comment'));

  this.getAll = function() {
    return this.context;
  };

  this.getByUser = function(userId) {
    var filterResult = _.filter(this.context, function(item, i) {
      return item.userId == userId;
    });
    return filterResult;
  };

  this.addNew = function(newItem) {
    this.context.push(newItem);
    save(this.context);
    return true;
  };

  this.remove = function(id) {
    _.remove(this.context, function(item) {
      return item.id == id;
    });
    save(this.context);
    return true;
  };
};

var BLDepartment = function() {
  this.getAll = function() {
    return departmentList;
  }
};
