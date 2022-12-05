import { LogoIcon } from "@assets/icons/Logo"
import { Box, Text, Image, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

export function PokeCard(pokemonInfo: { id: number, name: string, sprite: string }) {
    const [pokemon, setPokemon] = useState<any>([])

    console.log(pokemonInfo)
    useEffect(() => {
        if (pokemonInfo.id !== 0) {

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo.id}`)
                .then(res => res.json())
                .then(res => {
                    setPokemon(res)
                })
        }
    }, [pokemonInfo])
    return (
        <Card hidden={pokemonInfo.id !== 0 ? false : true} maxWidth="container.full" display={"flex"} justifyContent="center" alignItems={"center"} borderWidth="4px" borderColor={"blue.600"} backgroundColor="blue.600">
            <CardHeader justifyContent="center" alignItems={"center"} textAlign="center">
                <Text variant={"h3"} color="yellow.400" fontWeight={"black"}>{pokemonInfo.name}</Text>
                <Image src={pokemonInfo.sprite} alt={pokemonInfo.name} maxWidth="10rem" />
            </CardHeader>
            <CardBody justifyContent="center" alignItems={"center"} textAlign="center">
                <Text fontWeight={"black"} variant={"h4"} color="white" textDecoration="underline">Height</Text>
                <Text variant={"h4"}>{pokemon.height}</Text>
                <Text fontWeight={"black"} variant={"h4"} color="white" textDecoration="underline">Weight</Text>
                <Text variant={"h4"}>{pokemon.weight}</Text>
                <Text fontWeight={"black"} variant={"h4"} color="white" textDecoration="underline">Abilities</Text>
                <Text variant={"h4"} whiteSpace={"pre-line"}>{pokemon.abilities?.map((ability: any) => ability.ability.name).join(" - ")}</Text>
                <Text fontWeight={"black"} variant={"h4"} color="white" textDecoration="underline">Types</Text>
                <Text variant={"h4"} whiteSpace={"pre-line"}>{pokemon.types?.map((type: any) => type.type.name).join(" - ")}</Text>
            </CardBody>
        </Card>
    )
}
