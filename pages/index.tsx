import type {NextPage} from 'next'
import List from "../src/components/list/List";
import {Box} from "@mui/material";
import {Teacher} from "../src/@types/teacher";

const Home: NextPage = () => {
    const teacherList: Teacher[] = [
        {
            id: 1,
            name: 'Rodrigo Cardoso',
            description: 'Descrição Rodrigo Cardoso',
            hourValue: 100,
            photo: 'https://github.com/RodrigoCardoso-1007.png'
        },
        {
            id: 2,
            name: 'Fabio Augusto',
            description: 'Descrição Fabio Augusto',
            hourValue: 120,
            photo: 'https://github.com/fabio-aug.png'
        },
        {
            id: 3,
            name: 'Luana Assis',
            description: 'Descrição Luana Assis',
            hourValue: 140,
            photo: 'https://github.com/luanaassis.png'
        },
        {
            id: 4,
            name: 'Samuel Bernardes',
            description: 'Descrição Samuel Bernardes',
            hourValue: 160,
            photo: 'https://github.com/S-Pinky.png'
        }
    ]

    return (
        <Box bgcolor={'secondary.main'}>
            <List teacherList={teacherList}/>
        </Box>
    )
}

export default Home
