import { useEffect, useState } from "react"

export const useGetRandomHouses = () => {
    // const [randomChoise, setRandomChoise] = useState('scissors')
    const choises = ['rock', 'paper', 'scissors']
    // useEffect(() => {
    // }, [])
    const randomIndex = Math.floor(Math.random() * choises.length)
    return choises[randomIndex]
}