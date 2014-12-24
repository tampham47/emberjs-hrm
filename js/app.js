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
  },
  {
    fullName: 'Tran Khac Anh Duc',
    dateOfBirth: '1990-04-17',
    gender: 'Male',
    address: '10 Tran Quoc Toan, P7, Q3, TPHCM',
    id: '37112319',
    mobile: '0123-456-789',
    skype: 'sutrix.duc.tran',
    email: 'duc.tran@sutrixmedia.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Pham Quoc Vinh',
    dateOfBirth: '1987-12-12',
    gender: 'Female',
    address: '23 Le Quy Don- Ha Noi',
    id: '37112239',
    mobile: '0123-456-312',
    skype: 'sutrix.vinh.quoc',
    email: 'vinh.quoc@sutrixmedia.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Nguyen Duc Chung',
    dateOfBirth: '1990-03-23',
    gender: 'Male',
    address: '23 Le Quy Don- Ha Dong',
    id: '37134339',
    mobile: '0123-456-322',
    skype: 'chungCr',
    email: 'chungcr@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Le Minh Chien',
    dateOfBirth: '1990-03-23',
    gender: 'Male',
    address: 'Viet Tri- Phu Tho',
    id: '54112419',
    mobile: '0123-123-412',
    skype: 'leminh.xu',
    email: 'leminh.xu.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Nguyen Le Hoai Nam',
    dateOfBirth: '1990-03-23',
    gender: 'Female',
    address: 'Thanh Pho Ha Noi',
    id: '54112411',
    mobile: '0123-123-411',
    skype: 'namhoai.le',
    email: 'namle.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Dinh Van Duc',
    dateOfBirth: '1990-03-23',
    gender: 'Female',
    address: 'TP Thai Binh- Thai Binh',
    id: '54112412',
    mobile: '0123-123-413',
    skype: 'dinhvan.duc',
    email: 'dinhvan.duc.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Le Dinh Cuong',
    dateOfBirth: '1990-03-23',
    gender: 'Male',
    address: 'Ha Dong',
    id: '54112413',
    mobile: '0123-123-412',
    skype: 'cuongle',
    email: 'cuongle.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Phan Dinh Phuong',
    dateOfBirth: '1990-03-23',
    gender: 'Male',
    address: 'TP Ha Tinh, Ha Tinh',
    id: '54112414',
    mobile: '0123-123-232',
    skype: 'phuongphan.hut',
    email: 'phuongphan.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Pham Minh Tien',
    dateOfBirth: '1990-03-23',
    gender: 'Female',
    address: 'Duy Nhat - Thai Binh',
    id: '54112416',
    mobile: '0123-153-412',
    skype: 'minhtien.hut',
    email: 'minhtien.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Nguyen Tien Minh',
    dateOfBirth: '1990-03-23',
    gender: 'Male',
    address: 'Ky Anh - Ha Tinh',
    id: '54112417',
    mobile: '0123-123-412',
    skype: 'tienminh.hut',
    email: 'tienminh.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Nguyen Nhat Minh',
    dateOfBirth: '1990-03-23',
    gender: 'Male',
    address: 'Ha Dong',
    id: '54112418',
    mobile: '0123-123-412',
    skype: 'leminh.xu',
    email: 'leminh.xu.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  },
  {
    fullName: 'Do Van Kien',
    dateOfBirth: '1990-03-23',
    gender: 'Female',
    address: 'TP Thanh Hoa- Thanh Hoa',
    id: '54112419',
    mobile: '0123-123-412',
    skype: 'kiendo.hut',
    email: 'kiendo.hut@gmail.com',
    joinedDate: '2014-10-10',
    avatar: 'assets/images/image.jp',
    department: 'Front-end'
  }
];

var comments = [
  {
    id: '1',
    creatorId: '',
    userId: '37112319',
    dateCreated: '19/12/2014',
    comment: 'Thằng này khá'
  }
];

var departmentList = [
  { id: 'Frontend', name: 'Frontend' },
  { id: 'PHP', name: 'PHP' },
  { id: 'Java', name: 'Java' },
  { id: 'QC', name: 'QC' },
  { id: 'Mobile', name: 'Mobile' },
  { id: 'Admin', name: 'Admin' }
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

var blComment = new BLComment(),
  blStaff = new BLStaff(),
  blDepartment = new BLDepartment(),
  App = Ember.Application.create({});

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
    var model = [
      {Frontend: 400},
      {PHP: 252},
      {Java: 172},
      {QC: 286},
      {Mobile: 207},
      {Admin: 32}
    ];
    return model;
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
      if ((userName != 'soanguyen69') || (password != 'hellongaymoi'))
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
        department: 'Frontend'
      };
      blStaff.addNew(newItem);
      this.set('model', blStaff.getAll());
    },
    select: function(content) {
      console.log(content.id);
      this.transitionToRoute('staff', content);
    }
  }
});

App.StaffsNewController = Ember.ObjectController.extend({
  actions: {
    add: function() {
      // add new staff
      var newItem = this.get('model');
      newItem.id = moment().format('X');
      newItem.department = 'Frontend';
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
