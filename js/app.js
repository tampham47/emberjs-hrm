'use strict'

var init = function() {
  if (localStorage.getItem('Staff') == null)
    localStorage.setItem('Staff', JSON.stringify(staffs));
  if (localStorage.getItem('Comment') == null)
    localStorage.setItem('Comment', JSON.stringify(comments));
};
// init function for the first at all
init();

var blComment = new BLComment(),
  blStaff = new BLStaff(),
  blDepartment = new BLDepartment();

var App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('auth');
  this.resource('dashboard');
  this.resource('staffs', function() {
    this.resource('staff', {path: ':staff_id'});
  });
  this.resource('staffs.new');
});

App.DashboardRoute = Ember.Route.extend({
  model: function(){
    var model = {},
      departmentId;
    for (var i = 0; i < departmentList.length; i++) {
      departmentId = departmentList[i].id;
      if (departmentId != null)
        model[departmentId] = blStaff.filter('', departmentId).length;
    }
    return model;
  },
  setupController: function(controller, model) {
    console.log('setupController');
    console.log('header', $('#header'));
    console.log('DashboardController', controller, model, $(document));
    console.log('height', $('span', '[data-dep="Front-end"]').height());
    $('span', '[data-dep="Front-end"]').css('height', '400px');
  },
  afterModel: function() {
    console.log('afterModel');
  }
});

App.StaffsRoute = Ember.Route.extend({
  model: function() {
    return blStaff.filter('', null, 5);
  }
});

App.StaffRoute = Ember.Route.extend({
  model: function(params) {
    var staffId = params.staff_id;
    return blStaff.getById(staffId);
  },
  renderTemplate: function(params){
    var userId = params.content.id;
    var controller = this.controllerFor('comments');
    controller.set('userId', userId);

    // render staff template
    this.render();
    // render comment template with exists data
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

App.StaffsNewRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

App.IndexController = Ember.ObjectController.extend({
  userName: '',
  password: '',
  actions: {
    login: function() {
      var userName = this.get('userName'),
        password = this.get('password');
      if ((userName == 'soanguyen69') & (password == 'hellongaymoi'))
        this.transitionToRoute('dashboard');
      else
        alert('Please login with soanguyen69/hellongaymoi!');
    }
  }
});

App.DashboardController = Ember.ObjectController.extend({
  setupController: function(controller, model) {
    console.log('setupController');
    // console.log('header', $('#header'));
    // console.log('DashboardController', controller, model, $(document));
  }
});

App.StaffsController = Ember.ObjectController.extend({
  strQuery: '',
  department: null,
  departmentId: null,
  departmentList: departmentList,
  actions: {
    filter: function() {
      console.log('departmentId', this.get('department').id);

      var query = this.get('strQuery'),
        departmentId = this.get('department').id,
        result = blStaff.filter(query, departmentId, 5);
      this.set('model', result);
    },
    select: function(content) {
      console.log(content.id);
      this.transitionToRoute('staff', content);
    }
  }
});

App.StaffController = Ember.ObjectController.extend({
  isEditting: false,
  departmentHolder: null,
  departmentList: departmentList,
  updateData: function(model) {
    console.log('updateData', model);
    return blStaff.update(model.id, model);
  },
  actions: {
    showEditForm: function() {
      this.set('isEditting', true);
    },
    btnDoneClicked: function() {
      var model = this.get('model');
      model.department = this.get('departmentHolder').id;
      console.log('model', model);
      this.updateData(model);
      this.set('isEditting', false);
    },
    cancelEdit: function() {
      this.set('isEditting', false);
    }
  }
});

App.StaffsNewController = Ember.ObjectController.extend({
  department: null,
  departmentList: departmentList,
  actions: {
    add: function() {
      // add new staff
      var newItem = this.get('model');
      newItem.id = moment().format('X');
      newItem.department = this.get('department').id;
      blStaff.addNew(newItem);
      // add new comment if it has values.
      if (newItem.comment != null)
        var newComment = {
          id: moment().format('X'),
          creatorId: '',
          userId: newItem.id,
          dateCreated: moment().format('MM/DD/YYYY'),
          comment: newItem.comment
        };
        blComment.addNew(newComment);
      // redirect to staffs page
      this.transitionToRoute('staffs');
    },
    cancel: function() {
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
