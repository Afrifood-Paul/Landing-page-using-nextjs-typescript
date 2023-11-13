export const plans = [
    {
        id: 1,
        type: "basic",
        price: "99",
        color: "hsla(215, 29%, 54%, 1)",
        benefits: [
            "One contact hour per week",
            "One subject included"
        ]
    },
    {
        id: 2,
        type: "standard",
        price: "169",
        color: "linear-gradient(287.56deg, #EC7425 -2.19%, #173A6C 67.17%)",
        benefits: [
            "Two contact hours per week",
            "One subject",
            "School’s homework support"
        ]
    },
    {
        id: 3,
        type: "premium",
        price: "249",
        color: "hsla(0, 0%, 100%, 1)",
        benefits: [
            "Three contact hours per week",
            "Two subjects",
            "1 hr. of Yoruba or French per week",
            "School’s homework support"
        ]
    }
]

export type PlansType = typeof plans[0]