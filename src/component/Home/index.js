import {Link} from "react-router-dom"
import { useState } from "react";
import {AiOutlineFolderAdd, AiOutlineArrowLeft} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import AddItem from "../AddItemPage";
import Header from "../Header";
import HomePage from "../Resources";
import {HomeContainer, MobileFooter, AddItemContainer, UserProfile, AddItemButtonMobile} from "../../styledcomponent"
import "./index.css"

const Home = () => { 
    const [clicked, setClicked] = useState(false)
    const [userClicked, setUserClicked] = useState(true)
    const getAddItemPage = () => {
        setClicked(true)
        setUserClicked(false)
    }
    const getHomePage = () => {
        setClicked(false)
        setUserClicked(true)
    }
    const onClickAddButton = () => {
        setClicked(true)
        setUserClicked(false)
    }
    const onClickBackArrow = () => {
        setClicked(false)
        setUserClicked(true)
    }
    return(
            <HomeContainer>
                <Header getAddItemPage={getAddItemPage} clicked={clicked}/>
                {clicked && userClicked === !clicked ? <AddItem getHomePage={getHomePage}/> : <HomePage/>}
                {clicked && userClicked === !clicked ? (
                    <MobileFooter back={true}>
                        <Link to="/">
                            <AddItemButtonMobile type="button" onClick={onClickBackArrow}>
                                <AiOutlineArrowLeft className="back-arrow"/>
                            </AddItemButtonMobile>
                        </Link>
                    </MobileFooter>
                ) : 
                (<MobileFooter>
                    <AddItemContainer>
                        <Link to="/">
                            <AddItemButtonMobile type="button" onClick={onClickAddButton}>
                                <AiOutlineFolderAdd className="icon"/>
                            </AddItemButtonMobile>
                        </Link>
                    </AddItemContainer>
                    <UserProfile>
                        <FaUserAlt/>
                    </UserProfile>
                </MobileFooter>)
            }
        </HomeContainer>
    )}
export default Home