import { defineStore } from "pinia";

export interface Partner {
    id: string
    name: string
    url: string
}

interface State {
    partners: Partner[] | []
}

export const usePartnersStore = defineStore('partnerStore', {
    state: (): State => ({
        partners: [
            {
                id: 'partner-1',
                name: 'nike',
                url: 'Nike-Logo.png'
            },
            {
                id: 'partner-2',
                name: 'addidas',
                url: '2560px-Adidas_Logo.svg.png'
            },
            {
                id: 'partner-3',
                name: 'puma',
                url: 'unnamed.png'
            },

        ]
    })
})