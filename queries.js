/*Find all the topics and tasks which are thought in the month of October*/

// use students; switch to data base:

db.topics.aggregate([
  {
    $lookup: {
      from: "tasks",
      localField: "topic_id",
      foreignField: "task_id",
      as: "tasks",
    },
  },
  {
    $match: {
      $and: [
        {
          $and: [
            {
              topic_date: {
                $gt: new Date("30-sep-2020"),
              },
            },
            {
              topic_date: {
                $lt: new Date("1-nov-2020"),
              },
            },
          ],
        },
        {
          $and: [
            {
              "tasks.due_date": {
                $gt: new Date("30-sep-2020"),
              },
            },
            {
              "tasks.due_date": {
                $lt: new Date("1-nov-2020"),
              },
            },
          ],
        },
      ],
    },
  },
  {
    $unwind: "$tasks",
  },
  {
    $project: {
      _id: 0,
      topic: "$topic",
      task: "$tasks.task_name",
    },
  },
]);



/*Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020*/

db.company_drives.find({
  "drive_date": {
    $gte: new Date("2020-10-15"),
    $lte: new Date("2020-10-31")
  }
});



/*Find all the company drives and students who are appeared for the placement.*/

db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "users",
    },
  },
  {
    $unwind: "$users",
  },
  {
    $project: {
      _id: 0,
      "users.user_name": 1,
      company: 1,
      drive_date: 1,
      "users.user_email": 1,
      "users.user_id": 1,
    },
  },
]);



/*Find the number of problems solved by the user in codekata*/

db.codekata.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "user"
    }
  },
  {
    $unwind: "$user"
  },
  {
    $project: {
      _id: 0,
      user_id: "$user.user_id",
      user_name: "$user.user_name",
      problems_solved: "$problems"
    }
  }
]);



/*Find all the mentors with who has the mentee's count more than 15*/
db.mentors.find({
  "mentor_count": {
    $gt: 15
  }
})




/*Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020*/

db.attendance.aggregate([
  {
    $lookup: {
      from: "topics",
      localField: "topic_id",
      foreignField: "topic_id",
      as: "topics",
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "topic_id",
      foreignField: "topic_id",
      as: "tasks",
    },
  },
  { $match: { $and: [{ attend: false }, { "tasks.submitted": false }] } },
  {
    $match: {
      $and: [
        {
          $or: [
            { "topics.topic_date": { $gte: new Date("15-oct-2020") } },
            { "topics.topic_date": { $lte: new Date("31-oct-2020") } },
          ],
        },
        {
          $or: [
            { "tasks.due_date": { $gte: new Date("15-oct-2020") } },
            { "tasks.due_date": { $lte: new Date("31-oct-2020") } },
          ],
        },
      ],
    },
  },
  {
    $count: "No_of_students_absent",
  },
]);