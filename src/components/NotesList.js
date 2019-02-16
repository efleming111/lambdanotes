import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import NoteCard from './NoteCard';

const NotesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 4%;

    h2{
        font-size: 2.2rem;
        margin: 55px 0 25px 0;
    }
`;

const NotesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    h2{
        font-size: 2.2rem;
        margin-bottom: 25px;
    }

    .search{
        display: flex;

        input{
            margin-bottom: 25px;
            height: 20px;
        }

        .clear-button{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            width: 60px;
            height: 22px;
            color: white;
            background-color: #24b8bd;
            border: 2px solid #56aaad;
            cursor: pointer;
            outline-style: none;
    
            &:hover{
                color: #24b8bd;
                background-color: white;
                border: 2px solid #56aaad;
            }
        }
    }
`;

const NotesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

class NotesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchWord: ''
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    clearSearch = event=>{
        this.setState({searchWord: ''})
    }

    render(){
        if(this.props.fetching){
            return <div>Loading data...</div>
        }
    
        return(
            <NotesListContainer>
                <NotesHeader>
                    <h2>Your Notes:</h2>
                    <div className="search">
                        <input type="text" name="searchWord" value={this.state.searchWord} placeholder="Search Notes" onChange={this.handleInput}/>
                        <div className="clear-button" onClick={this.clearSearch}>Clear</div>
                    </div>
                </NotesHeader>
                <NotesContainer>
                    {
                        this.state.searchWord === '' ?
                        this.props.notes.map(note=><NoteCard key={note.id} {...this.props} note={note}/>) :
                        this.props.notes.filter(note=>note.note_title.toLowerCase().includes(this.state.searchWord.toLowerCase())).map(note=><NoteCard key={note.id} {...this.props} note={note}/>)
                    }
                </NotesContainer>
            </NotesListContainer>
        )
    }
}

const mapStateToProps = state=>{
    return{
        fetching: state.fetching,
        notes: state.notes
    }
}

export default withRouter(connect(mapStateToProps)(NotesList));