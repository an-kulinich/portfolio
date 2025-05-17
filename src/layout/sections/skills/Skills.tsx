import styled from "styled-components";
import {Icon} from "../../../components/Icon/Icon";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <GridWrapper>
                    <Icon iconId={"figma"}/>
                    <Icon iconId={"html"}/>
                    <Icon iconId={"css"}/>
                    <Icon iconId={"sass"}/>
                    <Icon iconId={"react"}/>
                </GridWrapper>
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

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    justify-items: center;
`