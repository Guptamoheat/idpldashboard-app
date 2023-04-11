import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {

    const [team, setTeam] = useState({});
    const [matches, setMatches] = useState([])
    
    useEffect(
        () => {
            const fetchMatches = async () => {
                    const response = await fetch('http://localhost:8080/team/Rajasthan Royals');
                    const data = await response.json();
                    setTeam(data);
                    setMatches(data.matches)
                    
            }
            fetchMatches();
            
        },
        []
    )


    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match= {matches[0]}/>
            {matches.slice(1).map(match =>  < MatchSmallCard match={match}/>)}
        </div>
    )
}