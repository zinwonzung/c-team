import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color: blue;
`;

const AppContainer = styled.div`
    background-image: url("https://img.insight.co.kr/static/2016/06/13/2000/s2q33j23pj02068k8j7v.jpg");
    background-size: 100;
    background-repeat: no-repeat;
    min-height: 5vh;
    opacity: 0.9;
`;



function App(props) {
    return (
        <BrowserRouter>
        <AppContainer>
            <MainTitleText>Jinwon's blog</MainTitleText>
            <img src="https://img.insight.co.kr/static/2016/06/13/2000/s2q33j23pj02068k8j7v.jpg" alt="example" style={{ width: '100%', opacity: 0 }}/>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;
