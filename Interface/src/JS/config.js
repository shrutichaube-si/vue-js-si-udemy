export default{
    admin:[ 
      {username:"user1",password:"user1"},
      {username:"user2",password:"user2"}
    ],
    // api:{
    //    response : 'https://sportz.sonyliv.com/tennis/live/json/0_2746_calendar.json'
    // },
    years:[
      {
         year:2023,
         isDefault:true,
         tourIds:[2746]
      },
      {
        year:2022,
        isDefault:false,
        tourIds:[2746]
      }
  ],
  feedPath:'http://sportz.sonyliv.com/tennis/live/json/0_{{TOUR_ID}}_calendar.json'
}
