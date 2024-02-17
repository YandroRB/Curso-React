import {TwitterCard} from "./twittercard.jsx";

const users=[
    {
        username:'minudev',
        name:'Miguel Angel Duran',
        isFollowing:true
    },
    {
        username: 'pherald',
        name:'Pablo D. Hernandez',
        isFollowing: false
    },
    {
        username: 'MechsLOL',
        name:'Mechs',
        isFollowing: false
    },
    {
        username: 'riotgames',
        name:'Riot Games',
        isFollowing: true
    }]
export  function App(){

    const formatUserName=(username)=>`@${username}`;
    return(
      <section className={'App'}>
          {
              users.map(({username,name,isFollowing})=>
                  (
                      <TwitterCard key={username}
                                   userName={username}
                                   formatUserName={formatUserName}
                                   initialFollowing={isFollowing}>
                          {name}
                      </TwitterCard>
                  )
              )
          }

      </section>

    );
}