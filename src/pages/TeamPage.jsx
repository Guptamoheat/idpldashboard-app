import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";
import './TeamPage.scss'
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {

    const [team, setTeam] = useState({});
    const [matches, setMatches] = useState([])
    const {teamName} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                    const response = await fetch(`http://localhost:8080/team/${teamName}`);
                    const data = await response.json();
                    setTeam(data);
                    setMatches(data.matches)
                    
            }
            fetchMatches();
            
        },
        [teamName]
    )

    
    const losses = team.totalMatches - team.totalWins;

    

    if(!team || !team.teamName) {
        return <><h1>Team Not Found</h1></>
    }
    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            
            <div className="win-loss-section">
                Win /Losses
                <PieChart
  data={[
    { title: 'Wins', value: team.totalWins, color: '#4da375' },
    { title: 'Losses', value: losses, color: '#a34d5d' },
  ]}
/>
            </div>


            <div className="match-detail-section">
                <h3>Latest Match</h3>
                <MatchDetailCard teamName = {team.teamName} match= {matches[0]}/>
            </div>
            {matches.slice(1).map(match =>  < MatchSmallCard teamName = {team.teamName} match={match}/>)}
        
            <div className="more-link">
                <a href="#" >More</a>
            </div>
        </div>
    )
}