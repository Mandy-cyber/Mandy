import styled from 'styled-components';
import {colors} from './style/colors.ts';

const HomePageBody = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.DARK_GRAY};
    display: flex;
    overflow-y: hidden;
`;

const TerminalView = styled.div`
    float: left;
    height: 100vh;
    width: 50%;
`;

const WebsiteView = styled.div`
    background-color: ${colors.WHITE};
    float: right;
    height: 80%;
    width: 50%;
    border-radius: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 70%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;


export { HomePageBody, TerminalView, WebsiteView };