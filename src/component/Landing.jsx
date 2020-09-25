import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Table, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {getApiData, deleteApiData} from "./Landing.action";
import PageLoader from "../utility/PageLoader";
import moment from "moment";

const Landing = (props) =>{
console.log(props)

const { getApiData } = props;

    useEffect(()=>{
        getApiData()
    },[getApiData])

    let articleTable='';
    if(props.articleData){
        articleTable = props.articleData.map((listData, i)=>{
             return (
                 <tr key={i}>
                 <td>{listData.data.id}</td>
                 <td><a href={listData.data.url} target="_blank" rel="noopener noreferrer">{listData.data.title}</a></td>
                 <td>{listData.data.descendants}</td>
                 <td>{moment(listData.data.time).format("DD/ MM /YYYY hh:mm a")}</td>
                 <td><Button onClick={()=> props.deleteApiData(listData.data.id)}>Delete</Button></td>
                 </tr>
             )   
        })
    }else{
        articleTable = <tr><td colSpan="5" style={{textAlign:"center"}}><PageLoader /></td></tr>
    }

return (
    
    <div>
    
        <div style={{ textAlign:'center', padding:'15px'}}>
                    <h1>List Of Articles</h1> 
        </div>
    <Table striped bordered size="sm">
        <thead>
        <tr><th style={{textAlign:"center"}}>Id</th>
            <th style={{textAlign:"center"}}>Article</th>
            <th style={{textAlign:"center"}}>Upvotes</th>
            <th style={{textAlign:"center"}}>Time</th>
            <th style={{textAlign:"center"}}>Action</th>
        </tr>
        </thead>
        <tbody>{articleTable}</tbody>
    </Table>
    
    </div>
)
}

const mapStateToProps = (state) =>{
    return {
        articleData: state.articleData,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getApiData: ()=>{dispatch(getApiData())},
        deleteApiData : (id) => (dispatch(deleteApiData(id))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);