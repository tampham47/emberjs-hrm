App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('auth');
  this.resource('dashboard');
  this.resource('staffs');
  this.resource('staff');
  // this.resource('staffs', function() {
  //   this.resource('staff', {path: ':staff_id'});
  // });
  this.resource('comments');
});

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
    staffId: '1',
    dateCreated: '19/12/2014',
    comment: 'Thằng này khá'
  },
  {
    id: '2',
    creatorId: '',
    staffId: '2',
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
  this.context = staffs;
  this.getAll = function() {
    return this.context;
  };

  this.getById = function(id) {
    return this.context;
  };

  this.addNew = function(newItem) {
    this.context.push(newItem);
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
  this.context = comments;
  this.getAll = function() {
    return this.context;
  };

  this.getById = function(id) {
    return this.context;
  };

  this.addNew = function(newItem) {
    this.context.push(newItem);
    return true;
  };

  this.update = function(id, data) {
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

var blComment = new BLComment();
var blStaff = new BLStaff();
var blDepartment = new BLDepartment();

console.log('BLComment', blComment.getAll());
console.log('BLStaff', blStaff.getAll());
console.log('BlDepartment', blDepartment.getAll());


App.StaffsRoute = Ember.Route.extend({
  model: function() {
    return blStaff.getAll();
  }
});

App.StaffRoute = Ember.Route.extend({
  model: function(params) {
    console.log('params', params, blStaff.getAll().findBy('id', params.staff_id));
    return blStaff.getAll().findBy('id', params.staff_id);
  }
});

// App.PostRoute = Ember.Route.extend({
//   model: function(params) {
//     return posts.findBy('id', params.post_id);
//   }
// });

// App.PostsRoute = Ember.Route.extend({
//   model: function() {
//     return posts;
//   }
// });

// App.PostRoute = Ember.Route.extend({
//   model: function(params) {
//     return posts.findBy('id', params.post_id);
//   }
// });

// App.PostController = Ember.ObjectController.extend({
//   isEditing: false,

//   actions: {
//     edit: function() {
//       this.set('isEditing', true);
//     },

//     doneEditing: function() {
//       this.set('isEditing', false);
//     }
//   }
// });

// var showdown = new Showdown.converter();

// Ember.Handlebars.helper('format-markdown', function(input) {
//   return new Handlebars.SafeString(showdown.makeHtml(input));
// });

// Ember.Handlebars.helper('format-date', function(date) {
//   return moment(date).fromNow();
// });
