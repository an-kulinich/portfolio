import styled from "styled-components";
import {Icon} from "../../../../../components/Icon/Icon";

type ExperienceItemPropsType = {
    iconId: string;
    experienceText: string;
}

export const ExperienceItem = (props: ExperienceItemPropsType) => {
    return (
        <StyledExperienceItem>
                            <Icon iconId={"computer"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                            <Text>{props.experienceText}</Text>
        </StyledExperienceItem>
    );
};

const StyledExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 288px;
    max-width: 288px;
    min-height: 295px;
    padding: 20px;
    background-color: #C4C4C4;
    gap: 5px;
    :hover {
        cursor: pointer;
        background-color: #676CDB;
    }
`

const Text = styled.span`
    max-width: 110px;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
`