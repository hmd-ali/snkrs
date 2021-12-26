import { defineStore } from 'pinia'

export interface User {
    email: string
    fullName: string
    billingAddress: string
    shippingAddress: string
    country: string
    phone: string
}

interface State {
    user: User
}

export const useUserStore = defineStore('user', {
    state: (): State => ({
        user: {
            email: 'jonDoe@example.com',
            fullName: 'Jon Doe',
            billingAddress: '123 Main Street, Somewhere, CA 94000',
            shippingAddress: '123 Main Street, Somewhere, CA 94000',
            country: 'USA',
            phone: '+96176123456'
        }
    })
})