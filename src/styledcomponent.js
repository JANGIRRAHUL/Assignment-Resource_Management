import styled from "styled-components"

export const HomeContainer = styled.div`
background-color: #fff;
background-size: cover;
height: 90vh
width: 100vw;
margin: 0;
padding: 0;
`
export const HomePageContainer = styled.div`
// position: relative;
background-color: #ffffff;
backgroung-size: cover;
padding: 0px;
margin: 0px;
`
export const HeaderContainer = styled.div`
background-color: #ffffff;
height: 70px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #D7DFE9;
padding-left: 40px;
// padding-right: 30px;
position: fixed;
width: 100vw;
top: 0;
padding: 0px;
margin: 0px;
z-index: 2;
`
export const MobileFooter = styled.div`
@media (max-width: 440px){
    height: 45px;
    display: flex;
    justify-content: ${props => props.back ? "flex-end" : "space-around"};
    align-items: center;
    border-top: 1px solid #D7DFE9;
    background-color: #a6adb3;
    padding-left: 40px;
    position: fixed;
    width: 100vw;
    bottom: 0;
    padding: 0px;
}
@media (min-width: 441px){
    display: none;
}
`
export const AddItemContainer = styled.div`
@media (max-width: 440px){
    width: 50px
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
`
export const AddItemButtonMobile = styled.button`
@media (max-width: 440px){
    background-color: transparent;
    width: 40px
    height: 40px;
    border-radius: 10px;
    border: none;
}
`
export const ProfileContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
height: 40px;
@media (max-width: 440px){
    display: none;
}
`
export const AddButton = styled.button`
color: #fff;
border: none;
border-radius: 5px;
background-color: #39bd5c;
font-weight: bold;
font-size: 12px;
height: 40px;
width: 120px;
cursor: pointer;
outline: none;
position: fixed;
right: 0;
margin-right: 90px;
@media (max-width: 900px){
    width: 100px;
}
`
export const Image = styled.img`
height: 70px;
width: 70px;
@media (max-width: 900px){
    margin-left: 30px;
}
`
export const UserProfile = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
background-color: #cbd1cc;
position: fixed;
right: 0;
margin-right: 30px;
@media (max-width: 440px){
    width: 40px;
    height: 40px;
    margin-top: 5px;
    border-radius: 10px;
    margin-right: 0px;
    position: relative;
    background-color: transparent;
}
`
export const ParantTagContainer = styled.div`

`
export const TagContainer = styled.ul`
margin-top: 100px;
padding: 0px;
display: flex;
justify-content: center;
flex-grow: 1;
flex-wrap: wrap;
position: relative;
@media (max-width: 920px){
    margin-top: 100px;
}
`
export const TagList = styled.li`
list-style: none;
display: flex;
align-items: center;
text-align: center;
`
export const TagButton = styled.button`
color: #fff;
border: 1px solid #D7DFE9;
background-color:  ${props => props.selected ? "#0B69FF": "#fff"};
color: ${props => props.selected ? "#fff": "#000"};;
font-weight: bold;
font-size: 12px;
height: 40px;
width: 200px;
cursor: pointer;
outline: none;
border-bottom-left-radius: ${props => props.left ? "5px":null};
border-top-left-radius: ${props => props.left ? "5px":null};
border-bottom-right-radius: ${props => props.right ? "5px":null};
border-top-right-radius: ${props => props.right ? "5px":null};
@media (max-width: 920px){
    width: 148px;
}
@media (max-width: 440px){
    width: 100px;
}
`
export const InputContainer = styled.div`
display: flex;
justify-content: center;
padding: 0px;
margin: 0px;
position: relative;
@media (max-width: 920px){
    justify-content: center;
    align-items: center;
}
@media (max-width: 440px){
    justify-content: center;
    align-items: center;
}
@media (max-width: 600px){
    justify-content: center;
    align-items: center;
}
`
export const SearchInput = styled.input`
width: 648px;
height: 40px;
margin-top: 20px;
// margin-left: 125px;
border-radius: 3px;
border: 1px solid #D7DFE9;
@media (max-width: 920px){
    width: 448px;
    margin-left: 0px;
}
@media (max-width: 440px){
    width: 270px;
    margin-left: 0px;
}
@media (min-width: 440px && max-width: 600px){
    width: 370px;
    margin-left: 0px;
}
`
export const ResourcesContainer = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
position: relative;
width: 100vw;
padding: 0px;
@media (max-width: 920px){
    width: 100vw;
}
`
export const ResourcesList = styled.li`
display: flex;
flex-direction: column;
align-items: flex-start;
list-style: none;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #D7DFE9;
border-radius: 4px;
margin-right: 20px;
width: 390px;
height: 175px;
padding-top: 24px;
padding-left: 24px;
margin-top: 30px;

@media (max-width: 920px){
    width: 300px;
    height: 192px;
    margin-top: 60px;
    margin-right: 30px;
    margin-left: 30px;
}
@media (max-width: 440px){
    width: 170px;
    height: 166px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 10px;
    padding-left: 10px;
}
@media (min-width: 440px && max-width: 600px){
    width: 240px;
    height: 120px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 10px;
    padding-left: 10px;
}
`
export const IconContainer = styled.div`
height: 44px;
width: 44px;
border: 2px solid #D7DFE9;
border-radius: 4px;
background-color: #ffffff;
margin: 0px;
padding: 0px;
@media (max-width: 440px){
    width: 30px;
    height: 30px;
}
@media (min-width: 440px && max-width: 600px){
    width: 30px;
    height: 30px;
}
`
export const Icon = styled.img`
height: 40px;
width: 40px;
border: 2px solid #D7DFE9;
border-radius: 4px;
@media (max-width: 440px){
    width: 26px;
    height: 26px;
}
@media (min-width: 440px && max-width: 600px){
    width: 26px;
    height: 26px;
}
`
export const Title = styled.p`
font-weight: 500px;
font-size: 16px;
line-height: 24px;
color: #171F46;
margin: 0px;
padding: 0px;
@media (max-width: 440px){
    font-size: 13px;
    line-height: 15px;
}
@media (min-width: 440px && max-width: 600px){
    font-size: 15px;
    line-height: 15px;
}
`
export const Services = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #7E858E;
`
export const TitleServiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0px;
padding: 0px;
margin-left: 20px;
`
export const Anchor = styled.a`
margin-top: 10px;
font-weight: 400;
font-size: 14px;
line-height: 24px;
text-decoration: none;
@media (max-width: 440px){
    font-size: 13px;
    line-height: 17px;
}
@media (min-width: 440px && max-width: 600px){
    font-size: 13px;
    line-height: 17px;
}
`
export const Description = styled.p`
display: flex;
justify-content: flex-start;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #7E858E;
@media (max-width: 440px){
    font-size: 13px;
    line-height: 17px;
}
@media (min-width: 440px && max-width: 600px){
    font-size: 13px;
    line-height: 17px;
}
`
export const IconTitleContainer = styled.div`
display: flex;
`
export const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 400px;
`
export const Form = styled.form`
width: 50vw;
display: flex;
flex-direction: column;
background-color: #ffffff;
@media (max-width: 920px){
    width: 100vw;
}
`
export const ItemHeading = styled.p`
position: absolute;
font-family: 'Rubik';
font-style: normal;
width: 178px;
height: 40px;
font-size: 32px;
font-weight: 400px;
line-height: 40px;
margin-top: 100px;
margin-left: 267px;
display: flex;
align-items: center;
text-align: center;
color: #171F46;
@media (max-width: 440px){
    margin-left: 120px;
}
`
export const NameLabel = styled.label`
position: absolute;
width: 78px;
height: 16px;
margin-left: 200px;
margin-top: 170px;
font-family: 'HK Grotesk';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #7E858E;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const NameInput = styled.input`
box-sizing: border-box;
position: absolute;
height: 40px;
margin-left: 200px;
margin-top: 190px;
background: #FFFFFF;
border: 1px solid #D7DFE9;
border-radius: 2px;
width: 320px;
height: 40px;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const ItemNameError = styled.p`
position: absolute;
margin-left: 200px;
margin-top: 235px;
font-size: 10px;
color: #a30527;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const LinkLabel = styled.label`
position: absolute;
width: 78px;
height: 16px;
margin-left: 200px;
margin-top: 260px;
font-family: 'HK Grotesk';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #7E858E;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const LinkInput = styled.input`
box-sizing: border-box;
position: absolute;
height: 40px;
margin-left: 200px;
margin-top: 285px;
background: #FFFFFF;
border: 1px solid #D7DFE9;
border-radius: 2px;
width: 320px;
height: 40px;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const LinkError = styled.p`
position: absolute;
margin-left: 200px;
margin-top: 330px;
font-size: 10px;
color: #a30527;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const ResourceLabel = styled.label`
position: absolute;
width: 110px;
height: 16px;
margin-left: 200px;
margin-top: 355px;
font-family: 'HK Grotesk';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #7E858E;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const ResourceInput = styled.input`
box-sizing: border-box;
position: absolute;
height: 40px;
margin-left: 200px;
margin-top: 380px;
background: #FFFFFF;
border: 1px solid #D7DFE9;
border-radius: 2px;
width: 320px;
height: 40px;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const ResourceError = styled.p`
position: absolute;
margin-left: 200px;
margin-top: 425px;
font-size: 10px;
color: #a30527;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const DescriptionLabel = styled.label`
position: absolute;
width: 110px;
height: 16px;
margin-left: 200px;
margin-top: 447px;
font-family: 'HK Grotesk';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.01em;
text-transform: uppercase;
color: #7E858E;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const DescriptionInput = styled.input`
box-sizing: border-box;
position: absolute;
width: 312px;
height: 180px;
margin-left: 200px;
margin-top: 469px;
background: #FFFFFF;
border: 1px solid #D7DFE9;
border-radius: 2px;
width: 320px;
height: 40px;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const DescriptionError = styled.p`
position: absolute;
margin-left: 200px;
margin-top: 513px;
font-size: 10px;
color: #a30527;
@media (max-width: 440px){
    margin-left: 35px;
}
`
export const CreateButton = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 20px;
gap: 10px;
position: absolute;
width: 93px;
height: 40px;
margin-left: 310px;
margin-top: 535px;
background: #0B69FF;
border-radius: 4px;
color: #fff;
border: none;
font-family: 'HK Grotesk';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
cursor: pointer;
@media (max-width: 440px){
    margin-left: 135px;
    margin-top: 600px;
}
`
export const CardContainer = styled.div`
display: flex;
background-image: url("https://res.cloudinary.com/dg4htpr73/image/upload/v1668279727/pexels-cadeau-maestro-1170412_vapl0e.jpg");
background-size: cover;
height: 100vh;
width: 100vw;
@media (max-width: 920px){
    display: flex;
}
`
export const CardImage = styled.img`
height: 89.8vh;
width: 50vw;
@media (max-width: 920px){
    width: 100vw;
}
`
export const UserButton = styled.button`
position: absolute;
margin-top: 85px;
margin-left: 52px;
border: none;
background-color: transparent;
cursor: pointer;
@media (max-width: 440px){
    display: none;
}
`