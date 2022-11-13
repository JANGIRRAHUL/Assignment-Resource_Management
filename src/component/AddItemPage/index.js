import {Link} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {Component} from "react"
import {ItemNameError,
     LinkError,
      ResourceError,
       DescriptionError, 
       Form, ItemHeading, 
       NameLabel, 
       NameInput, 
       LinkLabel, 
       LinkInput, 
       ResourceLabel, 
       ResourceInput, 
       DescriptionLabel, 
       DescriptionInput, 
       CreateButton,
       CardContainer,
       CardImage,
       UserButton } from "../../styledcomponent"

class AddItem extends Component { 
    state = {
        itemNameError: false,
        itemName: "",
        linkError: false,
        link: "",
        resourceError: false,
        resource:"",
        descriptionError: false,
        description:""
    }

    onChangeItemName = (event) => {
        const {itemName} = this.state
        if (itemName === ""){
            this.setState({itemNameError:true})
        }else{
            this.setState({itemNameError:false})
        }
        this.setState({itemName: event.target.value})
    }

    onBlurItemName = () => {
        const {itemName} = this.state
        if (itemName === ""){
        this.setState({itemNameError: true})
    }
    }

    onChangeLink = (event) => {
        const {link} = this.state
        if (link === ""){
            this.setState({linkError:true})
        }else{
            this.setState({linkError:false})
        }
        this.setState({link: event.target.value})
    }

    onBlurLink = () => {
        const {link} = this.state
        if (link === ""){
        this.setState({linkError: true})
        }
    }

    onChangeResourceName = (event) => {
        const {resource} = this.state
        if (resource === ""){
            this.setState({resourceError:true})
        }else{
            this.setState({resourceError:false})
        }
        this.setState({resource: event.target.value})
    }

    onBlurResourceName = () => {
        const {resource} = this.state
        if (resource === ""){
        this.setState({resourceError: true})
        }
    }

    onChangeDescription = (event) => {
        const {description} = this.state
        if (description === ""){
            this.setState({descriptionError:true})
        }else{
            this.setState({descriptionError:false})
        }
        this.setState({description: event.target.value})
    }

    onBlurDescription = () => {
        const {description} = this.state
        if (description === ""){
        this.setState({descriptionError: true})
        }
    }

    validationFormData = () => {
        const {itemName, link, resource, description} = this.state
        if(itemName === ""){
            this.setState({itemNameError:true})
        }
        if(link === ""){
            this.setState({linkError:true})
        }
        if(resource === ""){
            this.setState({resourceError:true})
        }
        if(description === ""){
            this.setState({descriptionError:true})
        }
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        this.validationFormData()
    }
        
    render(){
        const {itemNameError, linkError, resourceError, descriptionError} = this.state
        const {getHomePage} = this.props
        const onClickUserButton = () => {
            getHomePage()
        }
        return(
            <CardContainer>
                <Form onSubmit={this.onSubmitForm}>
                    <Link to="/">
                        <UserButton type="button" onClick={onClickUserButton}>
                            <IoIosArrowBack/>
                            User
                        </UserButton>
                    </Link>
                    <ItemHeading>Item Details</ItemHeading>
                    <NameLabel htmlFor="item-name">ITEM NAME</NameLabel>
                    <NameInput id="item-name" type="text" onChange={this.onChangeItemName} onBlur={this.onBlurItemName}/>
                    {itemNameError ? <ItemNameError>*Required</ItemNameError>: null}
                    <LinkLabel htmlFor="item-link">LINK</LinkLabel>
                    <LinkInput id="item-link" type="text" onChange={this.onChangeLink} onBlur={this.onBlurLink}/>
                    {linkError ? <LinkError>*Required</LinkError>: null}
                    <ResourceLabel htmlFor="resource-name">RESOURCE NAME</ResourceLabel>
                    <ResourceInput id="resource-name" type="text" onChange={this.onChangeResourceName} onBlur={this.onBlurResourceName}/>
                    {resourceError ? <ResourceError>*Required</ResourceError>: null}
                    <DescriptionLabel htmlFor="description">DESCRIPTION</DescriptionLabel>
                    <DescriptionInput id="description" type="text" onChange={this.onChangeDescription} onBlur={this.onBlurDescription}/>
                    {descriptionError ? <DescriptionError>*Required</DescriptionError>: null}
                    <CreateButton type="submit" >CREATE</CreateButton>
                </Form>
                {/* <CardImage src="https://res.cloudinary.com/dg4htpr73/image/upload/v1668279727/pexels-cadeau-maestro-1170412_vapl0e.jpg" alt="card-image"/> */}
            </CardContainer>

)}}
export default AddItem