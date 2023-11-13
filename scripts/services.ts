export const services = [
    {
        id: 1,
        title: "Personalized Learning",
        description: "Tell us what you’re looking for, complete our adaptive assessment, and we’ll create an adaptable plan just for you.",
        image: "/images/user-settings.png",
        serviceImage: "/images/serviceImage3.png",
    },
       {
        id: 2,
        title: "Innovative Online Learning",
        description: "Our innovative Live Learning platform revolutionizes the learning experience with video chat, collaborative workspaces, and session recording.",
        image:"/images/innovation.png",
        serviceImage: "/images/serviceImage2.png",

    },
          {
        id: 3,
        title: "Guaranteed Outcomes",
        description: "Enjoy peace of mind knowing we stand behind our promises. We guarantee you will be 100% satisfied with your experience and the results achieved.",
              image: "/images/outcomes.png",
        serviceImage: "/images/serviceImage1.png",
        
    }
]

export type ServiceType = typeof services[0]