const initialState = [
    {
        image:'https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/09/bg-4-3.jpg',
        heading:"Inspiration",
        subhead1:"For joyful living",
        subhead2:"The theme is so flexible It does yoga with you",        
    },
    {
        image:'https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/09/bg-3-1903-1.jpg',
        heading:"Serenity",
        subhead1:"in inside you",
        subhead2:"Control your body to free your soul",        
    }
]

export const firstReducer = (state=initialState, {payload, type}) =>{
    switch (type){
        case "OnPage1Load":
            return {
                ...state,
                payload
            }
        
        default :
        return state;
    }
}



const initialState2 = [
    {
        img:"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/05/photodune-4240835-morning-meditation-s.jpg",
        head1:"Private & Group Lessons",
        head2:"19/05/15 - 01:00pm - 03:00pm"
    },
    {
        img:"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/05/photodune-11523278-yoga-on-the-floor-s2.jpg",
        head1:"YogaFit For Beginners",
        head2:"19/05/15 - 01:00pm - 03:00pm"
    },
    {
        img:"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/photodune-5680407-woman-meditation-yoga-at-home-s1.jpg",
        head1:"YogaFit For Pregnant",
        head2:"17/05/15 - 03:00pm - 05:00pm"
    },
    {
        img:"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/welfare-ngo-preview3.jpg",
        head1:"YogaFit Core",
        head2:"19/05/15 - 01:00pm - 03:00pm"
    },
    {
        img:"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/photodune-11523136-exercise-on-mat-s2.jpg",
        head1:"YogaFit Barre",
        head2:"19/05/15 - 01:00pm - 03:00pm"
    },
    {
        img:"https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/photodune-7448230-group-yoga-sessions-s1.jpg",
        head1:"YogaFit Restore",
        head2:"19/05/15 - 01:00pm - 03:00pm"
    }
]

export const classReducer = (state=initialState2, {payload, type}) =>{
    
    switch (type){
        case "OnClassLoad":
            return {
                ...state,
                payload
            }
        
        default :
        return state;
    }

}

const initialState3=[{
    quote:"I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    writer:"Jack porter",
    profession:"Manager"
},{
    quote:"The Yoga Sutras of Patanjali date from the first half of the 1st millennium CE, but only gained prominence in the 20th century. Hatha yoga texts emerged around the 11th century with origins in tantra.",
    writer:"Isabella Clifford",
    profession:"Neuropathology doctor"
},{
    quote:"I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful",
    writer:"John downson",
    profession:"manager"
}]

export const quoteReducer = (state = initialState3,{payload,type}) => {
    switch (type) {
        case "OnPage3Load":
            return{
                ...state,
                payload
            }          

        default:
            return state;
    }
}