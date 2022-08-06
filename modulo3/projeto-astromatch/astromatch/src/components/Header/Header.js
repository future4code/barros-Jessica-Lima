import { ContainerHeader } from "./style"
import HouseIcon from '@mui/icons-material/House';
import ForumIcon from '@mui/icons-material/Forum';


export function Header(props){
    
    return(
        <ContainerHeader>
            <HouseIcon
                fontSize="large"
                onClick={props.irParaHomepage}
            />
            <h1>Astromatch</h1>
            <ForumIcon
                fontSize="large"
                onClick={props.irParaMathchs}
            />
        </ContainerHeader>

    )
}