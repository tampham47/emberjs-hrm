'use strict'

var staffs = [
  {
    id: '1',
    fullName: 'Tâm Phạm',
    dateOfBirth: '01/01/1990',
    gender: 'Male',
    address: '103 D1, Phường 25, Quận Bình Thạnh, Sài Gòn',
    mobile: '01643652922',
    skype: 'tampham47',
    email: 'tampham47@live.com',
    joinedDate: '01/09/2014',
    avatar: 'tampham47.jpg',
    department: 'Front-end'
  },
  {
    id: '2',
    fullName: 'Soa Nguyễn',
    dateOfBirth: '05/11/1990',
    gender: 'Female',
    address: '103 D1, Phường 25, Quận Bình Thạnh, Sài Gòn',
    mobile: '01643652922',
    skype: 'soanguyen69',
    email: 'soanguyen69@live.com',
    joinedDate: '01/09/2014',
    avatar: 'soanguyen69.jpg',
    department: 'Front-end'
  }
];

var comments = [
  {
    id: '1',
    creatorId: '',
    userId: '1',
    dateCreated: '19/12/2014',
    comment: 'Thằng này khá'
  },
  {
    id: '2',
    creatorId: '',
    userId: '2',
    dateCreated: '19/12/2014',
    comment: 'Con này được'
  }
];

var departmentList = [
  { id: '1', name: 'Front-end' },
  { id: '2', name: 'PHP' },
  { id: '3', name: 'Java' },
  { id: '4', name: 'QC' },
  { id: '5', name: 'Mobile' },
  { id: '6', name: 'Admin' }
];

// class controll business function for staff object
var BLStaff = function() {
  var save = function(data) {
    console.log('save', data);
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
    console.log('save', data);
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
    return true;
  };

  this.delete = function(id) {
    return true;
  };
};

var BLDepartment = function() {
  this.getAll = function() {
    return departmentList;
  }
};

var init = function() {
  if (localStorage.getItem('Staff') == null)
    localStorage.setItem('Staff', JSON.stringify(staffs));
  if (localStorage.getItem('Comment') == null)
    localStorage.setItem('Comment', JSON.stringify(comments));
};
// init function for the first at all
init();

var blComment = new BLComment();
var blStaff = new BLStaff();
var blDepartment = new BLDepartment();

console.log('BLComment', blComment.getAll());
console.log('BLStaff', blStaff.getAll());
console.log('BlDepartment', blDepartment.getAll());

var App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('auth');
  this.resource('dashboard');
  // this.resource('staffs');
  this.resource('staffs', function() {
    this.resource('staff', {path: ':staff_id'});
  });
});

App.IndexController = Ember.ObjectController.extend({
  actions: {
    login: function() {
      console.log('login');
      this.transitionToRoute('dashboard');
    }
  }
});

App.StaffsRoute = Ember.Route.extend({
  model: function() {
    return blStaff.getAll();
  }
});

App.StaffRoute = Ember.Route.extend({
  model: function(params) {
    var staffId = params.staff_id;
    var result = _.filter(blStaff.getAll(), function(item, i) {
      return item.id == staffId;
    });
    return result[0] || null;
  },
  renderTemplate: function(params){
    var userId = params.content.id;
    this.render();
    this.render('comments', {
      outlet: 'comments',
      model: blComment.getByUser(userId)
    });
  }
});

App.CommentsRoute = Ember.Route.extend({
  model: function(params) {
    var userId = params.staff_id;
    console.log('staffId', userId);
    return blComment.getByUser(userId);
  }
});

App.StaffsController = Ember.ObjectController.extend({
  strQuery: '',
  departmentId: null,
  actions: {
    filter: function() {
      var query = this.get('strQuery');
      var departmentId = this.get('departmentId');
      var result = _.filter(blStaff.getAll(), function(item, index) {
        return ((item.fullName.indexOf(query) >= 0) &
          ((departmentId == null) || ((departmentId != null) & (item.department == departmentId))));
      })
      this.set('model', result);
    },
    addNew: function() {
      var newItem = {
        id: moment().format('X'),
        fullName: 'Tâm Phạm',
        dateOfBirth: '01/01/1990',
        gender: 'Male',
        address: '103 D1, Phường 25, Quận Bình Thạnh, Sài Gòn',
        mobile: '01643652922',
        skype: 'tampham47',
        email: 'tampham47@live.com',
        joinedDate: '01/09/2014',
        avatar: 'tampham47.jpg',
        department: 'Front-end'
      };
      blStaff.addNew(newItem);
      this.set('model', blStaff.getAll());
    }
  }
});

App.CommentsController = Ember.ObjectController.extend({
  actions: {
    add: function() {
      console.log('comments add');
    }
  }
});
