import { defineStore } from "pinia";

export interface Review {
    author: string
    body: string
    avatar: string
}

interface State {
    reviews: Review[] | []
}

export const useReviewsStore = defineStore('reviews', {
    state: (): State => ({
        reviews:[
            {
                author: "Clea K.",
                body: "Not able to tell you how happy I am with SNKRS. SNKRS is worth much more than I paid.",
                avatar: ''
            },
            {
                author: "Felipa A.",
                body: "I'd be lost without SNKRS. No matter where you go, SNKRS is the coolest, most happening thing around!",
                avatar: ''
            },
            {
                author: "Emlynne N.",
                body: "The very best.",
                avatar: ''
            },
        ]
    })
})