import type {NextPage} from 'next'
import Button from "../components/Button";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Button content={'Something'} style={'primary'}/>
        </>
    )
}

export default Home
