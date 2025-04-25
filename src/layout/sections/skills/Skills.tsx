import styled from "styled-components";
import {Icon} from "../../../components/Icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
                <Icon iconId={"figma"}/>
                <Icon iconId={"html"}/>
                <Icon iconId={"css"}/>
                <Icon iconId={"sass"}/>
                <Icon iconId={"react"}/>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    background-color: #000000;
`