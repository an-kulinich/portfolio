import styled from "styled-components";
import {Icon} from "../../../components/Icon/Icon";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
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
    padding: 30px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Theme.colors.secondaryBg};
`