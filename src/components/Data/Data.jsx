import React from 'react';
import Iframe from 'react-iframe';

function Data() {
    return (
        <div>
            <Iframe 
                url={`https://www.mystatsonline.com/ballsports/visitor/league/stats/batter.aspx?IDLeague=55954&iframe=yes`}
                width="100%"
                height="1000px"
                frameBorder={0}
            />
        </div>
    )
}


export default Data
