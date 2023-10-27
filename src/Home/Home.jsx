import React from 'react'
import Navigation from '../Navigation/Navigation'
import Style from "./Home.module.css"

function Home() {
    const events = [
        { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
        { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
        { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIFFY LUBE LIVE' },
        { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
        { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
        { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION' }
      ];
      
  return (
    <>
        <Navigation/>
        <div className={Style.main}>
            <h3>The Generics</h3>
            <h4>TOURS</h4>
            {
                events.map((i)=>(
                    <div className={Style.map}>
                        <h4>{i.date}</h4>
                        <h4 className={Style.location}>{i.location}</h4>
                        <h4 className={Style.venue}>{i.venue}</h4>
                        <button>Buy Ticket</button>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Home