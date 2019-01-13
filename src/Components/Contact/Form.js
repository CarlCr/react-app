import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={
            nome:"",
            email:"",
            message:""
        };

        this.onChange=(event)=>{
            const state=Object.assign({}, this.state);
            const field=event.target.name;
            state[field]=event.target.value;
            this.setState(state);
        }
    }
    render() {
        return (
            <div className={'container'}>
                <hr/>
                <h1 className={'text-center'} style={{margin:'70px'}}>Fill the fields below</h1>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <label htmlFor={'id_name'} style={{fontSize:'25px',paddingRight:'20px'}}>Name</label>
                        <input className={'form-control'} id={'id_name'}  name={'nome'} style={{borderRadius:'6px',fontSize:'16px'}} value={this.state.nome} onChange={this.onChange} type="text"/>
                        <br/>
                        <h6 className={'text-truncate'}>Name:{this.state.nome}</h6>
                    </div>
                    <div className={'col-md-4'}>
                        <label htmlFor={'id_email'} style={{fontSize:'25px',paddingRight:'20px'}}>E-mail</label>
                        <input className={'form-control'} id={'id_email'} name={'email'} style={{borderRadius:'6px',fontSize:'16px'}} value={this.state.email} onChange={this.onChange} type="email"/>
                        <br/>
                        <h6 className={'text-truncate'}>Email:{this.state.email}</h6>
                    </div>
                    <div className={'col-md-4'}>
                        <label htmlFor={'id_message'} style={{fontSize:'25px',paddingRight:'20px'}}>Message</label>
                        <textarea className={'form-control'} id={'id_message'} style={{borderRadius:'6px',fontSize:'16px'}} name={'message'} value={this.state.message} onChange={this.onChange} type="text"/>
                        <br/>
                        <h6 className={'text-truncate'}>Message:{this.state.message}</h6>
                    </div>
                    <div className={'col-md-4'}>
                      <button type={'submit'} className={'btn btn-outline-primary'} style={{margin:'0px 0 50px 10px',width:'120px'}}>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;