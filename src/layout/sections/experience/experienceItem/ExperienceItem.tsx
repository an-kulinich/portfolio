import styled from "styled-components";
import {Icon} from "../../../../components/Icon/Icon";

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
    min-height: 300px;
    padding: 20px;
    margin: 5px;
    border: 1px solid greenyellow;
    box-sizing: border-box;
`

const Text = styled.span`
    
`