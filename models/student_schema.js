const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  roll: { 
    type: Number,
    unique: true,
    },
    
  name: { 
    type: String, 
    },

  branch: { 
    type: String, 
    },

  attendance: { 
    type: Number, 
    },
});

const Student = mongoose.model('Student', studentSchema);

(async () => {
  try {
      await Student.create([
          {
              roll: 200,
              name: 'Prabhat',
              branch: 'ECE',
              attendance: 70,
          },
          {
              roll: 201,
              name: 'Karan',
              branch: 'CSE',
              attendance: 80,
          },
          {
            roll: 202,
            name: 'Mayank',
            branch: 'IT',
            attendance: 50,
          },
          {
            roll: 203,
            name: 'Pranjal',
            branch: 'ME',
            attendance: 90,
          },
          {
            roll: 204,
            name: 'Aviral',
            branch: 'MME',
            attendance: 90,
          },
      ]);
      console.log('Initial data inserted successfully');
  } catch (error) {
      console.error('Error inserting initial data:', error);
  }
})();

module.exports = mongoose.model('Student', studentSchema);