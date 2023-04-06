import React from 'react';
import Card from './Card';
import './ProfileCard.css'; 

function ProfileCard(props) {
    
    return(
        <Card title="ZinwonZung" backgroundColor = "" className="profileCard">
                <h2>안녕하세요</h2>
                <p>991023 정진원</p>
        </Card>
    );
}

export default ProfileCard;