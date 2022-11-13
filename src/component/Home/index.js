import {Link} from "react-router-dom"
import { useState } from "react";
import {AiOutlineFolderAdd, AiOutlineArrowLeft} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import AddItem from "../AddItemPage";
import Header from "../Header";
import Resources from "../Resources";
import {HomeContainer, MobileFooter, AddItemContainer, UserProfile, AddItemButtonMobile} from "../../styledcomponent"
import "./index.css"

const Home = () => { 
    const [clicked, setClicked] = useState(false)
    const getAddItemPage = () => {
        setClicked(true)
    }
    const getResources = () => {
        setClicked(false)
    }
    const onClickAddButton = () => {
        setClicked(true)
    }
    const onClickBackArrow = () => {
        setClicked(false)
    }
    return(
            <HomeContainer>
                <Header getAddItemPage={getAddItemPage} clicked={clicked}/>
                {clicked ? <AddItem getResources={getResources}/> : <Resources/>}
                {clicked ? (
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