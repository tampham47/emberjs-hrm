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
    var result = _.filter(this.context, function(item) {
      return item.id == id;
    });
    return result[0] || null;
  };

  this.filter = function(query, departmentId, limit) {
    // filter with query string and departmentId
    var result = _.filter(this.context, function(item, index) {
      return ((item.fullName.toLowerCase().indexOf(query.toLowerCase()) >= 0) &
        ((departmentId == null) || ((departmentId != null) & (item.department == departmentId))));
    });

    if (limit) {
      var lResult = _.filter(result, function(item, index){
        return index < limit;
      });
      // limit the result
      return lResult;
    }
    else
      return result;
  }

  this.addNew = function(newItem) {
    this.context.push(newItem);
    save(this.context);
    return true;
  };

  this.update = function(id, data) {
    this.remove(id);
    data.id = id;
    this.addNew(data);
    return this.context;
  };

  this.remove = function(id) {
    _.remove(this.context, function(item) {
      return item.id == id;
    });
    save(this.context);
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
