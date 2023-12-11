//use Zenclass


// inserting users
db.users.insertMany(
  [
    {
      _id: ObjectId('657329e965cd27e7882aa862'),
      userid: 1,
      name: 'Harikrishna',
      email: 'hari@gmail.com',
      mentorid: 1
    },
    {
      _id: ObjectId('657329e965cd27e7882aa863'),
      userid: 2,
      name: 'Naveen',
      email: 'naveen@gmail.com',
      mentorid: 2
    },
    {
      _id: ObjectId('657329e965cd27e7882aa864'),
      userid: 3,
      name: 'Kavin',
      email: 'kavin@gmail.com',
      mentorid: 3
    },
    {
      _id: ObjectId('657329e965cd27e7882aa865'),
      userid: 4,
      name: 'Abi',
      email: 'abi@gmail.com',
      mentorid: 1
    },
    {
      _id: ObjectId('657329e965cd27e7882aa866'),
      userid: 5,
      name: 'vinay',
      email: 'vinay@gmail.com',
      mentorid: 2
    }
  ])
  
  
  
  //mentors
  db.mentors.insertMany(
  [  
      {
        _id: ObjectId('65732bc165cd27e7882aa878'),
        mentorid: 1,
        mentorname: 'Dave Grey',
        mentor_email: 'davegrey@gmail.com'
      },
      {
        _id: ObjectId('65732bc165cd27e7882aa879'),
        mentorid: 2,
        mentorname: 'Kayle',
        mentor_email: 'kayle@gmail.com'
      },
      {
        _id: ObjectId('65732bc165cd27e7882aa87a'),
        mentorid: 3,
        mentorname: 'John joe',
        mentor_email: 'johnjoe@gmail.com'
      },
      {
        _id: ObjectId('65732bc165cd27e7882aa87b'),
        mentorid: 4,
        mentorname: 'Dave Smith',
        mentor_email: 'davesmith@gmail.com'
      },
      {
        _id: ObjectId('65732bc165cd27e7882aa87c'),
        mentorid: 5,
        mentorname: 'swathy',
        mentor_email: 'swathy@gmail.com'
      }
    ])
  
  //attendnace
    db.attendnace.insertMany(
      [
          {
            _id: ObjectId('65732c1e65cd27e7882aa87e'),
            userid: 1,
            topicid: 1,
            attended: true
          },
          {
            _id: ObjectId('65732c1e65cd27e7882aa87f'),
            userid: 2,
            topicid: 2,
            attended: true
          },
          {
            _id: ObjectId('65732c1e65cd27e7882aa880'),
            userid: 3,
            topicid: 3,
            attended: false
          },
          {
            _id: ObjectId('65732c1e65cd27e7882aa881'),
            userid: 4,
            topicid: 4,
            attended: false
          },
          {
            _id: ObjectId('65732c1e65cd27e7882aa882'),
            userid: 5,
            topicid: 5,
            attended: false
          }
        ]
    )
  
  //codekata
  db.codekata.insertMany(
  [
    {
      _id: ObjectId('65732aca65cd27e7882aa872'),
      userid: 1,
      problems: 10
    },
    {
      _id: ObjectId('65732aca65cd27e7882aa873'),
      userid: 2,
      problems: 40
    },
    {
      _id: ObjectId('65732aca65cd27e7882aa874'),
      userid: 3,
      problems: 20
    },
    {
      _id: ObjectId('65732aca65cd27e7882aa875'),
      userid: 4,
      problems: 50
    },
    {
      _id: ObjectId('65732aca65cd27e7882aa876'),
      userid: 5,
      problems: 70
    }
  ])
  
  
  //company_drives
  db.company_drives.insertMany(
  [  
    {
      _id: ObjectId('6573348e10ebde0a1211297c'),
      userid: 1,
      drive_date: ISODate('2020-10-09T18:30:00.000Z'),
      company: 'Google'
    },
    {
      _id: ObjectId('6573348e10ebde0a1211297d'),
      userid: 1,
      drive_date: ISODate('2020-10-14T18:30:00.000Z'),
      company: 'Amazon'
    },
    {
      _id: ObjectId('6573348e10ebde0a1211297e'),
      userid: 2,
      drive_date: ISODate('2020-10-19T18:30:00.000Z'),
      company: 'SAP labs'
    },
    {
      _id: ObjectId('6573348e10ebde0a1211297f'),
      userid: 3,
      drive_date: ISODate('2020-10-24T18:30:00.000Z'),
      company: 'Mac App studio'
    },
    {
      _id: ObjectId('6573348e10ebde0a12112980'),
      userid: 4,
      drive_date: ISODate('2020-10-26T18:30:00.000Z'),
      company: 'Freshworks'
    }
  ])
  
  
  
  //topics
  db.topics.insertMany(
  [  
    {
      _id: ObjectId('65732e9410ebde0a1211296d'),
      topicid: 1,
      topic: 'html',
      topic_date: ISODate('2020-10-03T18:30:00.000Z')
    },
    {
      _id: ObjectId('65732e9410ebde0a1211296e'),
      topicid: 2,
      topic: 'css',
      topic_date: ISODate('2020-10-09T18:30:00.000Z')
    },
    {
      _id: ObjectId('65732e9410ebde0a1211296f'),
      topicid: 3,
      topic: 'Javascript',
      topic_date: ISODate('2020-10-14T18:30:00.000Z')
    },
    {
      _id: ObjectId('65732e9410ebde0a12112970'),
      topicid: 4,
      topic: 'React',
      topic_date: ISODate('2020-10-19T18:30:00.000Z')
    },
    {
      _id: ObjectId('65732e9410ebde0a12112971'),
      topicid: 5,
      topic: 'NodeJs',
      topic_date: ISODate('2020-10-24T18:30:00.000Z')
    }
  ])
  
  
  //task
  db.tasks.insertMany(
  [  
    {
      _id: ObjectId('65732fbb10ebde0a12112972'),
      taskid: 1,
      topicid: 1,
      userid: 1,
      task: 'html task',
      due_date: ISODate('2020-10-03T18:30:00.000Z'),
      submitted: true
    },
    {
      _id: ObjectId('65732fbb10ebde0a12112973'),
      taskid: 2,
      topicid: 2,
      userid: 2,
      task: 'css task',
      due_date: ISODate('2020-10-09T18:30:00.000Z'),
      submitted: true
    },
    {
      _id: ObjectId('65732fbb10ebde0a12112974'),
      taskid: 3,
      topicid: 3,
      userid: 3,
      task: 'Javascript task',
      due_date: ISODate('2020-10-14T18:30:00.000Z'),
      submitted: false
    },
    {
      _id: ObjectId('65732fbb10ebde0a12112975'),
      taskid: 4,
      topicid: 4,
      userid: 4,
      task: 'React task',
      due_date: ISODate('2020-10-19T18:30:00.000Z'),
      submitted: false
    },
    {
      _id: ObjectId('65732fbb10ebde0a12112976'),
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: 'Node task',
      due_date: ISODate('2020-10-24T18:30:00.000Z'),
      submitted: false
    }
  ])