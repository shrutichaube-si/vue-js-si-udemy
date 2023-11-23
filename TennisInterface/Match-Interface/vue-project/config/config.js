import axios from "axios";

const config = {
    data: {
        name: "sushma@gmail.com",
        password: "sushma"
    },

    years:[
        {
            year:2023,
            isDefault:true,
            tourIds:[2746]
        },
        {
            year:2022,
            isDefault:false,
            tourIds:[2746,2746]
        }
    ],
    
    path:"https://sportz.sonyliv.com/tennis/live/json/0_{{TOUR_ID}}_calendar.json"

    // info:{
    //   path:("https://sportz.sonyliv.com/tennis/live/json/0_2746_calendar.json")
          
          
    // }
    
};

export default config;
