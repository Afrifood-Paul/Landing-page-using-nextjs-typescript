export const navItems = [
    {
        id: 1,
        name: "home",
        properties: [],
        path:"/"
    },

    {
        id: 2,
        name: "tutoring",
        path:"#tutoring",
        properties: [
            {
                id:1,
                name: "1-to-1 Tutoring",
                path:"tutorial"
            },
             {
                id:2,
                 name: "Homework Support",
                path:"homesupport"
                
            },
              {
                id:3,
                name: "Exam Prep",
                path:"examprep"
                
            },
               {
                id:4,
                   name: "Summer School",
                path:"summerschool"

                
            },
                {
                id:5,
                name: "Become a Tutor",
                path:"tutor"
                
            }
              
        ]
    },
    {
        id: 3,
        name: "Languages",
        path:"#languages",
        properties: [
            {
                id: 1,
                name: "Yoruba",
                path:"yoruba"

            },
             {
                id:2,
                 name: "French",
                path:"french"
                
            }
        ]
    },
    {
        id: 4,
        name: "For Schools",
        path:"#schools",
        properties: [
            {
            id: 1,
                name: "School Connect",
                path:"schools"
            
            },
            {
                id: 2,
                name: "Free Resources",
                path:"freeresources"
                
            },

             {
                id: 3,
                 name: "High School Math",
                path:"math"
                
            },
              {
                id: 4,
                  name: "High School Physics",
                path:"physics"
                
            },
            {
                id: 5,
                name: "High School Biology",
                path:"biology"

                
            },

             {
                id: 6,
                 name: "High School Chemistry",
                path:"chemistry"
                
            }
              
        ]
    },
    {
        id: 5,
        name: "About",
        path:"#about",
        properties: [
            {
                id: 1,
                name: "About BrightHAT",
                path:"about"
                
            },
             {
                id: 2,
                name:"Testimonials",
                path:"testimonials"
            },
              {
                id: 3,
                name:"Careers",
                path:"careers"
            },
               {
                id: 4,
                   name: "Contact Us",
                path:"contact"
            },
                {
                id: 5,
                    name: "FAQs",
                path:"faqs"
            }
        ]
    }
]

export const navItemsProps = typeof navItems