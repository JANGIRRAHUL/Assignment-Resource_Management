import {ResourcesList, IconContainer, Icon, Title, Services, TitleServiceContainer, Anchor, Description, IconTitleContainer} from "../../styledcomponent"

const EachCard = (props) => {
    const {cardDetails} = props
    const {iconUrl, title, link, description} = cardDetails
    return(
        <ResourcesList>
            <IconTitleContainer>
                <IconContainer>
                    <Icon src={iconUrl} alt="icon"/>
                </IconContainer>
                <TitleServiceContainer>
                    <Title>{title}</Title>
                    <Services>Cloud Services</Services>
                </TitleServiceContainer>
            </IconTitleContainer>
            <Anchor href={link}>{link}</Anchor>
            <Description>{description}</Description>
        </ResourcesList>
    )
}
export default EachCard