import { defineStore } from 'pinia'

export interface Product {
    id: string
    name: string
    brand: string
    category: string
    price: number
    url: string
    sizes: string[] | string
    colors: string[] | string
    description: string[] | string
    rating: number
}

interface State {
    products: Product[] | []
}

export const useProductsStore = defineStore('productsStore', {
    state: (): State => ({
        products:[
            {
                id: "1",
                name: "adidas Men's Lite Racer Adapt 4.0 Running Shoe",
                brand: "Addidas",
                category: 'Men',
                price: 100,
                url: "81cuTtP+n6L._AC_UL1500_.jpg",
                sizes:['6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'],
                colors:["Black", "Orbit Green", "Pulse Amber", "Chalk White", "Core Black"],
                description: [
                    "100% Rubber",
                    "Imported",
                    "Rubber sole",
                    "Men's cushioned slip-on shoes with the look of runners, made with recycled materials",
                    "Slip-on construction with elastic strap",
                ],
                rating: 4.7
            },
            {
                id: "2",
                name: "Nike Women's Revolution 5 Wide Running Shoe",
                brand: "Nike",
                category: 'Women',
                price: 149,
                url: "61lel4x9LxL._AC_SY625._SX._UX._SY._UY_.jpg",
                sizes: ['5', '5.5', '5.5 Wide', '6', '6.5', '6.5 Wide', '7', '7.5', '7.5 Wide', '8', '8.5', '8.5 Wide', '9', '9.5', '9.5 Wide'],
                colors: ["Black", "Orbit Green", "Pulse Amber", "Chalk White", "Core Black"],
                description: [
                    "Imported",
                    "Man Made sole",
                    "Shaft measures approximately low-top from arch",
                    "REVOLUTIONARY COMFORT: These Nike women's running shoes have been designed with lightweight material and a soft foam midsole, built to keep you running in comfort.",
                    "BREATHABLE SUPPORT: These Nike women's shoes are built with a lightweight knit textile that wraps your foot in breathable comfort. A reinforced heel and no-sew overlays lend support and durability.",
                    "LIGHTWEIGHT CUSHIONING: The soft foam midsole delivers a smooth, stable ride. The textured outer wall of these women's running shoes help reduce weight and hide creases.",
                    "DURABLE, FLEXIBLE TRACTION: The rubber outsole of these Nike women's shoes offer durable traction on a variety of surfaces. Spaces in the tread let your foot flex naturally.",
                    "NIKE WOMEN'S RUNNING SHOE: Imported, fabric: lightweight knit, plush padding, soft foam midsole, and rubber outsole.",
                ],
                rating: 4.8
            },
            {
                id: '3',
                name: "PUMA Men's Enzo 2 Sneaker",
                brand: "PUMA",
                category: 'Men',
                price: 130,
                url: "81+0gf6ZqzL._AC_UL1500_.jpg",
                sizes: ['7.5', '8', '8.5', '9', '9.5', '10', '11', '11.5', '12.5', '13', '13.5', '14'],
                colors: ["White", "Grape Leaf-puma Black", "High Risk Red", "Ulta Gray-high Risk Red"],
                description: [
                    "fabric-and-synthetic",
                    "Imported",
                    "Rubber sole",
                    "Shaft measures approximately low-top from arch",
                    "Run-train Performance Sneaker",
                    "Enzo 2"
                ],
                rating: 4.4
            }
        ]
    })
})