import { ContainerBotoes, ContainerCard, ContainerImagem, ContainerInfos } from "./style"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';

export function Card(props){
    
    const usuario = props.escolherPerfil.map((user)=>{
        return(
            <div key={user.id}>
                
                    <img src={user.photo}/>
                    <h1>{user.name}, {user.age}</h1>
                    <p>{user.bio}</p>
            </div>
        )
    })

    return(
        
        <ContainerCard>
            {usuario}        
            <FavoriteIcon
                color="success"
                fontSize="large"
                onClick={props.ClickSim}
            />   
            <CancelIcon
                color="error"
                fontSize="large"
                onClick={props.ClickNao}
            />
        </ContainerCard>
        
    )
}