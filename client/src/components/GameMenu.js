import { useHistory } from 'react-router-dom';


const GameMenu = props => {
    let history = useHistory();
    return(
        <div className="text-center">
            <h1>Welcome to Type Racer Clone</h1>
            <button type="button" onClick={() => history.push('/game/create')}
                                  className="btn btn-primary btn-lg mr-3">Create Game</button>
            <button type="button" onClick={()=>history.push('/game/join')}    
                                  className="btn btn-primary btn-lg mr-3">Join Game</button>
        </div>
    )
}

export default GameMenu