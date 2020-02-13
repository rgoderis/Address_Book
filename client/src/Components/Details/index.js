import React from "react";
import API from "../../utils/API";

class Details extends React.Component{
    state ={
        contact:{},
        notes: false,
        note:""
    }

    handleInputChange = event=>{
        this.setState({
            note: event.target.value
        })
    }

    formSubmit = event=>{
        event.preventDefault();
        if(!this.state.note){
            return false
        } else {
            API.saveNote(this.state.contact._id,{
                body: this.state.note
            })
            .catch(err=>{
                console.log(err)
            })
            window.location.reload()             
        }
    }

    deleteNote = (noteId)=>{
        API.deleteNote(this.state.contact._id, noteId)
        .catch(err=>{
            console.log(err)
        })
        window.location.reload()
    }

    componentDidMount(){
        API.getContact(this.props.match.params.id)
        .then(res=>{
            this.setState({contact:res.data})
            if(this.state.contact.notes.length !== 0){
                this.setState({notes: true})
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h3>{this.state.contact.firstName} {this.state.contact.lastName}</h3>
                    <div>
                        <h5>Phone Number: {this.state.contact.phoneNumber}</h5>
                        <h5>Email: {this.state.contact.email}</h5>
                        <h5>Address: {this.state.contact.address} {this.state.contact.city} {this.state.contact.state}. {this.state.contact.zip}</h5>
                        <h5>Birthday: {this.state.contact.birthMonth} {this.state.contact.birthDay}</h5>
                    </div>
                    <div>
                        <h4>Notes</h4>
                        {!this.state.notes?
                        (<h5>No notes found, please enter one below</h5>):
                        (this.state.contact.notes.map(note=>(
                            <div>
                                <p>{note.body}</p>
                                <button onClick={()=>this.deleteNote(note._id)}>X</button>
                            </div>
                        )))
                        }
                        <form>
                            <textarea onChange={this.handleInputChange} value={this.state.note}/>
                            <button onClick={this.formSubmit}>Add Note</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details