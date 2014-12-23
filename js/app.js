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


var App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('auth');
  this.resource('dashboard');
  this.resource('staffs', function() {
    this.resource('staff', {path: ':staff_id'});
  });
  this.resource('staffs.new');
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
    var controller = this.controllerFor('comments');
    controller.set('userId', userId);

    this.render();
    this.render('comments', {
      outlet: 'comments',
      userId: userId,
      model: blComment.getByUser(userId),
      controller: controller
    });
  }
});

App.CommentsRoute = Ember.Route.extend({
  model: function(params) {
    var userId = params.staff_id;
    return blComment.getByUser(userId);
  }
});

App.IndexController = Ember.ObjectController.extend({
  userName: '',
  password: '',
  actions: {
    login: function() {
      var userName = this.get('userName'),
        password = this.get('password');
      if ((userName != 'soanguyen69') & (password != 'hellongaymoi'))
        alert('Please login with soanguyen69/hellongaymoi!');
      else
        this.transitionToRoute('dashboard');
    }
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

App.StaffsNewController = Ember.ObjectController.extend({
  actions: {
    add: function() {
      console.log('add');
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
      this.transitionToRoute('staffs');
    }
  }
});

App.CommentsController = Ember.ObjectController.extend({
  userId: '',
  actions: {
    add: function() {
      var userId = this.get('userId');
      var newComment = {
        id: moment().format('X'),
        creatorId: '',
        userId: userId,
        dateCreated: moment().format('MM/DD/YYYY'),
        comment: this.get('comment')
      };
      blComment.addNew(newComment);
      this.set('model', blComment.getByUser(userId));
    },
    remove: function(content) {
      blComment.remove(content.id);
      this.set('model', blComment.getByUser(this.get('userId')));
    }
  }
});
