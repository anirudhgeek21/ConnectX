import React,{Fragment} from "react";

export default function Footer() {
    return(
        <Fragment >
            <hr className="h-[0.1px]"/>
                

            <div className="flex flex-col text-center mt-1 pb-1">
                <div className="font-extralight text-xs">
                    © 2024 ConnectX <span className="ml-1 font-black">From Campus, to the world 🌏 </span>
                </div>
                
            </div>

            
        </Fragment>
    )
}