import { Component } from "react";
import {ThreeDots} from "react-loader-spinner"

import {HomePageContainer, TagButton, TagList, TagContainer, SearchInput, InputContainer, LoaderContainer} from "../../styledcomponent"
import PaginatedItems from "../Pagination";
import "./index.css"


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }


class Resources extends Component{
    state = {
        resourcesList: [],
        apiStatus: apiStatusConstants.initial,
        selected1: true,
        selected2: false,
        selected3: false, 
        filterList: []
      }

    componentDidMount(){
        this.getResources()
    }

    getResources = async () => {
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
          })
        const apiUrl = "https://media-content.ccbp.in/website/react-assignment/resources.json"
        const options = {
            method: "GET"
        }
        const response = await fetch(apiUrl, options)
        if (response.ok){
            const fetchedData = await response.json()
            const userData = fetchedData.map(resource => ({
                category: resource.category,
                description: resource.description,
                iconUrl: resource.icon_url,
                id: resource.id,
                link: resource.link,
                tag: resource.tag,
                title: resource.title
            }))
            this.setState({
                resourcesList: userData,
                filterList:userData,
                apiStatus: apiStatusConstants.success,
              })
        }else {
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
          }
    }

    onClickResources = () => {
        const {resourcesList} = this.state
        this.setState({selected1: true, selected2: false, selected3: false, filterList:resourcesList})
    }

    onClickRequests = () => {
        const {resourcesList} = this.state
        const filteredList = resourcesList.filter(eachItem => eachItem.tag === "request")
        this.setState({selected1: false, selected2: true, selected3: false, filterList: filteredList})
    }

    onClickUsers = () => {
        const {resourcesList} = this.state
        const filteredList = resourcesList.filter(eachItem => eachItem.tag === "user")
        this.setState({selected1: false, selected2: false, selected3: true, filterList: filteredList})
    }

    onChangeSearchInput = (event) => {
        const {resourcesList} = this.state
        const filteredList = resourcesList.filter(eachItem => eachItem.title.toLowerCase().includes(event.target.value))
        this.setState({filterList:filteredList})
    }

    renderPagination() {
        const {apiStatus, filterList, offset} = this.state
        return(
            apiStatus === apiStatusConstants.inProgress ? (<LoaderContainer className="products-loader-container">
            <ThreeDots color="#0b69ff" height="100" width="100" />
          </LoaderContainer>) : <PaginatedItems data={filterList} offset={offset}/>
        )
    }


    render(){
        const {selected1, selected2, selected3} = this.state
        return(
             <HomePageContainer>
            <TagContainer>
                <TagList>
                    <TagButton className="button" type="button" left={true} selected = {selected1} onClick={this.onClickResources} value="">Resources</TagButton>
                </TagList>
                <TagList>
                    <TagButton className="button" type="button" selected = {selected2} onClick={this.onClickRequests} value="request">Requests</TagButton>
                </TagList>
                <TagList>
                    <TagButton className="button" type="button" right={true} selected = {selected3} onClick={this.onClickUsers} value="user">Users</TagButton>
                </TagList>
            </TagContainer>
            <InputContainer>
                <SearchInput type="search" placeholder="Search" onChange={this.onChangeSearchInput}/>
            </InputContainer>
            {this.renderPagination()}
        </HomePageContainer>
            
        )
    }
}
export default Resources