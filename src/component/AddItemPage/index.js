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
       UserButton } from "../../styledcomponent"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddItem extends Component { 
    state = {
        itemNameError: false,
        itemName: "",
        linkError: false,
        isNotLink: false,
        link: "",
        resourceError: false,
        resourceLength: false,
        resource:"",
        descriptionError: false,
        description:"",
        status:200
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
        }else{
            if(!link.toLowerCase().includes("www")){
                this.setState({isNotLink:true})
            }else{
                this.setState({isNotLink:false})
            }
        }
        

        if(resource === ""){
            this.setState({resourceError:true})
        }else{
            if(resource.length >= 2 && resource.length <= 20){
                this.setState({resourceLength:false})
            }else{
                this.setState({resourceLength:true})
            }
        }
        
        if(description === ""){
            this.setState({descriptionError:true})
        }
    }

    submitFormData = async () => {
        const {itemName, link, resource, description} = this.state
        if(!link.toLowerCase().includes("www")){
            this.setState({status:403})
        }else if(!(resource.length >= 2 && resource.length <= 20)){
            this.setState({status:403})
        }else if(itemName === "" || link === "" || resource === "" || description === ""){
            this.setState({status:403})
        }
        else{
            this.setState({status:200})
        }

    }

    onSubmitForm = (event) => {
        const {status} = this.state
        event.preventDefault()
        this.validationFormData()
        this.submitFormData()
        if (status === 200){
        toast("success",{
            position:"bottom-center",
            type:"success"
        })
        }
        else{
            toast("Failure",{
                position:"bottom-center",
                type:"error"
            })
        }
    }
        
    render(){
        const {itemNameError, linkError, resourceError, descriptionError, isNotLink, resourceLength, itemName, link, resource, description} = this.state
        console.log(itemName)
        const {getResources} = this.props
        const onClickUserButton = () => {
            getResources()
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
                    <NameInput id="item-name" type="text" value={itemName} onChange={this.onChangeItemName} onBlur={this.onBlurItemName}/>
                    {itemNameError ? <ItemNameError>*Required</ItemNameError>: null}
                    <LinkLabel htmlFor="item-link">LINK</LinkLabel>
                    <LinkInput id="item-link" type="text" value={link} onChange={this.onChangeLink} onBlur={this.onBlurLink}/>
                    {linkError ? <LinkError>*Required</LinkError>: null}
                    {isNotLink ? <LinkError>*This must include "www"</LinkError>: null}
                    <ResourceLabel htmlFor="resource-name">RESOURCE NAME</ResourceLabel>
                    <ResourceInput id="resource-name" type="text" value={resource} onChange={this.onChangeResourceName} onBlur={this.onBlurResourceName}/>
                    {resourceError ? <ResourceError>*Required</ResourceError>: null}
                    {resourceLength ? <ResourceError>*Resource Name length between 2 and 20</ResourceError>: null}
                    <DescriptionLabel htmlFor="description">DESCRIPTION</DescriptionLabel>
                    <DescriptionInput id="description" type="text" value={description} onChange={this.onChangeDescription} onBlur={this.onBlurDescription}/>
                    {descriptionError ? <DescriptionError>*Required</DescriptionError>: null}
                    <CreateButton type="submit" >CREATE</CreateButton>
                    <ToastContainer/>
                </Form>
                {/* <CardImage src="https://res.cloudinary.com/dg4htpr73/image/upload/v1668279727/pexels-cadeau-maestro-1170412_vapl0e.jpg" alt="card-image"/> */}
            </CardContainer>

)}}
export default AddItem