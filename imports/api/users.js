import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';


  
Accounts.validateNewUser((user)=>{
      var email = user.emails[0].address;


      try{
       new SimpleSchema({
          email:{
            type: String,
            regEx: SimpleSchema.RegEx.Email
          }
       }).validate({email})
      }catch(e){
              throw new Meteor.Error(400,e.message);
      }
     
      return true;
 // code to run on server at startup

      // var employeeSchema = new SimpleSchema({
      //   name: {
      //     type: String,
      //     min: 0,
      //     max: 200
      //   },
      //   hourlyWage:{
      //     type: Number,
      //     min: 0 
      //   },
      //   email:{
      //     type: String,
      //     regEx: SimpleSchema.RegEx.Email
      //   }
      // });

      // employeeSchema.validate({
      //   name: 'kaushik prasath',
      //   hourlyWage: 250,
      //   email:'twiik2kaushik@gmail.com'
      // })

});