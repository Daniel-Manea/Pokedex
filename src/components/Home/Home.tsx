import Pokeball from "@assets/icons/Pokeball.png"
import { Text, Container, Input, Image, Flex, FormHelperText, FormControl, FormLabel, color } from "@chakra-ui/react"
import { useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { PokeCard } from "../Card"

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete"

export function Homepage() {

  const [display, setDisplay] = useState(false)
  const [options, setOptions] = useState([{ id: 0, name: " ", sprite: " " }])
  const [cardPokemon, setCardPokemon] = useState<any>({ id: 0, name: " ", sprite: " " })

  useEffect(() => {

    interface IPokemon {
      id: number
      name: string;
      sprite: string;
    }
    const pokemon: IPokemon[] = []
    const promises = new Array(200).fill(200).map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));

    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map(res => {
        res.json().then(({ id, name }) => {
          console.log(id, name)
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          return pokemon.push({ id, name, sprite });
        })
      })

    })
    setOptions(pokemon)
  }, [])

  return (<>
    <Container
      maxW={"auto"}
      display="flex"
      justifyContent={"center"}
      flexDir={{ sm: "column", md: "row" }}
      pt="5rem">
      <Container flexDir={"column"} justifyContent={"center"} alignItems={"flex-end"} width={"container.max"} pt={".6rem"}>
        <Flex>
          <FormControl>
            <AutoComplete openOnFocus >
              <AutoCompleteInput
                display={"flex"}
                id="pokemon"
                width="container.max"
                border={"3px solid #fff"}
                color={"blue.600"}
                backgroundColor={"yellow.500"}
                _hover={{ backgroundColor: "yellow.400" }}
                onClick={() => setDisplay(!display)}
                fontSize={"1.5rem"}
                fontFamily={"outfit"}
                placeholder='Find a Pokémon' />
              <AutoCompleteList padding="0" backgroundColor={"blue.600"} top="1.6rem" maxWidth="container.max" borderWidth="4px" borderStyle={"solid"} borderRadius="10px" borderColor="blue.600" zIndex="dropdown" maxHeight={"50vh"} overflowY={"scroll"}>
                {options.map((v, i) => (
                  <AutoCompleteItem
                    width="container.full"
                    key={`option-${i}`}
                    value={v.name.replace(/\b(\w)/g, s => s.toUpperCase())}
                    onClick={() => setCardPokemon({ id: v.id, name: v.name.replace(/\b(\w)/g, s => s.toUpperCase()), sprite: v.sprite })}
                  >
                    <Container key={i} h={"4rem"} display="flex" justifyContent={"space-between"} textAlign={"center"} alignItems={"center"} flexDirection={"row"} backgroundColor={"yellow.500"} borderRadius={"10px"} _hover={{ backgroundColor: "yellow.400", transform: "scale(1.03)" }}>
                      <Text variant={"h3"} color={"blue.600"} >{v.name.replace(/\b(\w)/g, s => s.toUpperCase())}</Text>
                      <Image src={v.sprite} maxW="3rem" maxH={"3rem"}></Image>
                    </Container>
                  </AutoCompleteItem>
                ))
                }
              </AutoCompleteList>
            </AutoComplete>
            <>
              {PokeCard(cardPokemon)}
            </>
          </FormControl>
        </Flex>

      </Container>
      <Container flexDir={"column"} justifyContent={"center"} width="container.max">
        <Text variant={"h3"}>
          The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best.
          Pokémon are divided into types, such as water and fire, each with different strengths.
          Battles between them can be likened to the simple hand game rock-paper-scissors.
        </Text>
      </Container>

    </Container >
  </>
  )
}
