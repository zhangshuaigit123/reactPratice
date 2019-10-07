import React from "react";
import {  Route, Link  } from "react-router-dom";
import Zs1 from './nesting/zs1'
import Zs2 from './nesting/zs2'
import Zs3 from './nesting/zs3'


function Nesting(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/nesting/zs1">zs1</Link></li>
                    <li><Link to="/nesting/zs2">zs2</Link></li>
                    <li><Link to="/nesting/zs3">zs3</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/nesting/zs1/"   component={Zs1} />
                <Route path="/nesting/zs2/"   component={Zs2} />
                <Route path="/nesting/zs3/"   component={Zs3} />
               
            </div>
        </div>
    )
}
export default Nesting;