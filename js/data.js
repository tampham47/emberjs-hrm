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
