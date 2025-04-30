import styled from "styled-components";
import {Icon} from "../../../components/Icon/Icon";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Icon iconId={"figma"}/>
                    <Icon iconId={"html"}/>
                    <Icon iconId={"css"}/>
                    <Icon iconId={"sass"}/>
                    <Icon iconId={"react"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
`