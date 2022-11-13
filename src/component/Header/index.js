import {Link} from "react-router-dom"
import {FaUserAlt} from "react-icons/fa"
import { HeaderContainer, Image, AddButton, UserProfile, ProfileContainer } from "../../styledcomponent"

const Header = (props) => {
    const {getAddItemPage, clicked} = props
    const onClickAddItem = () => {
        getAddItemPage()
    }
    return(
    <HeaderContainer>
        <Image src="https://res.cloudinary.com/dg4htpr73/image/upload/v1668179012/channels4_profile_qplakv.jpg" alt="logo"/>
        <ProfileContainer>
            {clicked ? null : <Link to="/add-item"><AddButton type="button" onClick={onClickAddItem}>ADD ITEM</AddButton></Link>}
            <UserProfile>
                <FaUserAlt/>
            </UserProfile>
        </ProfileContainer>
    </HeaderContainer>
)}
export default Header